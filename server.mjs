import express from 'express';

const app = express();
app.use(express.static('demo_json'));

app.listen(8080);
