import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany()
  }

}
