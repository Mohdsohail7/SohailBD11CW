let express = require("express");
let app = express();
let PORT = 3000;

//  Create an endpoint that takes a name as a query parameter and returns it in uppercase.
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let convertUpperCase = name.toUpperCase();
  //console.log(myName);
  res.send(convertUpperCase)
  });

// Create an endpoint that takes firstName and lastName as query parameters and returns the full name.
app.get ('/fullname', (req, res) => {
 let firstName = req.query.firstName;
 let lastName = req.query.lastName;
 let fullName = firstName + " " + lastName;
 //console.log(fullName);
  res.send(fullName);
})

// Create an endpoint that takes month and year as query parameters and returns a formatted date in the format 'Month, Year'.
app.get('/date', (req, res) =>{
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ", " + year;
 //console.log(formattedDate);
  res.send(formattedDate);
  })

// Create an endpoint that takes a name as a query parameter and returns a greeting in the format 'Namaste, Name!'.
app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greeting = "Namaste, " + name;
  res.send(greeting);
  }) ;

// Create an endpoint that takes street, city, and state as query parameters and returns a formatted address.
app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;

  let address = street + ", " + city + ", " + state;
  res.send(address);
});

// Create an endpoint that takes username and domain as query parameters and returns a formatted email address
app.get('/email', (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;

  let email = username + "@" + domain;
  res.send(email);
  }) ;

// start the server here 
app.listen(PORT, () => {
 console.log("Server is the Running port number at " + PORT);
});