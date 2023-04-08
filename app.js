const express = require('express');
const mongoose = require('mongoose');
const studentsRouter = require("./routes/students");
const cvRouter = require("./routes/cv");
const authRouter = require("./routes/auth");

const app = express();


app.use(express.json());

app.use('/students', studentsRouter);
app.use('/cv', cvRouter);
app.use('/auth', authRouter);

// Middleware gestion des erreurs

mongoose.connect('mongodb://127.0.0.1:27017/isids23', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result => app.listen(3000, () => {
    console.log('Server Started');
})).catch(err => {
    console.log(err);
})

// app.listen(3000, () => {
//     console.log("Server started !");
// });



//V0
// const express = require('express');

// const app = express();

// app.use(express.urlencoded({ extended: true })); // extended for the NESTED OBJECT
// //app.use(express.json());

// app.get('/', (request, response) => {
//     // console.log(request);
//     //response.send("<h1>Nidhal</h1>");
//     console.log(__dirname);
//     response.sendFile(__dirname + "/index.html");
// })

// app.post('/somme', (req, res) => {
//     console.log("Endpoint ciblé");
//     // console.log(req.body.n1, req.body.n2);
//     // let s = Number(req.body.n1) + Number(req.body.n2);


//     // res.send("La somme est " + s);
//     console.log(req.body)
// })

// app.listen(3000, () => {
//     console.log("Server started !");
// });