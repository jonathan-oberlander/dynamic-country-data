const fontColor = {
  primary: "#000000",
  secondary: "#B3B3B3",
  tertiary: "#616161",
};

const color = {
  accent1: "#005aad",
  accent2: "#03a0f0",
  black: "#000000",
  brand: "#002b55",
  currency: "#ffc107",
  neutral: "#f0f2f5",
  positive: "#008b00",
  shade: "#becadc",
  white: "#ffffff",
};

const spacing = {
  xxs: "4px",
  xs: " 8px",
  s: "12px",
  m: "16px",
  l: "20px",
  xl: "24px",
  xxl: "28px",
  xxl2: "32px",
  xxl3: "40px",
  xxl4: "48px",
  xxl5: "60px",
  xxl6: "90px",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const theme = {
  color,
  fontColor,
  spacing,
};
