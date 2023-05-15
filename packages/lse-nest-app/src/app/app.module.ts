import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { PostModule } from '../post/post.module';

@Module({
  imports: [
    PostModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
