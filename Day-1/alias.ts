


//Type alias

type User ={

    name:string;

    age:number;

    address?:string

}

const user: User = {

    name:'Shahyan Alee',

    age: 23,

}

function login(userData: User){
    return userData;
}
console.log(login());
