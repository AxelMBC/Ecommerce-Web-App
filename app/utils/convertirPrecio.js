export const convertirPrecio = (precio) => {
  return `$${precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
