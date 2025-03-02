import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { S3Controller } from './s3.controller';

import { S3Service } from './s3.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [MulterModule.register()],
  controllers: [S3Controller],
  providers: [S3Service, ConfigService],
})

export class S3Module {}
