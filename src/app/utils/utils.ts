import moment from "moment-timezone";
// welcometo the vault :)

// a cool function i found online
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

// format the distance in km
export function distanceFormat(val: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "unit",
    unit: "kilometer",
    maximumFractionDigits: 0,
  }).format(val);
}

export function countryCapitalTime(alpha2Code: string) {
  const mz = moment.tz.zonesForCountry(alpha2Code);
  return mz ? moment().tz(mz[0]).format("HH:mm") : "";
}

export function shortFormat(population: number) {
  const p = population.toString().length;

  if (p <= 3) {
    return population;
  }

  if (p >= 4 && p < 6) {
    // 1.200 -> 1.2
    return (population / 1000).toFixed(1) + "k";
  }

  if (p >= 6 && p < 9) {
    // 1.200.300 -> 1.2
    return (population / 1000000).toFixed(1) + "m";
  }

  if (p >= 9) {
    // 1.200.300.400 -> 1.2
    return (population / 1000000000).toFixed(1) + "bn";
  }

  return population;
}
