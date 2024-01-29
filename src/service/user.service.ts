import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/api/request/user/createUser.dto";
import { UserEntitiy } from "src/repository/mysql/entity/user.entity";
import { UserRepository } from "src/repository/mysql/user.repository";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        //@InjectRepository(UserEntitiy) private userRepository: Repository<UserEntitiy>,
        private readonly userRepository: UserRepository,
      ) {}

    getUsers() {
        return this.userRepository.findAll();
    }

    insertUser(dto: CreateUserDto){
        return this.userRepository.create(dto);
    }
}