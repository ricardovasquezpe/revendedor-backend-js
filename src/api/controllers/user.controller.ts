import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "src/service/user.service";
import { AuthGuard } from "src/utils/guards/auth.guard";
import { ExceptionInterceptor } from "src/utils/interceptors/exception.interceptor";
import { CreateUserDto } from "../request/user/createUser.dto";

@Controller("/user")
/*@UseGuards(AuthGuard)*/
@UseInterceptors(ExceptionInterceptor)
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/')
    public getAll() {
        return this.userService.getUsers();
    }

    @Post()
    public create(@Body() dto: CreateUserDto){
        return this.userService.insertUser(dto);
    }
}