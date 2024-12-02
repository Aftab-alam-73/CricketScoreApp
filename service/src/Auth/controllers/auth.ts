import { Controller,Post } from "@nestjs/common";

@Controller("/auth")
export class AuthController {
  @Post('/register')
  async register(): Promise<any> {
  return { message: 'User registered successfully' };
  }
  @Post('/login')
  async login(): Promise<any> {
    return { message: 'User logged in successfully' };
  } 
}