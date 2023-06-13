import { ApiProperty } from '@nestjs/swagger';
import { CarreraCurso } from 'src/modules/carrera_curso/entities/carrera_curso.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CarreraCursoPrerequisito {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne(() => CarreraCurso)
  @JoinColumn([
    {
      name: 'codigo_carrera',
      referencedColumnName: 'codigo_carrera',
    },
    { name: 'codigo_curso', referencedColumnName: 'codigo_curso' },
  ])
  @ApiProperty()
  codigo_carrera_codigo_curso: [number, string];

  @Column()
  @ApiProperty()
  es_curso: boolean;
}
