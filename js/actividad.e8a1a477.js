(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"1cf4":function(e,a,t){},"212d":function(e,a,t){"use strict";t("1cf4")},"27ba":function(e,a,t){},3126:function(e,a,t){"use strict";t("ec46")},"41a8":function(e,a,t){e.exports=t.p+"img/pregunta_4.bafe2b72.png"},4298:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col"},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-auto"},[a("img",{attrs:{src:t("8da0"),alt:""}})])}],n=(t("14d9"),function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"mb-4 pb-4"},[a("strong",{domProps:{innerHTML:e._s(e.pregunta.texto)}})]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,s){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],u={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(a=>({...a,correcta:e===a.id&&a.esCorrecta,incorrecta:e===a.id&&!a.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},d=u,l=(t("8f8a"),t("2877")),p=Object(l["a"])(d,n,c,!1,null,"3fad6faa",null),m=p.exports,b=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.rtas.correctas!==e.preguntasCount&&e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(a){return e.$emit("reiniciar")}}},[a("span",[e._v("Volver a intentarlo")])]):e.rtas.correctas===e.preguntasCount?a("div",{staticClass:"py-4"}):9===e.respuestasLength?a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Verificar")]),a("i",{staticClass:"fas fa-arrow-right"})]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}},v=C,h=(t("212d"),Object(l["a"])(v,b,g,!1,null,"71aa3d6e",null)),x=h.exports,_=function(){var e=this,a=e._self._c;return a("div",{staticClass:"row align-items-center justify-content-around"},[a("div",{staticClass:"col-5"},[(e.aprobado,a("img",{attrs:{src:t("a46c"),alt:""}}))]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[a("h3",[e._v("¡BUEN TRABAJO!")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[a("h3",[e._v("VUELVE A INTENTARLO")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],a("hr",{staticClass:"w-100"}),a("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},f=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},y=j,A=(t("4d40"),Object(l["a"])(y,_,f,!1,null,"360ec089",null)),S=A.exports,L={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:x,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:a}=this.cuestionario;if(!e)return[];const t=a?this.shuffle(e):e;return t.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let a,t=e.length;while(t>0)a=Math.floor(Math.random()*t),t--,[e[t],e[a]]=[e[a],e[t]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},R=L,M=(t("3126"),Object(l["a"])(R,o,i,!1,null,"e84807d4",null)),z=M.exports,w={name:"ActividadDidactica",components:{Actividad:z},data:()=>({cuestionario:{tema:"Exploración de <em>mousses</em> y gelatinas en la pastelería.",titulo:"Cuestionario",introduccion:"Aplicar las técnicas fundamentales en la preparación de <em>mousses</em> y gelatinas, desarrollando habilidades prácticas en la elaboración de diversos postres semifríos.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Qué ingredientes son comunes en la preparación de <em>mousses</em>?",imagen:t("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Solo claras de huevo.",esCorrecta:!1},{id:"b",texto:"Harina y mantequilla.",esCorrecta:!1},{id:"c",texto:"Crema de leche, claras de huevo, y azúcar.",esCorrecta:!0},{id:"d",texto:"Solo yemas de huevo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál es el ingrediente más importante para la elaboración del batido esponjoso?",imagen:t("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Harina.",esCorrecta:!1},{id:"b",texto:"Huevo.",esCorrecta:!0},{id:"c",texto:"Azúcar.",esCorrecta:!1},{id:"d",texto:"Sal.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Cuál es el propósito principal de la gelatina sin sabor en los <em>mousses</em>?",imagen:t("5173"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Dar color.",esCorrecta:!1},{id:"b",texto:"Añadir dulzura.",esCorrecta:!1},{id:"c",texto:"Proporcionar consistencia y estabilidad. ",esCorrecta:!0},{id:"d",texto:"Aromatizar.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué tipo de gelatina se utiliza comúnmente para cubrir frutas en decoraciones? ",imagen:t("41a8"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Gelatina con sabor.",esCorrecta:!0},{id:"b",texto:"Gelatina sin sabor.",esCorrecta:!1},{id:"c",texto:"Gelatina de frutas.",esCorrecta:!1},{id:"d",texto:"Gelatina de leche.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Cuál es el primer paso en la preparación de un <em>mousse</em> de mango?",imagen:t("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Mezclar crema <em>chantilly</em>..",esCorrecta:!1},{id:"b",texto:"Llevar el jugo de mango con azúcar a ebullición..",esCorrecta:!0},{id:"c",texto:"Preparar gelatina con sabor..",esCorrecta:!1},{id:"d",texto:"Tamizar la harina..",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es el proceso de preparación del batido esponjoso? ",imagen:t("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Mezclar harina y agua. ",esCorrecta:!1},{id:"b",texto:"Batir huevos, azúcar y sal, luego incorporar harina y hornear. ",esCorrecta:!0},{id:"c",texto:"Cocer la mezcla de harina y azúcar.",esCorrecta:!1},{id:"d",texto:"Enfriar y mezclar con frutas. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué tipo de <em>mousse</em> incluye la preparación de un puré antes de mezclar todos los ingredientes? ",imagen:t("5173"),barajarRespuestas:!1,opciones:[{id:"a",texto:"<em>Mousse</em> de chocolate.",esCorrecta:!1},{id:"b",texto:"<em>Mousse</em> de manzana.",esCorrecta:!0},{id:"c",texto:"<em>Mousse</em> de fresa.",esCorrecta:!1},{id:"d",texto:"<em>Mousse</em> de mango.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué equipo es esencial para preparar un batido esponjoso? ",imagen:t("41a8"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Licuadora.",esCorrecta:!1},{id:"b",texto:"Batidora.",esCorrecta:!0},{id:"c",texto:"Microondas.",esCorrecta:!1},{id:"d",texto:"Prensa de frutas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál es una característica distintiva de la <em>bavaroise</em> de maracuyá? ",imagen:t("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"No lleva gelatina. ",esCorrecta:!1},{id:"b",texto:"Se elabora con pulpa de maracuyá pasteurizada. ",esCorrecta:!0},{id:"c",texto:"Se cocina en el horno. ",esCorrecta:!1},{id:"d",texto:"No lleva crema de leche. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Cuál es la diferencia principal entre una gelatina con sabor y una gelatina sin sabor? ",imagen:t("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"La gelatina con sabor es más cara. ",esCorrecta:!1},{id:"b",texto:"La gelatina sin sabor no puede ser utilizada en <em>mousses</em>.",esCorrecta:!1},{id:"c",texto:"La gelatina con sabor contiene colorantes y saborizantes, mientras que la gelatina sin sabor se utiliza principalmente para dar consistencia. ",esCorrecta:!0},{id:"d",texto:"La gelatina sin sabor es más dulce que la gelatina con sabor. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},H=w,I=Object(l["a"])(H,s,r,!1,null,null,null);a["default"]=I.exports},"4b5d":function(e,a,t){e.exports=t.p+"img/pregunta_1.b5488959.png"},"4d40":function(e,a,t){"use strict";t("27ba")},5173:function(e,a,t){e.exports=t.p+"img/pregunta_3.b7e8bd9f.png"},5291:function(e,a,t){},"8da0":function(e,a,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},"8f8a":function(e,a,t){"use strict";t("5291")},9738:function(e,a,t){e.exports=t.p+"img/pregunta_2.f2eb1b99.png"},a46c:function(e,a,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},ec46:function(e,a,t){}}]);
//# sourceMappingURL=actividad.e8a1a477.js.map