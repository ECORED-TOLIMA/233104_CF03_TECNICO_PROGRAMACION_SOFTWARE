<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Gestión y administración de bases de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión y administración de bases de datos comprende el conjunto de actividades orientadas a garantizar el correcto funcionamiento, organización y mantenimiento de la información almacenada en un sistema. Estas tareas incluyen la creación de bases de datos, la configuración de los sistemas gestores, la supervisión del rendimiento, la seguridad de la información y el control del acceso a los datos.
    p.mb-4 En los sistemas de información actuales, las bases de datos se gestionan mediante software especializado conocido como #[B Database Management System (DBMS)]. Estos sistemas permiten crear, almacenar, consultar y administrar grandes volúmenes de información de manera organizada y eficiente.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La administración adecuada de una base de datos permite asegurar la integridad, disponibilidad y consistencia de la información. Además, facilita la realización de copias de seguridad, la recuperación de datos ante fallos del sistema y la optimización del rendimiento de las consultas.
    p.mb-0 Dentro de este proceso también se utilizan herramientas de modelado y administración que permiten diseñar la estructura de las bases de datos, visualizar sus relaciones y gestionar su funcionamiento en diferentes entornos tecnológicos.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Sistemas gestores de bases de datos
    p Un Database Management System (DBMS) es un software especializado que permite crear, almacenar, organizar, consultar y administrar la información contenida en una base de datos. Su función principal es facilitar el manejo de grandes volúmenes de datos de forma estructurada, garantizando su integridad, seguridad y disponibilidad.
    p Los sistemas gestores de bases de datos actúan como intermediarios entre los usuarios o aplicaciones y la base de datos, permitiendo realizar diferentes operaciones como la creación de tablas, la inserción de registros, la consulta de información y la actualización o eliminación de datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img2.png' alt='AvatarTop')
      .col-lg-9
        .bgf5.p-4.mb-2
            p Entre las principales funciones de un sistema gestor de bases de datos se encuentran:
            ol.lista-ol--cuadro.mb-2
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Administrar el almacenamiento y organización de los datos.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Permitir el acceso y la manipulación de la información mediante lenguajes de consulta como SQL.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Garantizar la integridad y consistencia de los datos.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Controlar el acceso de los usuarios mediante mecanismos de seguridad.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Facilitar la realización de copias de seguridad y la recuperación de información.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Actualmente existen diferentes tipos de sistemas gestores de bases de datos que se utilizan según las necesidades del sistema de información. Algunos trabajan con #[b modelos relacionales], mientras que otros utilizan #[b modelos NoSQL] orientados a manejar grandes volúmenes de datos o estructuras de información más flexibles.
    p.mb-0 Entre los sistemas gestores de bases de datos más utilizados se encuentran MySQL, Oracle, PostgreSQL, MongoDB, Cassandra y Neo4j, los cuales ofrecen diferentes características y aplicaciones dentro del desarrollo de sistemas de información.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Configuración básica de sistemas gestores de bases de datos
    p La configuración inicial de un sistema gestor de bases de datos consiste en preparar el entorno necesario para crear, administrar y consultar bases de datos. Este proceso generalmente incluye la instalación del software, la creación de usuarios, la configuración de parámetros básicos y la verificación del funcionamiento del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p Dependiendo del tipo de base de datos que se utilice, los procedimientos de configuración pueden variar. Algunos gestores están diseñados para trabajar con bases de datos relacionales, mientras que otros utilizan modelos NoSQL, orientados a manejar grandes volúmenes de datos o estructuras más flexibles.
            p.mb-0 Entre los sistemas gestores de bases de datos más utilizados se encuentran MySQL, Oracle y PostgreSQL para bases de datos relacionales, y MongoDB, Cassandra y Neo4j en el contexto de bases de datos NoSQL.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img3.png')})`}"
          )
    p A continuación, se presenta una comparación general de estos gestores y sus características principales.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Sistemas gestores de bases de datos y sus características generales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Sistema gestor
                  th Tipo de base de datos
                  th Característica principal
              tbody
                tr(style="background-color: #F3F9FF;")
                  td MySQL
                  td Relacional.
                  td Amplio uso en aplicaciones web y facilidad de administración.
                tr
                  td Oracle
                  td Relacional.
                  td Alta capacidad para entornos empresariales y grandes volúmenes de datos.
                tr(style="background-color: #F3F9FF;")
                  td PostgreSQL
                  td Relacional.
                  td Sistema robusto de código abierto con alta compatibilidad con estándares SQL.
                tr
                  td MongoDB
                  td NoSQL (documentos).
                  td Almacena información en documentos tipo JSON.
                tr(style="background-color: #F3F9FF;")
                  td Cassandra
                  td NoSQL (columnas).
                  td Diseñado para manejar grandes volúmenes de datos distribuidos.
                tr
                  td Neo4j
                  td NoSQL (grafos).
                  td Especializado en el manejo de relaciones complejas entre datos.
    p Esta clasificación permite comprender que los sistemas gestores de bases de datos se adaptan a diferentes necesidades tecnológicas, dependiendo del tipo de información que se requiera almacenar y procesar.
    
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Herramientas de modelado de bases de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/img4.png' alt='AvatarTop')
      .col-lg-7
        .bgf1.mb-2.p-4
          p.mb-0 Las herramientas de modelado de bases de datos son aplicaciones que permiten diseñar, visualizar y estructurar bases de datos antes de su implementación en un sistema gestor de bases de datos. Estas herramientas facilitan la creación de diagramas, la definición de entidades, atributos y relaciones, así como la generación automática de scripts que pueden utilizarse para crear la base de datos en diferentes plataformas.
        p.mb-0 El uso de herramientas de modelado permite organizar de manera clara la estructura de la información, identificar posibles errores en el diseño y documentar el funcionamiento del sistema de datos. De esta manera, los desarrolladores y analistas pueden comprender con mayor facilidad cómo se relacionan los diferentes elementos dentro de la base de datos.
    p Entre las funciones más comunes de estas herramientas se encuentran:
    .row.justify-content-center.BG04.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img5.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema5/img6.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Creación de diagramas Entidad–Relación.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema5/img7.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Diseño de modelos relacionales.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema5/img8.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Generación automática de código SQL.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema5/img9.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Documentación del modelo de datos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema5/img10.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Integración con diferentes sistemas gestores de bases de datos.
    p.mb-4 Existen diversas herramientas utilizadas en el diseño de bases de datos, cada una con características y funcionalidades específicas.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 16.
          span Herramientas de modelado de bases de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Herramienta
                  th Característica principal
              tbody
                tr(style="background-color: #F3F9FF;")
                  td Oracle Data Modeler
                  td Permite diseñar modelos conceptuales, lógicos y físicos en entornos basados en Oracle.
                tr
                  td MySQL Workbench
                  td Facilita el modelado visual y la administración de bases de datos MySQL.
                tr(style="background-color: #F3F9FF;")
                  td PowerDesigner
                  td Herramienta empresarial utilizada para modelado avanzado de datos.
                tr
                  td Visual Paradigm
                  td Permite modelar sistemas utilizando diferentes tipos de diagramas, incluido el modelo ER.
                tr(style="background-color: #F3F9FF;")
                  td AWS NoSQL Workbench
                  td Herramienta para diseñar y visualizar bases de datos NoSQL en entornos de AWS.
    p.mb-0 Estas herramientas permiten planificar y estructurar adecuadamente las bases de datos, facilitando su implementación, mantenimiento y evolución dentro de los sistemas de información.
</template>

<script>
export default {
  name: 'Tema5',
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
