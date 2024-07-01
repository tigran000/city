import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Celebrity } from "./Celebrity";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  population: number;

  @OneToOne(() => Celebrity)
  @JoinColumn()
  celebrity: Celebrity;
}
