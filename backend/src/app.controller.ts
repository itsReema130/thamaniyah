/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ItunesSearchResponse } from './type';

@ApiTags('Search')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiOperation({ summary: 'Search podcasts from iTunes and save to history' })
  @ApiQuery({ name: 'term', required: true, description: 'Search term for podcasts' })
  @ApiResponse({ status: 200, description: 'Search results returned successfully.' })
  @Get('search')
  async search(
    @Query('term') term: string,
  ): Promise<ItunesSearchResponse> {
    return this.appService.search(term);
  }

  @ApiOperation({ summary: 'Get all search history' })
  @ApiResponse({ status: 200, description: 'All search history records.' })
  @Get('search-history')
  async getSearchHistory(
    @Query('page') page?: number,
    @Query('pageSize') pageSize?: number,
  ) {
    return this.appService.getSearchHistory(page, pageSize);
  }
}
