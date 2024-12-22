import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles} from '@nestjs/common';
import { BbService } from './bb.service';
import { CreateBbDto } from './dto/create-bb.dto';
import { UpdateBbDto } from './dto/update-bb.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('bb')
export class BbController {
  constructor(private readonly bbService: BbService) {}

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  body2(@Body() createBbDto: CreateBbDto, @UploadedFiles()files: Array<Express.Multer.File>){
    console.log(files);
    return `received: ${JSON.stringify(createBbDto)}`
  }

  @Post()
  create(@Body() createBbDto: CreateBbDto) {
    console.log('%c [ CreateBbDto ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', createBbDto)
      return `received: ${JSON.stringify(createBbDto)}`
  }

  @Get()
  findAll() {
    return this.bbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbDto: UpdateBbDto) {
    return this.bbService.update(+id, updateBbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbService.remove(+id);
  }
}
