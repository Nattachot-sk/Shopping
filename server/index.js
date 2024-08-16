const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const salt = 10;
const port = 3307;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(express.static("public"));
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shoppingclothes",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated!" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okay" });
      } else {
        if (decoded.role === "member") {
          req.id_member = decoded.id_member;
          req.firstname = decoded.firstname;
          req.role = decoded.role;
          next();
        } else if (decoded.role === "admin") {
          req.id_user = decoded.id_user;
          req.firstname = decoded.firstname;
          req.role = decoded.role;
          next();
        } else {
          return res.json("not member");
        }
      }
    });
  }
};

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated!" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okay" });
      } else {
        if (decoded.role === "admin") {
          req.id_member = decoded.id_member;
          req.firstname = decoded.firstname;
          next();
        } else {
          return res.json({ Error: "You are not an admin" });
        }
      }
    });
  }
};

app.get("/admin", verifyAdmin, (req, res) => {
  res.json({
    id_member: req.id_member,
    firstname: req.firstname,
    role: "admin",
    message: "Welcome to the admin page!",
  });
});
app.get("/user", verifyUser, (req, res) => {
  res.json({
    id_member: req.id_member,
    firstname: req.firstname,
    role: "member",
    message: "Welcome",
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");

  return res.json({ Status: "OK" });
});

app.post("/register", (req, res) => {
  try {
    const { email, password, confirmPassword, firstname, lastname, age, role } =
      req.body;

    // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันหรือไม่
    if (password !== confirmPassword) {
      return res.json({ Error: "Passwords do not match" });
    }

    // ตรวจสอบว่าอีเมลซ้ำกันหรือไม่
    const checkEmailQuery = "SELECT * FROM member WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, results) => {
      if (err) {
        console.log("Error checking email:", err);
        return res.json({ Error: "Internal server error" });
      }

      if (results.length > 0) {
        // ถ้ามีอีเมลนี้ในฐานข้อมูลแล้ว
        return res.json({ Error: "Email already exists" });
      } else {
        // ถ้าไม่มีอีเมลนี้ในฐานข้อมูล ทำการเพิ่มข้อมูล
        const sql =
          "INSERT INTO member (`email`, `password`, `firstname`, `lastname`, `age`, `role`) VALUES(?)";

        bcrypt.hash(password.toString(), salt, (err, hash) => {
          if (err) return res.json({ Error: "Data error hashing password" });

          const values = [email, hash, firstname, lastname, age, role];

          db.query(sql, [values], (err, results) => {
            if (err) {
              console.log("Error inserting data:", err);
              return res.json({ Error: "Internal server error" });
            }
            return res.json({ Status: "OK" });
          });
        });
      }
    });
  } catch (error) {
    console.log("Error in try-catch:", error);
    return res.json({ Error: "Server error" });
  }
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM member WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error" });
    if (data.length > 0) {
      const firstname = data[0].firstname;
      const role = data[0].role;
      const id_member = data[0].id_user;
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "password compare fail" });
          if (response) {
            const token = jwt.sign(
              { id_member, firstname, role },
              "jwt-secret-key",
              {
                expiresIn: "1d",
              }
            );
            res.cookie("token", token);
            return res.json({ Status: "OK", role });
          } else {
            return res.json({ Error: "รหัสผ่านไม่ถูกต้อง" });
          }
        }
      );
    } else {
      return res.json({ Error: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง" });
    }
  });
});

