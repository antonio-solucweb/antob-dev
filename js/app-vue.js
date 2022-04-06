var app = new Vue({
  el: '#header-navbar',
  data: {
    logo: 'ANTOB DEV',
    menu: [
      {
        nombre: 'Inicio',
        link: '#inicio'
      },
      {
        nombre: 'Servicios',
        link: '#servicios'
      },
      {
        nombre: 'Portafolios',
        link: '#portafolios'
      },
      {
        nombre: 'Sobre mi',
        link: '#sobre-mi'
      },
      {
        nombre: 'Testimonios',
        link: '#testimonios'
      },
      {
        nombre: 'Contacto',
        link: '#contacto'
      },
    ]
  },
});

var app2 = new Vue({
  el: '#portafolios',
  data:{
    portafolios:
    [
      {
        titulo: 'Tienda F&aucutetbol Ecuador',
        categoria: 'prestashop',
        imagen: 'portfolio_tiendafutbolecuador',
        url: 'https://tiendafutbolecuador.com'
      },
      {
        titulo: 'Perlis Store',
        categoria: 'prestashop',
        imagen: 'portfolio_perlistore',
        url: 'https://perfumesoriginales.ec'
      },
      {
        titulo: 'Mall de los Andes',
        categoria: 'wordpress',
        imagen: 'portfolio_malldelosandes',
        url: 'https://malldelosandes.com/'
      },
      {
        titulo: 'Multiplaza',
        categoria: 'wordpress',
        imagen: 'portfolio_multiplaza',
        url: 'https://multiplaza.com.ec/'
      },
      {
        titulo: 'Servivapor',
        categoria: 'wordpress',
        imagen: 'portfolio_servivapor',
        url: 'https://www.servivapor.com/'
      },
      {
        titulo: 'Quimicblue',
        categoria: 'wordpress',
        imagen: 'portfolio_quimicblue',
        url: 'https://quimicblue.com/'
      },
      {
        titulo: 'Folionet',
        categoria: 'wordpress',
        imagen: 'portfolio_folionet',
        url: 'https://folionet.com/'
      },
      {
        titulo: 'Pople Art Consulting',
        categoria: 'wordpress',
        imagen: 'portfolio_peopleartconsulting',
        url: 'https://peopleartconsulting.com/'
      },
      {
        titulo: 'Fit Fight Training',
        categoria: 'wordpress',
        imagen: 'portfolio_fitfighttraining',
        url: 'http://fitfighttraining.com/'
      },
      {
        titulo: 'Luminotecnia',
        categoria: 'wordpress',
        imagen: 'portfolio_luminotecnia',
        url: 'https://luminotecnia.cl/'
      },
      {
        titulo: 'Trenton5',
        categoria: 'wordpress',
        imagen: 'portfolio_trenton5',
        url: 'https://www.trenton5.com/'
      },
      {
        titulo: 'SA-Electronic',
        categoria: 'wordpress',
        imagen: 'portfolio_saelectronic',
        url: 'http://sa-electronic.com/'
      },
      {
        titulo: 'Taxi Rodríguez',
        categoria: 'wordpress',
        imagen: 'portfolio_taxirodriguez',
        url: 'https://taxirodriguez.com/'
      },
      {
        titulo: 'Veerielly',
        categoria: 'wordpress',
        imagen: 'portfolio_veerielly',
        url: 'https://veerielly.com/'
      },
      {
        titulo: 'Promo Nada es Lejos',
        categoria: 'wordpress',
        imagen: 'portfolio_promonadaeslejos',
        url: 'https://promonadaeslejos.com/'
      },
      {
        titulo: 'Zapatos Jorge Enriquez',
        categoria: 'prestashop',
        imagen: 'portfolio_zapatosjorgenriquez',
        url: 'http://zapatosjorgenriquez.com/'
      },
      {
        titulo: 'LIVIRAME',
        categoria: 'prestashop',
        imagen: 'portfolio_livirame',
        url: 'https://livirame.com/'
      },
      {
        titulo: 'Lanzamiento del Renault Captur',
        categoria: 'wordpress',
        imagen: 'portfolio_nuevasperspectivas',
        url: 'http://nuevasperspectivas.com/'
      },
      {
        titulo: 'Alby Store',
        categoria: 'prestashop',
        imagen: 'portfolio_albystore',
        url: 'http://albystore.com/'
      },
      {
        titulo: 'Colors Denim',
        categoria: 'prestashop',
        imagen: 'portfolio_colorsdenim',
        url: 'https://colorsdenim.com/es/'
      },
      {
        titulo: 'Redskins.RS',
        categoria: 'prestashop',
        imagen: 'portfolio_redskins',
        url: 'https://redskinsrs.com/'
      },
      {
        titulo: 'American Truck',
        categoria: 'prestashop',
        imagen: 'portafolio_americantruck',
        url: 'https://americantruckecuador.com/'
      },
      {
        titulo: 'Placer Escondido',
        categoria: 'prestashop',
        imagen: 'portfolio_placerescondido',
        url: 'https://www.placerescondido.com/'
      },
      {
        titulo: '69LiveCam',
        categoria: 'wordpress',
        imagen: 'portfolio_69livecam',
        url: 'https://69livecam.com/'
      },
      {
        titulo: 'Códigos Mágicos',
        categoria: 'wordpress',
        imagen: 'portfolio_codigosmagicos',
        url: 'https://codigosmagicos.com/'
      },
      {
        titulo: 'Gykormed',
        categoria: 'wordpress',
        imagen: 'portfolio_gykormed',
        url: 'https://gykormed.com/'
      },
      {
        titulo: 'Alarmaspy',
        categoria: 'prestashop',
        imagen: 'portfolio_alarmaspy',
        url: 'http://alarmaspy.com'
      },
      {
        titulo: 'Xtrons',
        categoria: 'prestashop',
        imagen: 'portfolio_xtrons',
        url: 'https://xtrons.es/'
      },
      {
        titulo: 'Uparts Zone',
        categoria: 'wordpress',
        imagen: 'portfolio_upartszone',
        url: 'https://www.upartszone.com/'
      }
    ]
  },
});


