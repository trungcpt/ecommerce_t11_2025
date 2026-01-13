import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userID: string) {
    return this.usersService.getUser(userID);
  }

  // /users?name=trungcpt
  //   @Get('query')
  //   getUser(@Query('name') name: string, @Query('age') age: string) {
  //     console.log('>>> query', name, age);
  //   }

  @Post()
  createUser(@Body() userCreate: CreateUserDTO) {
    return this.usersService.createUser(userCreate);
  }

  // @Put(':id')
  @Patch(':id')
  updateUser(
    @Param('id') userID: string,
    @Body() userDataUpdate: Omit<UpdateUserDTO, 'id'>,
  ) {
    const userIDParsed = parseInt(userID);
    return this.usersService.updateUser({
      id: userIDParsed,
      ...userDataUpdate,
    });
  }

  @Delete(':id')
  deleteUser(@Param('id') userID: string) {
    return this.usersService.deleteUser(userID);
  }
}
