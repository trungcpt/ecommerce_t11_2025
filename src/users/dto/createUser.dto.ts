import { createZodDto } from 'nestjs-zod';
import { User } from '../entities/user.entity';
import z from 'zod';

// export class CreateUserDto extends User {}

const UserSchemaValidation = z
  .object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
  })
  .strict();
export class CreateUserDto extends createZodDto(UserSchemaValidation) {}
