let mongoose = require('mongoose');
export const con = mongoose
  .connect(
    `mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/desafios?retryWrites=true&w=majority`,
  )
  .then(db => {})
  .catch(err => {
    console.error(err);
  });
