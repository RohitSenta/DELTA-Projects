const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash('success');
    res.locals.errorMsg = req.flash('error');
    next();
});

app.get("/register", (req, res) => {
    let{name = "anonymous"} = req.query;
    req.session.name = name;
    
    if(name === "anonymous"){
        req.flash("error", "User not registered!");
    } else {
        req.flash("success", "User registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", {name: req.session.name});
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
// 	res.send(`You send a request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//     res.send("test successful!");
// });

// app.use(cookieParser("secretCode"));

// app.get("/getsignedcookies", (req, res) => {
//     res.cookie("made-in", "India", {signed: true});
//     res.send("signed cookie send");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("Greet", "Namaste");
//     res.cookie("Origin", "India");
//     res.send("we send you some cookies!");
// });

// app.get("/greet", (req, res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root route");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
