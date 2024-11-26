import React from "react";
import HeroCard from "../heroCard/HeroCard";
import { heroes, IHero } from "../../lessons/lesson_05/data";
import "./heroGallery.css"

// типизация пропсов
interface HeroGalleryProps {
  data: IHero[];
}

// используем тип пропс в круглых скобках
export default function HeroGallery({ data }: HeroGalleryProps) {
  return (
    <section className={"grid-container"}>
        {/* испльзуем map на входящих данных */}
      {data.map(hero=> (
        <HeroCard
          key={hero.id}
          isDark={hero.isDark}
          name={hero.name}
          image={hero.image}
          age={hero.age}
          weapons={hero.weapons}
        />
      ))}
    </section>
  );
}
