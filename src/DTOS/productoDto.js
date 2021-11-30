export const productoDTO = producto => {
  return {
    fyh: new Date().toLocaleDateString(),
    pid: process.pid,
    producto: producto.title,
    precio: producto.price,
    id: producto.id,
  };
};
