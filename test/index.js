const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3002);

app.use(require('./src/user'));
app.use(require('./src/contact'));

app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
});