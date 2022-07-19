/*
    Contollers provide routing to the application. The also interact with services
    to process information between the application
*/

import { Controller, Get, Param, Post, Body, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

    //inject the service
    constructor(private catsService: CatsService){};

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    
    @Get(':id')
    async findOne(@Param('id') id: Promise<string>){
        throw new HttpException(
            {
                status: HttpStatus.FORBIDDEN,
                error: 'Method is not ready yet',
            },
            HttpStatus.FORBIDDEN
        );
        return `This resturns cat #${id}`;
    }
    
}
