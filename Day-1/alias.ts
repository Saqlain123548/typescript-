


//Type alias

type User ={

    name:string;

    age:number;

    address?:string

}



function login(userData: User){
    return userData;
}

const user =  {

    name:'Shahyan Alee',

    age: 23,

}
console.log(login(user));

type ID = number | string | boolean;  // this is called type alias

const userId :ID ="123";
const isUserActive: ID = true;

console.log(userId);



