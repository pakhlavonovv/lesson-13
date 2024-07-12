// 1 misol Domla shuni 7,8 larni qilib ole tekshirme turin iltimos

// let obj = {a: 2, b: 3, c: 4}
// let n = 3
// function hpOfKeys(obj, n){
//     let result = []
//     for(let key in obj){
//         result[key] = obj[key] * n
//     }
//     return result
// }
// let res = hpOfKeys(obj, n)
// console.log(res)

// 2 misol

// function checkA(str = ''){
//     let count = 0
//     let words = str.split(' ')
//     words.forEach(function(word){
//         if(word.includes('a') || word.includes('A')){
//             count++
//         }
//     })
//     return count
// }
// console.log(checkA("Abdullox aka"))

// 3 misol

// let books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O’tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ]
// let json_str = JSON.stringify(books);
// let jsstr = json_str.replace('[]');
// console.log(jsstr)

// let books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O’tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];
// let jsonString = JSON.stringify(books);
// let result = jsonString.replace(/^\[|\]$/g, '');


// books.forEach(book => {
//     if (book.read) {
//         console.log("O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan");  
//     } else {
//         console.log("Akrom Malik ning Halqa kitobi o’qilmagan");
//     }
//   });

// 4 misol

// let arr = ["text", "world", "laptop"];

// let obj = arr.reduce((acc, current, index) => {
//   acc[index] = current.length;
//   return acc;
// }, {});
// console.log(arr , obj)

// 5 misol

// 6 misol

const people = [
    { name: 'John', age: 13 },
    { name: 'Mark', age: 56 },
    { name: 'Rachel', age: 45 },
    { name: 'Nate', age: 67 },
    { name: 'Jeniffer', age: 65 }
  ];
  
people.sort((a,b)=> a.age - b.age )

let youngest = people[0]
let oldest = [people.length - 1 ]