/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const loginfunc = (user) => axios
  .post('http://localhost:5000/users', {
    username: user.username,
    password: user.password
  })
  .then((res) => {
    localStorage.setItem('usertoken', res.data);
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  })