import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
        canActivate(context: ExecutionContext): boolean {
        console.log('Guard present!');
        const request = context.switchToHttp().getRequest();
        return request.headers.authorization != null;
    }
}