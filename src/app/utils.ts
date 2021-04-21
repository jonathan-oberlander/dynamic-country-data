export function getDistanceInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return distanceFormat(d);
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function distanceFormat(val: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "unit",
    unit: "kilometer",
    maximumFractionDigits: 0,
  }).format(val);
}

// const funcFromOperator = (op: string) => {
//   return {
//     "+": (x: number, y: number) => x + y,
//     "-": (x: number, y: number) => x - y,
//   }[op];
// };
