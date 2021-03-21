window.addEventListener("load",initial=>{
    //collect form elements
    let fId= document.getElementById("id") ;
    let fName= document.getElementById("name");
    let fExt= document.getElementById("ext");
    let fEmail= document.getElementById("email");
    let fDept= document.getElementById("department");
    let myform= document.getElementById("empForm");
    //a function shows name and value of an element
    message= ele => window.console.log(ele.name+': '+ele.value);
    //preventing the form from being submit & access element's value by calling message
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();
        message(fId);
        message(fName);
        message(fExt)
        message(fEmail);
        message(fDept);
    });
});