
// const app  =  express();
// const cors = require('cors');

// app.use(express.json());
// app.use(cors());
// export default app
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('This is a HomePage')
})
export default app
