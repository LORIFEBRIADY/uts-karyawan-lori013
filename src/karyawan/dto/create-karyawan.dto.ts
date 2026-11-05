import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateKaryawanDto {
  @IsNotEmpty({ message: 'ID tidak boleh kosong isi no urut nim' })
  @IsInt()
  id: number;
  
  @IsNotEmpty({ message: 'Nama harus terisi dengan nim 3 digit dibelakangnya' })
  @IsString()
  nama: string;

  @IsString()
  jabatan: string;
}