import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe, ZodSerializerInterceptor } from 'nestjs-zod';
import { AuthGuard } from './auth/auth.guard';
import { ConfigModule } from '@nestjs/config';
import { CatchEverythingFilter } from '../catch-everything/catch-everything.filter';
import { ZodExceptionFilter } from '../catch-everything/zod-exception/zod-exception.filter';
import { FormatResponseInterceptor } from '../common/interceptors/format-response/format-response.interceptor';
import { ApiUtilModule } from '../common/utils/api-util/api-util.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggingInterceptor } from '../logger/logging.interceptor';
import { PrismaModule } from '../common/prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AccessControlGuard } from '../common/guards/access-control/access-control.guard';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { RolePermissionsModule } from './role-permissions/role-permissions.module';
import { UserVendorRolesModule } from './user-vendor-roles/user-vendor-roles.module';
import { VendorsModule } from './vendors/vendors.module';
import { QueryUtilModule } from '../common/utils/query-util/query-util.module';
import { FileUtilModule } from '../common/utils/file-util/file-util.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      // validate: validate,
    }),
    PrismaModule,
    UsersModule,
    LoggerModule,
    ApiUtilModule,
    AuthModule,
    PermissionsModule,
    RolesModule,
    RolePermissionsModule,
    UserVendorRolesModule,
    VendorsModule,
    QueryUtilModule,
    UsersModule,
    FileUtilModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ZodExceptionFilter,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: CatchEverythingFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: FormatResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AccessControlGuard,
    },
  ],
})
export class AppModule {}
