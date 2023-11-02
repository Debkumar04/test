const http = require('http')

const server= http.createServer(callBack);

let a=[];
// new change
function callBack(req , res){

    // console.log(req.url)
    // console.log(req.method)
    //comment

    if(req.method=='GET')
    {
        
    }
    else if(req.method=='POST')
    {
        a.push(1);
        
    }
    else if(req.method=='PUT')
    {
        a[1]=2;
    }
    else if(req.method=='DELETE')
    {
        a.pop();
    }

    res.write(JSON.stringify(a));
    res.end();
}


server.listen(7000)