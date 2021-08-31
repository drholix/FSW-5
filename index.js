const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const port = 3000;
// const users = [];

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const readJson = fs.readFileSync('./db/user-db.json');
const users = JSON.parse(readJson);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index-game', (req, res) => {
  res.render('./index-game');
});

app.get('/login', (req, res) => {
  const msg = req.query.msg;
  res.render('login', { msg: msg });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Username ' + username + 'Password: ' + password);
  if (username == users[0].username && password == users[0].password) {
    res.redirect('/');
  } else {
    res.redirect('login?msg=fail');
  }

  //   let username = req.body.username;
  //   let password = req.body.password;
  //   res.send(`Username: ${username} Password: ${password}`);
  //   const { username, password } = req.body;
  //   let errors = [];
  //   console.log('Username ' + username + 'Password: ' + password);
  //   if (!username || !password) {
  //     errors.push({ msg: 'Please fill in all fields' });
  //   } else {
  //     errors.push({ msg: 'password dont match' });
  //   }

  //   res.status(200).json({ status: 'succes' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
