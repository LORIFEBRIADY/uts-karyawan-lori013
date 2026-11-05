import { IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreatePenjualanDto {
  @IsNotEmpty({ message: 'ID Karyawan tidak boleh kosong dan harus berakhiran dengan no urut nim' })
  @IsInt()
  karyawanId: number;

  @IsNotEmpty({ message: 'Total tidak boleh kosong dan harus berupa angka yang berakhiran dengan 3 digit' })
  @IsNumber()
  total: number;
}