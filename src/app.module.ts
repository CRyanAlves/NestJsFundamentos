import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { PlayListModule } from './playlists/playlists.module';
// import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ArtistsModule } from './artists/artists.module';
import { dataSourceOptions } from 'db/data-source';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    SongsModule,
    PlayListModule,
    UsersModule,
    AuthModule,
    JwtModule.register({ secret: 'HAD_12X#@' }),
    ArtistsModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(/*private dataSource: DataSource*/) {
    // console.log('dbName ', dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // option no 1
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST }); //option no 2

    consumer.apply(LoggerMiddleware).forRoutes(SongsController); //option no 3
  }
}
