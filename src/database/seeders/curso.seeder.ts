import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoSeeder implements Seeder {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async seed(): Promise<any> {
    const cursos = [
      //Primer Semestre
      { codigo: '028', nombre: 'Social Humanistica 1', creditos: 4 },
      { codigo: '169', nombre: 'Matematica Basica 1', creditos: 7 },
      { codigo: '2666', nombre: 'Orientacion y Liderazgo', creditos: 1 },
      { codigo: '119', nombre: 'Tecnica Complementaria 1', creditos: 3 },
      { codigo: '177', nombre: 'Deportes 1', creditos: 1 },
      { codigo: '216', nombre: 'Quimica 1', creditos: 3 },
      { codigo: '2792', nombre: 'Idioma Tecnico 1', creditos: 2 },

      //Segundo Semestre
      { codigo: '029', nombre: 'Social Humanistica 2', creditos: 4 },
      { codigo: '170', nombre: 'Matematica Basica 2', creditos: 7 },
      { codigo: '2667', nombre: 'Tecnicas de Investigacion y Estudio', creditos: 3 },
      { codigo: '072', nombre: 'Fisica Basica', creditos: 5 },
      { codigo: '178', nombre: 'Deportes 2', creditos: 1 },
      { codigo: '2793', nombre: 'Idioma Tecnico 2', creditos: 2 },

      { codigo: '2797', nombre: 'Logica de Sistemas', creditos: 2 },
      { codigo: '2795', nombre: 'Matematica de Computo 1', creditos: 5 },
      { codigo: '2796', nombre: 'Introduccion a la Programacion y Computacion 1', creditos: 4 },
      { codigo: '290' , nombre: 'Matematica Intermedia 1', creditos: 10 },
      { codigo: '146' , nombre: 'Fisica 1', creditos: 6 },
      { codigo: '2794' , nombre: 'Idioma Tecnico 3', creditos: 2 },

      { codigo: '949' , nombre: 'Estadistica 1', creditos: 5 },
      { codigo: '2798' , nombre: 'Lenguajes Formales y de Programacion', creditos: 3 },
      { codigo: '2799' , nombre: 'Matematica de Computo 2', creditos: 5 },
      { codigo: '2800' , nombre: 'Introduccion a la Programacion y Computacion 2', creditos: 5 },
      { codigo: '085' , nombre: 'Logica', creditos: 2 },
      { codigo: '291' , nombre: 'Matematica Intermedia 2', creditos: 5 },
      { codigo: '292' , nombre: 'Matematica Intermedia 3', creditos: 5 },
      { codigo: '147' , nombre: 'Fisica 2', creditos: 6 },
      { codigo: '2801' , nombre: 'Idioma Tecnico 4', creditos: 2 },

      { codigo: '2802' , nombre: 'Analisis Probabilistico', creditos: 4 },
      { codigo: '2803' , nombre: 'Organizacion de Lenguajes y Compiladores 1', creditos: 4 },
      { codigo: '2804' , nombre: 'Organizacion Computacional', creditos: 3 },
      { codigo: '2805' , nombre: 'Estructura de Datos', creditos: 5 },
      { codigo: '077' , nombre: 'Filosofia de la Ciencia', creditos: 3 },
      { codigo: '673' , nombre: 'Matematica Aplicada 1', creditos: 6 },
      { codigo: '674' , nombre: 'Matematica Aplicada 3', creditos: 5 },
      { codigo: '694' , nombre: 'Contabilidad 1', creditos: 3 },
      { codigo: '2806' , nombre: 'Principios de Metodologia', creditos: 3 },
      { codigo: '094' , nombre: 'Ecologia', creditos: 3 },
      { codigo: '2807' , nombre: 'Practica Inicial TI', creditos: 0 },

      { codigo: '2808' , nombre: 'Teoria de Sistemas 1', creditos: 5 },
      { codigo: '685' , nombre: 'Investigacion de Operaciones 1', creditos: 5 },
      { codigo: '2809' , nombre: 'Economia', creditos: 4 },
      { codigo: '2810' , nombre: 'Organizacion de Lenguajes y Compiladores 2', creditos: 5 },
      { codigo: '2811' , nombre: 'Arquitectura de Computadores y Ensambladores 1', creditos: 5 },
      { codigo: '2812' , nombre: 'Manejo e Implementacion de Archivos', creditos: 4 },
      { codigo: '904' , nombre: 'Matematica Aplicada 2', creditos: 6 },
      { codigo: '905' , nombre: 'Matematica Aplicada 4', creditos: 4 },
      { codigo: '670' , nombre: 'Ingenieria Electrica 1', creditos: 5 },
      { codigo: '779' , nombre: 'Contabilidad 2', creditos: 3 },
      { codigo: '2670' , nombre: 'Gestion de Desastres', creditos: 3 },

      { codigo: '2813' , nombre: 'Teoria de Sistemas 2', creditos: 5 },
      { codigo: '795' , nombre: 'Investigacion de Operaciones 2', creditos: 5 },
      { codigo: '950' , nombre: 'Estadistica 2', creditos: 5 },
      { codigo: '2814' , nombre: 'Sistemas Operativos 1', creditos: 5 },
      { codigo: '2815' , nombre: 'Arquitectura de Computadores y Ensambladores 2', creditos: 4 },
      { codigo: '2816' , nombre: 'Redes de Computadoras 1', creditos: 4 },
      { codigo: '2817' , nombre: 'Sistemas de Bases de Datos 1', creditos: 5 },
      { codigo: '943' , nombre: 'Administracion de Empresas 1', creditos: 5 },
      { codigo: '919' , nombre: 'Contabilidad 3', creditos: 3 },
      { codigo: '2818' , nombre: 'Practica Intemedia TI', creditos: 0 },

      { codigo: '2819' , nombre: 'Sistemas Operativos 2', creditos: 4 },
      { codigo: '2820' , nombre: 'Redes de Computadoras 2', creditos: 4 },
      { codigo: '2821' , nombre: 'Sistemas de Bases de Datos 2', creditos: 4 },
      { codigo: '2822' , nombre: 'Analisis y Diseño de Sistemas 1', creditos: 5 },
      { codigo: '2823' , nombre: 'Seminario de Sistemas 1', creditos: 3 },
      { codigo: '690' , nombre: 'Ingenieria Economica 1', creditos: 5 },

      { codigo: '2824' , nombre: 'Modelacion y Simulacion 1', creditos: 5 },
      { codigo: '2825' , nombre: 'Sistemas Organizacionales y Gerenciales 1', creditos: 4 },
      { codigo: '2830' , nombre: 'Emprendedores de Negocios Informaticos', creditos: 4 },
      { codigo: '2826' , nombre: 'Inteligencia Artificial 1', creditos: 4 },
      { codigo: '2831' , nombre: 'Seguridad y Auditorias de Redes', creditos: 4 },
      { codigo: '2827' , nombre: 'Analisis y Diseño de Sistemas 2', creditos: 3 },
      { codigo: '2832' , nombre: 'Sistemas Aplicados 1', creditos: 5 },
      { codigo: '2833' , nombre: 'Bases de Datos Avanzadas', creditos: 5 },
      { codigo: '2828' , nombre: 'Seminario de Sistemas 2', creditos: 3 },
      { codigo: '2672' , nombre: 'Introduccion a la Evaluacion de Impacto Ambiental', creditos: 4 },
      { codigo: '922' , nombre: 'Ingenieria Economica 2', creditos: 4 },
      { codigo: '2570' , nombre: 'Etica Profesional', creditos: 4 },
      { codigo: '2829' , nombre: 'Practica Final', creditos: 0 },

      { codigo: '2834' , nombre: 'Sistemas Organizacionales y Gerenciales 2', creditos: 4 },
      { codigo: '2835' , nombre: 'Modelacion y Simulacion 2', creditos: 5 },
      { codigo: '2838' , nombre: 'Inteligencia Artificial 2', creditos: 4 },
      { codigo: '2839' , nombre: 'Redes de Nueva Generacion', creditos: 4 },
      { codigo: '2836' , nombre: 'Software Avanzado', creditos: 6 },
      { codigo: '2840' , nombre: 'Sistemas Aplicados 2', creditos: 6 },
      { codigo: '2841' , nombre: 'Auditoria de Proyectos de Software', creditos: 5 },
      { codigo: '2842' , nombre: 'Seminario de Investigacion EPS', creditos: 4 },
      { codigo: '912' , nombre: 'Planeamiento', creditos: 6 },
      { codigo: '909' , nombre: 'Preparacion y Evaluacion de Proyectos 1', creditos: 4 },
      { codigo: '2837' , nombre: 'Seminario de Investigacion', creditos: 3 }
    ];

    return this.cursoRepository.save(cursos);
  }

  async drop(): Promise<any> {
    return this.cursoRepository.delete({});
  }
}
