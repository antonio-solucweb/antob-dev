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
      }
      {
        titulo: 'Alarmaspy',
        categoria: 'wordpress',
        imagen: 'portfolio_alarmaspy',
        url: 'http://alarmaspy.com'
      },
      {
        titulo: 'Xtrons',
        categoria: 'wordpress',
        imagen: 'portfolio_xtrons',
        url: 'https://xtrons.es/'
      },
      {
        titulo: 'Uparts Zone',
        categoria: 'wordpress',
        imagen: 'portfolio_upartszone',
        url: 'https://www.upartszone.com/'
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
        titulo: 'Placer Escondido',
        categoria: 'prestashop',
        imagen: 'portfolio_placerescondido',
        url: 'https://www.placerescondido.com/'
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
        titulo: 'Quimicblue',
        categoria: 'wordpress',
        imagen: 'portfolio_quimicblue',
        url: 'https://quimicblue.com/'
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
        nombre: 'Gianfranco Soriano',
        mensaje: 'Gli sviluppatori web migliori e più creativi comprendono davvero bene le istruzioni e danno il loro 110% per consegnare il lavoro in tempo. Ho avuto a che fare con molti sviluppatori web e nessuno come il tuo team. Li consiglio vivamente !!!',
        proyecto: '69Livecam',
        pais: 'Italia',
        imagen: 'photo-1.jpg'
      },
      {
        nombre: 'Maribel Martínez',
        mensaje: 'Excelente trabajo, webs súper modernas y funcionales que atraen clientes',
        proyecto: 'Tu Delivery En Casa,',
        pais: 'Venezuela',
        imagen: 'photo-1.jpg'
      },
      {
        nombre: 'Macario Betancourt',
        mensaje: 'Diseño excelente, se ve muy bien desde móvil y se hace fácil navegar por ella',
        proyecto: 'Sticky Deal',
        pais: 'Venezuela',
        imagen: 'photo-1.jpg'
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
        imag: 'client.png'
      }
    ]
  },
});