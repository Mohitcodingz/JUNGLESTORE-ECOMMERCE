const express = express();
const router = express.Router();
router.get('/register',(req,res)=>{
res.send('register page')
})
router.post('/register',(req,res)=>{
res.send('register page post')  
})
module.exports = router;