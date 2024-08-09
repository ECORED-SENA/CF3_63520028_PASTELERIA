<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      .row
        .d-none.col-auto.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro1.png")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Después de haber aprendido algunas preparaciones sobre cremas y salsas en estas semanas, aprenderá varias preparaciones indispensables en pastelería: los deliciosos #[em mousses]. Los #[em mousses] son una variedad de preparaciones esponjosas que a menudo se disfrutan como postre. Generalmente, estos incluyen ingredientes como crema de leche, claras y yemas de huevo, azúcar, gelatina y diversas frutas, purés o chocolate, aportando una gran diversidad de sabores y texturas. 
    
      p.mt-4(data-aos="fade-up") En este componente:

      .row.mt-4.justify-content-center
        .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
          .h-100.p-3.p-md-3(style="background-color:#F0FDFB;border-radius:12px;")
            .row
              .mb-4.mb-md-0.col-md-auto.col-7.m-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/intro2.png")
              .col-md(style="place-self:center;")
                p.mb-0 Exploraremos recetas detalladas y técnicas clave para crear #[em mousses] de mango, fresa, chocolate y manzana.
        .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
          .h-100.p-4.p-md-3(style="background-color:#A4B2E4;border-radius:12px;")
            .row
              .mb-4.mb-md-0.col-md-auto.col-7.m-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/intro3.png")
              .col-md(style="place-self:center;")
                p.mb-0 Cada receta está cuidadosamente diseñada para guiarlo paso a paso, desde la preparación inicial de los ingredientes hasta el montaje final del postre.
        .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
          .h-100.p-3.p-md-3(style="background-color:#FEF3FB;border-radius:12px;")
            .row
              .mb-4.mb-md-0.col-md-auto.col-7.m-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/intro4.png")
              .col-md(style="place-self:center;")
                p.mb-0 Se incluyen observaciones y consejos prácticos para garantizar que cada mousse tenga la textura y sabor deseados, ofreciendo alternativas y variaciones para adaptarse a diferentes preferencias y necesidades. 
        .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
          figure.m-auto.col-11
            img(src="@/assets/curso/intro5.png")






    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
