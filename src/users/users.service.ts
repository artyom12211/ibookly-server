import { Injectable, Optional } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { mockUser } from './users.mock';

@Injectable()
export class UsersService {
  private useMockData: boolean

  constructor(@Optional() private prisma: PrismaService) {
    this.useMockData = process.env.USE_MOCK_DATA === 'true';

    if (!this.useMockData && !this.prisma) {
      throw new Error('PrismaService is required when USE_MOCK_DATA is false');
    }
  }

  async create(createUserDto: Prisma.UserCreateInput) { // With mock data
    try {
      if (this.useMockData) {
        return {
          data: mockUser,
          message: 'Created new user',
          success: true
        }
      }

      const response = await this.prisma.user.create({
        data: createUserDto
      })

      return {
        data: response,
        message: 'Created new user',
        success: true
      }
    } catch(err) {
        return {
          message: 'Cant create new user',
          error: err,
          success: false
        }
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) { // With mock data
    try {
      if (this.useMockData) {
        return {
          success: true,
          data: mockUser,
          message: "Get user"
        }
      }

      const response = await this.prisma.user.findUnique({
        where: {
          userid: id
        }
      })

      return {
          success: true,
          data: response,
          message: "Get user"
      }
    } catch(err) {
      return {
        success: false,
        error: err,
        message: "Can't get user"
      }
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
