const http=require ('http')
const app=http.createServer((req,resp)=>{
    resp.write('helo');
    resp.end()
})