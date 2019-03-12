const express = require('express');
const db = require('./config/database');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;


db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use('/api/user', require('./routes/user'));
app.use('/api/trademark', require('./routes/trademark'));
app.use('/api/lawyer', require('./routes/lawyer'));
app.use('/api/registerTrademark', require('./routes/registerTrademark'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/price/', require('./routes/paymentprice'));
app.use('/api/users/',require('./routes/user'));
app.use('/api/mail/' , require('./routes/sendemail'));
app.use('/api/company', require('./routes/company'));
// app.use('/api/', require('./routes/registerTrademark'))
 

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
