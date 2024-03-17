// crud/src/components/CardList.tsx
import { useEffect } from "react"
import Card from "./Card"
import CardService from "./CardService"
import { v4 } from "uuid"

interface CardProps{
    cards: {id: string, content: string}[],
    setCards: React.Dispatch<React.SetStateAction<never[]>>
}

export default function CardList({cards, setCards}: CardProps){

    useEffect(  () => {
        const getCards = async () => {
            const data =  await CardService.getAll();
            setCards(data);
        };
        void getCards();
    }, [setCards]);
    
    return (
        <div className="post__list">
            {cards.map(el => {return ( <Card data={el} setCards={setCards} key={v4()} />)})}
        </div>
    )
}
