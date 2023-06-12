import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { CarreraCurso } from 'src/modules/carrera_curso/entities/carrera_curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraCursoSeeder implements Seeder {
  constructor(
    @InjectRepository(CarreraCurso)
    private readonly carreraCursoRepository: Repository<CarreraCurso>,
  ) {}

  async seed(): Promise<any> {
    const carreras_curso = [
      { codigo_carrera: 58, codigo_curso: '028', semestre: 1, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '169', semestre: 1, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '2666', semestre: 1, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '119', semestre: 1, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '177', semestre: 1, area_carrera: 4, obligatoriedad: false},
      { codigo_carrera: 58, codigo_curso: '216', semestre: 1, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '2792', semestre: 1, area_carrera: 4, obligatoriedad: false},

      { codigo_carrera: 58, codigo_curso: '029', semestre: 2, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '170', semestre: 2, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '2667', semestre: 2, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '072', semestre: 2, area_carrera: 4, obligatoriedad: true},
      { codigo_carrera: 58, codigo_curso: '178', semestre: 2, area_carrera: 4, obligatoriedad: false},
      { codigo_carrera: 58, codigo_curso: '2793', semestre: 2, area_carrera: 4, obligatoriedad: false},

      { codigo_carrera: 58, codigo_curso: '2797', semestre: 3, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2795', semestre: 3, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2796', semestre: 3, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '290' , semestre: 3, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '146' , semestre: 3, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2794' , semestre: 3, area_carrera: 4, obligatoriedad: false },

      { codigo_carrera: 58, codigo_curso: '949' , semestre: 4, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2798' , semestre: 4, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2799' , semestre: 4, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2800' , semestre: 4, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '085' , semestre: 4, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '291' , semestre: 4, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '292' , semestre: 4, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '147' , semestre: 4, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2801' , semestre: 4, area_carrera: 4, obligatoriedad: false },

      { codigo_carrera: 58, codigo_curso: '2802' , semestre: 5, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2803' , semestre: 5, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2804' , semestre: 5, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2805' , semestre: 5, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '077' , semestre: 5, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '673' , semestre: 5, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '674' , semestre: 5, area_carrera: 4, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '694' , semestre: 5, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2806' , semestre: 5, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '094' , semestre: 5, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2807' , semestre: 5, area_carrera: 5, obligatoriedad: true },

      { codigo_carrera: 58, codigo_curso: '2808' , semestre: 6, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '685' , semestre: 6, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2809' , semestre: 6, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2810' , semestre: 6, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2811' , semestre: 6, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2812' , semestre: 6, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '904' , semestre: 6, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '905' , semestre: 6, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '670' , semestre: 6, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '779' , semestre: 6, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2670' , semestre: 6, area_carrera: 4, obligatoriedad: false },

      { codigo_carrera: 58, codigo_curso: '2813' , semestre: 7, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '795' , semestre: 7, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '950' , semestre: 7, area_carrera: 1, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2814' , semestre: 7, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2815' , semestre: 7, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2816' , semestre: 7, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2817' , semestre: 7, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '943' , semestre: 7, area_carrera: 3, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '919' , semestre: 7, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2818' , semestre: 7, area_carrera: 5, obligatoriedad: true },

      { codigo_carrera: 58, codigo_curso: '2819' , semestre: 8, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2820' , semestre: 8, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2821' , semestre: 8, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2822' , semestre: 8, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2823' , semestre: 8, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '690' , semestre: 8, area_carrera: 4, obligatoriedad: false },

      { codigo_carrera: 58, codigo_curso: '2824' , semestre: 9, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2825' , semestre: 9, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2830' , semestre: 9, area_carrera: 1, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2826' , semestre: 9, area_carrera: 2, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2831' , semestre: 9, area_carrera: 2, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2827' , semestre: 9, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2832' , semestre: 9, area_carrera: 3, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2833' , semestre: 9, area_carrera: 3, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2828' , semestre: 9, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2672' , semestre: 9, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '922' , semestre: 9, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2570' , semestre: 9, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2829' , semestre: 9, area_carrera: 5, obligatoriedad: true },

      { codigo_carrera: 58, codigo_curso: '2834' , semestre: 10, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2835' , semestre: 10, area_carrera: 1, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2838' , semestre: 10, area_carrera: 2, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2839' , semestre: 10, area_carrera: 2, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2836' , semestre: 10, area_carrera: 3, obligatoriedad: true },
      { codigo_carrera: 58, codigo_curso: '2840' , semestre: 10, area_carrera: 3, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2841' , semestre: 10, area_carrera: 3, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2842' , semestre: 10, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '912' , semestre: 10, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '909' , semestre: 10, area_carrera: 4, obligatoriedad: false },
      { codigo_carrera: 58, codigo_curso: '2837' , semestre: 10, area_carrera: 4, obligatoriedad: true }
    ];

    return this.carreraCursoRepository.save(carreras_curso);
  }

  async drop(): Promise<any> {
    return this.carreraCursoRepository.delete({});
  }
}
