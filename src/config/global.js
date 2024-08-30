export default {
  global: {
    componenteFormativo: 'Preparaciones de <em>mousses</em> para pastelería',
    descripcionCurso:
      'Este componente ofrece una guía detallada sobre la preparación de <em>mousses</em> y gelatinas, ingredientes esenciales en pastelería. Incluye recetas de <em>mousses</em> de mango, fresa, chocolate y manzana, además de indicaciones para gelatinas con y sin sabor. Proporciona pasos específicos, formulaciones y consejos para obtener resultados óptimos en cada preparación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Mousses</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elaboración de batido esponjoso',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Preparación de gelatinas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración de <em>mousses</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>mousse</em> de mango',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>mousse</em> de fresa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>mousse</em> de chocolate',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>mousse</em> de manzana',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '<em>mousse</em> de maracuyá',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Mousses</em>',
      referencia: 'SENA (2011). Pasteleria 4 HD480 [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oYqMKChLrC4  ',
    },
    {
      tema: '<em>Mousse</em> de mango',
      referencia: 'SENA (2011). Pasteleria cap02. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9N7rKCXJzrQ  ',
    },
    {
      tema: '<em>Mousse</em> de fresa',
      referencia:
        'Cocina Para Todos (2015). Cómo hacer Mousse de Fresa muy Fácil! [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nGATsJzMoBY  ',
    },
    {
      tema: '<em>Mousse</em> de chocolate',
      referencia:
        'Juliana Postres (2023). MOUSSE DE CHOCOLATE CON 4 Ingredientes [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6-aj4gLZWzI  ',
    },
    {
      tema: '<em>Mousse</em> de manzana',
      referencia: 'SENA (2011). Pasteleria 3 HD480 [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ktO4wGgJwQk  ',
    },
    {
      tema: '<em>Bavaroise</em> de maracuyá ',
      referencia:
        'Juliana Postres (2023). MOUSSE DE MARACUYÁ - con 4 ingredientes [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tUOkLKYnycE',
    },
  ],
  glosario: [
    {
      termino: 'Aireado de las claras',
      significado:
        'capacidad que tienen las claras de atrapar aire por acción de algunas de las proteínas globulares presentes en ellas. ',
    },
    {
      termino: 'Atemperar',
      significado:
        'mantener la temperatura de los ingredientes al medio ambiente. ',
    },
    {
      termino: 'Baño maría',
      significado:
        'recipiente con agua puesto al calor en el cual se coloca otra vasija para que su contenido reciba un calor suave y constante. ',
    },
    {
      termino: 'Choque térmico',
      significado:
        'cambio brusco de temperatura con el fin de eliminar microorganismos.  ',
    },
    {
      termino: 'Cohesión',
      significado:
        'que se mantienen unidas las partículas, una sustancia con otra. ',
    },
    {
      termino: 'Dosificación',
      significado: 'regular o graduar la cantidad a usar en una formulación. ',
    },
    {
      termino: 'Gelatina',
      significado:
        'es una proteína de origen animal, se encuentra en los huesos y pieles de los animales. ',
    },
    {
      termino: 'Glucosa',
      significado:
        'es una forma de azúcar que se encuentra en las frutas. Unida a la fructosa forma la sacarosa o azúcar común. ',
    },
    {
      termino: 'G',
      significado: 'gramos. Unidad principal de medida para masas. ',
    },
    {
      termino: 'Grasa',
      significado:
        'son compuestos de carbono, hidrógeno y oxígeno sólidos a la temperatura ambiente. Tienen como nombre genérico lípidos. son de origen vegetal y animal. ',
    },
    {
      termino: 'Homogenizado',
      significado:
        'cuando se mezclan varias sustancias y su composición y estructura es uniforme. ',
    },
    {
      termino: 'Jarabe',
      significado:
        'es un jarabe claro, viscoso e incoloro que se consigue a partir del almidón de maíz o de alguna fruta. ',
    },
    {
      termino: 'Lienzo',
      significado: 'tela de algodón o hilo. ',
    },
    {
      termino: 'Lípidos',
      significado:
        'son compuestos de estructura heterogénea muy abundantes en la naturaleza. Las grasas y los aceites son los representantes más importantes. Están compuestos por hidrógeno, oxígeno y carbono y en ciertos casos pueden contener nitrógeno y fósforo. ',
    },
    {
      termino: 'ML',
      significado: 'mililitros. Unidad de medida para líquidos. ',
    },
    {
      termino: 'Papel <em>kraft</em>',
      significado:
        'papel de excepcionales cualidades de resistencia y pureza que lo hace apto para el contenido y transporte de productos alimenticios. Es el más utilizado en el embalaje de bolsas y envolturas. ',
    },
    {
      termino: 'Papel <em>vinipel</em>',
      significado:
        'papel extensible para el empaque de alimentos y otros productos, su brillo y transparencia permite destacar el producto. ',
    },
    {
      termino: 'Pasteurización',
      significado:
        'es un proceso térmico por medio del cual se eliminan las bacterias patógenas que pueden existir en un alimento y aumentar el tiempo de conservación. Existen diferentes métodos. ',
    },
    {
      termino: 'Porcentaje',
      significado:
        'es un número expresado como fracción de ciento. Por ejemplo el 10 % es igual a 10/100. La ecuación siguiente se utiliza para determinar el porcentaje de un ingrediente: peso del ingrediente x 100 / peso total del ingrediente base. ',
    },
    {
      termino: 'Producto precocinado',
      significado:
        'producto al cual no se le cocina completamente sino que se deja en un 80 % de su cocción para luego terminar de cocinarlo. ',
    },
    {
      termino: 'Proteína',
      significado:
        'son sustancias macromoleculares presentes en todos los organismos vivos. Son el componente estructural en los tejidos animales como la piel, cartílago, uñas y músculo esquelético. ',
    },
    {
      termino: 'Punto de nieve',
      significado:
        'forma de batir las claras de huevo hasta que queden en forma de espuma blanca. se logra batiendo las claras con batidora hasta que forma consistencia. Se utilizan en la elaboración de <em>mousses</em>. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Afanador de Lozano, E. <em>Dulces, pasteles y postres</em>. Biblioteca Virtual Miguel de Cervantes.',
      link:
        'https://www.cervantesvirtual.com/obra/dulces-pasteles-y-postres-881595/',
    },
    {
      referencia:
        'Asanza Guerrero, C. (2012). <em>Servicio de postres para llevar a domicilio en Cumbayá</em>. Universidad de Las Américas.',
      link: 'https://dspace.udla.edu.ec/handle/33000/3315',
    },
    {
      referencia:
        'Corleto Fernández, M. E. (2019). <em>Producción de material audiovisual para enseñar a clientes reales la preparación de recetas de postres saludables</em>. Universidad Galileo.',
      link: 'https://biblioteca.galileo.edu/xmlui/handle/123456789/892',
    },
    {
      referencia:
        'Gracia Rosich, R. (2014). <em>Más que postres</em>. Universitat Oberta de Catalunya.',
      link: 'https://openaccess.uoc.edu/handle/10609/28541',
    },
    {
      referencia:
        'Huali Villa, M. R., & Maldonado Fabian, A. R. <em>Servicio de entrega de ingredientes para postres medidos en cantidades exactas</em>. Universidad Peruana de Ciencias Aplicadas',
      link: 'https://repositorioacademico.upc.edu.pe/handle/10757/652299',
    },
    {
      referencia:
        'Tamay Puli, R. B. (2021). <em>Producción y comercialización de deliciosos postres con crema de leche</em>. Universidad Politécnica Salesiana.',
      link: 'https://dspace.ups.edu.ec/handle/123456789/20790',
    },
    {
      referencia:
        'Tandayamo Valencia, G. L. (2011). <em>La mora y su uso gastronómico en postres fríos</em>. Universidad Técnica del Norte.',
      link: 'https://repositorio.utn.edu.ec/handle/123456789/1189',
    },
    {
      referencia:
        'Vinay, M. (2019). <em>Postres saludables: Recetas para deleitarte saludablemente</em>.',
      link:
        'https://books.google.com/books?hl=es&lr=&id=bZehDwAAQBAJ&oi=fnd&pg=PP1&dq=libros+de+recetas+de+postres&ots=BJm44BQzUK&sig=_10tuMsY_2-KWMu8jcVZZ1rKmvk',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Oswaldo Acosta Romero',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquial',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: '<em>Storyboard</em> e Ilustración',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
