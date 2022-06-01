//Test :
//----------------------------------------------
const ps=require("prompt-sync")
const prompt=ps();


//----------------------------  Option 1------------------------------------
//---------------------------- Select Musician -----------------------------

let get_selection=()=>{
    const options=['please select one of the musician: guitarist , bassist , percussionist , or flautist '].join('\n')
    const selection=prompt (options+ '\n')
    //console.log('your musician is:' + selection)
    return selection;
}

//var instrument=get_selection();   
//----------------------    Musician conditions     ----------------------------
// name:
function Stringname(sname){
    if (sname.length>3 && sname.length<30 )    
    {
     let s=sname
        return s;
    }
    else{
        let sname=prompt("Name between 3 and 30 characters.enter your name ");
        return sname;
    }
}
//------------------------------------
//year:
function yearFunction(syear){
    if( syear>0){
        let s=syear ;
        return s;
    }
    else{
        let syear="Year must be greater than zero.enter your years playing ";
        return syear;
    }
}
//-------------------------------------------------
//rate:
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
//-------------------------------------------------------------------------------------------
//-------------------------     Creat Musician Class     ------------------------------------
//-------------------------------------------------------------------------------------------
class Musician{
    constructor(Mname,Myear,Mrate){
        this.Mname=Mname;
        this.Myear=Myear;
        this.Mrate=Mrate; 
       //this.mus=mus || []; 
    }
    
 //-----------------------------
    DisplayMusician(){
        return ("The name of the musician is " +this.Mname + ". He/She is playing for " + this.Myear + " years and his/her hourly rate is " + this.Mrate + "");
    }
 }
//---------------------------
 class Guitar extends Musician{ 
    constructor (Mtype){
      super();
      this.Mtype=Mtype;
    }
    displayGuitar(){
        const Gfact=('interesting fact for Guitarist is"The more strings you have,the better you are" ');
        return Gfact; 
    }
}
class Bass extends Musician{
    constructor (Mtype){
        super();
        this.Mtype=Mtype;
    }
    displayBass(){
      const Bfact= ('interesting fact for Bassist is "Everyone loves a bassist" ');
      return Bfact;
    }
} 
class Percussion extends Musician{
    constructor(Mtype){
      super();
      this.Mtype=Mtype;
    }
    displayPercussion(){
      const Pfact= 'interesting fact for Percussionist is "Me drum" ';
      return Pfact;
    }
}
class Flaut extends Musician{
    constructor(Mtype){
     super();
     this.Mtype=Mtype;
    }
    displayFlaut(){
     const Ffact= ('interesting fact for Flautist is "1989 heavy metal instrument of the year" ');
     return Ffact;
    }
}
//----------------------------- Type of Musician ------------------------------------------
function instrumentsFunction(Mtype){
    if (Mtype ==='guitarist'){
       let G1=new Guitar("guitarist");
       return (G1.displayGuitar());
    }
    else if(Mtype ==='bassist'){
        let B1=new Bass("bassist");
        return (B1.displayBass()); 
    }
    else if(Mtype ==='percussionist'){
        let P1=new Percussion("percussionist")
        return (P1.displayPercussion());
    }  
    else if(Mtype ==='flautist'){
        let F1=new Flaut("flautist");
        return (F1.displayFlaut());
    } else{
        var instrument=get_selection(); 
        return instrument;
    } 
}


