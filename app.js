const express = require('express');
const customerRouter = require('./server/routes/costumer');
const useragent = require('user-agent');


const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
const userAgent = useragent.parse(req.headers['user-agent']);
console.log(userAgent);
console.log(`IP: ${req.ip}, Device: ${userAgent.device}, OS: ${userAgent.os}, Browser: ${userAgent.browser}`);
next();
}
)

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', customerRouter);

app.use("/*" , (req, res) => {
    res.redirect("/");
});

app.listen(port, (err) => {
    if (err) {
        return console.error('Failed to start server:', err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
