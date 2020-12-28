import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //配置swagger
  const options = new DocumentBuilder()
    .setTitle('Nest zero to one')
    .setDescription('The nest api description')
    .setVersion('1.0')
    .addTag('test')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
