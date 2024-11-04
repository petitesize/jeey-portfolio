const colors = {
  // COLOR WHITE
  white000: "#ffffff",
  white100: "#ececec",
  white200: "#f2f4f6",
  white300: "#d9d9d9",
  white400: "#a8a8a8",
  white500: "#9c9c9b",
  white600: "#777777",
  white700: "#667085",

  // COLOR GRAY
  gray000: "#fcfcfd",
  gray050: "#f9fafb",
  gray100: "#f2f4f7",
  gray200: "#e4e7ec",
  gray300: "#d0d5dd",
  gray400: "#98a2b3",
  gray500: "#667085",
  gray600: "#475467",
  gray700: "#344054",
  gray800: "#1d2939",
  gray900: "#101828",

  // COLOR ERROR
  error000: "#fffbfa",
  error050: "#fef3f2",
  error100: "#fee4e2",
  error200: "#fecdca",
  error300: "#fda29b",
  error400: "#f97066",
  error500: "#f04438",
  error600: "#d92d20",
  error700: "#b4231b",
  error800: "#912018",
  error900: "#7a271a",

  // COLOR WARNING
  warning000: "#fffcf5",
  warning050: "#fffaeb",
  warning100: "#fef0c7",
  warning200: "#fedf89",
  warning300: "#fec84b",
  warning400: "#fdb022",
  warning500: "#f79009",
  warning600: "#dc6803",
  warning700: "#b54708",
  warning800: "#93380d",
  warning900: "#7a2e0e",

  // COLOR SUCCESS
  success000: "#f6fef9",
  success050: "#ecfdf3",
  success100: "#d1fadf",
  success200: "#a6f4c5",
  success300: "#6ce9a6",
  success400: "#32d583",
  success500: "#12b76a",
  success600: "#039855",
  success700: "#027a48",
  success800: "#05603a",
  success900: "#054f31",

  // COLOR PINK
  pink000: "#fef5fb",
  pink050: "#fdf2fa",
  pink100: "#fce7f6",
  pink200: "#fcceee",
  pink300: "#faa7e0",
  pink400: "#f670c7",
  pink500: "#ee46bc",
  pink600: "#dd2590",
  pink700: "#c11574",
  pink800: "#9e165f",
  pink900: "#851651",

  // COLOR ROSE
  rose000: "#fff5f6",
  rose050: "#fff1f3",
  rose100: "#ffe4e8",
  rose200: "#fecdd6",
  // main color
  rose300: "#ff99ad",
  rose400: "#fd6f8e",
  rose500: "#f63d68",
  rose600: "#e31b54",
  rose700: "#c01048",
  rose800: "#a11043",
  rose900: "#89123e",

  // COLOR ORANGE
  // main color
  orange000: "#fffaf5",
  orange050: "#fff6ed",
  orange100: "#ffead5",
  orange200: "#fddcab",
  orange300: "#feb273",
  orange400: "#fd853a",
  orange500: "#fb6514",
  orange600: "#ec4a0a",
  orange700: "#c4320a",
  orange800: "#9c2a10",
  orange900: "#7e2410",

  // COLOR BLUE LIGHT
  lightBlue000: "#f5fbff",
  lightBlue050: "#f0f9ff",
  lightBlue100: "#e0f2fe",
  lightBlue200: "#b9e6fe",
  lightBlue300: "#7cd4fd",
  lightBlue400: "#36bffa",
  lightBlue500: "#0ba5ec",
  lightBlue600: "#0086c9",
  lightBlue700: "#026aa2",
  lightBlue800: "#065986",
  lightBlue900: "#0b4a6f",

  // COLOR BLUE
  blue000: "#f5faff",
  blue050: "#eff8ff",
  blue100: "#d1e9ff",
  blue200: "#b2ddff",
  blue300: "#84caff",
  blue400: "#53b1fd",
  blue500: "#2e90fa",
  blue600: "#1570ef",
  blue700: "#175cd3",
  blue800: "#1849a9",
  blue900: "#194185",

  // COLOR INDIGO
  indigo000: "#f5f8ff",
  indigo050: "#eef4ff",
  indigo100: "#e0eaff",
  indigo200: "#c7d7fe",
  indigo300: "#a4bcfd",
  indigo400: "#8098f9",
  indigo500: "#6172f3",
  indigo600: "#444ce7",
  indigo700: "#3538cd",
  indigo800: "#2d31a6",
  indigo900: "#2d3282",

  // COLOR PURPLE
  purple000: "#fafaff",
  purple050: "#f4f3ff",
  purple100: "#ebe9fe",
  purple200: "#d9d6fe",
  purple300: "#bd84fe",
  purple350: "#aaa0ff",
  purple400: "#9b8afb",
  purple500: "#7a5af8",
  purple600: "#6938ef",
  purple700: "#5925dc",
  purple750: "#6157b8",
  purple800: "#4a1fb8",
  purple900: "#3e1c96",

  // COLOR BLACK
  // main color
  black000: "#15171a",
  black900: "#000000",
};

const fonts = {
  mainEngFont: "Montserrat",
  mainKorFont: "nanumSquareNeo",
  mainNumFont: "gmarket",
};

const sizes = {
  sm01: "0.75rem", // 12
  sm02: "0.875rem", // 14

  md01: "1rem", // 16
  md02: "1.125rem", // 18

  hd01: "1.25rem", // 20
  hd02: "1.375rem", // 22

  lg01: "1.625rem", // 26
  lg02: "2rem", // 32
  lg03: "2.25rem",

  exlg01: "10rem",
};

const theme = {
  colors,
  fonts,
  sizes,
};

export default theme;

export type Theme = typeof theme;
