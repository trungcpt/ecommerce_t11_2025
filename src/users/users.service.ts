import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';

type User = {
  id: number;
  name: string;
  age: number;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'trungcpt', age: 28 },
    { id: 2, name: 'trungcpt2', age: 26 },
  ];

  private findUser(userID: number) {
    const userFound = this.users.find((user) => user.id === userID);
    if (!userFound) throw new BadRequestException('User not found!');
    return userFound;
  }

  getUsers() {
    return this.users;
  }

  getUser(userID: string) {
    const userIDParse = parseInt(userID);
    const userFound = this.findUser(userIDParse);
    return userFound;
  }

  createUser(userCreate: User) {
    this.users.push(userCreate);
    return userCreate;
  }

  updateUser(userDataUpdate: UpdateUserDTO) {
    const userID = userDataUpdate.id;
    const userUpdate = this.findUser(userID);
    const usersUpdated = this.users.map((user) => {
      if (user.id === userUpdate.id) return { ...user, ...userDataUpdate };
      return user;
    });
    this.users = usersUpdated;
    return userDataUpdate;
  }

  deleteUser(userID: string) {
    const userIDParsed = parseInt(userID);
    const userDelete = this.findUser(userIDParsed);
    const usersDeleted = this.users.filter((user) => user.id !== userDelete.id);
    this.users = usersDeleted;
    return userDelete;
  }
}
