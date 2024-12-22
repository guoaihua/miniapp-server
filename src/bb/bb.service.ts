import { Injectable } from '@nestjs/common';
import { CreateBbDto } from './dto/create-bb.dto';
import { UpdateBbDto } from './dto/update-bb.dto';

@Injectable()
export class BbService {
  create(createBbDto: CreateBbDto) {
    return `received: ${JSON.stringify(CreateBbDto)}`
  }

  findAll() {
    return `This action returns all bb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bb`;
  }

  update(id: number, updateBbDto: UpdateBbDto) {
    return `This action updates a #${id} bb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bb`;
  }
}
