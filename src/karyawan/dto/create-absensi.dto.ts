import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateAbsensiDto {
  @IsNotEmpty({ message: 'ID Karyawan tidak boleh kosong harus terisi dan berakhiran dengan 3 digit nim' })
  @IsInt()
  karyawanId: number;

  @IsNotEmpty({ message: 'Tanggal absensi tidak boleh kosong harus terisi tanggal bulan tahun jam menit dan detiknya' })
  @IsDateString({}, { message: 'Format tanggal harus ISO 8601' })
  tanggal_absensi: Date;

  @IsNotEmpty({ message: 'Status absensi tidak boleh kosong harus terisi 0 atau 1' })
  @IsInt()
  status: number;
}