document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica para la página de Demo Interactiva ---
    if (document.querySelector('.demo-main')) {
        const toolButtons = document.querySelectorAll('.tool-button');
        const dashboardContainer = document.getElementById('dashboard-container');

        // URLs de ejemplo para los dashboards embebidos.
        // **IMPORTANTE**: Reemplaza estas URLs con los enlaces públicos de tus dashboards.
        const dashboardUrls = {
            'power-bi': 'https://app.powerbi.com/view?r=eyJrIjoiNWM3YWE3ODUtZGFhYi00M2U5LWFmNzAtY2I5Yzc1NTU4M2EwIiwidCI6IjZkY2ZjY2VhLWMyNWEtNDc4My1iM2U5LWI1MGUxM2YwYjZmOSIsImMiOjZ9', // Ejemplo de Power BI público
            'tableau': 'https://public.tableau.com/views/Superstore_16790933709590/Overview?%3Alanguage=en-US&%3Adisplay_count=n&%3Aorigin=viz_share_link&%3Aembed=y', // Ejemplo de Tableau Public
            'looker': 'https://lookerstudio.google.com/embed/reporting/0b5753d8-333c-4f86-90f7-5509a80e1a14/page/p_3g9cxdn81c', // Ejemplo de Looker Studio (Google Data Studio)
            'sisense': 'https://www.sisense.com/dashboard-examples/marketing-kpi-dashboard/' // Página de ejemplo, idealmente sería un embed directo
        };

        const loaderHtml = `
            <div class="loader-wrapper">
                <div class="loader"></div>
                <p>Cargando dashboard...</p>
            </div>`;

        function loadDashboard(tool) {
            // Mostrar el loader
            dashboardContainer.innerHTML = loaderHtml;

            // Simular un pequeño retraso para que el loader sea visible
            setTimeout(() => {
                let url = dashboardUrls[tool];
                let iframeHtml = `<iframe src="${url}" frameborder="0" allowFullScreen="true"></iframe>`;

                if (tool === 'sisense') { // Caso especial si no hay embed directo
                    iframeHtml = `<div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <p>Este es un ejemplo conceptual de SiSense.</p>
                                    <a href="${url}" target="_blank" class="cta-button-secondary">Ver Ejemplo en SiSense</a>
                                  </div>`;
                }

                dashboardContainer.innerHTML = iframeHtml;
            }, 500); // 0.5 segundos de retraso
        }

        toolButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Quitar clase activa de todos los botones
                toolButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir clase activa al botón clickeado
                button.classList.add('active');

                const tool = button.getAttribute('data-tool');
                loadDashboard(tool);
            });
        });

        // Cargar el primer dashboard por defecto al entrar a la página
        loadDashboard('power-bi');
    }

    // --- Lógica para el formulario de Contacto ---
    if (document.getElementById('contact-form')) {
        const form = document.getElementById('contact-form');
        const confirmationMessage = document.getElementById('form-confirmation');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío real del formulario

            // Aquí iría la lógica para enviar los datos a un servidor (usando fetch, axios, etc.)
            // Para este prototipo, simplemente mostraremos el mensaje de confirmación.

            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
        });
    }

});