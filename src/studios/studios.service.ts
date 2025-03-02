import { Injectable, Optional } from '@nestjs/common';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
// Mock 
import { mockStudios } from './studios.mock';

@Injectable()
export class StudiosService {
  private useMockData: boolean

  constructor(@Optional() private prisma?: PrismaService) {
    this.useMockData = process.env.USE_MOCK_DATA === 'true';

    if (!this.useMockData && !this.prisma) {
      throw new Error('PrismaService is required when USE_MOCK_DATA is false');
    }
  }

  async create(createStudioDto: Prisma.StudioCreateInput) {
    try {
      const response = await this.prisma.studio.create({
        data: createStudioDto
      })

      return {
        data: response,
        message: 'Created new studio',
        success: true
      }
    } catch(err) {
        return {
          message: 'Cant create new studio',
          error: err,
          success: false
        }
    }
  }

  async findAll() { // With mock data
    try {
      if (this.useMockData) {
        return {
          success: true,
          data: mockStudios,
          message: "Get all studios"
        }
      }

      const response = await this.prisma.studio.findMany()
      
      return {
        success: true,
        data: response,
        message: "Get all studios"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't findAll"
      }
    }
  }

  async findManyPreviewWithPagination(page: number, limit: number, metro: string) { // With mock data
    try {
      if (this.useMockData) {
        // Фильтрация по метро (аналогично whereFilter)
        let filteredStudios = metro !== ''
          ? mockStudios.filter((studio) =>
              studio.metro.toLowerCase() === metro.toLowerCase()) // Регистронезависимый поиск
          : mockStudios;
  
        // Пагинация (skip и take)
        const skip = (page - 1) * limit;
        const paginatedStudios = filteredStudios.slice(skip, skip + limit);
  
        return {
          success: true,
          data: paginatedStudios,
          message: "Get paginated studios"
        };
      }

      const whereFilter = {
        metro: metro !== ''
          ? {
            equals: metro,
            mode: "insensitive" as const
          }
          : undefined 
      }

      const response = await this.prisma.studio.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: whereFilter
      })
      
      return {
        success: true,
        data: response,
        message: "Get paginated studios"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't findManyWithPagination"
      }
    }
  }

  async findAllPreview() { // With mock data
    try {
      if (this.useMockData) {
        // Фильтрация по activated: true (аналог where)
        const filteredStudios = mockStudios.filter((studio) => studio.activated === true);
  
        // Выборка только нужных полей (аналог select)
        const selectedStudios = filteredStudios.map((studio) => ({
          id: studio.id,
          title: studio.title,
          price_range: studio.price_range,
          images_urls: studio.images_urls,
        }));
  
        return {
          success: true,
          data: selectedStudios,
          message: "Get all preview studios"
        }
      }

      const response = await this.prisma.studio.findMany({
        select: {
          id: true,
          title: true,
          price_range: true,
          images_urls: true
        },
        where: {
          activated: true
        }
      })
      
      return {
        success: true,
        data: response,
        message: "Get all preview studios"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't findAll"
      }
    }
  }

  async findOne(id: number) { // With mock data
    try {
      if (this.useMockData) {
        const oneStudio = mockStudios.find((studio) => studio.id === id) || null;

        return {
          success: true,
          data: oneStudio,
          message: "Get one studio"
        }
      }
      
      const response = await this.prisma.studio.findUnique({
        where: {
          id: id
        }
      })

      return {
          success: true,
          data: response,
          message: "Get one studio"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't findOne"
      }
    }
  }

  async update(id: number, updateStudioDto: UpdateStudioDto) {
    try {
      const response = await this.prisma.studio.update({
        where: {
          id: id
        },
        data: updateStudioDto
      })

      return {
          success: true,
          data: response,
          message: "Update one studio"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't update studio"
      }
    }
    // return `This action updates a #${id} studio`;
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.studio.delete({
        where: {
          id: id
        }
      })

      return {
          success: true,
          data: response,
          message: "Delete one studio"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't delete studio"
      }
    }
  }
  
  async removeMany(ids: number[]) {
    try {
      const response = await this.prisma.studio.deleteMany({
        where: {
          id: {
            in: ids
          }
        }
      })

      return {
          success: true,
          data: ids,
          message: "Delete studios"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't delete studios"
      }
    }
  }

  async getFilters() { // With mock data
    try {
      if (this.useMockData) {
        // Используем mockStudios вместо Prisma
        const response = mockStudios;
  
        const data = response.reduce(
          (acc: { metro: any; price_range: number[] }, studio) => {
            if (!acc.metro.includes(studio.metro)) acc.metro.push(studio.metro);
  
            if (!acc.price_range.length) {
              acc.price_range = [...studio.price_range]; // Копируем массив
            }
  
            if (acc.price_range[0] > studio.price_range[0]) {
              acc.price_range[0] = studio.price_range[0];
            }
  
            if (acc.price_range[1] < studio.price_range[1]) {
              acc.price_range[1] = studio.price_range[1];
            }
  
            return acc;
          },
          {
            metro: [],
            price_range: [],
          }
        );
  
        // Преобразуем метро в массив объектов
        data.metro = data.metro.map((onemetro: string) => ({
          label: onemetro,
          value: onemetro.toLocaleLowerCase(),
        }));
  
        return {
          success: true,
          data: data,
          message: "Get studios filters data"
        }
      }

      const response = await this.prisma.studio.findMany()

      const data = response.reduce(
        (acc: any, studio, index) => {
          if (!acc.metro.includes(studio.metro)) acc.metro.push(studio.metro)
          
          if (!acc.price_range.length) {
            acc.price_range = studio.price_range
          }

          if (acc.price_range[0] > studio.price_range[0]) {
            acc.price_range[0] = studio.price_range[0]
          }
          
          if (acc.price_range[1] < studio.price_range[1]) {
            acc.price_range[1] = studio.price_range[1]
          }

          return acc
        }, 
      {
        metro: [],
        price_range: []
      })

      data.metro = data.metro.map((onemetro: string) => ({
        label: onemetro,
        value: onemetro.toLocaleLowerCase()
      }))

      return {
        success: true,
        data: data,
        message: "Get studios filters data"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't getFilters"
      }
    }
  }
}
