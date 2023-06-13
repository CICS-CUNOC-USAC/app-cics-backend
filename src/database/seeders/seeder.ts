import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { CarreraSeeder } from './carrera.seeder';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { CursoSeeder } from './curso.seeder';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { CarreraCurso } from 'src/modules/carrera_curso/entities/carrera_curso.entity';
import { CarreraCursoSeeder } from './carrera_curso.seeder';
import { CarreraCursoPrerequisito } from 'src/modules/carrera_curso_prerequisito/entities/carrera_curso_prerequisito.entity';
import { CarreraCursoPrerequisitoSeeder } from './carrera_curso_prerequisito.seeder';
import { PrerequisitoCurso } from 'src/modules/prerequisito_curso/entities/prerequisito_curso.entity';
import { PrerequisitoCursoSeeder } from './prerequisito_curso.seeder';
import { PrerequisitoCredito } from 'src/modules/prerequisito_credito/entities/prerequisito_credito.entity';
import { PrerequisitoCreditoSeeder } from './prerequisito_credito.seeder';

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
    TypeOrmModule.forFeature([CarreraCurso]),
    TypeOrmModule.forFeature([CarreraCursoPrerequisito]),
    TypeOrmModule.forFeature([PrerequisitoCurso]),
    TypeOrmModule.forFeature([PrerequisitoCredito]),
  ],
}).run([
  CarreraSeeder,
  CursoSeeder,
  CarreraCursoSeeder,
  CarreraCursoPrerequisitoSeeder,
  PrerequisitoCursoSeeder,
  PrerequisitoCreditoSeeder,
]);
