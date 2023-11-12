export const getImage = (src) => {
  try {
    const image = require(src);
    return image;
  } catch (e) {
    console.log(e?.message);
  }
};
