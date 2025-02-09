alert(null || 2 || undefined);//2
alert(alert(1) || 2 || alert(3)); //1 then 2
alert(1 && null && 2); //null
alert(alert(1) && alert(2)) //1 then undefined
alert(null || 2 && 3 || 4); //3

if(age < 14 || age > 90){
    
}


if (-1 || 0) alert( 'first' ); //-1 and runs
if (-1 && 0) alert( 'second' ); //false doesn't run
if (null || -1 && 1) alert( 'third' ); //1 and runs

let login = prompt("Who's there?", '');
if(login == "Admin"){
    let password = prompt("Password?", '');
    if(password == "TheMaster"){
        alert("Welcome!")
    }else if(password === '' || password === null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(login === '' || login === null){
    alert("Canceled")
}else{
    alert("I don't know you");
}