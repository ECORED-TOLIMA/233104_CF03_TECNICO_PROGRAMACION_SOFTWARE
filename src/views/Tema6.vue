<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Procesamiento y almacenamiento de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El procesamiento y almacenamiento de datos constituye un aspecto fundamental en el funcionamiento de los sistemas de información, ya que permite gestionar grandes volúmenes de datos de manera organizada, segura y eficiente. En una base de datos, el procesamiento de la información se refiere a las operaciones que se realizan sobre los datos, como consultas, inserciones, actualizaciones y análisis, mientras que el almacenamiento se relaciona con la forma en que los datos se guardan y estructuran dentro del sistema.
    p.mb-4 Los sistemas de bases de datos están diseñados para soportar diferentes tipos de cargas de trabajo, dependiendo del tipo de operaciones que se realizan con la información. Algunas aplicaciones requieren gestionar transacciones en tiempo real, como ocurre en sistemas bancarios o de comercio electrónico, mientras que otras se enfocan en el análisis de grandes volúmenes de datos para la toma de decisiones.
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img2.png' alt='AvatarTop')
      .col-lg-9
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Para garantizar la confiabilidad de la información, las bases de datos implementan mecanismos que aseguran que las transacciones se ejecuten de forma correcta y consistente. Estos mecanismos permiten mantener la integridad de los datos incluso cuando múltiples usuarios acceden al sistema al mismo tiempo o cuando se presentan fallos en el proceso.
        p Además, el almacenamiento de datos puede adoptar diferentes estructuras y tecnologías dependiendo de las necesidades del sistema. Existen modelos diseñados para manejar información estructurada, así como soluciones orientadas al almacenamiento masivo de datos y análisis avanzado.
        p.mb-0 Comprender cómo se procesan y almacenan los datos permite diseñar sistemas de información más eficientes, optimizar el rendimiento de las bases de datos y garantizar la disponibilidad y confiabilidad de la información dentro de las organizaciones.
    
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Cargas de trabajo transaccionales
    p Las cargas de trabajo transaccionales corresponden a las operaciones que se realizan de manera continua sobre una base de datos para registrar, consultar o modificar información en tiempo real. Este tipo de procesamiento se caracteriza por manejar un gran número de transacciones pequeñas que deben ejecutarse de forma rápida, precisa y segura.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En los sistemas transaccionales, cada operación representa una transacción que modifica o consulta datos dentro de la base de datos. Estas transacciones suelen involucrar acciones como insertar nuevos registros, actualizar información existente o consultar datos específicos. Debido a que muchas aplicaciones requieren acceso simultáneo por parte de múltiples usuarios, el sistema gestor de bases de datos debe garantizar que cada transacción se ejecute correctamente sin afectar la consistencia de la información.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bgf5
          .bloque-texto-gg__texto.p-4
            p Las cargas de trabajo transaccionales son comunes en sistemas operativos de uso diario dentro de las organizaciones. Algunos ejemplos incluyen sistemas bancarios, plataformas de comercio electrónico, sistemas de matrícula académica y aplicaciones de gestión empresarial, donde cada operación realizada por los usuarios debe registrarse inmediatamente en la base de datos.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img4.svg')})`}"
          )
    p.mb-0 Este tipo de procesamiento se asocia generalmente con sistemas conocidos como #[b OLTP (Online Transaction Processing)], los cuales están diseñados para gestionar grandes volúmenes de transacciones simultáneas manteniendo la integridad y disponibilidad de los datos. Estas características permiten que las bases de datos soporten operaciones críticas que requieren rapidez, confiabilidad y control en el manejo de la información.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Cargas de trabajo analíticas
    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img5.png' alt='AvatarTop')
      .col-lg-8
        p Las cargas de trabajo analíticas se refieren al procesamiento y análisis de grandes volúmenes de datos con el propósito de obtener información útil para la toma de decisiones. A diferencia de las cargas transaccionales, que se centran en registrar y gestionar operaciones en tiempo real, las cargas analíticas se orientan al estudio, exploración e interpretación de datos históricos o acumulados.
        .tarjeta.bgf1.p-4.mb-4
          p.mb-0 Este tipo de cargas permite identificar patrones, tendencias y relaciones entre los datos, lo cual resulta fundamental para procesos de análisis empresarial, generación de reportes, inteligencia de negocios y apoyo a la planificación estratégica. Las consultas analíticas suelen ser más complejas, ya que implican la agregación, filtrado y comparación de grandes conjuntos de información.
        p.mb-0 Las cargas de trabajo analíticas se utilizan comúnmente en sistemas como almacenes de datos (#[i data warehouse]) y plataformas de análisis que facilitan la elaboración de informes, cuadros de mando y visualizaciones que ayudan a comprender el comportamiento de los datos en diferentes contextos organizacionales. De esta manera, contribuyen a transformar los datos en conocimiento útil para mejorar procesos y apoyar la toma de decisiones informadas.
    
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Principios ACID y gestión de transacciones
    p Los principios ACID constituyen un conjunto de propiedades que garantizan la fiabilidad y consistencia de las transacciones en los sistemas de bases de datos. Una transacción corresponde a una secuencia de operaciones que se ejecutan como una única unidad de trabajo, asegurando que los datos se mantengan correctos incluso ante fallos del sistema, errores o interrupciones.
    p El término ACID proviene de cuatro propiedades fundamentales que permiten mantener la integridad de la información durante la ejecución de las transacciones:
    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img6.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Atomicidad
            p.mb-0 Garantiza que todas las operaciones de una transacción se ejecuten completamente o, en caso de presentarse un error, ninguna se aplique. Esto evita que la base de datos quede en un estado intermedio o inconsistente.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img7.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Consistencia
            p.mb-0 Asegura que la base de datos pase de un estado válido a otro, respetando las reglas, restricciones y relaciones definidas en el sistema.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img8.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Aislamiento
            p.mb-0 Permite que varias transacciones se ejecuten simultáneamente sin interferir entre sí, evitando que los resultados parciales de una transacción afecten a otra.
      
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img9.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Durabilidad
            p.mb-0 Establece que, una vez confirmada una transacción, los cambios realizados se almacenan de manera permanente, incluso si ocurre una falla en el sistema.
    p.mb-0 La gestión de transacciones es el mecanismo mediante el cual el sistema gestor de bases de datos controla la ejecución de estas operaciones, incluyendo procesos como el inicio, la confirmación o la cancelación de una transacción. De esta forma, se garantiza la integridad de los datos y el funcionamiento confiable de las aplicaciones que dependen del manejo de la información.
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Tipos de almacenamiento de datos
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img10.svg', style="width:80px", alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El almacenamiento de datos hace referencia a las diferentes formas en que la información se guarda físicamente o de manera lógica dentro de los sistemas informáticos. En los entornos de bases de datos, el tipo de almacenamiento influye en la velocidad de acceso a la información, la capacidad de procesamiento, la escalabilidad del sistema y la seguridad de los datos.
    p Dependiendo de la arquitectura del sistema y de las necesidades de procesamiento, es posible identificar diferentes tipos de almacenamiento de datos:
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.h-100
          img(src='@/assets/curso/temas/tema6/img11.png', alt='Texto que describa la imagen')
          .bgf2.p-4
            h5 Almacenamiento Local
            p.mb-0 Los datos se guardan en servidores o equipos físicos dentro de la infraestructura de una organización. Este modelo permite un control directo sobre los recursos y la seguridad de la información.
      .col-lg-6
        .tarjeta.h-100
          img(src='@/assets/curso/temas/tema6/img12.png', alt='Texto que describa la imagen')
          .bgf2.p-4
            h5 Almacenamiento en la nube
            p.mb-0 Los datos se almacenan en infraestructuras distribuidas gestionadas por proveedores de servicios en la nube. Este tipo de almacenamiento facilita la escalabilidad, el acceso remoto y la disponibilidad de la información.
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.h-100
          img(src='@/assets/curso/temas/tema6/img11.png', alt='Texto que describa la imagen')
          .bgf2.p-4
            h5 Almacenamiento distribuido
            p.mb-4 La información se almacena en múltiples servidores o nodos conectados entre sí. Este enfoque permite mejorar el rendimiento, la tolerancia a fallos y la capacidad de manejar grandes volúmenes de datos.
      .col-lg-6
        .tarjeta.h-100
          img(src='@/assets/curso/temas/tema6/img12.png', alt='Texto que describa la imagen')
          .bgf2.p-4
            h5 Almacenamiento orientado a bases de datos
            p.mb-0 Los datos se organizan y almacenan dentro de sistemas gestores de bases de datos, los cuales permiten administrar la información mediante esquemas, consultas y mecanismos de control que garantizan la integridad y consistencia de los datos.
    p.mb-0 La comprensión de estos tipos de almacenamiento permite seleccionar la arquitectura tecnológica más adecuada para gestionar la información de manera eficiente, segura y escalable dentro de los sistemas de información.
    
</template>

<script>
export default {
  name: 'Tema6',
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
