import path from 'path';
import url from 'url';

const filePath = './dummydir1/dummydir2/dummyfile.txt';

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const filePath2 = path.join('dummydir1', 'dummydir2', 'sample1.txt')
console.log(filePath2)

const filePath3 = path.resolve('dummydir3', 'dummydir4', 'sample2.txt')
console.log(filePath3)