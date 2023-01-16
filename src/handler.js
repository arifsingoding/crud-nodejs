/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const dapel = require('./dapel');

// POST Data
const createData = (request, h) => {
  const {
    nama, kelas, jurusan, nisn,
  } = request.payload;

  const id = nanoid(10);

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const allField = {
    id, nama, kelas, jurusan, nisn, createdAt, updatedAt,
  };

  dapel.push(allField);

  const sukses = dapel.filter((dap) => dap.id === id).length > 0;

  if (sukses) {
    const response = h.response({
      status: 'succes',
      message: 'Berhasil ditambah!',
      data: {
        dapel,
      },
    });
    return response.code(201);
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal tambah data',
  });
  return response.code(404);
};

// GET All Data
const getAll = () => ({
  status: 'succes',
  data: {
    dapel,
  },
});

// GET By
const getBy = (request, h) => {
  const { id } = request.params;

  const sukses = dapel.filter((da) => da.id === id)[0];

  if (sukses !== undefined) {
    return {
      status: 'succes',
      message: 'berhasil tampil',
      data: {
        sukses,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'gagal ditemukan!',
  });
  return response.code(404);
};

// PUT Data
const put = (request, h) => {
  const { id } = request.params;

  const { nama, kelas, jurusan } = request.payload;

  const updatedAt = new Date().toISOString();

  const sukses = dapel.findIndex((dap) => dap.id === id);

  if (sukses !== -1) {
    dapel[sukses] = {
      ...dapel[sukses],
      nama,
      kelas,
      jurusan,
      updatedAt,
    };
    const response = h.response({
      status: 'succes',
      message: 'Berhasil update data!',
    });
    return response.code(201);
  }

  const response = h.response({
    status: 'fail',
    message: 'gagal update data',
  });
  return response.code(404);
};

// DELETE Data
const delet = (request, h) => {
  const { id } = request.params;

  const sukses = dapel.findIndex((dap) => dap.id === id);

  if (sukses) {
    dapel.splice[sukses, 1];
    const response = h.response({
      status: 'succes',
      message: 'Berhasil hapus data',
    });
    return response.code(201);
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal hapus data',
  });
  return response.code(404);
};

module.exports = {
  createData, getAll, getBy, put, delet,
};
