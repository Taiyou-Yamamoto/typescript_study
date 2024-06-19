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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role = []
var favorite;
favorite = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.role === Role.ADMIN) {
    console.log('読み取り専用ユーザー');
}
