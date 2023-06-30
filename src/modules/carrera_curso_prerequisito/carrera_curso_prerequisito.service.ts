import { Injectable } from '@nestjs/common';
import { CreateCarreraCursoPrerequisitoDto } from './dto/create-carrera_curso_prerequisito.dto';
import { UpdateCarreraCursoPrerequisitoDto } from './dto/update-carrera_curso_prerequisito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarreraCursoPrerequisito } from './entities/carrera_curso_prerequisito.entity';
import { In, Repository } from 'typeorm';
import { PrerequisitoCurso } from '../prerequisito_curso/entities/prerequisito_curso.entity';
import { PrerequisitoCredito } from '../prerequisito_credito/entities/prerequisito_credito.entity';

@Injectable()
export class CarreraCursoPrerequisitoService {
  constructor(
    @InjectRepository(CarreraCursoPrerequisito)
    private readonly carreraCursoPrerequisitoRepository: Repository<CarreraCursoPrerequisito>,

    @InjectRepository(PrerequisitoCredito)
    private readonly prerequisitosCreditoRepository: Repository<PrerequisitoCredito>,

    @InjectRepository(PrerequisitoCurso)
    private readonly prerequisitosCursoRepository: Repository<PrerequisitoCurso>,
  ) {}

  create(createCarreraCursoPrerequisitoDto: CreateCarreraCursoPrerequisitoDto) {
    return 'This action adds a new carreraCursoPrerequisito';
  }

  findAll() {
    return `This action returns all carreraCursoPrerequisito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carreraCursoPrerequisito`;
  }

  async prerequisitosCurso(carrera: number, curso: string) {
    let ids_prerequisitos = await this.carreraCursoPrerequisitoRepository.find({
      select: {
        id: true,
        es_curso: true
      },
      where: {
        codigo_carrera: carrera,
        codigo_curso: curso,
      },
    });

    let id_cursos = ids_prerequisitos.filter((id_object) => id_object.es_curso).map((id_object) => id_object.id)
    let id_creditos = ids_prerequisitos.filter((id_object) => !id_object.es_curso).map((id_object) => id_object.id)

    let prerequisitosCurso = []
    if (id_cursos.length > 0) {
        prerequisitosCurso = await this.prerequisitosCursoRepository.createQueryBuilder('prerequisito_curso')
          .leftJoinAndSelect('prerequisito_curso.codigo_curso', 'curso', 'curso.codigo = prerequisito_curso.codigo_curso')
          .select(['prerequisito_curso.id','curso.codigo'])
          .where('prerequisito_curso.id_carrera_curso_prerequisito IN (:...ids)', { ids: id_cursos })
          .getMany();
    } 

    let prerequisitosCredito = []
    if (id_creditos.length > 0) {
        prerequisitosCredito = await this.prerequisitosCreditoRepository.createQueryBuilder('prerequisito_credito')
          .where('prerequisito_credito.id_carrera_curso_prerequisito IN (:...ids)', { ids: id_creditos })
          .getMany();
    }

    return {cursos: prerequisitosCurso, creditos: prerequisitosCredito};
  }

  update(
    id: number,
    updateCarreraCursoPrerequisitoDto: UpdateCarreraCursoPrerequisitoDto,
  ) {
    return `This action updates a #${id} carreraCursoPrerequisito`;
  }

  remove(id: number) {
    return `This action removes a #${id} carreraCursoPrerequisito`;
  }
}
