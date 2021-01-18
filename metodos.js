/*Metodo ForEach: recorreremos el arreglo y mostraremos en pantalla 
5 lenguajes de programacion*/

let language = ['JavaScript','C#','PHP','Java','Python'];

console.log(`\n FOREACH: lenguajes de programacion \n`);
language.forEach(function(value, index){
    console.log(`${index} ${value}`)
});

/*Metodo filter:creacion de filtros de perros y gatos */
console.log(`\n \n FILTER: Mascotas`);

var pets = [
    {name: 'Coraje', age: 12, type:'perro'},
    {name: 'Felix', age: 3, type:'gato'},
    {name: 'Tom', age: 4, type:'gato'},
    {name: 'Jerry', age: 1, type:'raton'},
    {name: 'Scooby Doo', age: 10, type:'perro'},
    {name: 'Astro', age: 13, type:'perro'}
];

const dogs = pets.filter(pet=> pet.type =='perro')
const cats = pets.filter(x=> x.type =='gato')
console.log('\n Perros',dogs,'\n \n Gatos',cats);

/*Metodo MAP:promedio de edad de mascotas */
console.log('\n \n  Metodo MAP: promedio de edad de mascotas \n');
var sum=0;
const ages = pets.map(ags => ags.age)
for(let i = 0; i < ages.length; i++){
    sum+= pets[i].age}
console.log('Edades de mascotas:',ages);
console.log('Promedio:',sum/ages.length);

/*Metodo FIND: Buscando a Scooby doo*/
console.log('\n \n  Metodo FIND metodo de busqueda \n',pets, '\n');
let here= pets.find(where=>where.name==="Scooby Doo" )
console.log(here);

/*Metodo FINDIDEX: Posicion de Scooby doo en el arreglo*/
console.log('\n \n  Metodo FINDINDEX indice del elemento Scooby \n', pets, '\n');
let other= pets.findIndex(where=>where.name==="Scooby Doo" )
console.log('Scooby Doo se encuentra en la posicion:', other);

/*Metodo CONTAINS comparando edades */
console.log('\n \n  Metodo CONTAINS comparando edades \n');

pets.Contains = (arr, value) => {
    for(fromIndex = 0; fromIndex < arr.length; fromIndex++) {
        if(arr[fromIndex].edad == value) {
            return true
        }
    }
    return false
        
}
const agss = pets.filter(m=> m.type)
console.log('\n ¿hay alguna mascota con 10 años?',agss);
var containsArr = pets.Contains(pets, 10)
console.log(containsArr,here);

/*Metodo Pluck arreglo adicional con tipos de animales */
console.log('\n\n Metodo Pluck arreglo con tipos de animales');
const myMethodoPluck = {
    myPluck: function( pets, property) {
         let newArray = [];
        for(let i =0; i< pets.length; i++)
        {
            if(pets[i].hasOwnProperty(property)){
        newArray.push(pets[i][property]);
            }
        }
        return newArray;
        }
        }
    
    console.log(myMethodoPluck.myPluck(pets,'type'));

/*Metodo Without arreglo adicional con tipos de animales */
console.log('\n\n Metodo Without para nuevo con animales');

    const myMethodoWithout = {
        myWithout: function(dogs, ...cats) {
             let Arrays = [];
            for(let i =0; i< dogs.length; i++)
            {
                let aux = false;
                for(let j = 0; j < cats.length; j++){
                    if(dogs[i] === cats[j]){
                    break;
                }
            else
            {
                aux= true;
            }
                if (aux && j ==(cats.length-1)){
        
            Arrays.push(dogs[i]);
                                }
                            }
                }
                return Arrays;
            }
            }
