import { log } from "console";
import { convertCompilerOptionsFromJson } from "typescript";

export default function Lesson06() {
  // * typescript

  // 1. string
  let username: string = "Frodo";
  //   username = 100 присвоить число переменной с типом
  // string не получится
  username = "Pipin";
  console.log(username);

  // 2. Number
  let number: number = 42;
  number = 2 + Number("2");
  console.log(number);

  // 3. boolean
  let isAdmin: boolean = true;
  // console.log (isAdmin)
  isAdmin = 2 > 3; 
//   переприсвоили результат логического выражения
  console.log(isAdmin);

//   * null/undefined
let emptyvalue:null = null
console.log(emptyvalue)

let empty:undefined = undefined
console.log(empty)

// * arrays
// пишем из чего состоит массив и квадратные скобки 

const rgb:string[] =['red', 'green', 'blue']
console.log(rgb)
// rgb.push(42) в массив из строк не получится добавить число

const numbers:number[] = [1, 1, 2, 3, 5]
numbers.push(8)
console.log(numbers)

// частный случай типизации, только 2 элементов массива
const myArray:[string, number] = ['apple', 42]

//  6.Objects
// interface -начинаются с большой буквы I, внутри прописываем все ключи 
// и указываем типы данных
// interfaceghjgbсанный заранее можем использовать много раз
// чтобы типизировать обьект , нужно типизировать значение всех его ключей

// этот интерфейс будет наследовать interface IHero но с добавлением своих значений

interface IVillain {
  name: string,
  isVillain:boolean
}

interface IMagiciian extends IHero{
  magic(): void;

}

interface IHero {
name: string
age: number 
isDark: boolean

}
const aragorn: IHero ={
 name: 'Aragorn',
    age: 150,
    isDark: false
};

const gimli: IHero ={
    name: "Gimli",
    age: 56,
    isDark: false
}

const gendalf:IMagiciian ={
  magic: function (): void {
    console.log ("You shall not pass!")
  },
  name: "Gendalf",
  age: 0,
  isDark: false
}

// мы не сможем его добавить в heroes, потому что у него есть тип данных, кот
// нет в массиве
const saruman ={
  name: 'Saruman',
  isVillain: true,

}

// пример использования unioun type(|)
const heroes: (IHero | IVillain)[]= [aragorn, gimli]
heroes.push(gendalf)
console.log(heroes)
   

  return (
    <div className="lesson-container">
      <h2>Lesson 06</h2>
      <p>React type Script</p>
      <p>самое важное на этом уроке происходит внутри компонента в теле
        функции и в консоли браузера
      </p>
    </div>
  );
}
