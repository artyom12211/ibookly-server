import { Module, MiddlewareConsumer,  NestModule, DynamicModule } from '@nestjs/common';
import { StudiosModule } from './studios/studios.module';
import { TelegramModule } from './telegram/telegram.module';
import { S3Module } from './s3/s3.module';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { existsSync } from 'fs';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env.production' : '.env.development',
      isGlobal: true
    }),
    StudiosModule.register(process.env.USE_MOCK_DATA === 'true'),
    UsersModule.register(process.env.USE_MOCK_DATA === 'true'),
    S3Module,
    TelegramModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Логировать все запросы
  }
}
