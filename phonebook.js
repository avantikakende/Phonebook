function User(name,number,email,contact){
    return{
        name:name,
        number:number,
        email:email,
        contact:contact,
    }
}
let person1 = User("avantika",8329264429,"avantika22@navgurukul.org","amravati");
let person2 = User("nikita",7888052240,"nikita22@navgurukul.org","Akola");
let person3 = User("pratiksha",8975700251," pratiksha@navgurukul.org","Morshi");
let person4 = User("dhanashri",9356366922," dhanashri22@navgurukul.org","Warud");
let person5 = User("vaishnavi",9763558201," vaishnavi22@navgurukul.org","Paratwada");
const array=[];

array.push({...person1});
array.push({...person2});
array.push({...person3});
array.push({...person4});
array.push({...person5});

console.log(array);

function searchperson(name){
    let person=array.find(element => element.name === name);
    return person;
}

console.log("search",(searchperson('nikita')));

function update(phone,newPhone){
    let person=array.find(element => element.phone === phone);
    if(person){
        person.phone=newPhone;
        return newPhone;
    } else{
        return newPhone;
    }
}
console.log(update('avantika',1234567890));
console.log(array);

const personToDelete = array.find(person => person.name === 'nikita');
if (personToDelete) {
    const indexToDelete = array.indexOf(personToDelete);
    array.splice(indexToDelete, 1);
}
console.log(array);

