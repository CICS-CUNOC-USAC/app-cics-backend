import { ApiProperty } from '@nestjs/swagger';
import { CarreraCurso } from 'src/modules/carrera_curso/entities/carrera_curso.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryColumn()
  @ApiProperty()
  codigo: string;

  @Column()
  @ApiProperty()
  nombre: string;

  @Column({nullable: true})
  @ApiProperty()
  descripcion: string;

  @Column()
  @ApiProperty()
  creditos: number;

  @OneToMany(() => CarreraCurso, (carrera_curso) => carrera_curso.codigo_curso)
  @ApiProperty()
  carrera_curso: string[];
}
