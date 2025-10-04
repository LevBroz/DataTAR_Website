document.addEventListener('DOMContentLoaded', function() {

    // --- 1. LÓGICA DE TRADUCCIÓN (I18N) ---

    const translations = {
        es: {
            // Meta Tags
            metaTitleHome: "DataTAR - Transformando Datos en Decisiones",
            metaDescriptionHome: "DataTAR impulsa el crecimiento de negocios a nivel global, sin importar su escala, convirtiendo datos complejos en decisiones inteligentes a través de consultoría en BI y dashboards a medida.",
            metaTitleDemo: "Demo Interactiva - DataTAR",
            metaDescriptionDemo: "Explora dashboards interactivos de Power BI, Tableau, y Looker para ver el poder de la visualización de datos en acción.",
            metaTitleContact: "Contacto - DataTAR",
            metaDescriptionContact: "Contacta a DataTAR para una consultoría de análisis de datos o para solicitar un presupuesto para tu proyecto de BI.",

            // Navegación
            navHome: "Inicio",
            navDemo: "Demo Interactiva",
            navContact: "Contacto",

            // Hero Section
            heroTitle: "Transformando datos en decisiones inteligentes.",
            heroSubtitle: "DataTAR impulsa el crecimiento de negocios a nivel global, sin importar su escala, convirtiendo datos complejos en decisiones inteligentes a través de consultoría en BI y dashboards a medida.",
            heroButton: "Solicitar una Consultoría",

            // About Section
            aboutTitle: "¿Quiénes somos?",
            aboutText: "DataTAR es una consultora especializada en Business Intelligence y Análisis de Datos. Nuestro equipo de expertos colabora con clientes para construir soluciones de datos a medida, desde la integración y el modelado (ETL) hasta la creación de dashboards interactivos que facilitan la toma de decisiones estratégicas.",
            teamMemberName: "Luis Velez",
            teamMemberRole: "Business Intelligence & Data Engineer Lead",
            teamExperience: "Años de experiencia:",
            teamStack: "Tech-Stack:",
            missionTitle: "Nuestra Misión",
            missionText: "Empoderar a las organizaciones a través de la claridad y la inteligencia de sus datos, convirtiendo la información compleja en una ventaja competitiva simple y accionable.",
            visionTitle: "Nuestra Visión",
            visionText: "Ser el socio estratégico de referencia en análisis de datos para las empresas en crecimiento en Estados Unidos, reconocidos por nuestra innovación, precisión y el impacto medible que generamos.",

            // Services Section
            servicesTitle: "Nuestros Servicios Principales",
            service1Title: "Desarrollo de Dashboards",
            service1Text: "Creamos visualizaciones interactivas y personalizadas que te permiten explorar tus datos de manera intuitiva y efectiva.",
            service2Title: "Consultoría en BI",
            service2Text: "Te guiamos en la estrategia de Business Intelligence para optimizar procesos y alinear tus objetivos de negocio con tus datos.",
            service3Title: "Integración de Datos y ETL",
            service3Text: "Diseñamos y automatizamos flujos de datos (ETL) para consolidar tus fuentes de información en un único lugar confiable.",

            // Tools Section
            toolsTitle: "Tecnologías que Dominamos",

            // Demo Page
            demoSelectTool: "Selecciona una Herramienta",
            demoSidebarNote: "Estos son ejemplos interactivos. Los dashboards que desarrollamos para nuestros clientes son 100% personalizados y privados.",
            demoLoading: "Cargando dashboard...",
            
            // Contact Page
            contactTitle: "Hablemos de tu proyecto",
            contactSubtitle: "Completa el formulario y nos pondremos en contacto contigo a la brevedad para entender tus necesidades y explorar cómo podemos ayudarte.",
            contactCalendarPrompt: "¿Prefieres agendar directamente?",
            contactCalendarButton: "Agendar una reunión",
            formName: "Nombre Completo",
            formCompany: "Empresa",
            formMessage: "¿Cómo podemos ayudarte?",
            formSubmit: "Enviar Mensaje",
            formConfirmTitle: "¡Gracias por tu mensaje!",
            formConfirmText: "Hemos recibido tu consulta y te contactaremos en menos de 24 horas hábiles.",

            // Footer
            footerCopyright: "© 2025 DataTAR. Todos los derechos reservados.",
        },
        en: {
            // Meta Tags
            metaTitleHome: "DataTAR - Turning Data into Intelligent Decisions",
            metaDescriptionHome: "DataTAR helps US businesses make smarter decisions with expert data analysis, BI consulting, and custom dashboard development.",
            metaTitleDemo: "Interactive Demo - DataTAR",
            metaDescriptionDemo: "Explore interactive dashboards from Power BI, Tableau, and Looker to see the power of data visualization in action.",
            metaTitleContact: "Contact - DataTAR",
            metaDescriptionContact: "Contact DataTAR for a data analysis consultation or to request a quote for your BI project.",

            // Navigation
            navHome: "Home",
            navDemo: "Interactive Demo",
            navContact: "Contact",

            // Hero Section
            heroTitle: "Turning data into intelligent decisions.",
            heroSubtitle: "We help US companies unlock insights and drive growth through data analysis and visualization.",
            heroButton: "Request a Consultation",

            // About Section
            aboutTitle: "Who We Are",
            aboutText: "DataTAR is a consultancy specializing in Business Intelligence and Data Analytics. Our team of experts collaborates with clients to build custom data solutions, from data integration and modeling (ETL) to creating interactive dashboards that facilitate strategic decision-making.",
            teamMemberName: "Luis Velez",
            teamMemberRole: "BI & Data Engineer Lead",
            teamExperience: "Years of experience:",
            teamStack: "Tech-Stack:",
            missionTitle: "Our Mission",
            missionText: "To empower organizations through the clarity and intelligence of their data, turning complex information into a simple, actionable competitive advantage.",
            visionTitle: "Our Vision",
            visionText: "To be the go-to strategic partner in data analytics for growing companies in the United States, recognized for our innovation, precision, and the measurable impact we generate.",

            // Services Section
            servicesTitle: "Our Core Services",
            service1Title: "Dashboard Development",
            service1Text: "We create interactive and custom visualizations that allow you to explore your data intuitively and effectively.",
            service2Title: "BI Consulting",
            service2Text: "We guide you in your Business Intelligence strategy to optimize processes and align your business objectives with your data.",
            service3Title: "Data Integration & ETL",
            service3Text: "We design and automate data pipelines (ETL) to consolidate your information sources into a single, reliable place.",

            // Tools Section
            toolsTitle: "Technologies We Master",

            // Demo Page
            demoSelectTool: "Select a Tool",
            demoSidebarNote: "These are interactive examples. The dashboards we develop for our clients are 100% customized and private.",
            demoLoading: "Loading dashboard...",
            
            // Contact Page
            contactTitle: "Let's talk about your project",
            contactSubtitle: "Complete the form, and we will contact you shortly to understand your needs and explore how we can help.",
            contactCalendarPrompt: "Prefer to schedule directly?",
            contactCalendarButton: "Schedule a meeting",
            formName: "Full Name",
            formCompany: "Company",
            formMessage: "How can we help you?",
            formSubmit: "Send Message",
            formConfirmTitle: "Thank you for your message!",
            formConfirmText: "We have received your inquiry and will contact you within 24 business hours.",

            // Footer
            footerCopyright: "© 2025 DataTAR. All rights reserved.",
        }
    };

    const setLanguage = () => {
        const userLang = navigator.language || navigator.userLanguage;
        const lang = userLang.startsWith('es') ? 'es' : 'en';
        const langStrings = translations[lang];

        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (langStrings[key]) {
                if(elem.tagName === 'META' && elem.getAttribute('name') === 'description') {
                   elem.setAttribute('content', langStrings[key]);
                } else {
                   elem.innerHTML = langStrings[key];
                }
            }
        });
        document.documentElement.lang = lang;
    };


    // --- 2. Lógica para la página de Demo Interactiva ---
    if (document.querySelector('.demo-main')) {
        const toolButtons = document.querySelectorAll('.tool-button');
        const dashboardContainer = document.getElementById('dashboard-container');
        const dashboardUrls = {
            'power-bi': 'https://app.powerbi.com/view?r=eyJrIjoiYTRhMjIyYTYtYjQ1NS00ZGU4LWEzNGMtNGFjNjg4OTNkZDdjIiwidCI6ImFkMzU2YzFlLTJjMWMtNGJlYi1hMGYzLWViZTY0YTEyN2M5NiJ9',
            'tableau': 'https://public.tableau.com/views/Superstore_16790933709590/Overview?%3Alanguage=en-US&%3Adisplay_count=n&%3Aorigin=viz_share_link&%3Aembed=y',
            'looker': 'https://lookerstudio.google.com/embed/reporting/0b5753d8-333c-4f86-90f7-5509a80e1a14/page/p_3g9cxdn81c',
            'sisense': 'https://www.sisense.com/dashboard-examples/marketing-kpi-dashboard/'
        };

        const loaderHtml = `
            <div class="loader-wrapper">
                <div class="loader"></div>
                <p data-key="demoLoading">${translations[navigator.language.startsWith('es') ? 'es' : 'en'].demoLoading}</p>
            </div>`;

        function loadDashboard(tool) {
            dashboardContainer.innerHTML = loaderHtml;
            setTimeout(() => {
                let url = dashboardUrls[tool];
                let iframeHtml = `<iframe src="${url}" frameborder="0" allowFullScreen="true"></iframe>`;
                if (tool === 'sisense') {
                    iframeHtml = `<div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <p>This is a conceptual example from SiSense.</p>
                                    <a href="${url}" target="_blank" class="cta-button-secondary">View Example on SiSense</a>
                                  </div>`;
                }
                dashboardContainer.innerHTML = iframeHtml;
            }, 500);
        }

        toolButtons.forEach(button => {
            button.addEventListener('click', () => {
                toolButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const tool = button.getAttribute('data-tool');
                loadDashboard(tool);
            });
        });
        loadDashboard('power-bi');
    }


    // --- 3. Lógica para el formulario de Contacto ---
    if (document.getElementById('contact-form')) {
        const form = document.getElementById('contact-form');
        const confirmationMessage = document.getElementById('form-confirmation');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            // La lógica de envío real es manejada por Netlify gracias al atributo data-netlify="true"
            // Esto es solo para la interacción visual en la página
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
        });
    }

    // --- Ejecutar la traducción al cargar la página ---
    setLanguage();
});