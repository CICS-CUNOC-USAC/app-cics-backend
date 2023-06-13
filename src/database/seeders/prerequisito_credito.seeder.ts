import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { PrerequisitoCredito } from 'src/modules/prerequisito_credito/entities/prerequisito_credito.entity';
import { PrerequisitoCurso } from 'src/modules/prerequisito_curso/entities/prerequisito_curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrerequisitoCreditoSeeder implements Seeder {
  constructor(
    @InjectRepository(PrerequisitoCredito)
    private readonly prerequisitoCreditoRepository: Repository<PrerequisitoCredito>,
    @InjectRepository(CarreraCursoPrerequisito)
    private readonly carreraCursoPrerequisitoRepository: Repository<CarreraCursoPrerequisito>,
  ) {}

  async seed(): Promise<any> {
    const ids_carrera_curso_prerequisito =
      await this.carreraCursoPrerequisitoRepository.find({
        where: { es_curso: false },
        select: { id: true },
      });

    const prerequisito_credito = [
      { id_carrera_curso_prerequisito: 7, creditos: 33 },
      { id_carrera_curso_prerequisito: 9, creditos: 33 },
      { id_carrera_curso_prerequisito: 11, creditos: 33 },
    ];

    const entidades = [];
    for (let index = 0; index < prerequisito_credito.length; index++) {
      const prerequisito = prerequisito_credito[index];
      const ids = ids_carrera_curso_prerequisito[index];

      prerequisito.id_carrera_curso_prerequisito = ids.id;
      entidades.push(prerequisito);
    }

    return this.prerequisitoCreditoRepository.save(entidades);
  }

  async drop(): Promise<any> {
    return this.prerequisitoCreditoRepository.delete({});
  }
}
