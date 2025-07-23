import { Get, Injectable } from '@nestjs/common';
import { ItunesSearchResponse } from './type';

@Injectable()
export class AppService {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  async itunesSearch(
    term: string,
    limit: number = 10,
    country: string = 'SA',
    attribute: string = 'podcast',
  ): Promise<ItunesSearchResponse> {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      term,
    )}&limit=${limit}&country=${country}&attribute=${attribute}`;
    const response = await fetch(url);
    return (await response.json()) as ItunesSearchResponse;
  }
}
