import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends IntersectionType(
  PickType(CreateUserDto, ['id']),
  PartialType(CreateUserDto),
) {}
