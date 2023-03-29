connection = require("../connect");

// User Signup controller
const signup = (req, res) => {
  // get user data from request body
  const { fname, mname, lname, email, phonenumber, age, password } = req.body;

  // insert user data into database
  connection.query(
    "INSERT INTO signin (first_name, middle_name, last_name, email_id, phnumber, age, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [fname, mname, lname, email, phonenumber, age, password],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error inserting user data" });
      } else {
        res.status(200).json({ message: "User data inserted successfully" });
      }
    }
  );
};

module.exports = {
  signup,
};
