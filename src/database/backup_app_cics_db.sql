CREATE DATABASE app_cics_db;

\c app_cics_db;

CREATE TABLE carrera(
  codigo INT NOT NULL,
  nombre VARCHAR(30) NOT NULL,
  PRIMARY KEY(codigo)
);

INSERT INTO carrera (codigo, nombre) VALUES 
  ( 33, 'Civil' ),( 34, 'Mecánica' ),
  ( 35, 'Industrial' ),( 36, 'Mecánica Industrial' ),
  ( 58, 'Ciencias y Sistemas' );

CREATE TABLE curso (
  codigo VARCHAR(6) NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  descripcion VARCHAR,
  creditos INT NOT NULL,
  PRIMARY KEY(codigo)
);

INSERT INTO curso ( codigo, nombre, creditos ) VALUES 
  ( '028', 'Social Humanistica 1', 4 ),
  ( '169', 'Matematica Basica 1', 7 ),
  ( '2666', 'Orientacion y Liderazgo', 1 ),
  ( '119', 'Tecnica Complementaria 1', 3 ),
  ( '177', 'Deportes 1', 1 ),
  ( '216', 'Quimica 1', 3 ),
  ( '2792', 'Idioma Tecnico 1', 2 ),

  ( '029', 'Social Humanistica 2', 4 ),
  ( '170', 'Matematica Basica 2', 7 ),
  ( '2667', 'Tecnicas de Investigacion y Estudio', 3 ),
  ( '072', 'Fisica Basica', 5 ),
  ( '178', 'Deportes 2', 1 ),
  ( '2793', 'Idioma Tecnico 2', 2 ),

  ( '2797', 'Logica de Sistemas', 2 ),
  ( '2795', 'Matematica de Computo 1', 5 ),
  ( '2796', 'Introduccion a la Programacion y Computacion 1', 4 ),
  ( '290' , 'Matematica Intermedia 1', 10 ),
  ( '146' , 'Fisica 1', 6 ),
  ( '2794' , 'Idioma Tecnico 3', 2 ),

  ( '949' , 'Estadistica 1', 5 ),
  ( '2798' , 'Lenguajes Formales y de Programacion', 3 ),
  ( '2799' , 'Matematica de Computo 2', 5 ),
  ( '2800' , 'Introduccion a la Programacion y Computacion 2', 5 ),
  ( '085' , 'Logica', 2 ),
  ( '291' , 'Matematica Intermedia 2', 5 ),
  ( '292' , 'Matematica Intermedia 3', 5 ),
  ( '147' , 'Fisica 2', 6 ),
  ( '2801' , 'Idioma Tecnico 4', 2 ),

  ( '2802' , 'Analisis Probabilistico', 4 ),
  ( '2803' , 'Organizacion de Lenguajes y Compiladores 1', 4 ),
  ( '2804' , 'Organizacion Computacional', 3 ),
  ( '2805' , 'Estructura de Datos', 5 ),
  ( '077' , 'Filosofia de la Ciencia', 3 ),
  ( '673' , 'Matematica Aplicada 1', 6 ),
  ( '674' , 'Matematica Aplicada 3', 5 ),
  ( '694' , 'Contabilidad 1', 3 ),
  ( '2806' , 'Principios de Metodologia', 3 ),
  ( '094' , 'Ecologia', 3 ),
  ( '2807' , 'Practica Inicial TI', 0 ),

  ( '2808' , 'Teoria de Sistemas 1', 5 ),
  ( '685' , 'Investigacion de Operaciones 1', 5 ),
  ( '2809' , 'Economia', 4 ),
  ( '2810' , 'Organizacion de Lenguajes y Compiladores 2', 5 ),
  ( '2811' , 'Arquitectura de Computadores y Ensambladores 1', 5 ),
  ( '2812' , 'Manejo e Implementacion de Archivos', 4 ),
  ( '904' , 'Matematica Aplicada 2', 6 ),
  ( '905' , 'Matematica Aplicada 4', 4 ),
  ( '670' , 'Ingenieria Electrica 1', 5 ),
  ( '779' , 'Contabilidad 2', 3 ),
  ( '2670' , 'Gestion de Desastres', 3 ),

  ( '2813' , 'Teoria de Sistemas 2', 5 ),
  ( '795' , 'Investigacion de Operaciones 2', 5 ),
  ( '950' , 'Estadistica 2', 5 ),
  ( '2814' , 'Sistemas Operativos 1', 5 ),
  ( '2815' , 'Arquitectura de Computadores y Ensambladores 2', 4 ),
  ( '2816' , 'Redes de Computadoras 1', 4 ),
  ( '2817' , 'Sistemas de Bases de Datos 1', 5 ),
  ( '943' , 'Administracion de Empresas 1', 5 ),
  ( '919' , 'Contabilidad 3', 3 ),
  ( '2818' , 'Practica Intemedia TI', 0 ),

  ( '2819' , 'Sistemas Operativos 2', 4 ),
  ( '2820' , 'Redes de Computadoras 2', 4 ),
  ( '2821' , 'Sistemas de Bases de Datos 2', 4 ),
  ( '2822' , 'Analisis y Diseño de Sistemas 1', 5 ),
  ( '2823' , 'Seminario de Sistemas 1', 3 ),
  ( '690' , 'Ingenieria Economica 1', 5 ),

  ( '2824' , 'Modelacion y Simulacion 1', 5 ),
  ( '2825' , 'Sistemas Organizacionales y Gerenciales 1', 4 ),
  ( '2830' , 'Emprendedores de Negocios Informaticos', 4 ),
  ( '2826' , 'Inteligencia Artificial 1', 4 ),
  ( '2831' , 'Seguridad y Auditorias de Redes', 4 ),
  ( '2827' , 'Analisis y Diseño de Sistemas 2', 3 ),
  ( '2832' , 'Sistemas Aplicados 1', 5 ),
  ( '2833' , 'Bases de Datos Avanzadas', 5 ),
  ( '2828' , 'Seminario de Sistemas 2', 3 ),
  ( '2672' , 'Introduccion a la Evaluacion de Impacto Ambiental', 4 ),
  ( '922' , 'Ingenieria Economica 2', 4 ),
  ( '2570' , 'Etica Profesional', 4 ),
  ( '2829' , 'Practica Final', 0 ),

  ( '2834' , 'Sistemas Organizacionales y Gerenciales 2', 4 ),
  ( '2835' , 'Modelacion y Simulacion 2', 5 ),
  ( '2838' , 'Inteligencia Artificial 2', 4 ),
  ( '2839' , 'Redes de Nueva Generacion', 4 ),
  ( '2836' , 'Software Avanzado', 6 ),
  ( '2840' , 'Sistemas Aplicados 2', 6 ),
  ( '2841' , 'Auditoria de Proyectos de Software', 5 ),
  ( '2842' , 'Seminario de Investigacion EPS', 4 ),
  ( '912' , 'Planeamiento', 6 ),
  ( '909' , 'Preparacion y Evaluacion de Proyectos 1', 4 ),
  ( '2837' , 'Seminario de Investigacion', 3 );

