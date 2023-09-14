import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getTime, filterFlights, useFetch } from './utils';
import { flights } from '@fixtures/flights';

describe('Get time function', () => {
  it('should return a String in date format', async () => {
    const testTime = getTime('2023-09-20T09:30:51.01');

    expect(testTime).toEqual('09:30');
  });

  it('should return a NaN:NaN for a bad date value', async () => {
    const testTime = getTime('2023-09-20T:30:51.01');

    expect(testTime).toEqual('NaN:NaN');
  });
});

describe('filterFlights function', () => {
  it('should return a flights for a specfied destination', async () => {
    const returnedFlights = filterFlights(flights, { destination: 'GER' });

    expect(returnedFlights).toHaveLength(1);
  });

  it('should return a flights for a specfied origin', async () => {
    const returnedFlights = filterFlights(flights, { origin: 'FRA' });

    expect(returnedFlights).toHaveLength(1);
  });

  it('should return all flights with no query params', async () => {
    const returnedFlights = filterFlights(flights, { origin: '' });

    expect(returnedFlights).toHaveLength(3);
  });
});

describe('useFetch', () => {
  const url = 'http://mock';

  it('should return a an initial value for isLoading:true', () => {
    const { isLoading } = useFetch(url);

    expect(isLoading.value).toBe(true);
  });
});
