import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerModule } from './logger/logger.module';
import { applyMiddlewares } from './common/middlewares/common.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerModule.createLogger(),
  });
  applyMiddlewares(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
