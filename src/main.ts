import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environments/database.environments';

async function bootstrap() {
  console.log('environment.host', environment);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);

}
bootstrap();
