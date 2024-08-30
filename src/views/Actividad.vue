<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Exploración de <em>mousses</em> y gelatinas en la pastelería.',
      titulo: 'Cuestionario',
      introduccion:
        'Aplicar las técnicas fundamentales en la preparación de <em>mousses</em> y gelatinas, desarrollando habilidades prácticas en la elaboración de diversos postres semifríos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué ingredientes son comunes en la preparación de <em>mousses</em>?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Solo claras de huevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Harina y mantequilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crema de leche, claras de huevo, y azúcar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo yemas de huevo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el ingrediente más importante para la elaboración del batido esponjoso?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Harina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Huevo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Azúcar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito principal de la gelatina sin sabor en los <em>mousses</em>?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Dar color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Añadir dulzura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proporcionar consistencia y estabilidad. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aromatizar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de gelatina se utiliza comúnmente para cubrir frutas en decoraciones? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Gelatina con sabor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gelatina sin sabor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gelatina de frutas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gelatina de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el primer paso en la preparación de un <em>mousse</em> de mango?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclar crema <em>chantilly</em>..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Llevar el jugo de mango con azúcar a ebullición..',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Preparar gelatina con sabor..',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamizar la harina..',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el proceso de preparación del batido esponjoso? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclar harina y agua. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Batir huevos, azúcar y sal, luego incorporar harina y hornear. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cocer la mezcla de harina y azúcar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfriar y mezclar con frutas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de <em>mousse</em> incluye la preparación de un puré antes de mezclar todos los ingredientes? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '<em>Mousse</em> de chocolate.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Mousse</em> de manzana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Mousse</em> de fresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Mousse</em> de mango.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué equipo es esencial para preparar un batido esponjoso? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Licuadora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Batidora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Microondas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prensa de frutas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una característica distintiva de la <em>bavaroise</em> de maracuyá? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'No lleva gelatina. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se elabora con pulpa de maracuyá pasteurizada. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se cocina en el horno. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No lleva crema de leche. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la diferencia principal entre una gelatina con sabor y una gelatina sin sabor? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La gelatina con sabor es más cara. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La gelatina sin sabor no puede ser utilizada en <em>mousses</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La gelatina con sabor contiene colorantes y saborizantes, mientras que la gelatina sin sabor se utiliza principalmente para dar consistencia. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La gelatina sin sabor es más dulce que la gelatina con sabor. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
