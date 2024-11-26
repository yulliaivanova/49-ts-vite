
import HeroGallery from "../../сomponents/heroGallery/HeroGallery";
import { heroes } from "./data";
import "./lesson05.css";

{
  /* <li key={index}>{hero.name} is {hero.age} years old </li> */
}
function Lesson05(): JSX.Element {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React Map component</p>
  {/*передали в HeroGallery props data импортированные heroes */}
    <HeroGallery data={heroes}/>
    </div>
  );
}
export default Lesson05;
