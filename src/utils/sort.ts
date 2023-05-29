import { ParkingCenter } from "type";

 
  // Function to calculate distance between two coordinates using Haversine formula
  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }
  
  function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
  
  // Function to sort the parking lots array by distance
export default function sortParkingLotsByDistance(parkingLots: ParkingCenter[], targetLat: number, targetLon: number): void {
    parkingLots.sort((a, b) => {
      const distanceA = calculateDistance(targetLat, targetLon, a.latitude, a.longitude);
      const distanceB = calculateDistance(targetLat, targetLon, b.latitude, b.longitude);
      return distanceA - distanceB;
    });
  }  