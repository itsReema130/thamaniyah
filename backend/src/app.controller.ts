import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ItunesSearchResponse } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // root
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // itunes search
  @Get('itunes-search')
  async itunesSearch(
    @Query('term') term: string,
  ): Promise<ItunesSearchResponse> {
    return this.appService.itunesSearch(term);
  }
}
