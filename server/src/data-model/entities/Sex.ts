import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sex {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100
  })
  displayValue!: string;
  
  @Column()
  value!: number;

}
