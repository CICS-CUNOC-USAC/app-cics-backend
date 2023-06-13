import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraModule } from './modules/carrera/carrera.module';
import { CursoModule } from './modules/curso/curso.module';
import { CarreraCursoModule } from './modules/carrera_curso/carrera_curso.module';
import { CarreraCursoPrerequisitoModule } from './modules/carrera_curso_prerequisito/carrera_curso_prerequisito.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      }),
      inject: [ConfigService],
    }),
    CarreraModule,
    CursoModule,
    CarreraCursoModule,
    CarreraCursoPrerequisitoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
