import { Injectable } from '@nestjs/common';
import { CreateS3Dto } from './dto/create-s3.dto';
import { UpdateS3Dto } from './dto/update-s3.dto';

import { createHash } from 'crypto';

import { 
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsCommand,
  PutObjectCommand,
  ListObjectsV2Command
} from '@aws-sdk/client-s3'

import S3 from 'src/service/s3/S3';
import { readFileSync } from 'fs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class S3Service {
  constructor(private configService: ConfigService) {}

  async createMany(images: Express.Multer.File[], body: {key: string}) {
    try {
      let imageUrls = new Array
      images.forEach(async (image) => {
        const S3Host = this.configService.get<string>('S3_PUBLIC_HOST')
        console.log('S3 Host: ', S3Host)


        const key = `${body.key}/${image.originalname}` // https://...selstorage.ru/studios/1/file.png
        const url = `${S3Host}/${key}` // https://...selstorage.ru/studios/1/file.png
        imageUrls.push(url)

        const params = {
          Bucket: "msc-studios",
          Key:  key,
          Body: image.buffer,
          ContentType: image.mimetype // Указываем MIME-тип
        };

        const command = new PutObjectCommand(params)
        const data = await S3.send(command)
      })

      return {
        success: true,
        message: "Added file to s3",
        data: imageUrls
      }
    } catch(err) {
      return {
        success: false,
        message: "Can't add file to s3",
        error: err
      }
    }
  }

  async create(file: Express.Multer.File, body: {key: string}) {
    try {
      const key = `${body.key}/${file.fieldname}`
      const params = {
          Bucket: "msc-studios",
          Key:  key,
          Body: file.buffer,
          ContentType: file.mimetype // Указываем MIME-тип
      };

      const command = new PutObjectCommand(params)
      const data = await S3.send(command)
      console.log('data: ', data)

      return {
        success: true,
        message: "Added file to s3",
        data: key
      }
    } catch(err) {
      return {
        success: false,
        message: "Can't add file to s3",
        error: err
      }
    }
  }

  async findAll() {
    const input = { 
      Bucket: "msc-studios",
      Prefix: "studios/"
    };
    const command = new ListObjectsCommand(input)
    const data = await S3.send(command)
    console.log('data: ', data)

    // return S3().
    return `This action returns all s3`;
  }

  async findOne(id: number) {
    // var params = {
    //   Bucket: "msc-studios",
    //   Key: "ObjectName"
    // };
  
    // const test = await S3().getObject(params, (err, data) => {
    //     if (err) {
    //         console.log(err, err.stack);
    //     } else {
    //         console.log(data);
    //     }
    // });

    // console.log('test: ', test)
    return `This action returns a #${id} s3`;
  }

  update(id: number, updateS3Dto: UpdateS3Dto) {
    return `This action updates a #${id} s3`;
  }

  async remove(id: number) {
    try {
      const key = `studios/${id}`
      const input = {
        Bucket: "msc-studios",
        Key: key
      }
      const command = new DeleteObjectCommand(input)
      const data = await S3.send(command)
      console.log('data: ', data)
      
      return {
        success: true,
        message: "Removed file from s3",
        data: data
      } 
    } catch(err) {
      return {
        success: false,
        message: "Can't remove file from s3",
        error: err
      } 
    }
  }
  
  async removeMany(ids: number[]) {
    try {
      ids.forEach(async (id) => {
        const bucketName = "msc-studios"
        const key = `studios/${id}`

        console.log('id: ', id)

        // Получаем список файлов с указанным префиксом
        const listCommand = new ListObjectsV2Command({
          Bucket: bucketName,
          Prefix: key,
        });

        const listedObjects = await S3.send(listCommand);

        console.log("ALO: ",JSON.stringify(listedObjects))

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            console.log("No files found in this directory.")
            // return { message: "No files found in this directory." };
        }

        else {
          // Формируем список файлов для удаления
          const deleteParams = {
            Bucket: bucketName,
            Delete: {
                Objects: listedObjects.Contents.map((file) => ({ Key: file.Key })),
            },
            ChecksumAlgorithm: undefined, // Отключаем MD5 проверку
          };

          console.log('deleteParams: ', JSON.stringify(deleteParams))
          
          for (const file of listedObjects.Contents) {
            if (file.Key) {
                const command = new DeleteObjectCommand({
                    Bucket: "msc-studios",
                    Key: file.Key,
                });
                await S3.send(command);
            }
          }

          // const command = new DeleteObjectsCommand(deleteParams,)
          // const data = await S3.send(command)
          // console.log('data: ', data)
        }
      })

      return {
        success: true,
        message: "Removed many files from s3",
        data: true
      } 
    } catch(err) {
      return {
        success: false,
        message: "Can't remove many files from s3",
        error: err
      } 
    }
    // return `This action removes a #${id} s3`;
  }
}
