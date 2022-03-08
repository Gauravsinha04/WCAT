//1) node wcat.js filepath=> displays the contents of a file in terminal
//2) node wcat.js filepath1 filepath2 filepath3=>display content of all files
// in terminal in concatinated form in given order
// node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

const fs= require("fs"); 
let inputarr =process.argv.slice(2);
let filesarr=[];
// placed flies path in filesarr

for(let i=0;i<inputarr.length; i++){
    filesarr.push(inputarr[i]);
}
//console.log("files to be used are"+filesarr);

// check if all files are present //
for(let i=0;i< filesarr.length;i++){
    let doesexist=fs.existsSync(filesarr[i]);
    if (!doesexist){
        console.log("files does not exist");
        return;
    }
}
// content read and appending starts //
let content="";
for(let i=0;i<filesarr.length;i++){
    let fileContent= fs.readFileSync(filesarr[i]);
    content += fileContent+"\n";

}
console.log(content);