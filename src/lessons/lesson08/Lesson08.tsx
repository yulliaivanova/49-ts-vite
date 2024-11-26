import React, { useEffect, useState } from "react";
import MyButton from "../../сomponents/myButton/MyButton";
import Counter from "../../сomponents/counter/Counter";
import FetchDog from "../../сomponents/fetchDog/FetchDog";

export default function Lesson08(): JSX.Element {
  console.log("render lesson 08!");
  // переменная состояния переключатель с false на true
  const [toggle, setToggle] = useState(false);
  // функция переклчающая состояние toggle на противоположное(!toggle)
  const handelToggle = (): void => {
    setToggle(!toggle);
    // setToggle(!toggle);
    // setToggle(!toggle);
  };
  // ! lействие, которое мы поместили в useEffect() мы спрятали 
  // ! от многократного повторения при обновлении компонента
   // * если указать вторым параметром пустой массив - действие отработает только один раз
    // в начале жизненного цикла компонента 
useEffect(()=>{
  // эта строчка отработает только в начале жизненного цикла компонента
console.log('render useEffect')
}, []

)

  return (
    <div className="lesson-container">
      <h2>Lesson08</h2>
      <p>UseEffect() hook</p>
      <p>Этот хук позволяет нам изолировать вычисления от многократного
        повторения при обновлении компонента . Функция принимает в себя 
        2 аргумента :
       
        <ol>
<li>стрелочная функция с действием для выполнения</li>
<li> Массив зависимостей(данные, при изменении которых, будет отрабатывать),
  пустой массив означает, что действие сработает при mounting компонента(в начале жизненного цикла) </li>
        </ol>

      </p>
    
      <span>State:{`${toggle}`} </span>

      <MyButton func={handelToggle} isDanger={false} text={"change state"} />
      {/* если в toggle true мы покажем компонент на странице  */}
      <p>Мы можем проследить как Counter проходит все 3 этапа жизненного
        цикла компонента
      </p>
      {toggle && (
        <Counter/>
      )}
      <FetchDog/>
    </div>
  );
}
