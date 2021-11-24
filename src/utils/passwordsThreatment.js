const bcrypt = require('bcrypt');
export const encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

export const matchPassword = async (password, encryptPassword) => {
  const compare = await bcrypt.compare(password, encryptPassword);
  console.log(compare);
  return compare;
};
