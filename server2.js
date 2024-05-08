import { createServer } from 'http';
const PORT1 = process.env.PORT1;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json'); 
    next(); 
}

const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
} 

const userByID = (req, res) =>{
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    if(user){
            res.write(JSON.stringify(user));
    }
    else{
            res.statusCode = 404;
            res.write(JSON.stringify({message : 'user not found'}));
    }
    res.end();
}

const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'route not found'}));
    res.end();
}

const createUserHandler = (req, res) =>{
 let body = '';
 req.on('data', (chunk) => {
    body += chunk.toString();
 });
 req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
 });


}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () =>{
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req, res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method ==='GET'){
                
                userByID(req, res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }else{
                notFoundHandler(req, res);
            }

        });
    });
   
});

server.listen(PORT1, () => {
    console.log(`Server is running on port ${PORT1}`);
});
