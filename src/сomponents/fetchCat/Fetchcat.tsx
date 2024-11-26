import { useState, useEffect } from "react";
import './fetchcat.css'


interface ICatFact {
    fact: string;
  }


export default function Lesson10(): JSX.Element {
    const [catFacts, setCatFacts] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    const fetchCatFact = async (): Promise<void> => {
      const result = await fetch("https://catfact.ninja/fact ");
      const data: ICatFact = await result.json();
      console.log(data.fact);
  
      setLoading(false);
    };
  
    const handleDeleteAll = () => {
      setCatFacts([]);
    };
    useEffect(() => {
      fetchCatFact();
    }, []);

return(
    <div className="lesson-container">
      <h2>FetchCat</h2>
      
    </div>
  )
}