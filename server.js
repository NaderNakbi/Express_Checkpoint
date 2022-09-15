const express=require('express')
const app=express()
const AuthTime=(req,res,next)=>{
    let today = new Date() 
    let day =today.getDay()
    let Hours =today.getHours()
    // console.log(today)
    console.log(day)
    console.log(Hours)
    if (day>=1 && day<=5 && Hours>=9 && Hours<=16  ) {
        next()
        
    }else{
        res.send('<h1>working hours (Monday to Friday,  from 9 to 17)</h1>')
    }
}
//Time
// let today = new Date() .toLocaleDateString()
app.use(AuthTime)
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/about.html')
})
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname + '/css/style.css')
})

app.get('*',(req,res)=>{
    // res.send('You are in the wrong Page')
    res.redirect('/')
})
app.listen(3000,(err)=>err?console.log(err):console.log('server is running on port 3000'))