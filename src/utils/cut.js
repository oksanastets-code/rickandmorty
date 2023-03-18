export const cutName = string =>
  string.length > 17 ? string.slice(0, 17) + '...' : string;
