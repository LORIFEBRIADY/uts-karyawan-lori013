import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // untuk mengaktifkan validasi DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // untuk mengatur/setup Swagger
  const config = new DocumentBuilder()
    .setTitle('API Manajemen Karyawan')
    .setDescription('API untuk UTS Lori Febriady')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();