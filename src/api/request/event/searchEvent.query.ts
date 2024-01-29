import { Type } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class SearchEventQuery{
    @IsString()
    @IsOptional()
    title: string;
  
    @IsString()
    @IsOptional()
    description: string;
}