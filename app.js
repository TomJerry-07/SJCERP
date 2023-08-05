const mysql2 = require("mysql2");
const express = require("express");
const app = express();
const connector = mysql2.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6637533",
  password: "mwceYYCU7N",
  database: "sql6637533",
});
connector.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected");
});
app.use(express.json());
app.use(express.static("public"));

app.post("/dnopass", (req, response) => {
  const data = req.body;
  console.log(data);
  const dno = data.dno;
  const pass = data.pass;
  connector.query(
    `INSERT INTO usersData VALUES('${dno}','${pass}');`,
    (err, res) => {
      if (err) throw err;
      console.log(res); 
      response.json(res);
    }
  );
});
app.listen(9000, () => {
    console.log("port at 5060");
  });
// const query = `INSERT INTO usersData VALUES(
//     '22ucs627',
//     'higur23'
// );`;
// connector.query(query, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

/*
Host: sql6.freesqldatabase.com
Database name: sql6637533
Database user: sql6637533
Database password: mwceYYCU7N
Port number: 3306
*/
