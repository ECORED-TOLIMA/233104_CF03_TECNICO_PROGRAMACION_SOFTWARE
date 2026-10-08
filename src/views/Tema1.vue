<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de bases de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las bases de datos constituyen uno de los componentes esenciales en el desarrollo de soluciones de #[i software], ya que permiten almacenar, organizar, consultar y administrar grandes volúmenes de información de manera eficiente. Su implementación facilita la gestión estructurada de los datos en diferentes contextos organizacionales, empresariales y tecnológicos, contribuyendo a la automatización de procesos y a la toma de decisiones basada en información confiable.
    .row.justify-content-center.align-items-center
      .col-lg-11        
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='AvatarTop')
          .tarjeta.bgf5.p-4
            p.mb-0 En la actualidad, las bases de datos evolucionan constantemente para responder a las necesidades de procesamiento, almacenamiento y análisis de información generadas por aplicaciones #[i web], sistemas empresariales, dispositivos móviles, servicios en la nube y entornos distribuidos. Por esta razón, existen diferentes modelos y tecnologías orientadas a administrar datos estructurados, semiestructurados y desestructurados, adaptándose a diversos requerimientos de escalabilidad, disponibilidad y rendimiento.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Conceptos básicos y características de las bases de datos
    p Una base de datos es un conjunto organizado de datos relacionados entre sí, almacenados de forma estructurada para facilitar su acceso, administración, actualización y consulta. Su principal propósito consiste en gestionar información de manera eficiente, segura y confiable, permitiendo que diferentes usuarios y aplicaciones interactúen con los datos de forma controlada.
    figure
      img(src='@/assets/curso/temas/tema1/img3.png' alt='AvatarTop')
    .p-4.bgf1.mb-4
      p.mb-0 Las bases de datos son utilizadas en múltiples contextos, como sistemas empresariales, plataformas educativas, aplicaciones móviles, redes sociales, sistemas bancarios, servicios de salud y comercio electrónico. Gracias a su capacidad de organización y procesamiento, permiten almacenar grandes cantidades de información y recuperar los datos de manera rápida y precisa.
    p Para comprender el funcionamiento de una base de datos, es necesario reconocer algunos conceptos fundamentales:
    .row.justify-content-center.BG04.px-3.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img5.svg", alt="alt").img100.m-auto
            h5.text-center #[b Dato]
            p.text-center.mb-0 Representación básica de información, como números, textos, fechas o imágenes.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img6.svg", alt="alt").img100.m-auto
            h5.text-center #[b Información]
            p.text-center.mb-0 Conjunto de datos procesados y organizados que adquieren significado.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img7.svg", alt="alt").img100.m-auto
            h5.text-center #[b Tabla]
            p.text-center.mb-0 Estructura compuesta por filas y columnas utilizada para almacenar datos relacionados.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img8.svg", alt="alt").img100.m-auto
            h5.text-center #[b Registro]
            p.text-center.mb-0 Fila de una tabla que contiene la información completa de un elemento específico.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img9.svg", alt="alt").img100.m-auto
            h5.text-center #[b Campo]
            p.text-center.mb-0 Columna de una tabla que almacena un tipo particular de dato.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100.m-auto
            h5.text-center #[b Entidad]
            p.text-center.mb-0 Objeto o elemento del mundo real sobre el cual se almacena información.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100.m-auto
            h5.text-center #[b Relación]
            p.text-center.mb-0 Asociación existente entre dos o más entidades dentro de una base de datos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100.m-auto
            h5.text-center #[b Clave primaria]
            p.text-center.mb-0 Atributo que identifica de manera única cada registro de una tabla.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
            h5.text-center #[b Clave foránea]
            p.text-center.mb-0 Atributo que establece relaciones entre tablas mediante referencias a claves primarias.
    p.mb-4 Las bases de datos poseen características que garantizan la organización y el manejo eficiente de la información:  
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img14.png' alt='AvatarTop')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Estructuración de datos")
            p Organizan la información de manera lógica y ordenada.
          .row(numero="2" titulo="Persistencia")
            p Los datos permanecen almacenados incluso después de finalizar los procesos o apagar los sistemas
          .row(numero="3" titulo="Integridad")
            p Aseguran que la información sea válida, coherente y consistente.
          .row(numero="4" titulo="Seguridad")
            p Permiten controlar el acceso a los datos mediante usuarios y permisos.
          .row(numero="5" titulo="Disponibilidad")
            p Facilitan el acceso oportuno a la información cuando es requerida.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-2.order-lg-1
        LineaTiempoD.color-primario
          .row(numero="6" titulo="Escalabilidad")
            p Soportan el crecimiento de datos y usuarios sin afectar significativamente el rendimiento.
          .row(numero="7" titulo="Redundancia controlada")
            p Minimizan la duplicidad innecesaria de información.
          .row(numero="8" titulo="Acceso concurrente")
            p Permiten que varios usuarios interactúen simultáneamente con los datos.
          .row(numero="9" titulo="Recuperación y respaldo")
            p Ofrecen mecanismos para restaurar información ante fallos o pérdidas de datos.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img15.png' alt='AvatarTop')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bgf5
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', style="width: 120px;margin-left:-12%", alt='AvatarTop')
            .col-lg-10
              p.mb-0 Estas características convierten a las bases de datos en herramientas fundamentales para el almacenamiento y procesamiento de información en los sistemas de #[i software] actuales.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Evolución y tendencias de las bases de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img17.png' alt='AvatarTop')
      .col-lg-8
        p La evolución de las bases de datos responde a la necesidad de almacenar, administrar y procesar volúmenes crecientes de información en diferentes contextos tecnológicos. A medida que las organizaciones incrementan el uso de sistemas digitales, las bases de datos evolucionan para ofrecer mayor capacidad de almacenamiento, velocidad de procesamiento, disponibilidad y escalabilidad.
        .p-4.bgf1.mb-2
          p.mb-0 Los primeros sistemas de almacenamiento de información se basan en archivos planos, donde los datos se guardan de manera independiente y con escasa relación entre sí. Este modelo presenta limitaciones relacionadas con la redundancia, la inconsistencia de la información y la dificultad para compartir datos entre aplicaciones.
        p.mb-0 Posteriormente surgen las bases de datos jerárquicas y de red, diseñadas para organizar la información mediante estructuras de relaciones predefinidas. Aunque mejoran la organización de los datos, presentan dificultades de flexibilidad y mantenimiento.
    .BGDEGRA4.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.order-2.order-lg-1
          .p-4.bgf2.mb-3
            p.mb-0 En la década de 1970, Edgar F. Codd propone el modelo relacional, el cual transforma la administración de datos mediante el uso de tablas relacionadas y el lenguaje SQL. Este enfoque facilita la consulta, manipulación y mantenimiento de la información, convirtiéndose en uno de los modelos más utilizados en sistemas empresariales y aplicaciones de #[i software].
          p Con el crecimiento de Internet, las aplicaciones #[i web] y el manejo masivo de datos, aparecen nuevos modelos de almacenamiento como las bases de datos NoSQL, orientadas al procesamiento de datos semiestructurados y desestructurados. Estas tecnologías priorizan la escalabilidad, el rendimiento y la distribución de datos en múltiples servidores.
          p.mb-0 Más recientemente surgen las bases de datos NewSQL, que combinan características de escalabilidad propias de NoSQL con las propiedades transaccionales y de consistencia de las bases de datos relacionales tradicionales.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img18.png' alt='AvatarTop')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Tendencias actuales en bases de datos
    p Las tendencias modernas en bases de datos están orientadas a responder a las necesidades de procesamiento de grandes volúmenes de información y al funcionamiento de aplicaciones distribuidas y en tiempo real. Entre las principales tendencias se encuentran:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
        h5.text-center Bases de datos en la nube
        p.text-center Permiten almacenar y administrar información mediante servicios remotos accesibles desde Internet.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
        h5.text-center Procesamiento de Big Data
        p.text-center Facilita el análisis de grandes cantidades de datos generados por múltiples fuentes.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
        h5.text-center Bases de datos distribuidas
        p.text-center Almacenan información en diferentes servidores para mejorar la disponibilidad y tolerancia a fallos.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
        h5.text-center Bases de datos NoSQL
        p.text-center Optimizan el manejo de datos semiestructurados y desestructurados.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
        h5.text-center Automatización y administración inteligente
        p.text-center Incorporan herramientas de inteligencia artificial para optimizar tareas de mantenimiento y rendimiento.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
        h5.text-center Procesamiento en tiempo real
        p.text-center Permite analizar y consultar información de manera inmediata.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
        h5.text-center Seguridad y protección de datos
        p.text-center Fortalecen mecanismos de autenticación, cifrado y control de acceso.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
        h5.text-center Integración con analítica y ciencia de datos
        p.text-center Favorecen el procesamiento de información para la toma de decisiones.
    p La evolución de las bases de datos demuestra cómo las tecnologías de almacenamiento se adaptan continuamente a las necesidades de las organizaciones y de los entornos digitales modernos, permitiendo gestionar información de manera más eficiente, flexible y segura.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .bgf2-6.text-center.p-3
          p.mb-0 Referentes teóricos:
    .tarjeta--container.row
      .col-md.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='Texto que describa la imagen')
          
        h5.text-center Codd (1970)
        p Establece las bases del modelo relacional mediante la organización de los datos en tablas relacionadas, propuesta que transforma el desarrollo de los sistemas gestores de bases de datos modernos.
      .col-md.tarjeta.bgf6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen')
          
        h5.text-center Date (2004)
        p Señala que las bases de datos constituyen sistemas diseñados para almacenar información de forma estructurada, garantizando consistencia, integridad y facilidad de acceso.
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img28.svg', alt='Texto que describa la imagen')
          
        h5.text-center Silberschatz, Korth y Sudarshan (2020)
        p Destacan que las tendencias actuales en bases de datos están orientadas hacia la escalabilidad, el procesamiento distribuido y la administración eficiente de grandes volúmenes de información.   
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Modelos de datos estructurados, semiestructurados y desestructurados
    p Los modelos de datos representan la forma en que la información se organiza, almacena y procesa dentro de un sistema. Dependiendo de la estructura y el nivel de organización de los datos, estos pueden clasificarse en estructurados, semiestructurados y desestructurados. Cada modelo responde a diferentes necesidades de almacenamiento y procesamiento en entornos tecnológicos modernos.
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Datos estructurados")
        .col-lg
          p Son aquellos que se organizan siguiendo una estructura definida y uniforme, generalmente mediante tablas compuestas por filas y columnas. Este tipo de información utiliza esquemas previamente establecidos que facilitan su almacenamiento, consulta y manipulación.
          p Los datos estructurados son ampliamente utilizados en bases de datos relacionales, ya que permiten realizar búsquedas rápidas y garantizar la integridad de la información.
          .row.justify-content-center.align-items-center
            .col-lg-5
              .bgf3.p-4
                p.text-white Características de los datos estructurados:
                ul.lista-ul
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Poseen una organización fija y definida.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Utilizan tablas, registros y campos.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Mantienen relaciones entre datos.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Facilitan consultas mediante lenguaje SQL.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Garantizan consistencia e integridad de la información.
            .col-lg-7
              .row.justify-content-center.align-items-center
                .col-lg-12
                  .titulo-sexto.color-acento-contenido
                    h5 Tabla 1.
                    span Ejemplo de datos estructurados
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-12
                  .tabla-a.color-acento-contenido
                    .tabla-a   
                      table
                        thead
                          tr
                            th Id_cliente
                            th Nombre
                            th Ciudad
                            th Edad
                        tbody
                          tr
                            td 101
                            td Laura Gómez
                            td Bogotá
                            td 28
                          tr(style="background-color: #F3F9FF;")
                            td 102
                            td Andrés Ruiz
                            td Medellín
                            td 35
              p.mb-0 En este ejemplo, la información se encuentra organizada en columnas específicas y cada registro mantiene la misma estructura.
      .row(titulo="Datos semiestructurados")
        .col-lg    
          p Presentan una organización parcial, es decir, no siguen un esquema rígido como las bases de datos relacionales, pero incorporan etiquetas o marcas que permiten identificar y organizar la información.
          p Este tipo de datos es común en aplicaciones #[i web], servicios en la nube e intercambio de información entre sistemas.
          .row.mb-4
            .col-lg-6
              .tarjeta.bgf3.p-4
                p.text-white.mb-4 Características de los datos semiestructurados:
                ul.lista-ul.mb-5
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Poseen estructura flexible.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Utilizan etiquetas o atributos descriptivos.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Permiten diferentes tipos de datos en un mismo documento.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Facilitan el intercambio de información entre aplicaciones.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Son utilizados frecuentemente en bases de datos NoSQL.
            .col-lg-6
              .titulo2.p-1.mb-3
                p.mb-0 Ejemplo en formato JSON:
              .tarjeta.color-primario.p-0.overflow-hidden
                .px-3.py-2(style="background-color: #3A1D71; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .bgf9.px-4.p-2
                  .row.align-items-center
                    .col-lg-12.mb-3.mb-md-0
                      p.text-white.mb-0 {
                      p.text-white.ms-3.mb-0 "cliente": <span style='color:#68EAE0 !important'>"Laura Gómez"</span>,
                      p.text-white.ms-3.mb-0 "ciudad": <span style='color:#68EAE0 !important'>"Bogotá"</span>,
                      p.text-white.ms-3.mb-0 "compras": [
                      p.text-white.ms-5.mb-0 <span style='color:#68EAE0 !important'>"Portátil"</span>,
                      p.text-white.ms-5.mb-0 <span style='color:#68EAE0 !important'>"Mouse"</span>,
                      p.text-white.ms-5.mb-0 <span style='color:#68EAE0 !important'>"Teclado"</span>
                      p.text-white.ms-3.mb-0 ]
                      p.text-white.mb-0 }
          p.mb-0 En este caso, la información posee organización mediante etiquetas, pero no requiere una estructura fija en todos los registros.              
      .row(titulo="Datos desestructurados")
        .col-lg    
          p Corresponden a información que no posee un formato definido ni una organización uniforme. Este tipo de datos representa gran parte de la información generada actualmente en Internet y en plataformas digitales.
          p Los sistemas modernos utilizan tecnologías especializadas para almacenar y procesar este tipo de información debido a su complejidad y volumen.
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-6
              .tarjeta.bgf3.p-4
                p.text-white Ejemplos de datos desestructurados:
                ul.lista-ul
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white No siguen esquemas definidos.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Presentan formatos variados.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Requieren herramientas especializadas para su análisis.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Generan grandes volúmenes de información.
                  li
                    i.fas.fa-computer(style="color: #FFB758;")
                    p.mb-0.text-white Son frecuentes en entornos de Big Data y analítica de datos.
            .col-lg-6
              .titulo2.p-1.mb-3
                p.mb-0 Ejemplos de datos desestructurados:
              .tarjeta.bgf10.p-4.mb-2
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Imágenes.
                  li.mb-0
                    i.lista-ul__vineta
                    | Videos.
                  li.mb-0
                    i.lista-ul__vineta
                    | Audios.
                  li.mb-0
                    i.lista-ul__vineta
                    | Publicaciones en redes sociales.
                  li.mb-0
                    i.lista-ul__vineta
                    | Correos electrónicos.
                  li.mb-0
                    i.lista-ul__vineta
                    | Documentos multimedia.
                  li.mb-0
                    i.lista-ul__vineta
                    | Archivos PDF o Word sin estructura uniforme.
          p.mb-0 Por ejemplo, un video publicado en una plataforma digital contiene información visual, auditiva y textual que no puede organizarse fácilmente en tablas tradicionales.
    p.mb-4 Con el fin de identificar las principales diferencias entre los modelos de datos estructurados, semiestructurados y desestructurados, a continuación, se presenta una comparación relacionada con su organización, ejemplos y tecnologías utilizadas para su almacenamiento y procesamiento.                    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Comparación de los modelos de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de dato
                  th Estructura
                  th Ejemplo
                  th Tecnología frecuente
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Estructurado.
                  td Fija y organizada.
                  td Tablas de clientes.
                  td Bases de datos relacionales.
                tr
                  td Semiestructurado.
                  td Flexible con etiquetas.
                  td JSON y XML.
                  td Bases de datos NoSQL.
                tr(style="background-color: #F3F9FF;")
                  td Desestructurado.
                  td Sin estructura definida.
                  td Videos e imágenes.
                  td Big Data y almacenamiento distribuido.
    p.mb-0 La identificación de estos modelos de datos permite seleccionar las tecnologías y herramientas más adecuadas para almacenar, administrar y procesar información según las necesidades de cada sistema de #[i software].
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Bases de datos relacionales, NoSQL y NewSQL
    p Las bases de datos evolucionan constantemente para responder a las necesidades de almacenamiento, procesamiento y administración de información en diferentes entornos tecnológicos. Dependiendo de la estructura de los datos, el volumen de información y los requerimientos de escalabilidad y rendimiento, existen distintos modelos de bases de datos, entre los que se destacan las relacionales, NoSQL y NewSQL.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Cada uno de estos enfoques presenta características particulares que permiten su implementación en aplicaciones empresariales, sistemas distribuidos, plataformas #[i web] y soluciones orientadas al análisis de grandes volúmenes de datos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 a) Bases de datos relacionales
    p Organizan la información mediante tablas compuestas por filas y columnas, estableciendo relaciones entre los datos a través de claves primarias y claves foráneas. Este modelo se fundamenta en la teoría relacional propuesta por Edgar F. Codd y utiliza el lenguaje SQL para la consulta y manipulación de la información.
    p Estas bases de datos son ampliamente utilizadas en sistemas empresariales y aplicaciones que requieren consistencia, integridad y control de transacciones.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-gg.bloque-texto-gg--inverso.bgf5.mb-4
          .bloque-texto-gg__img1(:style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img31.png')})`}")
          .bloque-texto-ggg__texto.p-4
            p Características de las bases de datos relacionales:
            ol.lista-ol--cuadro
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Utilizan tablas estructuradas.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Implementan relaciones entre entidades.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Emplean lenguaje SQL.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Garantizan integridad y consistencia de los datos.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Aplican principios ACID para la gestión de transacciones.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Facilitan consultas complejas y estructuradas.
        
        .p-4.bgf3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-8.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img32.png', alt='Texto que describa la imagen')
            .col-lg-6
              p.text-white Ejemplos de bases de datos relacionales:
              .tarjeta
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white MySQL.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white PostgreSQL.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white Oracle Database.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white Microsoft SQL Server.
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ejemplo de estructura relacional
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a 
            table
              thead
                tr
                  th Id_cliente
                  th Nombre
                  th Ciudad
              tbody
                tr(style="background-color: #F3F9FF;")
                  td 101
                  td Laura Gómez
                  td Bogotá
                tr  
                  td 102
                  td Andrés Ruiz
                  td Medellín
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        p En este ejemplo, los datos se organizan de manera estructurada en tablas con atributos definidos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 b) Bases de datos NoSQL
    p Surgen como alternativa a los sistemas relacionales tradicionales, especialmente para manejar grandes volúmenes de datos distribuidos, semiestructurados y desestructurados. Estas bases de datos priorizan la escalabilidad, disponibilidad y flexibilidad en el almacenamiento de información.
    p El término NoSQL significa “Not Only SQL”, indicando que estos sistemas pueden utilizar diferentes modelos de almacenamiento distintos al modelo tabular tradicional.
    p Características de las bases de datos NoSQL:
    .row.justify-content-center.BG04.px-3.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img33.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img34.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Manejan datos estructurados, semiestructurados y desestructurados.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img35.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Permiten escalabilidad horizontal.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img36.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Ofrecen alta disponibilidad y rendimiento.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img37.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Utilizan esquemas flexibles.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img38.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Son utilizadas en aplicaciones #[i web], redes sociales y Big Data.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img39.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Tipos de bases de datos NoSQL.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img40.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Bases de datos orientadas a documentos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img41.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Bases de datos clave-valor.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img42.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Bases de datos orientadas a columnas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img42_.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Bases de datos orientadas a grafos.
    p Ejemplos de bases de datos NoSQL:
    .tarjeta--container.row.mb-4
      .col.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img43.svg', alt='Texto que describa la imagen')
          
        h5.text-center MongoDB.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img44.svg', alt='Texto que describa la imagen')
          
        h5.text-center Cassandra.
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img45.svg', alt='Texto que describa la imagen')
          
        h5.text-center Redis.
      .col.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img46.svg', alt='Texto que describa la imagen')
          
        h5.text-center Neo4j.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6
        .titulo2.p-1
          p.text-center.mb-0 Ejemplo de documento NoSQL en formato JSON:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #3A1D71; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white {
                        p.text-white.ms-3.mb-1
                          | "cliente": <span style='color:#68EAE0 !important'>"Laura Gómez"</span>,
                        p.text-white.ms-3.mb-1
                          | "ciudad": <span style='color:#68EAE0 !important'>"Bogotá"</span>,
                        p.text-white.ms-3.mb-1
                          | "productos": [
                        p.text-white.ms-5.mb-1
                          | <span style='color:#68EAE0 !important'>"Portátil"</span>,
                        p.text-white.ms-5.mb-1
                          | <span style='color:#68EAE0 !important'>"Teclado"</span>
                        p.text-white.ms-3.mb-1
                          | ]
                        p.text-white.ms-3.mb-1
                      h4.text-white }
    
    p.mb-4 En este modelo, la información se almacena de forma flexible sin requerir una estructura fija para todos los registros.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.bgf8.p-3(data-aos="zoom-in")
          .row.justify-content-between.align-items-center
            .col-sm-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img47.svg', width='180', alt='Texto que describa la imagen')
            .col.mb-3.mb-sm-0
              p.mb-0 Para complementar la importancia de NoSQL, se recomienda acceder al siguiente video: 
              p.text-bold Bases de datos NoSQL
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=M-Iw1awJ1NU')" target="_blank")
                span Abrir video
                i.fas.fa-file-video
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 c) Bases de datos NewSQL
    p Aparecen como una solución que combina características de las bases de datos relacionales tradicionales con capacidades de escalabilidad propias de los sistemas NoSQL. Su objetivo consiste en mantener las propiedades ACID y el uso de SQL, mientras soportan grandes volúmenes de datos y arquitecturas distribuidas.
    p Estas tecnologías son utilizadas en aplicaciones modernas que requieren alto rendimiento transaccional y procesamiento distribuido.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-gg.bloque-texto-gg--inverso.bgf5.mb-4
          .bloque-texto-gg__img1(:style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img48.png')})`}")
          .bloque-texto-ggg__texto.p-4
            p Características de las bases de datos NewSQL:
            ol.lista-ol--cuadro
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Utilizan lenguaje SQL.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Mantienen propiedades ACID.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Permiten escalabilidad horizontal.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Soportan arquitecturas distribuidas.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Optimizan el procesamiento de transacciones en tiempo real.
              
        .p-4.bgf3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-8.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img49.png', alt='Texto que describa la imagen')
            .col-lg-5
              p.text-white Ejemplos de bases de datos NewSQL:
              .tarjeta
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white Google Spanner.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white CockroachDB.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white VoltDB.
                  li
                    i.lista-ul__vineta(style="color: #FFF;")
                    p.mb-0.text-white NuoDB.
    p Con el propósito de identificar las principales diferencias entre las bases de datos relacionales, NoSQL y NewSQL, a continuación, se presenta una comparación relacionada con su estructura, escalabilidad, manejo de datos y aplicaciones más frecuentes.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Comparación entre bases de datos relacionales, NoSQL y NewSQL
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Característica
                  th Relacionales
                  th NoSQL
                  th NewSQL
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Estructura de datos.
                  td Tablas.
                  td Flexible.
                  td Tablas.
                tr   
                  td Lenguaje principal.                        
                  td SQL.
                  td Variable.
                  td SQL.
                tr(style="background-color: #F3F9FF;")
                  td Escalabilidad.
                  td Vertical.
                  td Horizontal.
                  td Horizontal.
                tr
                  td Integridad ACID.
                  td Sí.
                  td Parcial o limitada.
                  td Sí.
                tr(style="background-color: #F3F9FF;")
                  td Tipo de datos.
                  td Estructurados.
                  td Semi y desestructurados.
                  td Estructurados.
                tr
                  td Uso frecuente.
                  td Sistemas empresariales.
                  td Big Data y aplicaciones #[i web].
                  td Sistemas distribuidos modernos.
    p.mb-0 La selección de un modelo de base de datos depende de las necesidades del sistema, el tipo de información administrada y los requerimientos de disponibilidad, escalabilidad y rendimiento de las aplicaciones de #[i software].
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
