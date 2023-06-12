import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