CREATE TABLE carrera_curso (
  codigo_carrera INT NOT NULL,
  codigo_curso VARCHAR(6) NOT NULL,
  semestre INT NOT NULL,
  area_carrera INT NOT NULL,
  obligatoriedad BOOLEAN NOT NULL,
  PRIMARY KEY(codigo_carrera, codigo_curso),
  FOREIGN KEY(codigo_carrera) REFERENCES carrera(codigo),
  FOREIGN KEY(codigo_curso) REFERENCES curso(codigo)
);

INSERT INTO carrera_curso (
  codigo_carrera,
  codigo_curso,
  semestre,
  area_carrera,
  obligatoriedad
) VALUES 
  ( 58, '028', 1, 4 , true),
  ( 58, '169', 1, 4 , true),
  ( 58, '2666', 1, 4 , true),
  ( 58, '119', 1, 4 , true),
  ( 58, '177', 1, 4 , false),
  ( 58, '216', 1, 4 , true),
  ( 58, '2792', 1, 4 , false),

  ( 58, '029', 2, 4 , true),
  ( 58, '170', 2, 4 , true),
  ( 58, '2667', 2, 4 , true),
  ( 58, '072', 2, 4 , true),
  ( 58, '178', 2, 4 , false),
  ( 58, '2793', 2, 4 , false),

  ( 58, '2797', 3, 1, true ),
  ( 58, '2795', 3, 2, true ),
  ( 58, '2796', 3, 3, true ),
  ( 58, '290' , 3, 4, true ),
  ( 58, '146' , 3, 4, true ),
  ( 58, '2794' , 3, 4, false ),

  ( 58, '949' , 4, 1, true ),
  ( 58, '2798' , 4, 2, true ),
  ( 58, '2799' , 4, 2, true ),
  ( 58, '2800' , 4, 3, true ),
  ( 58, '085' , 4, 4, false ),
  ( 58, '291' , 4, 4, true ),
  ( 58, '292' , 4, 4, true ),
  ( 58, '147' , 4, 4, true ),
  ( 58, '2801' , 4, 4, false ),

  ( 58, '2802' , 5, 1, true ),
  ( 58, '2803' , 5, 2, true ),
  ( 58, '2804' , 5, 2, true ),
  ( 58, '2805' , 5, 3, true ),
  ( 58, '077' , 5, 4, false ),
  ( 58, '673' , 5, 4, true ),
  ( 58, '674' , 5, 4, true ),
  ( 58, '694' , 5, 4, false ),
  ( 58, '2806' , 5, 4, false ),
  ( 58, '094' , 5, 4, false ),
  ( 58, '2807' , 5, 5, true ),

  ( 58, '2808' , 6, 1, true ),
  ( 58, '685' , 6, 1, true ),
  ( 58, '2809' , 6, 1, true ),
  ( 58, '2810' , 6, 2, true ),
  ( 58, '2811' , 6, 2, true ),
  ( 58, '2812' , 6, 3, true ),
  ( 58, '904' , 6, 4, false ),
  ( 58, '905' , 6, 4, false ),
  ( 58, '670' , 6, 4, false ),
  ( 58, '779' , 6, 4, false ),
  ( 58, '2670' , 6, 4, false ),

  ( 58, '2813' , 7, 1, true ),
  ( 58, '795' , 7, 1, true ),
  ( 58, '950' , 7, 1, false ),
  ( 58, '2814' , 7, 2, true ),
  ( 58, '2815' , 7, 2, true ),
  ( 58, '2816' , 7, 2, true ),
  ( 58, '2817' , 7, 3, true ),
  ( 58, '943' , 7, 3, false ),
  ( 58, '919' , 7, 4, false ),
  ( 58, '2818' , 7, 5, true ),

  ( 58, '2819' , 8, 2, true ),
  ( 58, '2820' , 8, 2, true ),
  ( 58, '2821' , 8, 3, true ),
  ( 58, '2822' , 8, 3, true ),
  ( 58, '2823' , 8, 3, true ),
  ( 58, '690' , 8, 4, false ),

  ( 58, '2824' , 9, 1, true ),
  ( 58, '2825' , 9, 1, true ),
  ( 58, '2830' , 9, 1, false ),
  ( 58, '2826' , 9, 2, true ),
  ( 58, '2831' , 9, 2, false ),
  ( 58, '2827' , 9, 3, true ),
  ( 58, '2832' , 9, 3, false ),
  ( 58, '2833' , 9, 3, false ),
  ( 58, '2828' , 9, 3, true ),
  ( 58, '2672' , 9, 4, false ),
  ( 58, '922' , 9, 4, false ),
  ( 58, '2570' , 9, 4, false ),
  ( 58, '2829' , 9, 5, true ),

  ( 58, '2834' , 10, 1, true ),
  ( 58, '2835' , 10, 1, true ),
  ( 58, '2838' , 10, 2, false ),
  ( 58, '2839' , 10, 2, false ),
  ( 58, '2836' , 10, 3, true ),
  ( 58, '2840' , 10, 3, false ),
  ( 58, '2841' , 10, 3, false ),
  ( 58, '2842' , 10, 4, false ),
  ( 58, '912' , 10, 4, false ),
  ( 58, '909' , 10, 4, false ),
  ( 58, '2837' , 10, 4, true );

