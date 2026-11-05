import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '1234',
      database: 'db_karyawan',
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}