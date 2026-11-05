import { Module } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { KaryawanController } from './karyawan.controller';
import { KaryawanResolver } from './karyawan.resolver'; 

@Module({
  controllers: [KaryawanController],
  providers: [KaryawanService, KaryawanResolver],
})
export class KaryawanModule {}