CREATE TABLE carrera_curso_prerequisito (
  id SERIAL NOT NULL ,
  codigo_carrera INT NOT NULL,
  codigo_curso VARCHAR(6) NOT NULL,
  es_curso BOOLEAN NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(codigo_carrera) REFERENCES carrera(codigo),
  FOREIGN KEY(codigo_curso) REFERENCES curso(codigo)
);

INSERT INTO carrera_curso_prerequisito ( codigo_carrera, codigo_curso, es_curso ) VALUES 
  ( 58, '029', true ),
  ( 58, '170', true ),
  ( 58, '072', true ),
  ( 58, '178', true ),
  ( 58, '2793', true ),

  ( 58, '2797', true ),
  ( 58, '2797', false ),
  ( 58, '2795', true ),
  ( 58, '2795', false ),
  ( 58, '2796', true ),
  ( 58, '2796', false ),
  ( 58, '290', true ),
  ( 58, '146', true ),
  ( 58, '146', true ),
  ( 58, '2794', true );

CREATE TABLE prerequisito_curso (
  id SERIAL NOT NULL,
  codigo_curso VARCHAR(6) NOT NULL,
  id_carrera_curso_prerequisito INT NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(codigo_curso) REFERENCES curso(codigo),
  FOREIGN KEY(id_carrera_curso_prerequisito) REFERENCES carrera_curso_prerequisito(id)
);

INSERT INTO prerequisito_curso ( codigo_curso, id_carrera_curso_prerequisito ) VALUES 
  ( '028', 1 ),
  ( '169', 2 ),
  ( '169', 3 ),
  ( '177', 4 ),
  ( '2792', 5 ),

  ( '170', 6 ),
  ( '170', 8 ),
  ( '170', 10 ),
  ( '170', 12 ),
  ( '170', 13 ),
  ( '170', 14 ),
  ( '2793', 15 );

CREATE TABLE prerequisito_credito (
  id_carrera_curso_prerequisito INT NOT NULL,
  creditos INT NOT NULL,

  PRIMARY KEY(id_carrera_curso_prerequisito),
  FOREIGN KEY(id_carrera_curso_prerequisito) REFERENCES carrera_curso_prerequisito(id)
);

INSERT INTO prerequisito_credito ( id_carrera_curso_prerequisito, creditos ) VALUES 
  ( 7, 33 ),
  ( 9, 33 ),
  ( 11, 33 );

/*
SELECT para ver solo cursos que tienen creditos como prerequisitos 
y cuantos creditos tienen
*/
SELECT c.codigo, c.nombre, pc.creditos 
  FROM curso as c
  JOIN carrera_curso_prerequisito as ccp
    ON c.codigo=ccp.codigo_curso
  JOIN prerequisito_credito as pc
    ON cpp.id=pc.id_carrera_curso_prerequisito;
