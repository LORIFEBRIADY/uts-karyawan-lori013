import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { CreateAbsensiDto } from './dto/create-absensi.dto';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  // Endpoint POST untuk Tambah Karyawan
  @Post()
  createKaryawan(@Body() dto: CreateKaryawanDto) {
    return this.karyawanService.tambahKaryawan(dto);
  }

  // Endpoint POST untuk Tambah Absensi
  @Post('absensi')
  createAbsensi(@Body() dto: CreateAbsensiDto) {
    return this.karyawanService.tambahAbsensi(dto);
  }

  // Endpoint POST untuk Tambah Penjualan
  @Post('penjualan')
  createPenjualan(@Body() dto: CreatePenjualanDto) {
    return this.karyawanService.tambahPenjualan(dto);
  }

  // Endpoint GET untuk Lihat Detail
  @Get(':id')
  getDetail(@Param('id', ParseIntPipe) id: number) {
    return this.karyawanService.getKaryawanDetail(id);
  }
}