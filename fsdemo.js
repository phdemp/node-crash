//import fs from 'fs';
import fs from 'fs/promises';

/*fs.writeFile('./example.txt', 'this is your master' , 'utf8', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

//async file write
fs.readFile('./example.txt', 'utf8', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

const data = fs.readFileSync('./example.txt','utf8');
console.log(data);

fs.readFile('./example.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));*/

  
  //readFile() - asyn/await
  const readfile = async () => {
    try{
        const data = await fs.readFile('./example.txt', 'utf8');
        console.log(data);
    }catch(error){
        console.log(error);

    }
  };

  // write file async/await
  const writefile = async () => {
    try{
        await fs.writeFile('./example.txt', 'i am your owner' ,'utf8');
        console.log('file written to....');
    }catch(error){
        console.log(error);

    }
  };

  //append file async/await

  const appendfile = async () => {
    try{
        await fs.appendFile('./example.txt', '\ni am your master' ,'utf8');
        console.log('file appended text....');
    }catch(error){
        console.log(error);
    }
};
 
    writefile();

    appendfile();

  readfile();
 