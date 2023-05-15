import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {

  findAll(): PostDto [] {
    return  [];
  }

  findOne(id: string): PostDto {
    const post = new PostDto();
    post.id = id;
    return post;
  }
}
