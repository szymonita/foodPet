import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Age {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100
  })
  displayValue!: string;
  
  @Column()
  value!: number;

}
