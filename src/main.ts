import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedocModule, RedocOptions } from 'nestjs-redoc'
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

  const redocOptions: RedocOptions = {
    title: 'Hello Nest',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#F0F0F0',
      altText: 'PetStore logo'
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    // auth: {
    //   enabled: true,
    //   user: 'admin',
    //   password: '123'
    // },
    tagGroups: [
      {
        name: 'Core resources',
        tags: ['user'],
      },
    ],
  };
  // Instead of using SwaggerModule.setup() you call this module
  await RedocModule.setup('/docs', app, document, redocOptions);
  await app.listen(3000);
}
bootstrap();
