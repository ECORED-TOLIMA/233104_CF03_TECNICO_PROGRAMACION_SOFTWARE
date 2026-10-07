<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Las bases de datos surgen como una solución tecnológica para organizar y gestionar grandes volúmenes de información que anteriormente se almacenaban en registros físicos. A través de diferentes modelos y procesos de diseño, los datos se estructuran en tablas y relaciones que permiten garantizar su organización e integridad dentro de los sistemas gestores de bases de datos. Posteriormente, mediante lenguajes especializados, es posible crear, modificar, consultar y eliminar información según las necesidades de cada aplicación. En la actualidad, las bases de datos no solo almacenan información, sino que también permiten procesarla, analizarla y distribuirla en sistemas más complejos, incluyendo arquitecturas distribuidas y tecnologías NoSQL, lo que facilita la gestión eficiente de los datos y su uso para la toma de decisiones en diversos entornos digitales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la explicación de las bases de datos, organizada en los principales temas, incluyendo fundamentos y tipos de bases de datos, procesos de modelado y diseño, estructura del modelo relacional, uso de lenguajes para la manipulación de datos, gestión y administración de sistemas gestores, procesamiento y almacenamiento de información, y conceptos de bases de datos NoSQL y sistemas distribuidos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
