import { Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Query
} from '@nestjs/common';
import { S3Service } from './s3.service';
import { CreateS3Dto } from './dto/create-s3.dto';
import { UpdateS3Dto } from './dto/update-s3.dto';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('s3')
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  create(
    @UploadedFiles() images: Express.Multer.File[],
    @Body() body: any
  ) {
    return typeof(images) === 'object'
     ? this.s3Service.createMany(images, body)
     : this.s3Service.create(images, body)
  }

  @Get()
  findAll() {
    return this.s3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.s3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateS3Dto: UpdateS3Dto) {
    return this.s3Service.update(+id, updateS3Dto);
  }

  @Delete()
  removeMany(@Query('filter') filter: string) {
    console.log('wow')
    const parsedFilter = JSON.parse(filter); // { id: [1, 2, 3] }
    const idsToDelete = parsedFilter.id; // [1, 2, 3]

    if (!Array.isArray(idsToDelete)) {
        throw new Error("Invalid filter format");
    }

    // Вызов сервиса для удаления
    return this.s3Service.removeMany(idsToDelete);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.s3Service.remove(+id);
  }
}