//-------------------------  Add musician to the Musician Class  --------------------------------------
//let numm=prompt("How many musician do you want to add, maximum number must be 5 ? ")
function addMusician(){
    let numm=prompt("How many musician are they? maximum number must be 5 ? ")
    if(numm === "1"){
        var instrument=get_selection();
        let sname=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname);
        var Myear=yearFunction(syear)
        var Mrate=rateFunction(srate);
        var M1= new Musician(Mname,Myear,Mrate);
        var mus1=M1.DisplayMusician();
        var mus21=instrumentsFunction(instrument); 
        return (mus1 + mus21);
    }
    else if(numm === "2"){
        var instrument=get_selection();
        let sname=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname);
        var Myear=yearFunction(syear)
        var Mrate=rateFunction(srate);
        var M1= new Musician(Mname,Myear,Mrate);
        var instrument1=get_selection();
        let sname1=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear1=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate1=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname1);
        var Myear=yearFunction(syear1)
        var Mrate=rateFunction(srate1);
        var M2= new Musician(Mname,Myear,Mrate);
        var mus1=M1.DisplayMusician();
        var mus21=instrumentsFunction(instrument); 
        var mus2=M2.DisplayMusician();
        var mus22=instrumentsFunction(instrument1)
        return (mus1 + '\n' + mus21 + '\n' + mus2 + '\n' +mus22);
    }
    else if(numm === "3"){
        var instrument=get_selection();
        let sname=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname);
        var Myear=yearFunction(syear)
        var Mrate=rateFunction(srate);
        var M1= new Musician(Mname,Myear,Mrate);
        var instrument1=get_selection();
        let sname1=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear1=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate1=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname1);
        var Myear=yearFunction(syear1)
        var Mrate=rateFunction(srate1);
        var M2= new Musician(Mname,Myear,Mrate);
        var instrument2=get_selection();
        let sname2=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear2=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate2=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname2);
        var Myear=yearFunction(syear2)
        var Mrate=rateFunction(srate2);
        var M3= new Musician(Mname,Myear,Mrate);

        var mus1=M1.DisplayMusician();
        var mus21=instrumentsFunction(instrument); 
        var mus2=M2.DisplayMusician();
        var mus22=instrumentsFunction(instrument1)
        var mus3=M3.DisplayMusician();
        var mus23=instrumentsFunction(instrument2)
        return (mus1 + '\n' + mus21 + '\n' + mus2 + '\n' +mus22 + '\n' + mus3 + '\n' + mus23);

    }
    else if(numm === "4"){
        var instrument=get_selection();
        let sname=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname);
        var Myear=yearFunction(syear)
        var Mrate=rateFunction(srate);
        var M1= new Musician(Mname,Myear,Mrate);
        var instrument1=get_selection();
        let sname1=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear1=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate1=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname1);
        var Myear=yearFunction(syear1)
        var Mrate=rateFunction(srate1);
        var M2= new Musician(Mname,Myear,Mrate);
        var instrument2=get_selection();
        let sname2=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear2=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate2=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname2);
        var Myear=yearFunction(syear2)
        var Mrate=rateFunction(srate2);
        var M3= new Musician(Mname,Myear,Mrate);
        var instrument3=get_selection();
        let sname3=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear3=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate3=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname3);
        var Myear=yearFunction(syear3)
        var Mrate=rateFunction(srate3);
        var M4= new Musician(Mname,Myear,Mrate);

        var mus1=M1.DisplayMusician();
        var mus21=instrumentsFunction(instrument); 
        var mus2=M2.DisplayMusician();
        var mus22=instrumentsFunction(instrument1)
        var mus3=M3.DisplayMusician();
        var mus23=instrumentsFunction(instrument2)
        var mus4=M4.DisplayMusician();
        var mus24=instrumentsFunction(instrument3)
        return (mus1 + '\n' + mus21 + '\n' + mus2 + '\n' +mus22 + '\n' + mus3 + '\n' + mus23 + '\n' + mus4 + '\n' + mus24   );

    }
    else if(numm === "5"){
        var instrument=get_selection();
        let sname=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname);
        var Myear=yearFunction(syear)
        var Mrate=rateFunction(srate);
        var M1= new Musician(Mname,Myear,Mrate);
        var instrument1=get_selection();
        let sname1=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear1=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate1=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname1);
        var Myear=yearFunction(syear1)
        var Mrate=rateFunction(srate1);
        var M2= new Musician(Mname,Myear,Mrate);
        var instrument2=get_selection();
        let sname2=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear2=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate2=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname2);
        var Myear=yearFunction(syear2)
        var Mrate=rateFunction(srate2);
        var M3= new Musician(Mname,Myear,Mrate);
        var instrument3=get_selection();
        let sname3=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear3=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate3=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname3);
        var Myear=yearFunction(syear3)
        var Mrate=rateFunction(srate3);
        var M4= new Musician(Mname,Myear,Mrate); 
        var instrument4=get_selection();
        let sname4=prompt("Enter your name. Name between 3 and 30 characters: ");
        let syear4=prompt("Enter your years playing. Year must be greater than zero  :");
        let srate4=prompt("Enter your hourly rate.must be greater than 50 :");
        var Mname=Stringname(sname4);
        var Myear=yearFunction(syear4)
        var Mrate=rateFunction(srate4);
        var M5= new Musician(Mname,Myear,Mrate); 

        var mus1=M1.DisplayMusician();
        var mus21=instrumentsFunction(instrument); 
        var mus2=M2.DisplayMusician();
        var mus22=instrumentsFunction(instrument1)
        var mus3=M3.DisplayMusician();
        var mus23=instrumentsFunction(instrument2)
        var mus4=M4.DisplayMusician();
        var mus24=instrumentsFunction(instrument3)
        var mus5=M5.DisplayMusician();
        var mus25=instrumentsFunction(instrument4)
        return (mus1 + '\n' + mus21 + '\n' + mus2 + '\n' +mus22 + '\n' + mus3 + '\n' + mus23 + '\n'  + mus4 + '\n' + mus24 + '\n'+ mus5 + '\n' + mus25  );
    }
    return ("Musician's number must be maximum 5");
}
//console.log(addMusician());
var music=addMusician();

//----------------------------------------------------------------------------------
module.exports={Musician,Guitar,Bass,Percussion,Flaut,music}; 






