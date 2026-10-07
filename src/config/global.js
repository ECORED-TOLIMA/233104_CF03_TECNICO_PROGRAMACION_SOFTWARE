export default {
  global: {
    Name: 'Modelado y gestión de bases de datos',
    Description:
      'Este componente formativo aborda los fundamentos del modelado y la gestión de bases de datos, incluyendo diseño conceptual, lógico y físico, lenguajes DDL y DML, integridad de los datos y sistemas gestores de bases de datos relacionales y NoSQL. Además, analiza herramientas de modelado, almacenamiento de datos y principios aplicados en sistemas distribuidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Fundamentos de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos y características de las bases de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución y tendencias de las bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Modelos de datos estructurados, semiestructurados y desestructurados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bases de datos relacionales, NoSQL y NewSQL',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelado de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño conceptual de bases de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelo Entidad-Relación (ER)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño lógico de bases de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Transformación del modelo conceptual al modelo lógico',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Diseño físico de bases de datos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Normalización de bases de datos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación y estructura del modelo relacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Entidades, atributos y relaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Llaves primarias y foráneas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Integridad de identidad e integridad referencial',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Restricciones y consistencia de los datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Lenguajes y manipulación de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Lenguajes DDL y DML',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Creación de bases de datos y tablas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modificación de estructuras de tablas y columnas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Inserción, actualización y eliminación de registros',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Eliminación de tablas y bases de datos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión y administración de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sistemas gestores de bases de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Configuración básica de sistemas gestores de bases de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Herramientas de modelado de bases de datos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procesamiento y almacenamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Cargas de trabajo transaccionales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Cargas de trabajo analíticas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Principios ACID y gestión de transacciones',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Tipos de almacenamiento de datos',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Bases de datos NoSQL y sistemas distribuidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto y tipos de bases de datos NoSQL',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Operaciones y manipulación de datos en bases de datos NoSQL',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Consultas, filtrado y agregación de datos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Teorema CAP y sistemas distribuidos',
            hash: 't_7_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA3_228145_DU.pdf',
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
  complementario: [{ tema: '', referencia: '', tipo: 'Sitio web', link: '' }],
  glosario: [
    {
      termino: 'Agregación',
      significado:
        'proceso que permite realizar operaciones sobre un conjunto de datos para obtener resultados resumidos, como conteos, promedios, sumas o valores máximos y mínimos dentro de una base de datos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto organizado de datos relacionados entre sí que se almacenan y gestionan de forma estructurada para facilitar su consulta, modificación y análisis.',
    },
    {
      termino: 'Consistencia',
      significado:
        'propiedad que garantiza que todos los nodos de un sistema distribuido muestran los mismos datos al mismo tiempo después de realizar una operación.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'capacidad de un sistema para responder a las solicitudes de los usuarios en todo momento, incluso si algunos componentes presentan fallas.',
    },
    {
      termino: 'Filtrado de datos',
      significado:
        'proceso que permite seleccionar únicamente los registros que cumplen ciertas condiciones dentro de una consulta en una base de datos.',
    },
    {
      termino: 'Integridad de datos',
      significado:
        'conjunto de reglas y mecanismos que aseguran que la información almacenada en una base de datos sea precisa, coherente y confiable.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'representación conceptual que define cómo se organizan, relacionan y estructuran los datos dentro de una base de datos.',
    },
    {
      termino: 'Modelo relacional',
      significado:
        'modelo de base de datos que organiza la información en tablas compuestas por filas y columnas, estableciendo relaciones entre ellas mediante claves.',
    },
    {
      termino: 'NoSQL',
      significado:
        'tipo de bases de datos no relacionales diseñadas para manejar grandes volúmenes de datos y estructuras flexibles, comúnmente utilizadas en aplicaciones web y sistemas distribuidos.',
    },
    {
      termino: 'Tabla',
      significado:
        'estructura fundamental del modelo relacional donde se almacenan los datos organizados en filas (registros) y columnas (atributos).',
    },
    {
      termino: 'Teorema CAP',
      significado:
        'principio de los sistemas distribuidos que establece que un sistema no puede garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones en una red distribuida.',
    },
    {
      termino: 'Tolerancia a particiones',
      significado:
        'capacidad de un sistema distribuido para continuar funcionando incluso cuando se presentan fallas de comunicación entre algunos nodos de la red.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chen, P. P. (1976). The entity-relationship model: Toward a unified view of data. ACM Transactions on Database Systems, 1(1), 9–36. ',
      link: 'https://doi.org/10.1145/320434.320440',
    },
    {
      referencia:
        'Codd, E. F. (1970). A relational model of data for large shared data banks. Communications of the ACM, 13(6), 377–387. ',
      link: 'https://doi.org/10.1145/362384.362685',
    },
    {
      referencia:
        'Coronel, C., & Morris, S. (2015). Database systems: Design, implementation, and management (11th ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Date, C. J. (2004). Introducción a los sistemas de bases de datos (8.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Elmasri, R., & Navathe, S. B. (2016). Fundamentals of database systems (7th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Bases de datos NoSQL. YouTube. ',
      link: 'https://www.youtube.com/watch?v=M-Iw1awJ1NU',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). Construcción de un modelo entidad relación. YouTube. ',
      link: 'https://www.youtube.com/watch?v=t7KZFiCstwI',
    },
    {
      referencia:
        'Garcia-Molina, H., Ullman, J. D., & Widom, J. (2009). Database systems: The complete book (2nd ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Stonebraker, M., & Hellerstein, J. M. (2005). What goes around comes around. Readings in Database Systems (4th ed.). MIT Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
