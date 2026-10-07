<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Interpretación y estructura del modelo relacional
    p El modelo relacional es uno de los enfoques más utilizados para organizar y gestionar la información en las bases de datos. Este modelo propone representar los datos mediante tablas, también llamadas relaciones, las cuales se componen de filas y columnas. Cada tabla almacena información sobre una entidad específica y permite establecer vínculos con otras tablas mediante claves.
    .row.mb-4
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")
      .col-lg-7
        .p-4.mb-2.bgf1
          p.mb-0 En este modelo, cada fila representa un registro o instancia de datos, mientras que cada columna corresponde a un atributo que describe una característica de la entidad. La organización estructurada de la información facilita su almacenamiento, consulta y manipulación mediante lenguajes de consulta como SQL.
        p El modelo relacional también establece reglas que garantizan la integridad y consistencia de los datos, evitando duplicidades o relaciones incorrectas entre las tablas. Para ello se utilizan mecanismos como las claves primarias, las claves foráneas y diferentes tipos de restricciones que controlan la validez de la información almacenada.
    .row
      .col-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema3/img2.svg", alt="alt").img200
      .col-lg-10
        p.mb-0 Comprender la estructura del modelo relacional permite interpretar correctamente cómo se organizan los datos dentro de una base de datos y cómo se relacionan entre sí las diferentes tablas. Este conocimiento resulta fundamental para el diseño, implementación y administración eficiente de sistemas de información basados en bases de datos relacionales.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Entidades, atributos y relaciones
    p En el modelo relacional, la información se organiza en estructuras que permiten representar y gestionar los datos dentro de una base de datos. Para comprender esta estructura es importante interpretar cómo los elementos definidos en el modelo conceptual se reflejan en el modelo relacional.
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')
        p Las #[b entidades] representan objetos o elementos del mundo real sobre los cuales se desea almacenar información. En el modelo relacional, cada entidad se transforma en una tabla dentro de la base de datos. Por ejemplo, en un sistema de biblioteca pueden existir entidades como Usuario, Libro o Préstamo, que posteriormente se representan como tablas que almacenan los registros correspondientes.
      .col-md.tarjeta.bgf6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen')
        p Los #[b atributos] corresponden a las características o propiedades que describen a una entidad. Dentro del modelo relacional, los atributos se representan como columnas de una tabla. Cada columna almacena un tipo específico de información, como el nombre de un usuario, el título de un libro o la fecha de un préstamo.
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen')
        p Las #[b relaciones] describen la forma en que las entidades se vinculan entre sí. En el modelo relacional, estas relaciones se implementan mediante claves que permiten conectar las tablas, garantizando que la información mantenga coherencia entre los distintos elementos del sistema.
    p.mb-0 Comprender la relación entre entidades, atributos y relaciones dentro del modelo relacional permite estructurar adecuadamente las tablas de la base de datos y asegurar que los datos se encuentren organizados de forma clara, consistente y fácil de consultar.    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Llaves primarias y foráneas
    p En el modelo relacional, las tablas utilizan diferentes tipos de llaves para identificar los registros y establecer relaciones entre los datos almacenados. Las más importantes son la llave primaria y la llave foránea, ya que permiten organizar la información y mantener la coherencia entre las tablas de una base de datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
        .p-4.bgf2
          h5 La llave primaria (Primary Key - PK)
          p Es el atributo o conjunto de atributos que identifica de forma única cada registro dentro de una tabla. Sus valores no pueden repetirse ni ser nulos. Por ejemplo, en una tabla llamada #[b Usuario], el campo id_usuario puede funcionar como llave primaria, permitiendo identificar de manera única a cada usuario registrado.
      .col-lg-6
        img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
        .p-4.bgf2
          h5 Llave foránea (Foreign Key - FK)
          p Es un atributo que establece una relación entre dos tablas. Este campo hace referencia a la llave primaria de otra tabla, permitiendo conectar la información almacenada en diferentes entidades. Por ejemplo, en una tabla llamada #[b Prestamo], el campo id_usuario puede funcionar como llave foránea que hace referencia al id_usuario de la tabla Usuario.
    p El uso de estas llaves permite mantener la relación entre las tablas y facilita la consulta, actualización y organización de la información dentro de una base de datos relacional. Para comprender mejor cómo funcionan las llaves primarias y foráneas dentro de un modelo relacional, a continuación, se presenta un ejemplo sencillo.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Ejemplo de llaves primarias y foráneas en un modelo relacional
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Tabla
                  th Columnas
                  th Llave primaria
                  th Llave foránea
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Usuario
                  td id_usuario, nombre, correo.
                  td id_usuario (PK)
                  td —
                tr     
                  th Libro
                  td id_libro, titulo, autor
                  td id_libro (PK)
                  td —
                tr(style="background-color: #F3F9FF;")
                  th Prestamo
                  td id_prestamo, fecha_prestamo, id_usuario, id_libro
                  td id_prestamo (PK)
                  td id_usuario (FK), id_libro (FK)
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.align-items-center.mb-4.bgf5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', style="width: 120px;margin-left:-12%", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En este ejemplo, cada tabla posee una llave primaria (#[b PK]) que permite identificar de manera única cada registro. La tabla Préstamo incluye además llaves foráneas (#[b FK]) que hacen referencia a las llaves primarias de las tablas Usuario y Libro, permitiendo establecer la relación entre los datos.
    p.mb-0 De esta forma, el sistema puede registrar qué usuario realizó un préstamo y qué libro fue prestado, manteniendo la información organizada y relacionada dentro de la base de datos.    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Integridad de identidad e integridad referencial
    p En una base de datos relacional, la integridad de los datos es un principio fundamental que garantiza que la información almacenada sea válida, coherente y confiable. Para lograrlo, los sistemas gestores de bases de datos utilizan diferentes reglas que permiten controlar la forma en que se registran y relacionan los datos. Entre las más importantes se encuentran la integridad de identidad y la integridad referencial.
    .BG01.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Integridad de identidad
              p Establece que cada registro dentro de una tabla debe ser identificado de manera única mediante una #[b llave primaria (Primary Key o PK)]. Esto significa que el valor de la llave primaria no puede repetirse ni quedar vacío, ya que su función es distinguir cada registro de los demás.
              p Por ejemplo, en una tabla llamada Usuario, el atributo #[b id_usuario] puede utilizarse como llave primaria. De esta manera, cada usuario tendrá un identificador único dentro de la base de datos, lo que permite evitar duplicidad de registros y facilita la organización de la información.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img9.png',style="width: 95%;", alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Integridad referencia
              p Garantiza la coherencia de las relaciones entre las tablas de una base de datos. Este principio se cumple mediante el uso de #[b llaves foráneas (Foreign Key o FK)], las cuales permiten conectar registros de diferentes tablas.
              p Una llave foránea es un atributo que hace referencia a la llave primaria de otra tabla. Su función es asegurar que los valores registrados correspondan a datos que realmente existen en la tabla relacionada.
              p Por ejemplo, en una tabla #[b Prestamo] pueden existir los atributos #[b id_usuario] e #[b id_libro] como llaves foráneas. Estos valores deben corresponder a usuarios y libros previamente registrados en las tablas Usuario y Libro. De esta forma se evita registrar préstamos asociados a usuarios o libros inexistentes.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img10.png', alt='Gráfico ilustrativo de uso de programa')
    p El cumplimiento de estas reglas permite mantener la consistencia de los datos, evitar errores en las relaciones entre tablas y garantizar que la información almacenada en la base de datos sea confiable y correctamente estructurada.   
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Restricciones y consistencia de los datos
    figure
      img(src='@/assets/curso/temas/tema3/img11.png' alt='AvatarTop')
    .p-4.bgf1.mb-4
      p.mb-0 En las bases de datos relacionales, las restricciones son reglas que se establecen para controlar los valores que pueden almacenarse en las tablas. Estas reglas permiten garantizar que la información registrada cumpla determinadas condiciones y que los datos mantengan coherencia dentro del sistema.
    p Las restricciones contribuyen a mantener la consistencia de los datos, es decir, aseguran que la información almacenada sea válida, completa y acorde con las reglas definidas para la base de datos. De esta manera, se evitan errores como registros incompletos, duplicados o valores que no corresponden con la estructura del sistema.
    p.mb-0 Entre las restricciones más comunes se encuentran las siguientes:
    .row.justify-content-center.BG04.p-5
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img12.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt").img100.m-auto
            h5.text-center #[b NOT NULL]
            p.text-center.mb-0 Establece que un atributo no puede quedar vacío, por lo que siempre debe contener un valor.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema3/img14.svg", alt="alt").img100.m-auto
            h5.text-center #[b UNIQUE]
            p.text-center.mb-0 Garantiza que los valores de una columna no se repitan dentro de la tabla.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema3/img15.svg", alt="alt").img100.m-auto
            h5.text-center #[b PRIMARY KEY (PK)]
            p.text-center.mb-0 Identifica de manera única cada registro de una tabla y no permite valores nulos ni duplicados.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema3/img16.svg", alt="alt").img100.m-auto
            h5.text-center #[b FOREIGN KEY (FK)]
            p.text-center.mb-0 Asegura la relación entre tablas al exigir que los valores correspondan a registros existentes en otra tabla.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema3/img16.svg", alt="alt").img100.m-auto
            h5.text-center #[b CHECK]
            p.text-center.mb-0 Permite definir una condición que los valores deben cumplir para poder almacenarse en la base de datos.
    p.mb-0 La aplicación de estas restricciones fortalece la calidad de la información y facilita la administración de los datos dentro de los sistemas de información. Además, permite mantener la coherencia entre las diferentes tablas y garantizar que los registros cumplan con las reglas definidas en el diseño de la base de datos.          
</template>

<script>
export default {
  name: 'Tema3',
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
