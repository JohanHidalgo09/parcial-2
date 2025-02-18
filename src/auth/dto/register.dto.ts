import { Transform } from "class-transformer";
import { IsEmail,IsNotEmpty, IsString } from "class-validator";

export class RegisterDto{

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

  

    @Transform(({value }) =>  value.trim())
    @IsNotEmpty()
    @IsString()
    password: string;
}