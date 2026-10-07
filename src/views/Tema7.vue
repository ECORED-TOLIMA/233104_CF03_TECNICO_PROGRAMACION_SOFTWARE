<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Bases de datos NoSQL y sistemas distribuidos
    figure
      img(src='@/assets/curso/temas/tema7/img1.png' alt='AvatarTop')
    .p-4.bgf1.mb-4
      p.mb-0 Las bases de datos NoSQL surgen como una alternativa a los sistemas relacionales tradicionales para gestionar grandes volúmenes de información, especialmente en entornos donde los datos son variados, crecen rápidamente y requieren alta disponibilidad. A diferencia de las bases de datos relacionales, que utilizan tablas estructuradas y esquemas rígidos, las bases de datos NoSQL permiten almacenar información de forma más flexible, adaptándose a distintos tipos de datos como documentos, grafos, claves-valor o columnas.
    p.mb-4 Este tipo de bases de datos se utiliza ampliamente en aplicaciones web, plataformas de comercio electrónico, redes sociales, sistemas de análisis de datos y servicios en la nube, donde la escalabilidad y el rendimiento son factores fundamentales. Además, muchas de estas tecnologías están diseñadas para funcionar en arquitecturas distribuidas, lo que significa que los datos pueden almacenarse y procesarse en múltiples servidores de forma simultánea.
    .row.justify-content-center.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema7/img2.svg' alt='AvatarTop')
      .col-lg-9
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este contexto, los sistemas distribuidos permiten mejorar la disponibilidad del servicio, aumentar la capacidad de procesamiento y garantizar que la información continúe accesible incluso ante fallos en alguno de los nodos del sistema. Para lograrlo, se emplean mecanismos de replicación, particionamiento de datos y balanceo de carga.
        p.mb-0 La comprensión de las bases de datos NoSQL y de los principios de los sistemas distribuidos resulta fundamental en el desarrollo de aplicaciones modernas, ya que permiten gestionar grandes cantidades de información de manera eficiente, flexible y escalable en entornos tecnológicos cada vez más complejos.
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Concepto y tipos de bases de datos NoSQL
    p Las bases de datos NoSQL corresponden a un conjunto de sistemas de gestión de datos diseñados para almacenar y procesar grandes volúmenes de información de manera flexible y escalable. A diferencia de las bases de datos relacionales, estas no utilizan necesariamente tablas con esquemas rígidos, lo que permite trabajar con datos estructurados, semiestructurados o desestructurados.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El término NoSQL significa “Not Only SQL” (no solo SQL), lo que indica que estos sistemas no buscan reemplazar completamente a las bases de datos relacionales, sino ofrecer alternativas que se adapten mejor a determinados tipos de aplicaciones, especialmente aquellas que requieren alto rendimiento, distribución de datos y capacidad de escalar en múltiples servidores.
    p Las bases de datos NoSQL se clasifican principalmente en los siguientes tipos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema7/img3.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Bases de datos clave-valor")
            p Almacenan la información en pares formados por una clave y un valor asociado. Este modelo es sencillo y permite realizar consultas muy rápidas. Es utilizado en sistemas de caché, sesiones de usuario y aplicaciones que requieren acceso rápido a los datos.
          .row(titulo="Bases de datos orientadas a documentos")
            p Guardan la información en documentos estructurados generalmente en formatos como JSON o BSON. Cada documento puede contener diferentes atributos, lo que brinda mayor flexibilidad para manejar información diversa.
          .row(titulo="Bases de datos orientadas a columnas")
            p Organizan la información por columnas en lugar de filas. Este modelo es eficiente para procesar grandes cantidades de datos y realizar análisis en sistemas que manejan grandes volúmenes de información.
          .row(titulo="Bases de datos orientadas a grafos")
            p Están diseñadas para representar relaciones complejas entre los datos mediante nodos y conexiones. Son utilizadas en redes sociales, sistemas de recomendación y análisis de relaciones entre entidades.
    p.mb-0 La elección del tipo de base de datos NoSQL depende de las necesidades del sistema, del tipo de información que se desea almacenar y de los requisitos de rendimiento y escalabilidad de la aplicación.    
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Operaciones y manipulación de datos en bases de datos NoSQL
    p Las bases de datos NoSQL permiten realizar diversas operaciones para gestionar la información almacenada dentro del sistema. Estas operaciones permiten crear, consultar, modificar y eliminar datos, de forma similar a lo que ocurre en las bases de datos relacionales, aunque con estructuras y comandos adaptados a cada tipo de base de datos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En los sistemas NoSQL, la manipulación de datos se realiza generalmente mediante consultas específicas del gestor de base de datos o a través de interfaces de programación que permiten interactuar con la información almacenada. Estas operaciones son fundamentales para garantizar que los datos puedan ser utilizados, actualizados y gestionados de manera eficiente dentro de las aplicaciones.
    p.mb-4 Las principales operaciones de manipulación de datos en bases de datos NoSQL incluyen las siguientes:
    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img5.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Inserción de datos
            p.mb-0 Permite agregar nuevos registros o documentos dentro de la base de datos. Dependiendo del tipo de base de datos, la información puede almacenarse como documentos, pares clave-valor o nodos en un grafo.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img6.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Consulta de datos
            p.mb-0 Permite recuperar información almacenada en la base de datos mediante diferentes criterios de búsqueda. Las consultas pueden realizarse por identificadores, atributos específicos o condiciones definidas por el usuario.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img7.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Actualización de datos
            p.mb-0 Permite modificar la información existente dentro de los registros o documentos almacenados en la base de datos, manteniendo la integridad y consistencia de los datos.
      
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img8.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Eliminación de datos
            p.mb-0 Permite borrar registros, documentos o elementos que ya no son necesarios dentro del sistema.
    p.mb-0 Estas operaciones constituyen la base para la manipulación de datos en sistemas NoSQL y permiten que las aplicaciones puedan gestionar grandes volúmenes de información de manera flexible y eficiente.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.3 Consultas, filtrado y agregación de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bloque-texto-gg.bgf5
          .bloque-texto-gg__texto.p-4
            p En las bases de datos NoSQL, las consultas permiten recuperar información almacenada en colecciones, documentos o registros según diferentes criterios. A diferencia de las bases de datos relacionales, donde las consultas se realizan principalmente mediante el lenguaje SQL, en los sistemas NoSQL las consultas se ejecutan utilizando estructuras propias de cada gestor de base de datos.
            p.mb-0 Las consultas permiten seleccionar información específica dentro de la base de datos, facilitando el acceso a los datos que cumplen determinadas condiciones. Para lograrlo, se utilizan diferentes mecanismos como el filtrado y la agregación de datos.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/img9.svg')})`}"
          )
    p.mb-4 Entre las operaciones más utilizadas se encuentran las siguientes:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Consultas de datos")
        .col-lg    
          p.mb-4 Permiten recuperar documentos o registros almacenados dentro de una colección. Por ejemplo, en una base de datos que almacena información de estudiantes, se puede consultar toda la colección de estudiantes para visualizar los registros existentes. Por ejemplo:
          
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white db.estudiantes.find()
         
      .row(titulo="Filtrado de información")
        .col-lg    
          p.mb-4 Permite seleccionar únicamente los registros que cumplen ciertas condiciones dentro de la consulta. Esto facilita encontrar datos específicos dentro de grandes volúmenes de información. Por ejemplo:
          
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white db.estudiantes.find({edad: 20})
          p.mb-0 Esta consulta devuelve los estudiantes cuya edad es igual a 20.
      .row(titulo="Agregación de datos")
        .col-lg    
          p.mb-4 Permite realizar operaciones de cálculo o agrupación sobre un conjunto de datos, como contar registros, calcular promedios o agrupar información según determinados atributos. Por ejemplo:
          
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white db.estudiantes.aggregate([
                      p.text-white.ms-3.mb-1 { $group: { _id: "$programa", total: { $sum: 1 } } }
                      h4.text-white ])
          p.mb-0 Este ejemplo permite contar cuántos estudiantes existen en cada programa académico.
    p.mb-0 En conjunto, estas operaciones permiten consultar, organizar y analizar grandes volúmenes de información dentro de las bases de datos NoSQL, facilitando su uso en aplicaciones modernas que requieren alta escalabilidad y flexibilidad en el manejo de datos. 
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.4 Teorema CAP y sistemas distribuidos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En los sistemas de bases de datos distribuidos, la información se almacena y procesa en varios servidores o nodos que trabajan de manera conjunta. Este tipo de arquitectura permite manejar grandes volúmenes de datos y garantizar una mayor disponibilidad del sistema. Sin embargo, también implica enfrentar desafíos relacionados con la consistencia y la disponibilidad de la información.
    p En este contexto surge el #[b Teorema CAP], un principio que explica las limitaciones que existen en los sistemas distribuidos. Este teorema establece que un sistema distribuido no puede garantizar simultáneamente tres propiedades fundamentales cuando ocurre una partición de red.
    p.mb-4 Estas propiedades son las siguientes:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img11.png", alt="alt")
          .crd_hover_txt--body.crd_hover_txt--body1
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Consistencia (#[i Consistency])
            p.mb-0 Todos los nodos del sistema muestran la misma información al mismo tiempo. Cuando se realiza una actualización de datos, cualquier usuario que consulte el sistema obtiene el mismo resultado.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img12.png", alt="alt")
          .crd_hover_txt--body.crd_hover_txt--body1
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Disponibilidad (#[i Availability])
            p.mb-0 El sistema responde a las solicitudes de los usuarios incluso si algunos nodos presentan fallas. Esto significa que el servicio permanece accesible.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img13.png", alt="alt")
          .crd_hover_txt--body.crd_hover_txt--body1
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Tolerancia a particiones (#[i Partition Tolerance])
            p.mb-0 El sistema continúa funcionando incluso cuando ocurre una falla de comunicación entre algunos nodos de la red.
    p El Teorema CAP indica que, en presencia de una partición de red, un sistema solo puede garantizar dos de estas tres propiedades al mismo tiempo. Por esta razón, los diseñadores de sistemas deben priorizar cuáles características son más importantes según las necesidades de la aplicación.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Por ejemplo, algunos sistemas priorizan la consistencia y la tolerancia a particiones (CP), mientras que otros priorizan la disponibilidad y la tolerancia a particiones (AP). Esta decisión depende del tipo de aplicación y del comportamiento esperado del sistema.
    p Comprender el Teorema CAP permite analizar cómo funcionan los sistemas distribuidos y cómo las bases de datos modernas equilibran la consistencia, la disponibilidad y la tolerancia a fallos para garantizar el funcionamiento adecuado de las aplicaciones.
    p En la práctica, el Teorema CAP se utiliza como una guía para decidir qué propiedades deben priorizarse en un sistema distribuido. El proceso de análisis generalmente sigue estas etapas:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema7/img14.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificar el tipo de aplicación")
            p Se analiza si el sistema requiere mayor consistencia de los datos o mayor disponibilidad del servicio.
          .row(titulo="Evaluar los posibles fallos de red")
            p En los sistemas distribuidos es común que existan interrupciones en la comunicación entre nodos, por lo que la tolerancia a particiones suele ser una propiedad necesaria.
          .row(titulo="Definir las prioridades del sistema")
            p Dependiendo del tipo de aplicación, se priorizan dos de las tres propiedades del teorema CAP. Entre ella se encuentran:
            p ° Consistencia y tolerancia a particiones (CP).
            p ° Disponibilidad y tolerancia a particiones (AP).
          .row(titulo="Seleccionar la tecnología adecuada")
            p A partir de estas decisiones se eligen las bases de datos o arquitecturas que mejor se adapten a los requerimientos del sistema.
    p De esta manera, el #[b Teorema CAP] se convierte en una herramienta conceptual para comprender el comportamiento de los sistemas distribuidos y orientar el diseño de infraestructuras de datos modernas.     
</template>

<script>
export default {
  name: 'Tema7',
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
