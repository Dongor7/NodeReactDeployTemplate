const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './build')));

router
    .get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

router.route('/')
    .get((req, res) => {
        res.json({ users: ['Denis', 'Ira']});
    });

app.use('/', router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));
