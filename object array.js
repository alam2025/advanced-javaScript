const Students = [
    { id: 21, name: 'Sabrina' },
    { id: 22, name: 'Sanjida' },
    { id: 23, name: 'Sabina' },
    { id: 24, name: 'Saima' }
];
const names = Students.map(s=>s.name);

const id = Students.map(s=>s.id);

const bigger = Students.find(s=> s.id > 23);

 

console.log(bigger)


