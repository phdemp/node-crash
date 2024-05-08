import crypto from 'crypto';

// Create a new SHA-256 hash object
const hash = crypto.createHash('sha256');

// Update the hash with the input string
hash.update('password1234');

// Get the hexadecimal representation of the hash
const hashHex = hash.digest('hex');

// Log the hash to the console
console.log(hashHex);


// randomBytes()
crypto.randomBytes(16, (err, buf) => {
if (err) throw err;
 console.log(buf.toString('hex'));
});





// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);