<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Lenguajes y manipulación de bases de datos
    p La manipulación de bases de datos se realiza mediante lenguajes especializados que permiten definir, administrar y consultar la información almacenada en los sistemas gestores de bases de datos. Estos lenguajes forman parte del #[b Structured Query Language (SQL)], ampliamente utilizado para interactuar con bases de datos relacionales.
    .bloque-texto-gg.bgf5.mb-4
      .bloque-texto-gg__texto.p-4
        p A través de estos lenguajes es posible crear la estructura de la base de datos, modificar tablas, insertar información, consultar registros y eliminar datos cuando sea necesario. Estas acciones permiten administrar de manera organizada la información y garantizar su correcta gestión dentro de los sistemas de información.
        p.mb-0 Los lenguajes utilizados para trabajar con bases de datos se agrupan generalmente en dos categorías principales. Por un lado, se encuentran los lenguajes orientados a la definición de la estructura de los datos, que permiten crear y modificar la organización de la base de datos. Por otro lado, existen los lenguajes destinados a la manipulación de los datos, que permiten insertar, actualizar, consultar o eliminar la información almacenada.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
      )
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 Comprender el funcionamiento de estos lenguajes es fundamental para gestionar adecuadamente una base de datos, ya que permiten controlar tanto la estructura como el contenido de la información. En los siguientes apartados se describen los principales tipos de lenguajes utilizados en la administración de bases de datos y las operaciones más comunes que se realizan mediante ellos.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Lenguajes DDL y DML
    p El Structured Query Language (SQL) es el lenguaje utilizado para crear, administrar y manipular bases de datos relacionales. Dentro de SQL existen diferentes tipos de instrucciones que permiten gestionar tanto la estructura como la información almacenada en la base de datos.
    p.mb-4 Entre los más importantes se encuentran el Data Definition Language (DDL) y el Data Manipulation Language (DML).
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Data Definition Language (DDL)
    p Es el conjunto de comandos que permite definir y administrar la estructura de la base de datos. A través de este lenguaje se crean y modifican los objetos que almacenan la información, como tablas, columnas y restricciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.align-items-center.mb-4.bgf5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', style="width: 120px;margin-left:-12%", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 El DDL es fundamental en el proceso de diseño de bases de datos, ya que permite implementar la estructura definida en el modelo lógico dentro del sistema gestor de bases de datos.
    p Entre sus funciones principales se encuentran:
    .tarjeta--container.row.mb-4
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Texto que describa la imagen')
          
        h5.text-center Crear estructuras de datos como bases de datos y tablas.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Modificar estructuras existentes.
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Eliminar objetos de la base de datos.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='Texto que describa la imagen')
          
        h5.text-center Definir restricciones que garantizan la integridad de los datos.
    p Los comandos más utilizados del DDL son:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Comandos del DDL
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Comando
                  th Función
              tbody
                tr(style="background-color: #F3F9FF;")
                  td CREATE
                  td Permite crear bases de datos, tablas u otros objetos.
                tr
                  td ALTER
                  td Permite modificar la estructura de una tabla existente.
                tr(style="background-color: #F3F9FF;")
                  td DROP
                  td Permite eliminar objetos de la base de datos.
                tr
                  td TRUNCATE
                  td Elimina todos los registros de una tabla sin borrar su estructura.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .titulo2
          p.text-center.mb-0 Ejemplo de creación de una tabla:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white CREATE TABLE Estudiante (
                        p.text-white.ms-3.mb-1
                          | id_estudiante INT PRIMARY KEY,
                        p.text-white.ms-3.mb-1
                          | nombre VARCHAR(50),
                        p.text-white.ms-3.mb-1
                          | edad INT
                      h4.text-white )
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Data Manipulation Language (DML)
    p Corresponde al conjunto de comandos que permiten gestionar la información almacenada en las tablas de una base de datos.
    p A través del DML es posible insertar, consultar, modificar o eliminar registros dentro de las tablas.
    p Las operaciones principales del DML son:
    .tarjeta--container.row.mb-4
      .col.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='Texto que describa la imagen')
          
        h5.text-center Insertar nuevos registros.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img8.svg', alt='Texto que describa la imagen')
          
        h5.text-center Consultar información almacenada.
      .col.tarjeta.bgf1.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img9.svg', alt='Texto que describa la imagen')
          
        h5.text-center Actualizar datos existentes.
      .col.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img10.svg', alt='Texto que describa la imagen')
          
        h5.text-center Eliminar registros cuando sea necesario.
    p Los comandos más utilizados del DML son:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Comandos del DML
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Comando
                  th Función
              tbody
                tr(style="background-color: #F3F9FF;")
                  td INSERT
                  td Permite agregar nuevos registros a una tabla.
                tr
                  td SELECT
                  td Permite consultar información almacenada.
                tr(style="background-color: #F3F9FF;")
                  td UPDATE
                  td Permite modificar datos existentes.
                tr
                  td DELETE
                  td Permite eliminar registros de una tabla.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .titulo2
          p.text-center.mb-0 Ejemplo de inserción de datos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white INSERT INTO Estudiante (id_estudiante, nombre, edad)
                        p.text-white.ms-3.mb-1
                          | VALUES (1, 'Ana', 20);
    p.mb-0 En conjunto, los lenguajes DDL y DML permiten administrar tanto la estructura de la base de datos como la información que se almacena en ella, siendo elementos fundamentales para el desarrollo y funcionamiento de los sistemas de información.    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Creación de bases de datos y tablas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', alt='Texto que describa la imagen')
      .col-lg-8
        p La creación de bases de datos y tablas constituye uno de los primeros pasos en la implementación de un sistema de información. En esta etapa se definen las estructuras que permitirán almacenar, organizar y gestionar los datos dentro del sistema gestor de bases de datos.
        .bgf1.p-4.mb-3
          p.mb-0 Una base de datos es un conjunto organizado de información que se almacena de manera estructurada para facilitar su consulta, administración y actualización. Dentro de una base de datos se crean tablas, las cuales permiten guardar los datos relacionados con una entidad específica del sistema.
        p Cada tabla está compuesta por columnas y filas. Las columnas representan los atributos o características de la información que se desea registrar, mientras que las filas corresponden a cada uno de los registros almacenados.
        p.mb-0 Para realizar estas operaciones se utilizan comandos del Data Definition Language (DDL) dentro del lenguaje Structured Query Language (SQL).
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Creación de una base de datos
    p El comando CREATE DATABASE permite crear una nueva base de datos en el sistema gestor. 
    p Por ejemplo:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-5.mb-3.mb-md-0
                h4.text-white CREATE DATABASE Biblioteca;
        .bgf1.p-4
          p.mb-0 Este comando crea una base de datos llamada Biblioteca, que servirá como contenedor para las tablas y demás objetos relacionados con el sistema.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Creación de una tabla
    p Una vez creada la base de datos, es posible crear tablas que permitan almacenar la información. Para ello se utiliza el comando CREATE TABLE.
    p Por ejemplo:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-5.mb-3.mb-md-0
                h4.text-white CREATE TABLE Usuario (
                p.text-white.ms-3.mb-1 id_usuario INT PRIMARY KEY,
                p.text-white.ms-3.mb-1 nombre VARCHAR(100),
                p.text-white.ms-3.mb-1 correo VARCHAR(100)
                h4.text-white )
        .bgf1.p-4
          p.mb-0 En este ejemplo se crea la tabla Usuario, la cual contiene tres columnas:
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              p.mb-0 #[b id_usuario:] identifica de manera única a cada usuario y funciona como clave primaria.
            li
              i.lista-ul__vineta
              p.mb-0 #[b nombre:] almacena el nombre del usuario.
            li
              i.lista-ul__vineta
              p.mb-0 #[b correo:] registra la dirección de correo electrónico.
    p.mb-0 La creación adecuada de bases de datos y tablas permite establecer una estructura organizada para el almacenamiento de la información, facilitando posteriormente la manipulación, consulta y administración de los datos dentro del sistema.
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Modificación de estructuras de tablas y columnas
    figure
      img(src='@/assets/curso/temas/tema4/img12.png' alt='AvatarTop')
    .p-4.bgf1.mb-4
      p.mb-0 En el proceso de administración de una base de datos, es común que la estructura de las tablas necesite ajustarse con el tiempo. Estas modificaciones pueden surgir por nuevos requerimientos del sistema, cambios en los procesos de información o la necesidad de agregar nuevos atributos a los datos almacenados.
    p La modificación de la estructura de las tablas se realiza mediante el comando #[b ALTER TABLE], el cual forma parte del #[b Data Definition Language (DDL)] dentro del #[b Structured Query Language (SQL)]. Este comando permite agregar, modificar o eliminar columnas en una tabla existente sin afectar la base de datos completa.
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Agregar una nueva columna")
        p El comando ADD permite incorporar un nuevo atributo a una tabla. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white ALTER TABLE Usuario
                      h4.text-white ADD telefono VARCHAR(20);
        p En este caso se agrega la columna #[b telefono] a la tabla #[b Usuario], permitiendo registrar un número de contacto para cada usuario.
      .row(titulo="Modificar una columna existente")
        p El comando ALTER COLUMN o MODIFY permite cambiar las características de una columna, como el tipo de dato o su tamaño. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white ALTER TABLE Usuario
                      h4.text-white ALTER COLUMN nombre VARCHAR(150);
        p.mb-0 En este ejemplo se modifica la longitud del campo nombre, ampliando su capacidad para almacenar más caracteres.
      .row(titulo="Eliminar una columna")
        p El comando DROP COLUMN permite eliminar una columna de una tabla cuando ya no es necesaria. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white ALTER TABLE Usuario
                      h4.text-white DROP COLUMN telefono;
        p.mb-0 Esta instrucción elimina la columna #[b telefono] de la tabla #[b Usuario].
    p.mb-0 La modificación de estructuras de tablas y columnas permite adaptar la base de datos a las necesidades cambiantes de los sistemas de información, manteniendo la organización y consistencia de los datos almacenados.    
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Inserción, actualización y eliminación de registros
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .p-4.cajon.color-secundario.mb-2
          p La gestión de la información almacenada en una base de datos implica realizar diferentes operaciones sobre los registros de las tablas. Estas operaciones permiten agregar nuevos datos, modificar información existente o eliminar registros que ya no son necesarios. Para ello se utilizan los comandos del Data Manipulation Language (DML) del Structured Query Language (SQL).
        p Estas acciones permiten mantener actualizada la información dentro del sistema y garantizan que los datos reflejen correctamente las actividades o procesos que se registran en la base de datos.
      
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/Image 82.svg' alt='AvatarTop')
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Inserción de registros")
        p La inserción de datos se realiza mediante el comando INSERT, el cual permite agregar nuevos registros a una tabla. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-2
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white INSERT INTO Usuario (id_usuario, nombre, correo)
                      h4.text-white VALUES (1, 'Ana López', 'ana@correo.com');
        p En este caso se agrega un nuevo registro a la tabla Usuario, donde se almacenan los datos correspondientes a un usuario del sistema.
      .row(titulo="Actualización de registros")
        p La actualización de datos se realiza mediante el comando UPDATE, el cual permite modificar la información de uno o varios registros existentes. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white UPDATE Usuario
                      h4.text-white SET correo = 'ana.lopez@correo.com'
                      h4.text-white WHERE id_usuario = 1;
        p En este ejemplo se actualiza el correo electrónico del usuario cuyo identificador es 1.
      .row(titulo="Eliminación de registros")
        p Se realiza mediante el comando DELETE, el cual permite borrar información almacenada en una tabla. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white DELETE FROM Usuario
                      h4.text-white WHERE id_usuario = 1;
        p.mb-0 En este caso se elimina el registro del usuario con identificador 1 de la tabla Usuario.
    p.mb-0 Estas operaciones permiten manipular la información almacenada en la base de datos de manera controlada, facilitando la administración, actualización y mantenimiento de los datos dentro de los sistemas de información.
    
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.5 Eliminación de tablas y bases de datos
    p En la administración de bases de datos también es posible eliminar estructuras que ya no son necesarias dentro del sistema. Estas operaciones se realizan mediante comandos del Data Definition Language (DDL) del Structured Query Language (SQL), los cuales permiten eliminar tablas completas o incluso bases de datos.
    p.mb-4 La eliminación de estos elementos debe realizarse con precaución, ya que al ejecutar estos comandos se pierde la información almacenada y la estructura asociada.
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Eliminación de tablas")
        p Para eliminar una tabla de una base de datos se utiliza el comando DROP TABLE. Este comando elimina tanto la estructura de la tabla como todos los registros que contiene. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white DROP TABLE Usuario;
        p En este caso se elimina completamente la tabla Usuario, junto con todos los datos almacenados en ella.
      .row(titulo="Eliminación de bases de datos")
        p Cuando se requiere eliminar una base de datos completa, se utiliza el comando DROP DATABASE. Esta instrucción elimina la base de datos y todas las tablas y estructuras que contiene. Por ejemplo:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68EAE0;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #68C6EA;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFB758;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-5.mb-3.mb-md-0
                h4.text-white DROP DATABASE Biblioteca;
        p.mb-0 En este ejemplo se elimina la base de datos llamada Biblioteca, incluyendo todas las tablas y registros asociados.
    p.mb-0 La eliminación de tablas y bases de datos forma parte de las tareas de mantenimiento y administración de los sistemas de información. Sin embargo, estas acciones deben ejecutarse con cuidado para evitar la pérdida accidental de datos importantes.  
</template>

<script>
export default {
  name: 'Tema4',
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
