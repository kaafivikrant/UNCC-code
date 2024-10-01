const fs = require('fs/promises');
const path = require('path');

(async () => {
    const watcher = fs.watch("./command.txt");

    const commandFileHandeler = await fs.open("./command.txt", "r");

    for await (const event of watcher) {
        if(event.eventType === "change") {
            const command = await fs.readFile("./command.txt", "utf8");
            console.log(command);
            if(command.includes("create a file")){
                let fileName = command.split(" ")[3];
                const fileExists = await fs.open(fileName, "r");
                if(fileExists){
                    console.log("File already exists");
                    break;
                }
                await fs.open(fileName, "w");
                console.log("File created");
            } 
            if(command.includes("delete the file")){
                let fileName = command.split(" ")[3];
                const fileExists = await fs.open(fileName, "r");
                if(!fileExists){
                    console.log("File doesn't exists");
                    break;
                }
                await fs.unlink(fileName);
                console.log("File deleted"); 
            } 
            // rename the file
            if(command.includes("rename the file")){
                let fileName = command.split(" ")[3];
                let newFileName = command.split(" ")[4];
                const fileExists = await fs.open(fileName, "r");
                if(!fileExists){
                    console.log("File doesn't exists");
                    break;
                }
                await fs.rename(fileName, newFileName);
                console.log("File renamed");
            }
            // add text to file
            if(command.includes("add text to file")){
                let fileName = command.split(" ")[3];
                let text = command.split(" ")[4];
                const fileExists = await fs.open(fileName, "r");
                if(!fileExists){
                    console.log("File doesn't exists");
                    break;
                }
                await fs.appendFile(fileName, text);
                console.log("Text added to file");
            }
        }
    }
})();
