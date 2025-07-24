import { Injectable } from '@nestjs/common';
import { ItunesSearchResponse } from './type';
import supabase from './database/database';

@Injectable()
export class AppService {
  async search(
    term: string,
    entity = 'podcast',
    country = 'SA',
  ): Promise<ItunesSearchResponse> {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      term,
    )}&entity=${entity}&country=${country}`;
    const response = await fetch(url);
    const result = (await response.json()) as ItunesSearchResponse;

    const now = new Date();
    // i would also compute the trending based on the listen count but for now i will just use the release date
    const TRENDING_DAYS = 30;
    if (Array.isArray(result.results)) {
      result.results = result.results.map((item) => {
        if (item.releaseDate) {
          const releaseDate = new Date(item.releaseDate);
          const diffDays =
            (now.getTime() - releaseDate.getTime()) / (1000 * 60 * 60 * 24);
          return {
            ...item,
            isTrending: diffDays <= TRENDING_DAYS,
          };
        }
        return { ...item, isTrending: false };
      });
    }

    const { error: insertError } = await supabase
      .from('search_history')
      .insert([
        {
          user_id: null, // Always null unless you have a real user UUID
          search_term: term,
          search_results: result,
        },
      ]);
    if (insertError) {
      throw new Error(insertError.message);
    }
    return result;
  }
  async getSearchHistory(page?: number, pageSize?: number) {
    const pageNum = Number(page) || 1;
    const size = Number(pageSize) || 10;
    const from = (pageNum - 1) * size;
    const to = from + size - 1;
    const { data, error } = await supabase
      .from('search_history')
      .select('*')
      .order('created_at', { ascending: false })
      .range(from, to);
    if (error) {
      throw new Error(error.message);
    }
    return data as ItunesSearchResponse[];
  }
}
