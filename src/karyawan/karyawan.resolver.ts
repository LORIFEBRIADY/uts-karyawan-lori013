import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { KaryawanService } from './karyawan.service';
import { KaryawanEntity } from './entities/karyawan.entity'; // Pastikan path ini benar

@Resolver(() => KaryawanEntity)
export class KaryawanResolver {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Query(() => KaryawanEntity, { name: 'karyawan' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.karyawanService.getKaryawanDetail(id);
  }
}