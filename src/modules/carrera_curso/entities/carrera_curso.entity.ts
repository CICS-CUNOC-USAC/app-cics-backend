import { ApiProperty } from '@nestjs/swagger';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

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
}
