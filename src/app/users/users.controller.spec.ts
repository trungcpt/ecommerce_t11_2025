import { TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';
import { AutoMockingModule } from '../../../test/auto-mocking/auto-mocking.module';

describe('UsersController', () => {
  // Arrange
  let controller: UsersController;
  // const listUserSuccess = [
  //   {
  //     name: 'trungcpt',
  //     age: 28,
  //   },
  // ];

  beforeEach(async () => {
    const module: TestingModule = await AutoMockingModule.createTestingModule({
      imports: [UsersModule],
    });

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('should return user list when get list success', async () => {
  //   // Action
  //   const result = await controller.getUsers({ itemPerPage: 10, page: 1 });

  //   // Assert
  //   expect(result).toEqual(listUserSuccess);
  // });
});
