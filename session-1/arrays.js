// find, filter, map

const employees = [
  {
      "code": "CT7207",
      "salary": 40000,
      "id": 1007,
      "job": "Manager",
      "department": "Operations",
      "name": "Bently Smith",
      "hobbies": ["Sports", "Reading", "Painting"]
  },
  {
      "code": "CT7210",
      "salary": 80000,
      "id": 1010,
      "job": "Director",
      "department": "Operations",
      "name": "Isla Morris",
      "hobbies": ["Sports", "Reading"]
  },
  {
      "code": "CT7202",
      "salary": 15000,
      "id": 1002,
      "job": "Salesman",
      "department": "Sales",
      "name": "Allen Green",
      "hobbies": ["Sports", "Painting"]
  },
  {
      "code": "CT7208",
      "salary": 60000,
      "id": 1008,
      "job": "Analyst",
      "department": "Research",
      "name": "Xavier Campbell",
      "hobbies": ["Reading", "Painting"]
  },
  {
      "code": "CT7209",
      "salary": 50000,
      "id": 1009,
      "job": "Analyst",
      "department": "Research",
      "name": "Ethan Kumar",
      "hobbies": ["Crafting", "Painting"]
  },
  {
      "code": "CT7201",
      "salary": 20000,
      "id": 1001,
      "job": "Clerk",
      "department": "Accounting",
      "name": "John Marshal",
      "hobbies": ["Singing", "Painting"]
  },
  {
      "code": "CT7205",
      "salary": 15000,
      "id": 1005,
      "job": "Salesman",
      "department": "Sales",
      "name": "Ethan Almaas",
      "hobbies": ["Singing", "Dancing"]
  },
  {
      "code": "CT7211",
      "salary": 15000,
      "id": 1011,
      "job": "Salesman",
      "department": "Sales",
      "name": "Natalie Robinson",
      "hobbies": ["Writing"]
  },
  {
      "code": "CT7212",
      "salary": 15000,
      "id": 1012,
      "job": "Salesman",
      "department": "Sales",
      "name": "Earl Rose",
      "hobbies": ["Singing", "Sports"]
  },
  {
      "code": "CT7206",
      "salary": 20000,
      "id": 1006,
      "job": "Clerk",
      "department": "Accounting",
      "name": "Ilija Seifert",
      "hobbies": ["Singing", "Cooking"]
  },
  {
      "code": "CT7204",
      "salary": 20000,
      "id": 1004,
      "job": "Clerk",
      "department": "Accounting",
      "name": "Annette Burke",
      "hobbies": ["Reading", "Teaching"]
  },
  {
      "code": "CT7203",
      "salary": 15000,
      "id": 1003,
      "job": "Salesman",
      "department": "Sales",
      "name": "Fernando Gordon",
      "hobbies": []
  },
  {
      "code": "CT7213",
      "salary": 15000,
      "id": 1013,
      "job": "Salesman",
      "department": "Sales",
      "name": "Catherine Foster",
      "hobbies": []
  }
];

// get employee with id 1003
let result = employees.find(i => i.id === 1003);

console.log('find', result);

// get index of an employee having id 1008
result = employees.findIndex(i => i.id === 1008);
console.log('findIndex', result);

// refer https://github.com/ZakiMohammed/javascript-array-methods/blob/master/scripts.js