import { DynamicModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/shared/prisma.service';
import { UsersController } from './users.controller';

// @Module({
//   controllers: [UsersController],
//   providers: [UsersService, PrismaService],
// })
// export class UsersModule {}

@Module({})

export class UsersModule {
  static register(useMockData: boolean = false): DynamicModule {
    return {
      module: UsersModule,
      providers: [
        UsersService,
        ...(useMockData ? [] : [PrismaService]), // PrismaService не регистрируется в мок-режиме
      ],
      controllers: [UsersController],
      exports:     [UsersService],
    };
  }
}
