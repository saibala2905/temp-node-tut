const {readFileSync,writeFileSync} = require('fs');
const firstFileContent = readFileSync('./content/subfolder/first.txt','utf8');
const secondFileContent = readFileSync('./content/subfolder/second.txt','utf8');
console.log(firstFileContent,secondFileContent);
writeFileSync('./content/resultSync.txt',`Contents of files present in the subfolder are:\n${firstFileContent}\n${secondFileContent}`,{flag: 'a'});
