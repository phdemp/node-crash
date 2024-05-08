import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
   // res.write();
  // res.setHeader('Content-Type', 'text/html');
 // res.writeHeader(500, { 'Content-Type' : 'application/json' });
  {/*res.end(JSON.stringify({
      message : 'Server Error'
  }));*/}
 // console.log(req.url);
 // console.log(req.method);
  //res.writeHeader(200, {'Content-Type':'text/html'})
   // res.end('<h1>Hello World</h1>');
   try{
    if(req.method === 'GET'){
        let filePath;
    if(req.url === '/'){
     filePath = path.join(__dirname, 'public', 'index.html');
    }else if(req.url === '/about'){
     filePath = path.join(__dirname, 'public', 'about.html');
    }
    else{
      throw new Error ('Not Found');
    }
    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
 }
 else{
     throw new Error('method not allowed');
 }
    }
    catch(err){
     res.writeHeader(500, {'Content-Type':'text/plain'})
     res.end('Server Error');
    }
 })
  /* try{
   if(req.method === 'GET'){
   if(req.url === '/'){
    res.writeHeader(200, {'Content-Type':'text/html'})
    res.end('<h1>Homepage</h1>');
   }else if(req.url === '/about'){
    res.writeHeader(200, {'Content-Type':'text/html'})
    res.end('<h1>About Page</h1>');
   }
   else{
    res.writeHeader(404, {'Content-Type':'text/html'})
    res.end('<h1>404 Page Not Found</h1>');
   }
}
else{
    throw new Error('method not allowed');
}
   }
   catch(err){
    res.writeHeader(500, {'Content-Type':'text/plain'})
    res.end('Server Error');
   }
}) */

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});