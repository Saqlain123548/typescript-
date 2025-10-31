// Interfaces

interface Transtcion{
    payerAccountNumber:number;
    payeeAccountNumber:number;
}

interface BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transctions: Transtcion[]
}

const Transtcion1:Transtcion ={
    payerAccountNumber:123,
     payeeAccountNumber:455,
}

const Transtcion2:Transtcion ={
    payerAccountNumber:123,
        payeeAccountNumber:456,
}

const bankAccount : BankAccount={
 accountNumber:345,
 accountHolder:'Shahyan',
 isActive:true,
 balance:50000,
 transctions:[Transtcion1,Transtcion2]

}

//Extands

// interface Book{
//     name:string;
//     price:number;
// }

// const book:Book={
//     name:'The Art of Being Alone',
//     price: 700,
// };

