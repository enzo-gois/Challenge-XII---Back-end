import { Injectable } from '@nestjs/common';
import { CardDTO } from './cards.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CardService {

  constructor(private prisma: PrismaService) {}

  async create(data: CardDTO) {
    const user = await this.prisma.cards.create({
      data,
    });

    return user;
  }

  async findAll() {
    return this.prisma.cards.findMany()
  }

}