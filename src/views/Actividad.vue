<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad
        <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'NOMBRE DEL COMPONENTE FORMATIVO',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con las bases de datos, su modelado, estructura, manipulación, gestión y funcionamiento en sistemas modernos, con el fin de reconocer cómo se organizan, procesan y administran los datos en diferentes entornos tecnológicos.',
      barajarPreguntas: true,
      titulo_aprobado: '?BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de una base de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar programas informáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y almacenar información de manera estructurada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear redes de computadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desarrollar aplicaciones móviles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos permite identificar de manera única cada registro en una tabla?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Llave foránea.', esCorrecta: false },
            { id: 'b', texto: 'Índice.', esCorrecta: false },
            { id: 'c', texto: 'Llave primaria.', esCorrecta: true },
            { id: 'd', texto: 'Registro duplicado.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El modelo que representa entidades, atributos y relaciones se conoce como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Modelo jerárquico.', esCorrecta: false },
            { id: 'b', texto: 'Modelo entidad-relación.', esCorrecta: true },
            { id: 'c', texto: 'Modelo físico.', esCorrecta: false },
            { id: 'd', texto: 'Modelo documental.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El proceso de organizar las tablas para reducir redundancias se denomina:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Integración.', esCorrecta: false },
            { id: 'b', texto: 'Indexación.', esCorrecta: false },
            { id: 'c', texto: 'Compresión.', esCorrecta: false },
            { id: 'd', texto: 'Normalización.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes lenguajes se utiliza para manipular datos dentro de una base de datos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DML', esCorrecta: true },
            { id: 'b', texto: 'HTML', esCorrecta: false },
            { id: 'c', texto: 'CSS', esCorrecta: false },
            { id: 'd', texto: 'JSON', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué comando se utiliza generalmente para crear una tabla en SQL?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SELECT', esCorrecta: false },
            { id: 'b', texto: 'INSERT', esCorrecta: false },
            { id: 'c', texto: 'DELETE', esCorrecta: false },
            { id: 'd', texto: 'CREATE', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál operación permite agregar nuevos registros a una tabla?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'UPDATE', esCorrecta: false },
            { id: 'b', texto: 'INSERT', esCorrecta: true },
            { id: 'c', texto: 'DELETE', esCorrecta: false },
            { id: 'd', texto: 'DROP', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de base de datos organiza la información en tablas relacionadas entre sí?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'NoSQL.', esCorrecta: false },
            { id: 'b', texto: 'Distribuida.', esCorrecta: false },
            { id: 'c', texto: 'Relacional.', esCorrecta: true },
            { id: 'd', texto: 'Documental.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué propiedad ACID garantiza que una transacción se complete totalmente o no se realice?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consistencia.', esCorrecta: false },
            { id: 'b', texto: 'Atomicidad.', esCorrecta: true },
            { id: 'c', texto: 'Durabilidad.', esCorrecta: false },
            { id: 'd', texto: 'Aislamiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es la función de una llave foránea?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer relaciones entre tablas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Crear una tabla nueva.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Eliminar registros duplicados.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ordenar los datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es un ejemplo de sistema gestor de bases de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Photoshop', esCorrecta: false },
            { id: 'b', texto: 'MySQL', esCorrecta: true },
            { id: 'c', texto: 'Excel', esCorrecta: false },
            { id: 'd', texto: 'Illustrator', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica principal de las bases de datos NoSQL?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso exclusivo de tablas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Estructura rígida de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alta flexibilidad en el almacenamiento de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dependencia de hojas de cálculo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de carga de trabajo se enfoca en registrar operaciones diarias del sistema?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Analítica.', esCorrecta: false },
            { id: 'b', texto: 'Transaccional.', esCorrecta: true },
            { id: 'c', texto: 'Predictiva.', esCorrecta: false },
            { id: 'd', texto: 'Simulada.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el objetivo del diseño conceptual de una base de datos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar el sistema gestor.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Crear consultas SQL.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Optimizar el rendimiento del servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Representar la estructura general de los datos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué operación permite modificar información existente en una tabla?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'UPDATE', esCorrecta: true },
            { id: 'b', texto: 'INSERT', esCorrecta: false },
            { id: 'c', texto: 'CREATE', esCorrecta: false },
            { id: 'd', texto: 'SELECT', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué propiedad del modelo relacional asegura que los datos relacionados sean válidos entre tablas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Replicación.', esCorrecta: false },
            { id: 'b', texto: 'Indexación.', esCorrecta: false },
            { id: 'c', texto: 'Segmentación.', esCorrecta: false },
            { id: 'd', texto: 'Integridad referencial.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de almacenamiento se utiliza comúnmente en sistemas distribuidos y grandes volúmenes de datos?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'NoSQL', esCorrecta: true },
            { id: 'b', texto: 'XML', esCorrecta: false },
            { id: 'c', texto: 'HTML', esCorrecta: false },
            { id: 'd', texto: 'CSV', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El Teorema CAP establece que un sistema distribuido puede garantizar como máximo:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todas las propiedades simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dos de tres propiedades principales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Solo una propiedad.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Cuatro propiedades principales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál propiedad del Teorema CAP asegura que el sistema continúe funcionando ante fallas de red?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consistencia.', esCorrecta: false },
            { id: 'b', texto: 'Disponibilidad.', esCorrecta: false },
            { id: 'c', texto: 'Tolerancia a particiones.', esCorrecta: true },
            { id: 'd', texto: 'Replicación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué herramienta se utiliza para diseñar modelos de bases de datos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Oracle Data Modeler', esCorrecta: true },
            { id: 'b', texto: 'Word', esCorrecta: false },
            { id: 'c', texto: 'PowerPoint', esCorrecta: false },
            { id: 'd', texto: 'Notepad', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las bases de datos, su estructura, modelado, manipulación y administración dentro de los sistemas de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
