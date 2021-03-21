window.addEventListener("load",initial=>{

    let fId= document.getElementById("id") ;
    let fName= document.getElementById("name");
    let fExt= document.getElementById("ext");
    let fEmail= document.getElementById("email");
    let fDept= document.getElementById("department");
    let fbtn= document.getElementById("submit");
    let myform= document.getElementById("empForm");
   // const message = (element) => {window.console.log(element);window.console.log(element.target.name+' : '+element.target.value);}
   message= e => window.console.log(e.target.name+': '+e.target.value);
   myform.addEventListener("submit", (e)=>{
        e.preventDefault();});
   //I have a hard time to make a generic message function and call it
   //tried: message(e) this is not correct
   //also at begin I tried getElementById.value right after e.preventDefault() and it did't work
   //Later I ound that I need add an eventlistener to each element-->event Delegation
   // fId.addEventListener("change", message= e => window.console.log(e.target.name+': '+e.target.value));    
   fId.addEventListener('change',message); 
   //fName.addEventListener("change", message(fName));
});