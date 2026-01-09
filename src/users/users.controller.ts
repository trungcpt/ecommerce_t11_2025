import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

type User = {
  id: number;
  name: string;
  age: number;
};

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: 1, name: 'trungcpt', age: 28 },
    { id: 2, name: 'trungcpt2', age: 26 },
  ];

  @Get()
  getUsers() {
    return this.users;
  }

  private findUser(userID: string) {
    const userIDValue = parseInt(userID);
    const userFound = this.users.find((user) => user.id === userIDValue);
    if (!userFound) throw new BadRequestException('User not found!');
    return userFound;
  }

  @Get(':id')
  getUser(@Param('id') userID: string) {
    const userFound = this.findUser(userID);
    return userFound;
  }

  // /users?name=trungcpt
  //   @Get('query')
  //   getUser(@Query('name') name: string, @Query('age') age: string) {
  //     console.log('>>> query', name, age);
  //   }

  @Post()
  createUser(@Body() userCreate: User) {
    this.users.push(userCreate);
    return userCreate;
  }

  //   @Put(':id')
  @Patch(':id')
  updateUser(@Param('id') userID: string, @Body() userDataUpdate: User) {
    const userUpdate = this.findUser(userID);
    const usersUpdated = this.users.map((user) => {
      if (user.id === userUpdate.id) return { ...user, ...userDataUpdate };
      return user;
    });
    this.users = usersUpdated;
    return userDataUpdate;
  }

  @Delete(':id')
  deleteUser(@Param('id') userID: string) {
    const userDelete = this.findUser(userID);
    const usersDeleted = this.users.filter((user) => user.id !== userDelete.id);
    this.users = usersDeleted;
    return userDelete;
  }
}
