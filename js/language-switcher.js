const translations = {
    en: {
        // Navigation
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Header
        'hero-subtitle': 'Welcome To My Portfolio',
        'hero-title': 'Software Development & Consulting',
        'hero-button': 'Learn More',
        
        // Services
        'services-title': 'Services',
        'services-subtitle': 'Specialized in ABAP Development and Software Solutions',
        'service-abap': 'ABAP Development',
        'service-abap-desc': 'Expert in SAP ABAP development and customization with over 4 years of experience in enterprise solutions.',
        'service-consulting': 'Technical Consulting',
        'service-consulting-desc': 'Providing technical expertise and solutions for complex business requirements and system optimization.',
        'service-web': 'Web Development',
        'service-web-desc': 'Creation of modern and responsive web applications using current technologies and best practices.',
        'service-mobile': 'Mobile Solutions',
        'service-mobile-desc': 'Development of mobile applications and responsive solutions for various platforms.',
        'service-process': 'Process Optimization',
        'service-process-desc': 'Streamlining and optimizing business processes through efficient software solutions.',
        'service-sap': 'SAP Solutions',
        'service-sap-desc': 'Comprehensive SAP consulting and development services with focus on efficiency and innovation.',
        
        // About
        'about-title': 'Professional Experience',
        'about-subtitle': 'Career Timeline',
        
        // Portfolio
        'portfolio-title': 'Portfolio',
        'portfolio-subtitle': 'Featured Projects and Work',
        
        // Contact
        'contact-title': 'Contact Me',
        'contact-subtitle': "Let's discuss your next project"
    },
    es: {
        // Navigation
        'nav-services': 'Servicios',
        'nav-portfolio': 'Portafolio',
        'nav-about': 'Acerca de',
        'nav-contact': 'Contacto',
        
        // Header
        'hero-subtitle': 'Bienvenido a Mi Portafolio',
        'hero-title': 'Desarrollo de Software y Consultoría',
        'hero-button': 'Saber Más',
        
        // Services
        'services-title': 'Servicios',
        'services-subtitle': 'Especializado en Desarrollo ABAP y Soluciones de Software',
        'service-abap': 'Desarrollo ABAP',
        'service-abap-desc': 'Experto en desarrollo y personalización SAP ABAP con más de 4 años de experiencia en soluciones empresariales.',
        'service-consulting': 'Consultoría Técnica',
        'service-consulting-desc': 'Proporcionando experiencia técnica y soluciones para requisitos empresariales complejos y optimización de sistemas.',
        'service-web': 'Desarrollo Web',
        'service-web-desc': 'Creación de aplicaciones web modernas y responsivas usando tecnologías actuales y mejores prácticas.',
        'service-mobile': 'Soluciones Móviles',
        'service-mobile-desc': 'Desarrollo de aplicaciones móviles y soluciones responsivas para varias plataformas.',
        'service-process': 'Optimización de Procesos',
        'service-process-desc': 'Optimización y mejora de procesos empresariales a través de soluciones de software eficientes.',
        'service-sap': 'Soluciones SAP',
        'service-sap-desc': 'Servicios integrales de consultoría y desarrollo SAP con enfoque en eficiencia e innovación.',
        
        // About
        'about-title': 'Experiencia Profesional',
        'about-subtitle': 'Línea de Tiempo Profesional',
        
        // Portfolio
        'portfolio-title': 'Portafolio',
        'portfolio-subtitle': 'Proyectos Destacados y Trabajo',
        
        // Contact
        'contact-title': 'Contáctame',
        'contact-subtitle': 'Hablemos de tu próximo proyecto'
    }
};

function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Add animation effect
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLang);
});

// Smooth transition effect
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.transition = 'opacity 0.3s ease';
});
