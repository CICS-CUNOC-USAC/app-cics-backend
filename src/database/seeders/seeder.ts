import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { CarreraSeeder } from './carrera.seeder';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { CursoSeeder } from './curso.seeder';
import { Curso } from 'src/modules/curso/entities/curso.entity';

seeder({
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
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Carrera]),
    TypeOrmModule.forFeature([Curso]),
  ],
}).run([CarreraSeeder, CursoSeeder]);
