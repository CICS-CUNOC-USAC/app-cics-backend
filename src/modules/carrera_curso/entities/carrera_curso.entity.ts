import { ApiProperty } from '@nestjs/swagger';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class CarreraCurso {
  @ManyToOne(() => Carrera)
  @JoinColumn({name: "codigo_carrera"})
  @PrimaryColumn()
  @ApiProperty()
  codigo_carrera: number;

  @ManyToOne(() => Curso)
  @JoinColumn({name: "codigo_curso"})
  @PrimaryColumn()
  @ApiProperty()
  codigo_curso: string;

  @Column()
  @ApiProperty()
  semestre: number;

  @Column()
  @ApiProperty()
  area_carrera: number;

  @Column()
  @ApiProperty()
  obligatoriedad: boolean;

  @OneToMany(() => CarreraCursoPrerequisito, (carrera_curso_prerequisito) => carrera_curso_prerequisito.codigo_carrera_codigo_curso)
  @ApiProperty()
  prerequisito_carrera: any[];
}
