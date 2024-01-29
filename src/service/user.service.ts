import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/api/request/user/createUser.dto";
import { UserRepository } from "src/repository/mysql/user.repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository,) {}

    getUsers() {
        return this.userRepository.findAll();
    }

    insertUser(dto: CreateUserDto){
        return this.userRepository.create(dto);
    }
}