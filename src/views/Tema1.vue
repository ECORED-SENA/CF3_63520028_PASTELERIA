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
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1	Elaboración de batido esponjoso
    
    p(data-aos="fade-right") Antes de comenzar con la elaboración de #[em mousses], es necesario preparar un batido esponjoso. Esta técnica le proporcionará una base alternativa que mejorará la calidad de los #[em mousses] y ofrecerá una gran versatilidad en su elaboración.

    .col-xl-10.m-auto.mt-4
      .cont_1_2.ps-lg-5.pe-lg-5.p-4.p-lg-0
        .row
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
            figure.m-auto.col-8.col-md-5.col-lg-12
              img(src="@/assets/curso/tema1/8.png")
          .col-lg-7.mb-lg-3.ps-lg-4(data-aos="fade-up" style="place-self:end;")
            p Algunas recomendaciones son:
            ul.lista-ul.mt-3
              li.d-flex
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div Se puede añadir sal al batido para estabilizarlo.
              li.d-flex
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div El ingrediente más importante para la elaboración del batido esponjoso es el huevo, pues su calidad influye directamente en el resultado final.
              li.d-flex
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div La harina utilizada debe ser harina pastelera, con un porcentaje de proteína máximo del 10 % para obtener un producto suave y con buen volumen. Si se usa harina con mayor contenido proteico, debe mezclarse con fécula en una proporción de hasta el 50 %.
              li.d-flex
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div El azúcar utilizado es la sacarosa o azúcar corriente refinada.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]

    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong ingredientes] necesarios para su preparación son: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Huevos: 200 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Harina: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Azúcar: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Sal: 0,5 gr
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/10.png')
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong equipos] necesarios para su preparación son:
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Bandeja
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Horno
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/11.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    .cont_1_3.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Pesar ingredientes
              p Pese todos los ingredientes.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/13.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir huevos, azúcar y sal
              p Coloque en la batidora industrial los huevos, el azúcar y la sal, y bata a velocidad media (2ª velocidad) hasta que el batido se marque por el globo de la batidora o se sostenga en la espátula.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/14.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Incorporar harina
              p Cuando el batido alcance la consistencia adecuada, baje la velocidad de la batidora a la primera velocidad y agregue la harina lentamente hasta incorporarla completamente.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/15.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar harina y bandeja
              p Mientras se baten los ingredientes, tamice la harina, engrase la bandeja y coloque papel Kraft sobre la misma para evitar que el batido se pegue.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/16.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Vaciar y hornear
              p Vacíe el batido sobre la bandeja de manera uniforme, ayudándose con la espátula, sin golpearla, y lleve al horno durante 5 o 6 minutos, dependiendo del tipo de horno.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/17.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Precalentar horno
              p Precaliente el horno a 500 ºF (260 ºC).
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/18.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Enfriar y desmoldar
              p Saque la bandeja del horno, deje enfriar y desmolde.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/19.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2	Preparación de gelatinas 
    
    p(data-aos="fade-right") La gelatina es considerada una proteína, la cual se encuentra en las pieles y huesos de los animales. Tiene un gran uso en la industria de los alimentos. En el mercado se encuentran dos tipos de gelatina: con sabor y sin sabor.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_4.ps-xl-5.pe-xl-5.p-4.p-xl-0
          .row
            .col-xl-auto.mb-4.mb-xl-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-4.col-xl-12
                img(src="@/assets/curso/tema1/21.png")
            .col-xl.mb-xl-5.ps-xl-4(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") ¿Para qué se usa?
              p.text-white.mb-0 Ambos tipos de gelatina sirven en la preparación de postres instantáneos. En la pastelería se utiliza con varios propósitos, por ejemplo, para dar estabilidad a los postres, como en el caso de los #[em mousses] y para cubrir frutas en las decoraciones.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src='@/assets/curso/tema1/22.png')
    
    p.mt-4(data-aos="fade-right") Cada tipo de gelatina tiene características y aplicaciones únicas en la cocina, las cuales se explican a continuación:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.pe-lg-0.col-md-10(data-aos="fade-right")
        .h-100.p-4.p-lg-5.pt-lg-4(style="background-color:#A4B2E4;border-radius:15px 0px 0px 15px;")
          figure.m-auto.col-10.col-md-6.col-lg-12
            img(src="@/assets/curso/tema1/23.png")
          h5.text-center.mt-3.mb-4 Gelatina con sabor
          p.mb-0 La gelatina con sabor contiene colorantes y saborizantes y su poder de gelatinización es menor. Puede ser consumida directamente como postre.
      .col-lg.mb-4.mb-lg-0.ps-lg-0.col-md-10(data-aos="fade-left")
        .h-100.p-4.p-lg-5.pt-lg-4(style="background-color:#C8F9F3;border-radius:0px 15px 15px 0px;")
          figure.m-auto.col-10.col-md-6.col-lg-12
            img(src="@/assets/curso/tema1/24.png")
          h5.text-center.mt-3.mb-4 Gelatina sin sabor
          p.mb-0 La gelatina sin sabor sirve para darle consistencia a algunas preparaciones, como por ejemplo la estabilidad de los #[em mousses].
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    p(data-aos="fade-left") A continuación, se detalla el proceso para preparar gelatina con sabor de manera sencilla: 

    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong ingredientes] necesarios para su preparación son: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina con sabor: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Agua caliente: 145 ml
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Agua fría: 145 ml
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/25.png')
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong equipos] necesarios para su preparación son: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipientes
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/26.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación de gelatina con sabor es:

    .row.justify-content-center.mt-4
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/27.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 1. Pesar y medir los ingredientes.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/28.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 2. Colocar agua caliente y la gelatina en un recipiente.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/29.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 3. Agregar el agua fría.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/30.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 4. Dejar enfriar, cuando comience a gelatinizar está lista para usar.
    
    p.mt-4(data-aos="fade-right") A continuación, se detalla el proceso para preparar gelatina sin sabor de manera sencilla:

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación] 
    
    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong ingredientes] necesarios para su preparación son: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina sin sabor: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Agua fría: 500 ml
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/31.png')
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los #[strong equipos] necesarios para su preparación son: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipiente para baño maría
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/32.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación de gelatina sin sabor es:

    .row.justify-content-center.mt-4
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/33.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 1. Pesar y medir los ingredientes.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/34.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 2. Mezcle la gelatina y el agua evitando la formación de grumos, para ello utilice una espátula.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/35.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 3. Deje gelificar.
      .col-lg.mb-4.col-md-6(data-aos="zoom-in")
        .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/36.png" style="max-width:150px;display:inline;")
          p.mb-0.mt-3 4. Lleve a baño maría para que la gelatina esté líquida y lista para ser usada.
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_4.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-7.col-md-4.col-lg-12
                img(src="@/assets/curso/tema1/37.png")
            .col-lg.mb-lg-4.ps-lg-4(data-aos="fade-up" style="place-self:end;")
              p.fw-bold.mb-2(style="color:#F7C3EC;") Tenga en cuenta que:
              p.text-white.mb-1 La gelatina sin sabor puede absorber 5 veces su peso en agua.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src='@/assets/curso/tema1/38.png')
          




      
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
