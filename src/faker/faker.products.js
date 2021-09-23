import faker from 'faker'
const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

export const products = (cant) => {
    const productos = [];
    for(let i =0; i<cant; i++){
        let prod = {
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            thumbnail: faker.image.image()
        }
        console.log(prod);
        productos.push(prod);
        
    }
    return productos
}