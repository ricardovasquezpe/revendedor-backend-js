import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserEntitiy } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository{
    constructor(
        @InjectRepository(UserEntitiy) private userRepository: Repository<UserEntitiy>
      ) {
    }

    findAll() {
        return this.userRepository.find();
    }

    create(data: any){
        const newUser = this.userRepository.create(data);
        return this.userRepository.save(newUser);
    }
}