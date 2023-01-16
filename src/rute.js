/* eslint-disable no-unused-vars */
const {
  createData, getAll, getBy, put, delet,
} = require('./handler');

const rute = [
  {
    method: 'POST',
    path: '/dapel',
    handler: createData,
  },
  {
    method: 'GET',
    path: '/dapel',
    handler: getAll,
  },
  {
    method: 'GET',
    path: '/dapel/{id}',
    handler: getBy,
  },
  {
    method: 'PUT',
    path: '/dapel/{id}',
    handler: put,
  },
  {
    method: 'DELETE',
    path: '/dapel/{id}',
    handler: delet,
  },
];

module.exports = rute;
