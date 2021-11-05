import faker from 'faker';
const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const productosFake = cant => {
  const products = [];
  console.log(cant);
  for (let i = 0; i < cant; i++) {
    let prod = {
      _id: i + 1,
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productName(),
      image: faker.image.avatar(),
    };
    products.push(prod);
  }
  return products;
};
