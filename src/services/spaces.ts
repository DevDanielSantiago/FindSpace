import {SpacesResponse} from '../@types/spaces';
import {api} from '../lib/axios';

export async function getSpaces() {
  const response = await api.get<SpacesResponse[]>('/spaces/');
  return response.data;
}
