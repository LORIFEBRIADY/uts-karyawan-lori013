import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class AbsensiEntity {
  @Field(() => Int) id: number;
  @Field(() => Int) karyawanId: number;
  @Field() tanggal_absensi: Date;
  @Field(() => Int) status: number;
}

@ObjectType()
export class PenjualanEntity {
  @Field(() => Int) id: number;
  @Field(() => Int) karyawanId: number;
  @Field(() => Float) total: number;
  @Field() tanggal: Date;
}

@ObjectType()
export class KaryawanEntity {
  @Field(() => Int) id: number;
  @Field() nama: string;
  @Field({ nullable: true }) jabatan?: string;
  @Field(() => [AbsensiEntity], { nullable: true }) absensi?: AbsensiEntity[];
  @Field(() => [PenjualanEntity], { nullable: true }) penjualan?: PenjualanEntity[];
}