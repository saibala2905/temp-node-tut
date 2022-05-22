const {readFile,writeFile} = require('fs');
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Contents of files present in the subfolder are:\n${first}\n${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
            );
    })
})