import { ApiProperty } from '@nestjs/swagger';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PrerequisitoCurso {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne(() => Curso, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: 'codigo_curso'})
  @ApiProperty()
  codigo_curso: string;

  @ManyToOne(() => CarreraCursoPrerequisito, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: 'id_carrera_curso_prerequisito'})
  @ApiProperty()
  id_carrera_curso_prerequisito: number;
}
