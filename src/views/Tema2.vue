<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelado de bases de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img1.png' alt='AvatarTop')
      .col-lg-8
        p El modelado de bases de datos es un proceso fundamental en el desarrollo de sistemas de información, ya que permite representar de manera estructurada la forma en que los datos se organizan, relacionan y almacenan dentro de un sistema. Este proceso facilita la comprensión de la información que debe gestionarse y contribuye a diseñar bases de datos eficientes, coherentes y adaptadas a los requerimientos del #[i software].
        .bgf1.p-4
          p.mb-0 A través del modelado de datos se identifican las entidades, atributos y relaciones que forman parte de un sistema, permitiendo establecer una representación conceptual de la información antes de su implementación en un sistema gestor de bases de datos. De esta manera, se reduce la redundancia de datos, se mejora la integridad de la información y se optimiza el acceso a los datos.
    p.mb-4 El proceso de modelado generalmente se desarrolla en tres niveles principales: 
    .row.justify-content-center.align-items-center
      .col-lg-4
        .bloque-texto-gg.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p.text-bold Diseño conceptual.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
          )
      .col-lg-4
        .bloque-texto-gg.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p.text-bold Diseño lógico.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.svg')})`}"
          )
      .col-lg-4
        .bloque-texto-gg.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p.text-bold Diseño físico.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img4.svg')})`}"
          )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bgf5.p-4
          p.mb-0 Cada uno de estos niveles permite describir la estructura de la base de datos desde diferentes perspectivas, comenzando por una representación general del sistema hasta su implementación técnica en un gestor de bases de datos.
    p.mb-0 En este apartado se abordan los principales elementos y etapas del modelado de bases de datos, incluyendo el diseño conceptual, el modelo entidad-relación, la transformación hacia el modelo lógico, el diseño físico y el proceso de normalización, aspectos fundamentales para la construcción de bases de datos eficientes y bien estructuradas.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Diseño conceptual de bases de datos
    p El diseño conceptual de bases de datos corresponde a la primera etapa del proceso de modelado de datos. En esta fase se identifican y describen los elementos principales de la información que el sistema debe gestionar, sin considerar aún aspectos técnicos relacionados con el sistema gestor de bases de datos o la implementación tecnológica.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El objetivo del diseño conceptual consiste en representar de manera clara y comprensible la estructura de la información, identificando las entidades, los atributos y las relaciones que existen entre los diferentes elementos del sistema. Esta representación permite comprender cómo se organiza la información y cómo interactúan los distintos componentes dentro del contexto de una aplicación o sistema de información.
    p Durante esta etapa se analiza el problema o necesidad del sistema, se identifican los datos relevantes y se establece una visión general del modelo de información. De esta manera, el diseño conceptual facilita la comunicación entre analistas, desarrolladores y expertos del dominio, permitiendo validar la estructura de los datos antes de avanzar hacia fases más técnicas del diseño.
    p Entre los principales elementos que se identifican en el diseño conceptual se encuentran:
    

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.d-none.d-lg-block.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt").img80.m-auto
          h5.text-center Entidades
          p.text-center.mb-5 Representa objetivos o conceptos del mundo real sobre las cuales se desea almacenar información, como por ejemplo cliente, productos, pedidos o empleados.
          br
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.d-none.d-lg-block.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt").img80.m-auto
          h5.text-center Atributos
          p.text-center.mb-0 Son las características o prioridades que describen a una entidad. Por ejemplo, una entidad cliente puede tener atributos como nombre, identificación, correo electronico o ciudad.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.d-none.d-lg-block.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img8.svg", alt="alt").img80.m-auto
          h5.text-center Relaciones
          p.text-center.mb-0 Indican la forma en que las entidades se vinculan entre si dentro del sistema. Por ejemplo, un cliente puede realizar uno o varios pedidos, lo que establece una relación entre las entidades cliente y pedido.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt")
      .col-lg-7
        .p-4.bgf3
              p.text-white Ejemplo de diseño conceptual:
              p.text-white En un sistema de gestión de ventas se pueden identificar las siguientes entidades:
              .tarjeta.mb-2
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFB758;")
                    p.mb-0.text-white Cliente.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFB758;")
                    p.mb-0.text-white Pedido.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFB758;")
                    p.mb-0.text-white Producto.
              p.text-white Las relaciones entre estas entidades pueden representarse de la siguiente manera:
              .tarjeta
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta(style="color: #FFB758;")
                    p.mb-0.text-white Un cliente realiza pedidos.
                  li
                    i.lista-ul__vineta(style="color: #FFB758;")
                    p.mb-0.text-white Un pedido puede incluir varios productos.
    p.mb-0 Este tipo de representación permite visualizar de forma general cómo se organiza la información dentro del sistema antes de convertir el modelo en tablas o estructuras físicas.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Modelo Entidad-Relación (ER)
    figure
      img(src='@/assets/curso/temas/tema2/img10.png' alt='AvatarTop')
    .p-4.bgf1.mb-4
      p.mb-0 El modelo Entidad-Relación (ER) es una técnica ampliamente utilizada para representar de forma gráfica la estructura de una base de datos durante la fase de diseño conceptual. Este modelo permite describir los elementos principales del sistema de información y las relaciones existentes entre ellos, facilitando la comprensión de cómo se organizan y conectan los datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.align-items-center.bgf5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', style="width: 100px;margin-left:-12%", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 El modelo ER fue propuesto por Peter Chen en 1976, y desde entonces se ha convertido en uno de los métodos más utilizados para el diseño de bases de datos, debido a su capacidad para representar de manera clara y estructurada los componentes de un sistema de información.
    p En este modelo se utilizan diagramas que encuentran las entidades, los atributos y las relaciones, permitiendo representar la estructura de los datos antes de su implementación en un sistema gestor de bases de datos.
    p Elementos del modelo Entidad-Relación:
    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Entidad")
        .px-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              p Representa un objeto, concepto o elemento del mundo real sobre el cual se desea almacenar información. Las entidades suelen representarse mediante rectángulos en los diagramas ER.
              .tarjeta.bgf10.p-4
                p #[b Ejemplo de entidades:]
                ul.lista-ul
                  li
                    i.fas.fa-computer
                    p.mb-0 Cliente
                  li
                    i.fas.fa-computer
                    p.mb-0 Producto
                  li
                    i.fas.fa-computer
                    p.mb-0 Pedido
      .py-3.py-md-4(titulo="Atributos")
        .px-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              p Corresponden a las propiedades o características que describen una entidad. En los diagramas ER se representan mediante óvalos conectados a la entidad correspondiente.
              .tarjeta.bgf10.p-4
                  p #[b Ejemplo de atributos para la entidad cliente:]
                  l.lista-ul
                    li
                      i.fas.fa-computer
                      p.mb-0 Identificación
                    li
                      i.fas.fa-computer
                      p.mb-0 Nombre
                    li
                      i.fas.fa-computer
                      p.mb-0 Dirección
                    li
                      i.fas.fa-computer
                      p.mb-0 Teléfono
      .py-3.py-md-4(titulo="Relaciones")
        .px-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              p Indican la forma en que las entidades se vinculan entre sí dentro de un sistema. En los diagramas ER se representan mediante rombos o conectores entre entidades.
              .tarjeta.bgf10.p-4
                  p #[b Ejemplo de relación:]
                  l.lista-ul
                    li
                      i.fas.fa-computer
                      p.mb-0 Un cliente realiza pedidos.
    p #[b Cardinalidad de las relaciones:] indica la cantidad de instancias de una entidad que pueden relacionarse con otra entidad. Entre las cardinalidades más comunes se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Uno a uno (1:1)")
            p Un registro de una entidad se relaciona con un solo registro de otra entidad.
          .row(numero="2" titulo="Uno a muchos (1:N)")
            p Un registro de una entidad puede relacionarse con varios registros de otra entidad.
          .row(numero="3" titulo="Muchos a muchos (N:M)")
            p Varios registros de una entidad pueden relacionarse con varios registros de otra entidad.
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img15.png' alt='AvatarTop')
    p Para comprender cómo funciona el modelo Entidad-Relación, se presenta un ejemplo sencillo basado en un sistema de préstamos de biblioteca. Este tipo de representación permite identificar las entidades principales del sistema, sus atributos y las relaciones que existen entre ellas, facilitando la organización y estructuración de la información en una base de datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.bgf4
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img16.png' style="margin-left:-12%", alt='AvatarTop')
          .col-lg-8 
            p En este ejemplo se identifican tres entidades principales: Usuario, Libro y Préstamo. Cada una contiene atributos que describen sus características. Además, las entidades se relacionan entre sí para representar cómo interactúan los datos dentro del sistema.
            p.mb-0 Por ejemplo, un usuario realiza un préstamo y cada préstamo corresponde a un libro determinado. De esta manera, el modelo permite visualizar cómo se organizan los datos y cómo se conectan entre sí dentro del sistema. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Modelo Entidad-Relación de un sistema de préstamos de biblioteca
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', alt='En la figura 1 se presenta un diagrama Entidad-Relación de un sistema de préstamos de biblioteca en el que se identifican las entidades Usuario, Préstamo y Libro, junto con las relaciones que conectan estas entidades dentro del sistema.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img17_1.svg', alt='En la figura 1 se presenta un diagrama Entidad-Relación de un sistema de préstamos de biblioteca en el que se identifican las entidades Usuario, Préstamo y Libro, junto con las relaciones que conectan estas entidades dentro del sistema.')
    p Esto indica que un usuario puede realizar varios préstamos y cada préstamo corresponde a un libro específico.
    p.mb-4 Elementos del modelo Entidad-Relación:
    .row.justify-content-center.mb-4
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt").img250
        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img18.svg", alt="alt").img100
            .col
              h5 Entidad
              p Una entidad es cualquier objeto, persona o concepto del mundo real sobre el cual se desea almacenar información dentro de una base de datos. En el ejemplo presentado, #[b Usuario], #[b Libro] y #[b Préstamo] representan entidades del sistema.
        
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img19.svg", alt="alt").img100
            .col
              h5 Atributo
              p Un atributo es una característica que describe a una entidad. Los atributos permiten registrar información específica sobre cada elemento. Por ejemplo, la entidad #[b Usuario] puede tener atributos como nombre y correo.
        
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img20.svg", alt="alt").img100
            .col
              h5 Relación
              p Una relación es la asociación que existe entre dos o más entidades y permite representar cómo interactúan dentro del sistema. En el ejemplo, la relación realiza conecta las entidades #[b Usuario] y #[b Préstamo].
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bgf8.p-3(data-aos="zoom-in")
          .row.justify-content-between.align-items-center
            .col-sm-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', width='180', alt='Texto que describa la imagen')
            .col.mb-3.mb-sm-0
              p.mb-0 Para complementar la información de Entidad-Relación, se recomienda acceder al siguiente video: 
              p.text-bold Construcción de un modelo entidad relación
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=t7KZFiCstwI')" target="_blank")
                span Abrir video
                i.fas.fa-file-video
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Diseño lógico de bases de datos
    p.mb-4 El diseño lógico de bases de datos corresponde a la etapa en la que se define la estructura lógica que tendrá la información dentro de un sistema gestor de bases de datos. En esta fase se organizan los datos en tablas, columnas y relaciones, siguiendo las reglas del modelo de datos que se utilizará, generalmente el modelo relacional.
    .bloque-texto-gg.bgf1.mb-4
      .bloque-texto-gg__texto.p-4
        p El objetivo del diseño lógico es representar los datos de manera estructurada y coherente, permitiendo establecer las entidades, los atributos y las relaciones que formarán parte de la base de datos. En este nivel se definen elementos importantes como las #[b claves primarias] (#[b PK, Primary Key]), las #[b claves foráneas] (#[b FK, Foreign Key]) y las restricciones que garantizan la integridad de la información.
        p.mb-0 A diferencia del diseño físico, el diseño lógico no se centra en aspectos técnicos relacionados con el almacenamiento o el rendimiento del sistema, sino en la organización estructural de los datos. Esto permite construir un modelo claro y consistente que servirá como base para la implementación posterior de la base de datos.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img23.png')})`}"
      )
    p Para comprender mejor este proceso, a continuación, se presenta un ejemplo sencillo de cómo una entidad del modelo Entidad-Relación puede representarse en el diseño lógico mediante una tabla:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Transformación de una entidad del modelo ER a una tabla
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Paso
                  th Descripción
                  th Representación
              tbody
                tr(style="background-color: #F3F9FF;")
                  td Paso 1. Identificar la entidad.
                  td Se identifica la entidad y sus atributos en el modelo conceptual.
                  td Entidad: Aprendiz → atributos: id_aprendiz, nombre, documento, correo.
                tr
                  td Paso 2. Convertir la entidad en tabla.
                  td La entidad se transforma en una tabla dentro del modelo lógico.
                  td Tabla: Aprendiz.
                tr(style="background-color: #F3F9FF;")
                  td Paso 3. Definir columnas.
                  td Cada atributo de la entidad se convierte en una columna de la tabla.
                  td id_aprendiz, nombre, documento, correo.
                tr
                  td Paso 4. Establecer la clave primaria.
                  td Se define el atributo que identificará de forma única cada registro.
                  td id_aprendiz (PK).
    p.mb-0 Como resultado, la entidad conceptual Aprendiz se convierte en una tabla de la base de datos, donde cada fila representa un registro y cada columna corresponde a un atributo de la entidad. Este proceso permite estructurar la información de manera organizada para su posterior implementación en el sistema gestor de bases de datos.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Transformación del modelo conceptual al modelo lógico
    p.mb-4 La transformación del modelo conceptual al modelo lógico es el proceso mediante el cual la información identificada durante el análisis del sistema se organiza en una estructura que pueda ser implementada dentro de una base de datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img24.png', alt='Infografía de matriz RACI')
      .col-lg-7
        p En el modelo conceptual se describen los elementos principales del sistema, como las entidades, sus atributos y las relaciones que existen entre ellas. Sin embargo, esta representación todavía no define cómo se almacenarán los datos dentro de un sistema gestor de bases de datos.
        .bgf1.p-3.mb-2
          p.mb-0 Durante la transformación al modelo lógico, estos elementos se convierten en tablas, columnas y claves que permiten estructurar la información de manera organizada. De esta forma, las entidades del modelo conceptual se transforman en tablas, los atributos en columnas y las relaciones se representan mediante claves primarias y claves foráneas.
        p Este proceso permite pasar de una representación conceptual del sistema a una estructura lógica preparada para su implementación en una base de datos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.bgf5-2.overflow-hidden
            .row.justify-content-center.align-items-stretch
              .col-lg-8.order-2.order-lg-1.p-lg-5
                p.mb-2 #[b Ejemplo de transformación:] supóngase un sistema sencillo de biblioteca donde se identifican las siguientes entidades en el modelo conceptual:
                ol.lista-ol--cuadro.mb-2
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Usuario
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Libro
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Préstamo
                p.mb-2 Cada entidad posee atributos que describen sus características. Por ejemplo:
                ol.lista-ol--cuadro.mb-2
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Usuario: id_usuario, nombre, correo.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Libro: id_libro, titulo, autor.
                  li
                  i.fas.fa-computer(style="color: #FFB758;")
                  |  Préstamo: id_prestamo, fecha_prestamo.
              .col-lg-4.order-1.order-lg-2.px-0
                figure.h-100.m-0
                  img.h-100(src='@/assets/curso/temas/tema2/img25.png', alt='Texto que describa la imagen')
    p Durante la transformación al modelo lógico, estas entidades se convierten en tablas dentro de la base de datos:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Ejemplo de transformación del modelo conceptual al modelo lógico
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Tabla
                  th Columnas
                  th Clave primaria
              tbody
                tr(style="background-color: #F3F9FF;")
                  td Usuario.
                  td id_usuario, nombre, correo.
                  td id_usuario (PK).
                tr            
                  td Libro.
                  td id_libro, titulo, autor.
                  td id_libro (PK).
                tr(style="background-color: #F3F9FF;")
                  td Prestamo.
                  td id_prestamo, fecha_prestamo, id_usuario, id_libro.
                  td id_prestamo (PK).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 En este caso, la tabla Préstamo incluye los campos id_usuario y id_libro, los cuales funcionan como claves foráneas (FK) que permiten relacionar los préstamos con el usuario que realiza el préstamo y con el libro prestado.
    p.mb-0 Este proceso garantiza que la información del sistema quede organizada de forma estructurada, permitiendo gestionar los datos de manera eficiente dentro de una base de datos. 

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Diseño físico de bases de datos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bloque-texto-gg.bloque-texto-gg--inverso.bgf5
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img26.svg')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 El diseño físico de bases de datos corresponde a la etapa en la que se define #[b cómo se almacenarán y gestionarán los datos dentro del sistema gestor de bases de datos]. En esta fase se pasa del modelo lógico a la implementación técnica, teniendo en cuenta aspectos como el almacenamiento, el rendimiento y la eficiencia en el acceso a la información.
            br
            | Mientras que el diseño lógico se enfoca en la estructura de las tablas, atributos y relaciones, el diseño físico se centra en #[b cómo esas estructuras se implementan realmente dentro del sistema], considerando las características del gestor de bases de datos utilizado, el volumen de información y la forma en que los usuarios accederán a los datos.
    p.mb-4 En esta etapa se definen elementos importantes como:

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img27.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3.mb-4
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5 Tipos de datos
            p.mb-0 Especifican el formato en que se almacenara cada dato dentro de una tabla, por ejemplo, numeros, texto o fechas.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img28.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3.mb-4
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5 Índices
            p.mb-0 Estructura que permiten acelerar las consultas y mejorar el rendimiento de la base de datos.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img29.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3.mb-4
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5 Restricciones de integridad
            p.mb-0 Reglas que garantizan que los datos almacenados sean validos y coherente.
      
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img30.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3.mb-4
                .ubicar
                  .acordion__accion.acordion__accion__btn--b.h3.mb-0
                    i.fas.fa-angle-up
                  h5 Estructura de almacenamiento
            p.mb-0 Organizacion fisica de los archivos o bloques donde se guardara la información.
    p El diseño físico también busca optimizar el desempeño del sistema, permitiendo que las consultas se ejecuten de forma rápida y eficiente, especialmente cuando la base de datos maneja grandes volúmenes de información.
    p A continuación, se presenta un ejemplo sencillo de cómo se define la estructura física de una tabla dentro de una base de datos:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Ejemplo de diseño físico de una tabla
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a  
            table 
              thead
                tr
                  th Campo
                  th Tipo de dato
                  th Descripción
              tbody
                tr(style="background-color: #F3F9FF;")
                  td id_usuario.
                  td INT.
                  td Identificador único del usuario..
                tr      
                  td nombre.
                  td VARCHAR(100).
                  td Nombre del usuario.
                tr(style="background-color: #F3F9FF;")
                  td correo.
                  td VARCHAR(100).
                  td Correo electrónico del usuario.
                tr
                  td fecha_registro.
                  td DATE.
                  td Fecha en que el usuario se registró.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 En este ejemplo, además de definir las columnas de la tabla, se especifica el tipo de dato que tendrá cada campo, lo que permite al sistema gestor de bases de datos almacenar y procesar la información de manera adecuada.
    p.mb-0 De esta forma, el diseño físico convierte la estructura lógica de la base de datos en una implementación real dentro del sistema, garantizando un almacenamiento eficiente, seguro y organizado de la información.    
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6 Normalización de bases de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La normalización de bases de datos es un proceso que permite organizar la información de manera eficiente, con el fin de evitar redundancias, reducir inconsistencias y garantizar la integridad de los datos. Este proceso consiste en estructurar las tablas y las relaciones entre ellas siguiendo una serie de reglas conocidas como formas normales.
        br
        br
        p.mb-0 Cuando una base de datos no está normalizada, es común encontrar datos repetidos o inconsistentes, lo que puede generar errores al momento de insertar, actualizar o eliminar información. Por esta razón, la normalización busca dividir la información en varias tablas relacionadas, de modo que cada dato se almacene una sola vez.
    p Entre los principales beneficios de la normalización se encuentran:
    .tarjeta--container.row.mb-4
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img32.svg', alt='Texto que describa la imagen')
          
        h5.text-center Reduce la duplicación de datos.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img33.svg', alt='Texto que describa la imagen')
          
        h5.text-center Mejora la organización de la información.
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img34.svg', alt='Texto que describa la imagen')
          
        h5.text-center Facilita el mantenimiento y actualización de los datos.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img35.svg', alt='Texto que describa la imagen')
          
        h5.text-center Garantiza mayor integridad y consistencia en la base de datos.
    p Las formas normales más utilizadas en el diseño de bases de datos son las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img36.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Primera forma normal (1FN)")
            p Se cumple cuando cada campo de la tabla contiene valores atómicos, es decir, un solo valor por celda, y no existen grupos repetidos de datos.
          .row(titulo="Segunda forma normal (2FN)")
            p Se alcanza cuando la tabla ya cumple con la primera forma normal y, además, todos los atributos dependen completamente de la clave primaria, evitando dependencias parciales.
          .row(titulo="Tercera forma normal (3FN)")
            p Se cumple cuando la tabla está en segunda forma normal y los atributos no dependen de otros atributos que no sean la clave primaria, eliminando dependencias transitivas.
    p Para comprender mejor este proceso, se presenta un ejemplo sencillo:
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Ejemplo de normalización de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tabla no normalizada
                  th Problema identificado
              tbody
                tr(style="background-color: #F3F9FF;")
                  th id_usuario, nombre_usuario, libro, autor_libro.
                  td Un mismo usuario puede tener varios libros, lo que genera repetición de datos.
    p.mb-4 Después de aplicar la normalización, la información puede organizarse de la siguiente manera, mediante las tablas Usuario, Libro y Préstamo:
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Usuario
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tabla Usuario
                  th Columnas
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Usuario.
                  td id_usuario (PK), nombre_usuario.
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Libro
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tabla Libro
                  th Columnas
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Libro.
                  td id_libro (PK), titulo, autor.
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Préstamo
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tabla Prestamo
                  th Columnas
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Prestamo.
                  td id_prestamo (PK), id_usuario, id_libro.
    p En este caso, la información se divide en varias tablas relacionadas, evitando la duplicación de datos y facilitando la gestión de la base de datos.
    p En conclusión, la normalización es una técnica fundamental en el diseño de bases de datos, ya que permite estructurar la información de forma lógica y organizada, contribuyendo a la creación de sistemas más eficientes, consistentes y fáciles de mantener.
</template>

<script>
export default {
  name: 'Tema2',
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
