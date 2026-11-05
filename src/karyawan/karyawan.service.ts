import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { CreateAbsensiDto } from './dto/create-absensi.dto';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Injectable()
export class KaryawanService {
  constructor(private prisma: PrismaService) {}

  // POST: TAMBAH KARYAWAN (ID MANUAL)
  async tambahKaryawan(dto: CreateKaryawanDto) {
    return this.prisma.karyawan.create({
      data: {
        id: dto.id,
        nama: dto.nama,
        jabatan: dto.jabatan,
      },
    });
  }

  // POST: TAMBAH ABSENSI
  async tambahAbsensi(dto: CreateAbsensiDto) {
    return this.prisma.absensi.create({
      data: {
        karyawanId: dto.karyawanId,
        tanggal_absensi: new Date(dto.tanggal_absensi),
        status: dto.status,
      },
    });
  }

  // POST: TAMBAH PENJUALAN
  async tambahPenjualan(dto: CreatePenjualanDto) {
    return this.prisma.penjualan.create({
      data: {
        karyawanId: dto.karyawanId,
        total: dto.total,
      },
    });
  }

  // GET: DETAIL KARYAWAN + RELASI
  async getKaryawanDetail(id: number) {
    const karyawan = await this.prisma.karyawan.findUnique({
      where: { id },
      include: {
        absensi: true,
        penjualan: true,
      },
    });

    if (!karyawan) {
      throw new NotFoundException(`Maaf Data Karyawan dengan ID ${id} tidak ditemukan`);
    }
    return karyawan;
  }
}