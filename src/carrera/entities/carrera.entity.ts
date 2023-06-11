import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Carrera {
  @PrimaryColumn()
  codigo: number

  @Column()
  nombre: string
}
