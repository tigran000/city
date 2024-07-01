import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Celebrity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  occupation: string;
}