var app3 = new Vue({
  el: '#testimonios',
  data:{
    testimonios:
    [
      {
        nombre: 'Juan Cifuentes',
        mensaje: 'Llevo más de 2 años trabajando con Antonio de manera Freelance y es una persona responsable y totalmente profesional en su trabajo, no tengo queja alguna',
        proyecto: 'CEO - Dejabu',
        pais: 'Ecuador',
        imagen: 'testi-1.jpg'
      },
      {
        nombre: 'Gianfranco Soriano',
        mensaje: 'Gli sviluppatori web migliori e più creativi comprendono davvero bene le istruzioni e danno il loro 110% per consegnare il lavoro in tempo. Ho avuto a che fare con molti sviluppatori web e nessuno come il tuo team. Li consiglio vivamente !!!',
        proyecto: '69Livecam',
        pais: 'Italia',
        imagen: 'testi-1.jpg'
      },
      {
        nombre: 'Maribel Martínez',
        mensaje: 'Excelente trabajo, webs súper modernas y funcionales que atraen clientes',
        proyecto: 'Tu Delivery En Casa,',
        pais: 'Venezuela',
        imagen: 'testi-1.jpg'
      },
      {
        nombre: 'Macario Betancourt',
        mensaje: 'Diseño excelente, se ve muy bien desde móvil y se hace fácil navegar por ella',
        proyecto: 'Sticky Deal',
        pais: 'Venezuela',
        imagen: 'testi-1.jpg'
      }
    ]
  },
});


var app4 = new Vue({
  el: '#tecnologias',
  data:{
    tecnologias:
    [
      {
        title: 'WordPress',
        imag: 'logo_wordpress'
      },
      {
        title: 'Elementor',
        imag: 'logo_elementor'
      },
      {
        title: 'Advance Custom Fields',
        imag: 'logo_acf'
      },
      {
        title: 'Woocommerce',
        imag: 'logo_woocommerce'
      },
      {
        title: 'Bootstrap',
        imag: 'logo_bootstrap'
      },
      {
        title: 'PHP',
        imag: 'logo_php'
      },
      {
        title: 'HTML5',
        imag: 'logo_html'
      },
      {
        title: 'CSS3',
        imag: 'logo_css'
      },
      {
        title: 'CSS3',
        imag: 'logo_javascript'
      }
    ]
  },
});
