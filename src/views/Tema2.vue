<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Elaboración de #[em mousses]
    
    .mt-4.p-4.p-lg-0(style="background-color:#E8EBF8;" data-aos="zoom-in")
      .row
        .col-auto.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/1.png")
        .col.pe-lg-5(style="place-self:center;")
          p.mb-0 Los #[em mousses] son postres suaves y esponjosos que destacan por su textura ligera y su gran variedad de sabores. Su preparación requiere técnica y precisión para lograr la consistencia perfecta y un sabor exquisito. A continuación, se detalla el proceso de elaboración de varios tipos de #[em mousses], proporcionando instrucciones claras para que pueda disfrutar de estos deliciosos postres en su máxima expresión.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1	#[em Mousse] de mango
    
    p(data-aos="fade-right") El #[em mousse] de mango es un postre fresco y exótico que combina la suavidad de la crema con el sabor tropical del mango. 

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
                  div Jugo de naranja licuado y tamizado: 100 ml
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Azúcar corriente: 40 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema chantilly: 150 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina sin sabor: 5 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina con sabor a mango: 20 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batido esponjoso
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/2.png')
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
                  div Batidora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Licuadora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde para #[em mousses]
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/3.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración

    p(data-aos="fade-left") A continuación, se detalla el proceso de elaboración de este mousse.

    .cont_1_3.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Pesar y medir ingredientes 
              p Pese y mida los ingredientes. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/4.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hervir jugo de mango y azúcar 
              p Lleve el jugo de mango con azúcar corriente a ebullición y luego enfríe. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/5.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar crema chantilly
              p Prepare crema chantilly. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/6.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar gelatina sin sabor
              p Prepare gelatina sin sabor. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/7.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Mezclar jarabe de mango y crema
              p Mezcle con una espátula el almíbar o jarabe de mango con la crema chantilly. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/8.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Agregar gelatina sin sabor
              p Agregue a la mezcla la gelatina sin sabor previamente lista. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/9.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter en molde y alisar 
              p Vierta de inmediato sobre el molde previamente rociado la mezcla y empareje dándole unos golpecitos al molde suavemente o con la espátula.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Cubrir y refrigerar
              p Cubra con papel vinipel el molde para evitar que caiga agua sobre él, lleve a refrigeración por tres horas o hasta que tome consistencia. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/11.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar gelatina con sabor 
              p Prepare la gelatina con sabor. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter gelatina sobre #[em mousse]
              p Cuando esto haya sucedido, vierta sobre el mousse la gelatina con sabor cuando esta comience a gelificar. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Gelificar y servir
              p Cuando la gelatina con sabor haya gelificado, saque del molde, parta en porciones y sirva. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/14.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2	#[em Mousse] de fresa
    
    p(data-aos="fade-right") El #[em mousse] de fresa es un postre suave y refrescante, ideal para aprovechar el sabor natural y dulce de las fresas. 

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
                  div Fresas picadas o puré: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Azúcar corriente: 40 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema chantilly: 150 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina sin sabor: 5 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Claras de huevo: 30 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batido esponjoso
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/15.png')
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
                  div Espátulas
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Licuadora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde para #[em mousses]
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipientes varios
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipiente para baño maría
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/16.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") A continuación, se presenta el proceso de elaboración de este #[em mousse].
    
    .cont_1_3.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Pesar y medir ingredientes
              p Pese y mida los ingredientes. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/17.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hervir fresas y azúcar
              p Lleve las fresas picadas o el puré con el azúcar a fuego hasta ebullición y luego enfríe. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/18.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar crema chantilly 
              p Prepare crema chantilly. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/19.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir claras a punto de nieve 
              p Bata las claras a punto de nieve. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/20.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar gelatina sin sabor
              p Prepare gelatina sin sabor. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/21.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Forrar molde con bizcocho 
              p Forre el molde de #[em mousse] con el bizcocho de batido esponjoso y corte dos capas de batido esponjoso del tamaño del molde para que las utilice posteriormente. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/22.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mezclar crema y claras 
              p Mezcle el paso 3 con el paso 4 homogenizando bien, luego agregue las claras y finalmente adicione la gelatina sin sabor previamente preparada, mezclando muy bien. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/23.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Colocar #[em mousse] en molde 
              p Coloque una parte de este mousse sobre el molde forrado.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/24.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Capas alternadas
              p Esparza encima una capa de batido esponjoso preparado en el paso 6, coloque de nuevo otra capa de mousse. Repita esta operación una vez más, terminando con una capa de mousse y empareje bien. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/25.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Refrigerar 
              p Lleve a refrigeración por tres horas o hasta que tome consistencia. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/26.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Añadir mermelada y refrigerar
              p Retire de la nevera, cubra la superficie con mermelada de fresa y lleve a refrigeración. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/27.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Decorar y servir
              p Decore a su gusto y parta en porciones. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/28.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3	#[em Mousse] de chocolate
    
    p(data-aos="fade-right") El #[em mousse] de chocolate es un postre clásico y delicioso, amado por su textura suave y su sabor rico e indulgente.  

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
                  div Cobertura de chocolate: 100 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema chantilly: 160 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Licor a elección (brandy): 2 ml 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina sin sabor: 4 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batido esponjoso 
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/29.png')
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
                  div Espátulas
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde para #[em mousses]
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipientes varios
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipiente para baño maría
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Termómetro
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/30.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") A continuación, se detalla el proceso de elaboración de este #[em mousse]. 

    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4	#[em Mousse] de manzana
    
    p(data-aos="fade-right") El #[em mousse] de manzana es un postre refrescante y ligero, perfecto para aprovechar el sabor dulce y sutil de las manzanas. Esta preparación es un poco diferente a las elaboradas anteriormente. Antes de elaborar el #[em mousse] de manzana, prepare un puré. 

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Puré] para el #[em mousse] de manzana
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_4.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/31.png")
            .col-lg(data-aos="fade-up" style="place-self:center;")
              p.text-white.mb-0 El puré de manzana es una base esencial para el #[em mousse] de manzana, aportando un sabor natural y una textura suave. A continuación, se detalla el proceso de elaboración del puré de manzana. 
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src='@/assets/curso/tema2/32.png')
    
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
                  div Manzana: 100 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Agua: 100 ml 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Azúcar corriente: 50 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Jugo de limón: 1 ml 
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/33.png')
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
                  div Lienzo
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipientes
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/34.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") A continuación, se detalla el proceso de elaboración del puré de manzana. 

    .row.justify-content-center
      .col-lg.col-md-8.mb-4(data-aos="fade-up")
        .h-100.p-4.cont_2_1.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
          figure
            img(src="@/assets/curso/tema2/35.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-0 Pele y corte las manzanas en trozos, añada el azúcar y el jugo de limón en agua, lleve al fuego hasta que ablande y pueda macerar.
      .col-lg.col-md-8.mb-4(data-aos="fade-up")
        .h-100.p-4.cont_2_1.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
          figure
            img(src="@/assets/curso/tema2/36.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-0 Coloque sobre un lienzo y escurra la mayor cantidad de agua posible.
      .col-lg.col-md-8.mb-4(data-aos="fade-up")
        .h-100.p-4.cont_2_1.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
          figure
            img(src="@/assets/curso/tema2/37.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-0 Está listo para que lo use y aplique al #[em mousse] de manzana. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Elaboración] #[em mousse] de manzana
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_4.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/38.png")
            .col-lg(data-aos="fade-up" style="place-self:center;")
              p.text-white.mb-0 La preparación de este mousse implica varios pasos que aseguran una textura esponjosa y un sabor exquisito.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src='@/assets/curso/tema2/39.png')
    
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
                  div Puré de manzana: 100 gr 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema pastelera: 50 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema chantilly: 100 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Clara de huevo: 20 gr
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Gelatina sin sabor: 4 gr
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/40.png')
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
                  div Batidora
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde para #[em mousse]
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/41.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") A continuación, se detalla el proceso de elaboración de este #[em mousse].

    .cont_1_3.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Pesar y medir ingredientes
              p  Pese y mida los ingredientes necesarios para la preparación del mousse de manzana.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/42.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar crema #[em chantilly]
              p  Bata la crema de leche fría hasta obtener una consistencia suave y esponjosa.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/43.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Elaborar puré de manzana
              p  Cocine las manzanas y procéselas hasta obtener un puré suave.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/44.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hacer crema pastelera
              p  Prepare la crema pastelera siguiendo su receta habitual.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/45.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir claras a punto de nieve
              p  Bata las claras de huevo a punto de nieve hasta obtener picos firmes.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/46.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar gelatina sin sabor
              p  Disuelva la gelatina sin sabor en agua fría y luego caliéntela ligeramente hasta que se disuelva completamente.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/47.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mezclar ingredientes
              p  Mezcle la crema #[em chantilly] con la crema pastelera hasta que homogenice muy bien, luego agregue las claras de huevo a punto de nieve y la gelatina sin sabor previamente preparada, mezclando muy bien.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/48.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Llenar molde y emparejar
              p  Llene el molde para #[em mousse] previamente rociado con agua, empareje dando golpecitos o con una espátula.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/49.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Refrigerar
              p  Lleve a refrigeración por 2 horas o hasta el tiempo que considere necesario.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/50.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Decorar y servir
              p  Saque de refrigeración y decore al gusto antes de servir.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/51.png')
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/52.png")
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg.mb-4.mb-lg-0.pe-lg-0
            .p-4.d-flex.align-content-center.flex-wrap.h-100(style="background-color:#E2DACC;")
              p.fw-bold Tenga en cuenta que: 
              p.mb-0 Esta receta final es una prueba de fuego, porque reúne todas las preparaciones realizadas.
          .col-lg-auto.ps-lg-0
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/53.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_5 2.5 #[em Bavaroise] de maracuyá
    
    p(data-aos="fade-right") La #[em bavaroise] de maracuyá es un postre semifrío, cremoso y exótico, que combina la frescura de la fruta de la pasión con la suavidad de la crema. 

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .cont_2_2
      .col-xl-10.m-auto.mt-4
        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Ingredientes")
            .row.col-xl-11.m-auto.pt-4.pb-4
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Los #[strong ingredientes] necesarios para su preparación son: 
                ul.lista-ul.mt-3
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Crema pastelera: 500 gr
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Crema de leche: 1000 gr
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Azúcar: 250 gr
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Pulpa de maracuyá: 500 gr
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Canela: 5 gr
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Gelatina sin sabor: 2% sobre el peso total de lo anterior
              .col-lg-5
                figure.m-auto.col-10.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema2/55.png')
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
                    div Batidora
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Espátulas
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Molde para #[em mousses]
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Probeta o vaso medidor
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Termómetro
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Recipientes varios
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Recipiente para baño maría
              .col-lg-5
                figure.m-auto.col-10.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema2/56.png')
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
      
      p(data-aos="fade-left") A continuación, se detalla el proceso de elaboración de este delicioso postre.

      .col-xl-11.m-auto.mt-4
        .row
          .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-down")
            figure.m-auto.col-lg-12
              img(src='@/assets/curso/tema2/57.png')
          .col-lg-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
              .p-4.p-lg-5.bg-white.h-100(style="border-radius:0px;box-shadow:0px 0px 25px rgba(0,0,0,.15);")
                .row.justify-content-center.mb-3
                  .col-5.col-md-9.col-lg-8
                    img(src='@/assets/curso/tema2/58.svg')
                p.text-center.mt-4 Prepare la crema pastelera básica.
              .p-4.p-lg-5.bg-white.h-100(style="border-radius:0px;box-shadow:0px 0px 25px rgba(0,0,0,.15);")
                .row.justify-content-center.mb-3
                  .col-5.col-md-9.col-lg-8
                    img(src='@/assets/curso/tema2/59.svg')
                p.text-center.mt-4 Prepare un almíbar con el azúcar y la pulpa de maracuyá, pasteurizar a 85 ºC.
              .p-4.p-lg-5.bg-white.h-100(style="border-radius:0px;box-shadow:0px 0px 25px rgba(0,0,0,.15);")
                .row.justify-content-center.mb-3
                  .col-5.col-md-9.col-lg-8
                    img(src='@/assets/curso/tema2/60.svg')
                p.text-center.mt-4 Bata la crema e incorpore todos los ingredientes de manera envolvente.
              .p-4.p-lg-5.bg-white.h-100(style="border-radius:0px;box-shadow:0px 0px 25px rgba(0,0,0,.15);")
                .row.justify-content-center.mb-3
                  .col-5.col-md-9.col-lg-8
                    img(src='@/assets/curso/tema2/61.svg')
                p.text-center.mt-4 Lleve a un molde y refrigere.
      
      .col-xl-10.m-auto.mt-4
        .row
          .col-lg.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
            .p-4.d-flex.align-content-center.flex-wrap.h-100(style="background-color:#E2DACC;")
              p.fw-bold Observaciones: 
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div No olvide hidratar la gelatina previamente en agua fría 5 veces su peso y luego fundir a una temperatura no mayor de 45 ºC.
                li.d-flex.mb-0
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Bata la crema de leche a punto semi montado antes de envolver con todos los ingredientes.
          .col-lg-auto.ps-lg-0(data-aos="fade-left")
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/62.png")
    
    
    

    





</template>

<script>
export default {
  name: 'Tema2',
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
