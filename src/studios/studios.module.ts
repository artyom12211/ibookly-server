import { DynamicModule, Module } from '@nestjs/common';
import { StudiosService } from './studios.service';
import { PrismaService } from 'src/shared/prisma.service';
import { StudiosController } from './studios.controller';

@Module({})

export class StudiosModule {
  static register(useMockData: boolean = false): DynamicModule {
    console.log('useMockData: ', useMockData)
    return {
      module: StudiosModule,
      providers: [
        StudiosService,
        ...(useMockData ? [] : [PrismaService]), // PrismaService не регистрируется в мок-режиме
      ],
      controllers: [StudiosController],
      exports: [StudiosService],
    };
  }
}
