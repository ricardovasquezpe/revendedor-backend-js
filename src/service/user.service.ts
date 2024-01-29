import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/api/request/createUser.dto";
import { UserEntitiy } from "src/repository/mysql/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntitiy) private userRepository: Repository<UserEntitiy>,
      ) {}

    getUsers() {
        return this.userRepository.find();
    }

    insertUser(dto: CreateUserDto){
        console.log(dto.birthday);
        console.log(dto.birthday.getDay);
        console.log(dto.birthday.getMonth);
        console.log(dto.birthday.getFullYear);
        const newUser = this.userRepository.create(dto);
        console.log(newUser);
        return this.userRepository.save(newUser);
    }
}