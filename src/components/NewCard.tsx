// crud/src/components/NewCard.tsx
import { Props } from "./models";
import CardService from "./CardService";
import { v4 } from "uuid";
import { useState } from "react";
import right_arrow from "../assets/right_arrow.svg"

export default function NewCard({ setCards }: Props) {
    const [inputValue, setInputValue] = useState("");

    const onClick = async (event: React.MouseEvent) => {
        event.preventDefault();
        
        const textareaValue = inputValue;
        if (!textareaValue.trim()) {
            return;
        }

        await CardService.create(v4(), textareaValue);
        
        setInputValue(""); // Очистить значение поля ввода
        
        await new Promise(resolve => setTimeout(resolve, 100));

        const data = await CardService.getAll();
        setCards(data);
    };

    return (
        <form className="newCard">
            <div className="heading">New Note</div>
            <div className="newCard__btn__block">
                <textarea 
                    className="newCard__input" 
                    id="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
                <button className="newCard__btn" onClick={onClick}>
                <img className="img" src={right_arrow} alt="create" />
                </button>
            </div>
        </form>
    );
}
