//No User:
let users: string[]= ["waheed","faisal","rahman","farman","admin"];

if(users.length===0){
    console.log("we need to find some users!");
}else{
    for(let user of users){
        if(user==="admin"){
            console.log("hello admin,would you like to see a status repert?");
        }else{
            console.log(`hello ${user},thank you for logging again`);
        }
    }
}
users=[];
if (users.length===0){
    console.log("we need to find some users!");
}