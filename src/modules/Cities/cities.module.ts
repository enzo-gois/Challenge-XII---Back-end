import { Module } from "@nestjs/common";
import { CitiesController } from "./cities.controller";
import { CitiesService } from "./cities.service";
import { PrismaService } from "src/database/prisma.service";

@Module({
  controllers: [CitiesController],
  providers:[CitiesService, PrismaService],
})

export class CitiesModule {}