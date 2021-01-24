/*Metodo ForEach: recorreremos el arreglo y mostraremos en pantalla 
5 lenguajes de programacion*/
console.log('\n\n Metodo ForEach: recorreremos el arreglo y mostraremos en pantalla 5 lenguajes de programacion');
var language = ['JavaScript','C#','PHP','Java','Python'];

const myforeach = {
    
    mynewforeach: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
                fn(array[i],i)
                
        }               
           
    }

}

myforeach.mynewforeach(language, (element) => console.log(element));

/*Metodo filter*/
console.log('\n\n Metodo filter: filtramos y dejamos a los numeros menores o iguales a 22 ');

const numbers = [1,22,3,41,5,41]

const myFilter = {
    myNewFilter: (array, fn) => {
       const filtered = []
       for (let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                filtered.push(array[i])
            }
        }   
        return filtered 
    }
}    

const newArray = myFilter.myNewFilter(numbers, (element) => element <= 22)
 console.log(newArray)

/*Metodo Map*/
console.log('\n\n Metodo Map: multiplicamos por cuatro cada elemento del Array');

 const myMap = {
 myNewMap: (array, fn) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]))
        }
    return newArray
    }
}
const ruthed = myMap.myNewMap(numbers, (element) => element * 4)
console.log(ruthed)

/*Metodo Find*/
console.log('\n\n Metodo Find: Buscamos el valor 41');
const myFind = {
    myNewFind: (array, element) => {
       const new2Array = []
       let exit = 0;
       for (let i = 0; i < array.length; i++) {
            if(  exit == 0){
                if( array[i]==element) {
                new2Array.push(array[i])
                exit+=1
                 }              
             } 
       }
       return new2Array;
   }
}
   const num = myFind.myNewFind(numbers, 41)
   console.log(num)

   /*Metodo FindEx*/
   console.log('\n\n Metodo Find: Buscamos el indice del valor 41');
const myFindex = {
    myNewFindex: (array, element) => {
       const new3Array = []
       let exit = 0;
       for (let i = 0; i < array.length; i++) {
                if(  exit == 0){
                    if( array[i]==element) {
                     new3Array.push(i)
                     exit+=1

                    }
                } 
            }
            return new3Array;
       }
   }
   const index = myFindex.myNewFindex(numbers, 41)
   console.log(index)

/*Contains*/

console.log('\n\n Metodo Contains: Verificamos  con  true o false a 4');
const myContains = {
    myNewContains: (array, element) => {
       const new4Array = []
       let exit = 0;
       for (let i = 0; i < array.length; i++) {
                if(  exit == 0){
                    if( array[i]==element) {
                     new4Array.push(true)
                    }

                    else ( array[i]==element)
                        new4Array.push(false)
                       
                     exit+=1
                    
                } 
            }
            return new4Array;
       }
   }
   const Contains = myContains.myNewContains(numbers, 4)
   console.log(Contains)

   
   /*Metodo Pluck arreglo adicional con tipos de animales */
   console.log('\n\n Metodo Pluck arreglo adicional con tipos de animales');
   var pets = [
    {name: 'Coraje', age: 12, type:'perro'},
    {name: 'Felix', age: 3, type:'gato'},
    {name: 'Tom', age: 4, type:'gato'},
    {name: 'Jerry', age: 1, type:'raton'},
    {name: 'Scooby Doo', age: 10, type:'perro'},
    {name: 'Astro', age: 13, type:'perro'}
];
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


   /// Metodo WithOut
   console.log('\n\n Metodo WithOut eliminando elementos 1 y 22 en el arreglo');
   const rutho = {
   myNewWithOut: (array, element1, element2) => {
    const results = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] != element1 && array[i] != element2) {
            results.push(array[i])
        }
    }
    return results
}
}
const ruthedo = rutho.myNewWithOut(numbers, 1,22)
console.log(ruthedo)

