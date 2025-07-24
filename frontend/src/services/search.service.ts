import { makeRequest } from '../core/data-acsses/makeReq';
import { HttpMethods } from '../core/enums/httpMethods.enum';
import { URLS } from '../core/data-acsses/urls';

export const searchHistory = async (term: string) => {
  return makeRequest({
    url: `${URLS.ITUNES_SEARCH}?term=${term}`,
    method: HttpMethods.GET,
  });
}; 

export const fetchSearchHistory = async (page = 1, pageSize = 10) => {
  return makeRequest({
    url: `${URLS.ITUNES_SEARCH_HISTORY}?page=${page}&pageSize=${pageSize}`,
    method: HttpMethods.GET,
  });
};