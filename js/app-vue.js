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
        titulo: 'Inicio',
        categoria: 'wordpress',
        imagen: 'photo-1.jpg',
        url: '#inicio'
      },
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
        titulo: 'Gianfranco Soriano',
        imagen: 'client.png'
      }
    ]
  },
});