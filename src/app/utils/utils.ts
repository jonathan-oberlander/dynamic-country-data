import moment from "moment-timezone";

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

export function countryCapitalTime(alpha2Code: string): string {
  const mz = moment.tz.zonesForCountry(alpha2Code);
  return mz ? moment().tz(mz[0]).format("HH:mm") : "";
}

export function shortFormat(value: number): string {
  const p = value.toString();
  const len = p.length;

  if (len <= 3) {
    return p;
  }

  if (len >= 4 && len < 6) {
    // 1.200 -> 1.2
    return (value / 1000).toFixed(1) + "k";
  }

  if (len >= 6 && len < 9) {
    // 1.200.300 -> 1.2
    return (value / 1000000).toFixed(1) + "m";
  }

  if (len >= 9) {
    // 1.200.300.400 -> 1.2
    return (value / 1000000000).toFixed(1) + "bn";
  }

  return p;
}
