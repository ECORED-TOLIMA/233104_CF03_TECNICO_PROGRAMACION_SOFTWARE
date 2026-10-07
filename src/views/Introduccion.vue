<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El modelado y la gestión de bases de datos constituyen procesos fundamentales en el desarrollo de soluciones de #[i software], ya que permiten organizar, almacenar y administrar la información de manera eficiente y segura. En este componente formativo se abordan los conceptos esenciales relacionados con las bases de datos, sus modelos, estructuras y tendencias actuales, integrando enfoques relacionales y NoSQL utilizados en diferentes contextos tecnológicos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Asimismo, se estudian los principios del diseño conceptual, lógico y físico de bases de datos, la normalización y la interpretación de modelos relacionales, con el propósito de comprender la organización de la información y las relaciones entre entidades. De igual forma, se desarrollan conocimientos relacionados con los lenguajes de definición y manipulación de datos, las restricciones de integridad y las herramientas de gestión y modelado empleadas en entornos reales de desarrollo.
        p.mb-0 Finalmente, se analizan los diferentes tipos de almacenamiento de datos, las características de los sistemas distribuidos y los principios ACID y CAP, permitiendo reconocer las necesidades de procesamiento transaccional y analítico en soluciones modernas de #[i software].
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(
            src="@/assets/curso/temas/intro/img1.png"
            alt="Escudo digital con una base de datos en el centro, asociado a la seguridad y gestión de la información."
          )

    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/TXKpLBAX8ms" title="Modelado y gestión de bases de datos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
           
</template>

<script>
export default {
  name: 'Introduccion',
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
