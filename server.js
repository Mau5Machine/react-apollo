const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err))
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// mongodb://mau5machine:Fl561stfu9500@mongocloudtest-shard-00-00-izrut.gcp.mongodb.net:27017,mongocloudtest-shard-00-01-izrut.gcp.mongodb.net:27017,mongocloudtest-shard-00-02-izrut.gcp.mongodb.net:27017/test?ssl=true&replicaSet=MongoCloudTest-shard-0&authSource=admin&retryWrites=true&w=majority