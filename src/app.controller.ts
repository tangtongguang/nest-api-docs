import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginDTO, RegisterInfoDTO } from './logical/user/user.dto';
import { genUsers } from './schema/user';
@ApiTags('user')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('register')
  async register(
    //@Body() body: RegisterInfoDTO
  ) {
    const data = await genUsers(5);
    return data;
  }

  @Post('login')
  @ApiBody({
    description: '用户登录',
    type: LoginDTO,
  })
  async login(@Body() loginParmas: LoginDTO) {
    return await true;
  }

}
