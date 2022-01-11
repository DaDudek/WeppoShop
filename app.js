let http = require('http');
let express = require('express');

let app = express();

let server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use( (req, res) => {
    res.render('index', {username: 'foo'});
});

server.listen(process.env.PORT || 3000);
