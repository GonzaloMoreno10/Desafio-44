exports.seed = function (knex) {
    const initProducts = [
      {
        // id: 1,
        title: 'Calculadora',
        price: '10.5',
        thumbnail:'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/29-512.png'
      },
      {
        // id: 3,
        title: 'Papas Fritas',
        price: '150',
        thumbnail:'https://cdn0.iconfinder.com/data/icons/fastfood-31/64/french-fries-potato-chip-fast-food-fastfood-512.png'
      },
    ];
  
    return knex('productos')
      .del()
      .then(() => knex('productos').insert(initProducts));
  };