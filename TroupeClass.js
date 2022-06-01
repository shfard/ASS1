
const ps=require("prompt-sync")
const prompt=ps();

//-----------------------------   Option 2    ------------------------------
//----------------------- Troupe conditions --------------------------------
//          Record the name, minimum duration, genre
//name of the Troupe:

function Stringname(Trname){  
    if (Trname.length>3 &&  Trname.length<30 )    
    {
     let s=Trname;
        return s;
    }
    else{
        let Trname=prompt("Enter troupe 's name, between 3 and 30 characters : ");
        return Trname;
    }
}

//----------------------------------------------------------
// minimum duration
function DurationOfHours(Trhours){
    if (Trhours> 0.5 &&  Trhours<3 ){
        let s=Trhours;
        return s;
    }
    else{
        let Trhours=prompt("enter your minimum duration in hours, between 0.5 and 3: ");
        return Trhours;
    }
}
//-----------------------------------------------------------
// genre:
function Genre(Trgenre){
    if ( (Trgenre=='rock')|| (Trgenre=='jazz') || (Trgenre=='pop') )    
    {
     let s=Trgenre;
        return s;
    }
    else{
        let Trgenre=prompt("Enter your genre from rock,jazz,pop ");
        return Trgenre;
    }
}
//---------------------------------------------------------------------------------------
//--------------------------   Create Troupe Class   -------------------------------------
class Troupe{
    constructor(Tname,TMDuration,Tgenre,Itype,num2,music){  
        this.Tname=Tname;
        this.TMDuration=TMDuration;
        this.Tgenre=Tgenre;
        this.Itype=Itype;
        this.num2=num2;
        this.music=music;
    }
    displayTroupe(){
        return ('Troupe name:  ' + this.Tname +'\nMinimum duration: ' +  this.TMDuration+ '\nGenre: '+ this.Tgenre);
    }
    TroupeSummary(){
        
        return ('Troupe name:  ' + this.Tname +'\nMinimum duration: ' +  this.TMDuration+ '\nGenre: '+ this.Tgenre + '\nIn this troupe we have ' +this.num2 + ' ' + this.Itype + 'es');
        
    }
    TroupeDetaile(){
        return('The musician details in this troupe: '+'\n' + this.music);
    }
}
//----------------------------- Type of Instrument for Troupe class -------------------------------------------

let get_selection2=()=>{
    const options=['please select type of instrument: guitar , bass , percussion , or flaut '].join('\n')
    const selection=prompt (options+ '\n')
    //console.log('your instrument is:' + selection)
    return selection;
}
var InsType=get_selection2();
function typeOfInstrument(InsType){
    if (InsType ==='guitar'){
        var Itype=InsType;
       return Itype;
    }
    else if(InsType ==='bass'){
        var Itype=InsType;
        return Itype;
    }
    else if(InsType ==='percussion'){
        var Itype=InsType;
        return Itype;
    }  
    else if(InsType ==='flaut'){
        var Itype=InsType;
        return Itype;
    } else{
        var instrument2=get_selection2(); //???
        return instrument2;
    } 
    
}
//---------------------------------------------------------------------------------
//------------------------ Implement Troupe  --------------------------------------
let num2=prompt("How many of selected instrument do you have in your troupe? ")
let Trname=prompt("Enter troupe's name, between 3 and 30 characters : ");
let Trgenre=prompt("Enter your genre from rock,jazz,pop ");
let Trhours=parseFloat(prompt("Enter your minimum duration in hours, between 0.5 and 3 :"));
var Tname=Stringname(Trname);
var TMDuration=DurationOfHours(Trhours);
var Tgenre=Genre(Trgenre);
var Itype=typeOfInstrument(InsType);

const {Musician,Guitar,Bass,Percussion,Flaut,music}=require('./MusicianClass.js')

const T1=new Troupe(Tname,TMDuration,Tgenre,Itype,num2,music);



//--------------------------------------------------------------------------
module.exports={Troupe,T1,TMDuration}; 
