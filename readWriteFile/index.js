
/*  **********************************Blocking and Non-Blocking(Sync and Async)********************************
// Blocking, Synchronus way

import fs from "fs";
const textIn = fs.readFileSync("./input.txt", 'utf-8');
console.log(textIn);

const textOut = `This is the beast parragraph i have ever read ${textIn}. \n This is created on ${Date.now()}`;
console.log(textOut);
fs.writeFileSync('./output.txt', textOut);
console.log("fileWritten");

// Non-Blocking Asynchronus way
fs.readFile("./start.txt",'utf-8',(err,data) =>{    // call back function
    if (err) return console.log("Sorry there is some error")
    console.log(data);
    fs.writeFile('./output.txt', data, 'utf-8',err =>{
        console.log('Your file has been written');
    });
});

console.log('Reading file...'); // this will run first and above work will be done in background

*/






