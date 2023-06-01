export interface ParkingCenter {
  id: number
  name: string
  location: string
  latitude: number
  longitude: number
  open_status: 'open' | 'closed'
  image_url: string
}

export const parkingLots: ParkingCenter[] = [
  {
    id: 1,
    name: 'Parking Lot A',
    location: '123 Main Street, City',
    latitude: 37.7749,
    longitude: -122.4194,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_a.jpg'
  },
  {
    id: 2,
    name: 'Parking Lot B',
    location: '456 Elm Street, City',
    latitude: 37.7833,
    longitude: -122.4167,
    open_status: 'closed',
    image_url: 'https://example.com/parking_lot_b.jpg'
  },
  {
    id: 3,
    name: 'Parking Lot C',
    location: '789 Oak Street, City',
    latitude: 37.7914,
    longitude: -122.4089,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_c.jpg'
  },
  {
    id: 4,
    name: 'Parking Lot A',
    location: '123 Main Street, City',
    latitude: 37.7749,
    longitude: -122.4194,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_a.jpg'
  },
  {
    id: 5,
    name: 'Parking Lot B',
    location: '456 Elm Street, City',
    latitude: 37.7833,
    longitude: -122.4167,
    open_status: 'closed',
    image_url: 'https://example.com/parking_lot_b.jpg'
  },
  {
    id: 6,
    name: 'Parking Lot C',
    location: '789 Oak Street, City',
    latitude: 37.7914,
    longitude: -122.4089,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_c.jpg'
  },
  {
    id: 7,
    name: 'Parking Lot D',
    location: '321 Elm Street, City',
    latitude: 37.7777,
    longitude: -122.4222,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_d.jpg'
  },
  {
    id: 8,
    name: 'Parking Lot E',
    location: '987 Oak Street, City',
    latitude: 37.7999,
    longitude: -122.4,
    open_status: 'closed',
    image_url: 'https://example.com/parking_lot_e.jpg'
  },
  {
    id: 9,
    name: 'Parking Lot F',
    location: '555 Maple Avenue, City',
    latitude: 37.7666,
    longitude: -122.4333,
    open_status: 'open',
    image_url: 'https://example.com/parking_lot_f.jpg'
  }
]
