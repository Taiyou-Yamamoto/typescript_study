// const person: {
//     name: stringage; 
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name:'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

// person.role.push('admin');
// person.role[1] = 10;

// enum Role {
//     ADMIN = 5, 
//     READ_ONLY, 
//     AUTHOR,
// }

// const person = {
//     name:'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN,
// };

// person.role = []

// let favorite: string[];
favorite = ['Sports'];

console.log(person.name)

for (const　hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('読み取り専用ユーザー')
}