import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    exposedHeaders: ['X-Total-Count']
  });

  app.setGlobalPrefix(process.env.API_PREFIX)

  console.log('App initialized');
  await app.listen(process.env.PORT ?? 4000);
  console.log(`App listening on port ${process.env.PORT ?? 4000}`);
  console.log('NODE_ENV: ',      process.env.NODE_ENV);
  console.log('USE_MOCK_DATA: ', process.env.USE_MOCK_DATA);
} 

bootstrap().catch((error) => {
  console.error('Bootstrap error:', error);
});
