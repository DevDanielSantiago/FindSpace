import {BookingResponse} from '../@types/bookings';
import {api} from '../lib/axios';

export async function getBookings() {
  const response = await api.get<BookingResponse[]>('/bookings/');
  return response.data;
}
