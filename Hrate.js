const ps=require("prompt-sync")
const prompt=ps();

//--------------------------------------------------
function rateFunction(srate)
{
  if( srate>50){
      let s=srate  
      return s;
    }
    else{
    let srate=prompt("Hourly rate must be greater than 50.enter your hourly rate ");
    return srate;
    }
}

//-------------------------------------------------- 
const {Troupe,T1,TMDuration}=require('./TroupeClass.js')
let num=prompt("To calculate the cost of deploying or The hourly rate for the whole troupe,\n you must add the hourle rate. How many rate do you want to add, maximum number must be 5 ? ")
function addRate(){
    
    if(num<6){
     var rateArray=[];
     var size=num 
     for (var i=0 ; i<size ;i++){
         rateArray[i]=parseInt(prompt("Enter your hourly rate. Hourly rate must be greater than 50. "));
        }
      
      var inputArray=[];
      var size=num
      for(var i=0 ; i<size ;i++){
          var srate=rateArray[i];
          var Mrate=rateFunction(srate);
          inputArray[i]={Mrate};
        }

    }else {
      return ("number must be maximum 5");
    }
   return inputArray;
   
   
}
//------------------------------ Calculate the Troupe -----------------------------------
var nik=addRate();

function rateOnly(arr){
    const rate1=arr.map((value)=>{
        const rate=value.Mrate;
        return rate;
    });
    return rate1;

}
//console.log(rateOnly(nik));

//---------------- the hourly rate for the whole troupe for Troupe Summary-----------------
var cal=rateOnly(nik);
var B=cal.length;
let sum=0;
for (let i = 0; i < B; i++){
    sum +=cal[i];
}
var sum3=sum; 


//---------------------------- Implement  ----------------------------------------------
//To have summary of the Troupe: display+ summary +
var T23=T1.TroupeSummary();
var T24=T1.TroupeDetaile();
var calT=(sum3*TMDuration)/B
//console.log('The cost of deploying in troupe is: '+  calT); 
//-------------------------------------------
module.exports={T23,T24,sum3,calT};
