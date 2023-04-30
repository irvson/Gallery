import "./style.css";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
};





export const PhotoItem = ({ url, name, onDelete }: Props) => {
  return (
    <div className="imgContainer">
      <span className="delete">
        <button onClick={()=>onDelete(name)}><AiFillDelete/></button>        
      </span>
      <img src={url} alt={name} />

      {name}
    </div>
  );
};
