import { Controller, Get, Post, Body } from "@nestjs/common";
import { CardService } from "./cards.service";
import { CardDTO } from "./cards.dto";

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async create(@Body() data: CardDTO) {
    return this.cardService.create(data)
  }

  @Get()
  findAll() {
    return this.cardService.findAll()
  }
}