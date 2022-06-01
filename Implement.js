
const { time } = require("console");
const ps=require("prompt-sync")
const prompt=ps();





function Stages(){
    let get_selection3=()=>{
        const options=["Please select on of these options by number: \n 1.Creat Musician(You can see musician's details and interesting fact in the text file)\n 2.Creat Troupe (You can see the record of name, minimum duration and genre in the text file)\n 3.Provide summary discription of troupe(You can see all records in the text file.)\n 4.Provide details description of troupe(You can see all records in the text file.)\n 5.Cost of deploying the troupe(You can see record in the text file)\n 6.Read a list of troupe names to be populated "].join('\n')
        const selection=prompt(options+ '\n')
        //console.log('your option is:' + selection)
        return selection;
    }
    var OP=get_selection3();
    if(OP === "1"){
        const {Musician,Guitar,Bass,Percussion,Flaut,music}=require('./MusicianClass.js')
        let data=('Musicians detaile are:\n'+ music+ "\n If you are interested in the other options,\n you must start this program from beginning and select the other options ");  

        const fs = require('fs');
        // Write data in 'mywork.txt' .
        fs.writeFile('mywork.txt', data, (err) => {
        // In case of a error throw err.
        if (err) throw err;
        })
        
        
        
        
    }
    else if(OP === "2"){
        const {Troupe,T1,TMDuration}=require('./TroupeClass.js')
        const T11=T1.displayTroupe();
        let data=("The Troupe Details : \n"+ T11 +"\nIf you are interested in the other options,\nYou must start this program from beginning and select the other options ");
        const fs = require('fs');
        // Write data in 'mywork.txt' .
        fs.writeFile('mywork.txt', data, (err) => {
          // In case of a error throw err.
           if (err) throw err;
        })
        
    }
    else if(OP === "3"){
        const {T23,T24,sum3,calT}=require('./Hrate.js')
        let data='The summary of the troupe: \n'+ T23+'\nThe hourly rate for the whole troupe is '+ sum3+"\nIf you are interested in the other options,\nYou must start this program from beginning and select the other options ";
        const fs = require('fs');
        // Write data in 'mywork.txt' .
        fs.writeFile('mywork.txt', data, (err) => {
          // In case of a error throw err.
           if (err) throw err;
        })
    }
    else if(OP === "4"){ 
        const {T23,T24,sum3,calT}=require('./Hrate.js')
        let data='The summary of the troupe: \n'+ T23+'\nThe hourly rate for the whole troupe is '+ sum3+ '\n'+ T24 +"\nIf you are interested in the other options,\nYou must start this program from beginning and select the other options ";
        const fs = require('fs');
        // Write data in 'mywork.txt' .
        fs.writeFile('mywork.txt', data, (err) => {
          // In case of a error throw err.
           if (err) throw err;
        })
    }
    else if(OP === "5"){
        const {T23,T24,sum3,calT}=require('./Hrate.js')
        let data=('The cost of deploying in troupe is: '+  calT+ "\nIf you are interested in the other options,\nYou must start this program from beginning and select the other options " );
        const fs = require('fs');
        // Write data in 'mywork.txt' .
        fs.writeFile('mywork.txt', data, (err) => {
          // In case of a error throw err.
           if (err) throw err;
        })
    }
    else if(OP === "6"){
        const fs = require('fs');
        let readingFile = fs.readFile('welcome.txt','utf8', function(err, data) {
            console.log(data);
        });  
    }
    else{
        return "The number which you entered is wrong. You must select one of these options"
    }
}
Stages();

/*
let run=prompt("How many time do you want to run this program ? ")

for(let i=0; i<run.length; i++){
    lik=Stages(i);
    console.log(lik);
    
}
*/





/*
//var data=arraylik[i];
const fs = require('fs');
// Write data in 'mywork.txt' .
 fs.writeFile('mywork.txt', data, (err) => {
     // In case of a error throw err.
    if (err) throw err;
 })
*/



























//correct one
const {Musician,Guitar,Bass,Percussion,Flaut,music}=require('./MusicianClass.js')
        let data=('Musicians detaile are:\n'+ music+ "\n If you are interested in the other options,\n you must start this program from beginning and select the other options ");  
       
const fs = require('fs');
// Write data in 'mywork.txt' .
 fs.writeFile('mywork.txt', data, (err) => {
     // In case of a error throw err.
    if (err) throw err;
 })
 