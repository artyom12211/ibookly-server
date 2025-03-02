import { 
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  Res,
  Put,
  Query
} from '@nestjs/common';
import { StudiosService } from './studios.service';
import { CreateStudioDto } from './dto/create-studio.dto';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { Prisma } from '@prisma/client';
import { query, Response } from 'express';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';

@Controller('studios')
export class StudiosController {
  constructor(private readonly studiosService: StudiosService) {}

  @Post()
  create(@Body() createStudioDto: Prisma.StudioCreateInput) {
    return this.studiosService.create(createStudioDto);
  }

  @Get('preview')
  findAllPreview(@Res({ passthrough: true }) response: Response) {
    return this.studiosService.findAllPreview();
  }
  
  @Get('preview/paginated')
  findPaginated(
    @Query('page',  ParseIntPipe)  page  = 1,
    @Query('limit', ParseIntPipe)  limit = 10,
    @Query('metro')                metro = '',
    @Res({ passthrough: true }
  ) response: Response) {
    return this.studiosService.findManyPreviewWithPagination(page, limit, metro);
  }
  
  @Get('filters')
  getFilters(
    @Res({ passthrough: true }
  ) response: Response) {
    return this.studiosService.getFilters();
  }

  @Get()
  findAll(@Res({ passthrough: true }) response: Response) {
    response.set('X-Total-Count', '10'); // this response needed in react-admin
    return this.studiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('id: ', id)
    return this.studiosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudioDto: UpdateStudioDto) {
    return this.studiosService.update(+id, updateStudioDto);
  }

  @Delete()
  removeMany(@Param('id') id: string, @Query() query: any) {
    const filter = JSON.parse(query.filter)
    return this.studiosService.removeMany(filter.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiosService.remove(+id);
  }
}
