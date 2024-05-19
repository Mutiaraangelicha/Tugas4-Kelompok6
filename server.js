const express = require('express');
const app = express();

//Data User Awal
let user = {
  Nama		: "Mutiara Angelicha Rahma";
  NIM		: "123210169";
  Kelas		: "IF-C";
  Prodi		: "Informatika";
  Fakultas	: "FTI";
};

// Endpoint untuk mengembalikan user
app.get('/',(req, res) => {
  res.json(user)
});

//Endpoint untuk memperbarui user
app.post('/', (req, res) => {

//Mendapatkan data user yang diperbarui dari body permintaan
  const updateUser = req.body

//Memperbarui user dengan data yang diterima
  user = {...user, ...updateUser };
  
  res.json(user);
});

//Port yang digunakanoleh server
  const PORT = process.env.PORT || 8080;

//Mulai server
app.listen(PORT, () => {
  console.log('Server berjalan pada port ${PORT}');
});

