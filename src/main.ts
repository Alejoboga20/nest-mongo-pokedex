import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

enum Versions {
  V1 = 'v1',
  V2 = 'v2',
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/${Versions.V1}`);

  await app.listen(3000);
}
bootstrap();
