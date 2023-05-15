import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  it('test that findAll works', async () => {
      const result: PostDto [] = [{
        id: 'x-1',
        title: 'Mdx examples',
        description: 'Example to demonstrate mdx format',
        url: 'mdx/example.mdx'
      },{
        id: 'x-2',
        title: 'Mdx more examples',
        description: 'More Example to demonstrate mdx format',
        url: 'mdx/example2.mdx'
      }];

      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      // We are just testing that the references are same. Not the content
      expect(await controller.findAll()).toBe(result);
  });

  it('test that findOne works', async () => {
    const result: PostDto = {
      id: 'x-1',
      title: 'Mdx examples',
      description: 'Example to demonstrate mdx format',
      url: 'mdx/example.mdx'
    };

    jest.spyOn(service, 'findOne').mockImplementation(() => result);
    // We are just testing that the references are same. Not the content
    expect(await controller.findOne(result.id)).toBe(result);
   });
});