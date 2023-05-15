import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }
}
