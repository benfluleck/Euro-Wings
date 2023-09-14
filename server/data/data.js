const data = [
  {
    origin: 'FRA',
    destination: 'FCO',
    departureDate: '2023-09-15T09:30:51.01',
    returnDate: '2023-09-15T14:30:51.01',
    seatAvailability: '1',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '5:23'
  },
  {
    origin: 'FRA',
    destination: 'HAM',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '10',
    price: {
      amount: '118.56',
      currency: 'USD'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '1:23'
  },
  {
    origin: 'FRA',
    destination: 'LHR',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '108.00',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FRA',
    destination: 'LHR',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '134.52',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '1:30'
  },
  {
    origin: 'CGN',
    destination: 'FRA',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '5',
    price: {
      amount: '128.26',
      currency: 'USD'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '3:32'
  },
  {
    origin: 'CGN',
    destination: 'MAD',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '4',
    price: {
      amount: '152.96',
      currency: 'USD'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '10:12'
  },
  {
    origin: 'CGN',
    destination: 'VCE',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '9',
    price: {
      amount: '138.42',
      currency: 'USD'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '09:18'
  },
  {
    origin: 'CGN',
    destination: 'VCE',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '5',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '09:08'
  },
  {
    origin: 'CDG',
    destination: 'FRA',
    departureDate: '2023-09-16T09:30:51.01',
    returnDate: '2023-09-16T09:30:51.01',
    seatAvailability: '4',
    price: {
      amount: '146.48',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:32'
  },
  {
    origin: 'CDG',
    destination: 'BCN',
    departureDate: '2023-09-17T09:30:51.01',
    returnDate: '2023-09-17T09:30:51.01',
    seatAvailability: '2',
    price: {
      amount: '135.48',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'CDG',
    destination: 'CGN',
    departureDate: '2023-09-17T09:30:51.01',
    returnDate: '2023-09-17T09:30:51.01',
    seatAvailability: '1',
    price: {
      amount: '178.23',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'CDG',
    destination: 'LHR',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '1',
    price: {
      amount: '189.34',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'CDG',
    destination: 'TLS',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '1',
    price: {
      amount: '135.23',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'TLS',
    destination: 'MAD',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '10',
    price: {
      amount: '111.23',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'TLS',
    destination: 'CGN',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '3',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'TLS',
    destination: 'FRA',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: '  ',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'TLS',
    destination: 'EDI',
    departureDate: '2023-09-18T09:30:51.01',
    returnDate: '2023-09-18T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FCO',
    destination: 'HAM',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '7',
    price: {
      amount: '118.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FCO',
    destination: 'CGN',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '2',
    price: {
      amount: '122.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FCO',
    destination: 'BCN',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '123.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FCO',
    destination: 'LHR',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '125.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'FCO',
    destination: 'MAD',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '129.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'VCE',
    destination: 'FRA',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '126.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'MAD',
    destination: 'CDG',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '127.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'MAD',
    destination: 'FCO',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '128.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'MAD',
    destination: 'BCN',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '15',
    price: {
      amount: '169.21',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'BCN',
    destination: 'HAM',
    departureDate: '2023-09-19T09:30:51.01',
    returnDate: '2023-09-19T09:30:51.01',
    seatAvailability: '6',
    price: {
      amount: '147.91',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'BCN',
    destination: 'CGN',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '3',
    price: {
      amount: '135.79',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'BCN',
    destination: 'TLS',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '123.45',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'LHR',
    destination: 'FRA',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '10',
    price: {
      amount: '156.34',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'LHR',
    destination: 'CDG',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '18',
    price: {
      amount: '148.26',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'LHR',
    destination: 'VCE',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '14',
    price: {
      amount: '173.98',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'LHR',
    destination: 'MAD',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '13',
    price: {
      amount: '116.78',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'EDI',
    destination: 'FCO',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '5',
    price: {
      amount: '114.38',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'EDI',
    destination: 'FRA',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '4',
    price: {
      amount: '115.34',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'EDI',
    destination: 'BCN',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '2',
    price: {
      amount: '128.86',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'VCE',
    destination: 'LHR',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '8',
    price: {
      amount: '132.45',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'VCE',
    destination: 'CGN',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '7',
    price: {
      amount: '136.94',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  },
  {
    origin: 'VCE',
    destination: 'LHR',
    departureDate: '2023-09-20T09:30:51.01',
    returnDate: '2023-09-20T09:30:51.01',
    seatAvailability: '12',
    price: {
      amount: '123.45',
      currency: 'EUR'
    },
    offerType: 'amadeusBestPrice',
    uuid: 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af',
    duration: '12:10'
  }
];

export default data;
