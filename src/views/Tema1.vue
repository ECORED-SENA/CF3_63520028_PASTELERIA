<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 #[em Mousses]
    
    p(data-aos="fade-up") Los #[em mousses] son una variedad de preparaciones esponjosas que, en muchos casos, se sirven como postre. Su textura suave y aireada se logra mediante la incorporación de aire en los ingredientes, lo que les confiere una ligereza característica. Generalmente, contienen: 

    .col-xl-8.m-auto.mt-4
      .row.justify-content-center
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/1.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Crema de leche
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/2.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Claras de huevo
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Yemas de huevo
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/4.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Azúcar
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/5.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Gelatina
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/6.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Frutas o puré de frutas
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/7.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Chocolate




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
