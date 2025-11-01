//Unoins
// type ID = number | string;
//Narrowing
// function printId(id: ID){
//     if (typeof id ==='string'){
//         console.log(id.toUpperCase());
//     } else{
//         console.log(id);
//     }
// }
// printId('hello')
function grtFirstTree(x) {
    return x.slice(0, 12);
}
console.log(grtFirstTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,]));
