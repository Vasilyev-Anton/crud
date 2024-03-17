// crud/src/components/Card.tsx
import CardService from "./CardService"
import close from "../assets/close.svg"

interface Props{
    data: {id: string, content: string},
    setCards: React.Dispatch<React.SetStateAction<never[]>>
}

export default function Card({data, setCards}: Props) {

    const onClick = () => {
        const getCards = async () => {
           await CardService.delete(data.id);
           setTimeout( async () => {
            const res = await CardService.getAll();
            setCards(res);
           }, 100 );           
        };
        void getCards();
    };

    return (
        <div className="post__wrapper" id={data.id}>
            <div className="post__text">{data.content}</div>
            <button className="post__btn" onClick={onClick}>
            <img className="img" src={close} alt="close" />
            </button>
        </div>
    )
}
