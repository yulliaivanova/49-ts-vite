import React from "react";
import MyButton from "../../сomponents/myButton/MyButton";

export default function Lesson07() {
  // * функции

  // * тип параметра функции указывается через двоеточие в круглых скобках

  // * тип возвращаемого значения указывается после круглых скобок
  // const showMessage =(message:string) : string =>{
  //   console.log(`message: ${message}`)
  //   return `message: ${message}`

  // если у функции нет вовращаемого значения-она возвращает тип void
  const showMessage = (message: string): void => {
    console.log(`message: ${message}`);
  };

// * если у функции нет возвращаемого значения она возвращает тип void
  showMessage("hello");

const sum =(a:number, b:number): number =>a + b
const result:number = sum(42, 100)

// ! any тип, который мы используем крайне редко , а лучше не использовать
// ! вообще
//  по сути мы гоыворим, что somevar может быть любым типом данныхБ что не поможет нам в дальнейшем при возможной ошибке
const someVar:any ='hello'

// * union type
  // оператор предполагающий,что у данного значения может быть выбор из нескольких типов

  // эта переменны может быть и строкой и числом, но с ней в дальнейшем будет сложнее работать, потому что TS будет просить больше проверок - число это или строка?
  let stringOrNumber: string | number = 42;

  // пример union типа с конкретными значениями строк
  type ButtonType = 'button' | 'reset' | 'submit';

  let buttonType: ButtonType = "submit";

    // * типизация объектов через type

  // типизируя объект мы можем указать необязательный ключ для объекта через символ '?'

  type Animal = {
    name: string
    sound(): void
    hasOwner?: boolean
  }

  type Dog = Animal & {
    breed: string
  }

  const dog: Dog = {
    name: 'Johny',
    sound(){
      console.log('woof!')
    },
    breed: 'labrador'
  }

  // * generics type

  // function makeArray(first:number, second:number):number[] {
  //   return [first, second]
  // }

  function makeArray<T>(first:T, second:T):T[] {
    return [first, second]
  }

  const arr1:number[] = makeArray<number>(42, 100)

  const arr2:string[] = makeArray<string>('apple', 'orange')



  return (
    <div className="lesson-container">
      <h2> Lesson07</h2>
      <p>React Type Script part 2</p>
      <MyButton text="TypeScript"/>
    </div>
  );
}
