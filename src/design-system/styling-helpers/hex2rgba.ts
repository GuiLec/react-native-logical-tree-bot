/**
 * Copy paste from https://stackoverflow.com/a/51564734
 *
 * Does not support "white" color, only "#ffffff"
 */
export const hex2rgba = (hex: string, alpha = 1) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO fix the copy paste
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  } catch (err) {
    console.warn(
      `Could not use color ${hex} for rgba conversion, maybe it is not in hex format`,
    );
    return hex;
  }
};
