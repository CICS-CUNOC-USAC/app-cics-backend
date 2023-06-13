import { ApiProperty } from '@nestjs/swagger';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from 'typeorm';

@Entity()
export class PrerequisitoCredito {
  @PrimaryColumn()
  @OneToOne(() => CarreraCursoPrerequisito)
  @JoinColumn({name: 'id_carrera_curso_prerequisito', referencedColumnName: 'id'})
  @ApiProperty()
  id_carrera_curso_prerequisito: number;

  @Column()
  @ApiProperty()
  creditos: number;
}
