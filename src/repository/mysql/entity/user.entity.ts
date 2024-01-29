import { IsDate } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntitiy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @IsDate()
    birthday: Date;
}