app.get("/member", (req, res) => {
  try {
    const sql = "SELECT * FROM member";
    db.query(sql, [res], (err, data) => {
      if (err) {
        return res.json({ Error: "Error" });
      }
      return res.json(data);
    });
  } catch (error) {
    return res.json({ Error: error });
  }
});
app.get("/member/:id", (req, res) => {
  try {
    const id = req.params.id;
    const sql = "SELECT * FROM member WHERE id_member = ?";
    db.query(sql, [id], (err, data) => {
      if (err) {
        return res.json({ Error: "Error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.put("/editmember/:id", (req, res) => {
  try {
    const id = req.params.id;
    const { email, password, firstname, lastname, age } = req.body;

    if (!email || !password || !firstname || !lastname || !age) {
      return res.status(400).json({ Error: "All fields are required" });
    }

    const sql =
      "UPDATE member SET `email` = ?, `password` = ?, `firstname` = ?, `lastname` = ?, `age` = ? WHERE id_member = ?";

    db.query(
      sql,
      [email, password, firstname, lastname, age, id],
      (err, data) => {
        if (err) {
          console.error("Error updating member:", err);
          return res.status(500).json({ Error: "Update Fail" });
        }
        return res.json({ Status: "Update OK" });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
});

app.delete("/deletemember/:id", (req, res) => {
  try {
    const id = req.params.id;
    const sql = "DELETE FROM member WHERE id_member = ?";
    db.query(sql, [id], (err, data) => {
      if (err) return res.json({ Error: "Delete Fail" });
      return res.json({ Status: "OK" });
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/product", (req, res) => {
  try {
    const sql = "SELECT * FROM product";
    db.query(sql, [res], (err, data) => {
      if (err) {
        return res.json({ Error: "Error" });
      }
      return res.json(data);
    });
  } catch (error) {
    return res.json({ Error: error });
  }
});

app.get("/product/:id", (req, res) => {
  try {
    const id = req.params.id;
    const sql = "SELECT * FROM product WHERE id_product = ?";
    db.query(sql, [id], (err, data) => {
      if (err) {
        return res.json({ Error: "Error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.log("error", error);
  }
});

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

app.post("/addproduct", upload.single("images"), (req, res) => {
  try {
    const images = req.file.filename;

    const sql =
      "INSERT INTO product  (`id_type`, `name_product`,`image_product`,`description_product`,`size_product`,`color_product`,`price_product`,`amount_product`,`gender_product`) VALUES (?,?,?,?,?,?,?,?,?)";
    const values = [
      req.body.idType,
      req.body.nameProduct,
      images,
      req.body.descriptionProduct,
      req.body.sizeProduct,
      req.body.colorProduct,
      req.body.priceProduct,
      req.body.amountProduct,
      req.body.genderProduct,
    ];
    db.query(sql, values, (err, data) => {
      if (err) return res.json({ Error: "Insert Fail" });

      return res.json({ Status: "Add product OK" });
    });
  } catch (error) {
    console.log("error", error);
  }
});
app.put("/editproduct/:id", (req, res) => {
  try {
    const id = req.params.id;
    const {
      idType,
      nameProduct,
      imageProduct,
      descriptionProduct,
      sizeProduct,
      colorProduct,
      priceProduct,
      amountProduct,
      genderProduct,
    } = req.body;
    if (
      !idType ||
      !nameProduct ||
      !imageProduct ||
      !descriptionProduct ||
      !sizeProduct ||
      !colorProduct ||
      !priceProduct ||
      !amountProduct ||
      !genderProduct
    ) {
      return res.status(400).json({ Error: "All fields are required" });
    }
    const sql =
      "UPDATE product SET `id_type`=?, `name_product`=?, `image_product`=?, `description_product`=?, `size_product`=?, `color_product`=?, `price_product`=?, `amount_product`=?, `gender_product`=? WHERE `id_product`=? ";
    db.query(
      sql,
      [
        idType,
        nameProduct,
        imageProduct,
        descriptionProduct,
        sizeProduct,
        colorProduct,
        priceProduct,
        amountProduct,
        genderProduct,
        id,
      ],
      (err, data) => {
        if (err) {
          console.error("Error updating product:", err);
          return res.status(500).json({ Error: "Update Fail" });
        }
        return res.json({ Status: "Update OK" });
      }
    );
  } catch (error) {
    console.error("error", err);
  }
});

app.delete("/deleteproduct/:id", (req, res) => {
  try {
    const id = req.params.id;
    const sql = "DELETE FROM product WHERE id_product = ?";
    db.query(sql, id, (err, data) => {
      if (err) {
        return res.json({ Error: "Delete fail" });
      }
      return res.json({ Status: "Delete OK" });
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.post("/addcontact", (req, res) => {
  try {
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.phone,
      req.body.email,
      req.body.message,
    ];
    const sql =
      "INSERT INTO contact (`firstname`,`lastname`,`phone`,`email`,`message`) VALUES (?,?,?,?,?)";
    db.query(sql, values, (err, data) => {
      if (err) return res.json({ Error: "Error" });
      return res.json({ Status: "OK" });
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(port, () => {
  console.log("Sever running on port" + " " + port);
});
