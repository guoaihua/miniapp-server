import { Controller, Param, Get, Query, Post, Body } from '@nestjs/common';
@Controller('aa')
export class AaController {

    @Get('find')
    query(@Query('name')name: string, @Query('age') age: number){
        return `received: name=${name},age=${age}`;
    }


    @Get(':id')
    urlParam(@Param('id')id: string){
        return `recevied: id=${id}`
    }

    @Post()
    body(@Body() createPersonDto: {}){
        return `received: ${JSON.stringify(createPersonDto)}`
    }
}
