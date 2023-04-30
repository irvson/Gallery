import { useState, useEffect, FormEvent} from "react";
import "./App.css";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";



export default () => {
  const [uploading , setUploading]=useState(false)
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
   getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());

    setLoading(false);
  };

const handleFormSubmit = async (event:FormEvent<HTMLFormElement>)=>{
event.preventDefault();

const formData = new FormData(event.currentTarget)
const file = formData.get('image') as File;
if(file && file.size > 0){
setUploading(true)
let result = await Photos.inset(file)
setUploading(false);


if(result instanceof Error){
  alert(`${result.name} - ${result.message}`)
}else{
let newPhotoList = [...photos];
newPhotoList.push(result)
setPhotos(newPhotoList)
}
}
}


const handleDeleteClick = async (name:string)=>{
  await Photos.deletePhotos(name)
  getPhotos();
  }


  return (
    <div className="container">
      <div className="area">
        <div className="header">
          <h1>Galeria de Fotos</h1>
        </div>

        <div className="upload">
<form method="POST" onSubmit={handleFormSubmit}>
<input type="file" name="image" />
<input type="submit" value="Enviar" />
{uploading && "Enviando...🚀"}
</form>
        </div>

       

        {loading && (
          <div className="screenWarning">
            <span className="emoji">✋</span>
            <h1>Carregando...</h1>
          </div>
        )}

        {!loading && photos.length > 0 && (
          <div className="photoList">
            {photos.map((item, index) => (
              <PhotoItem 
              key={index} 
              url={item.url} 
              name={item.name}
              onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}

        {!loading && photos.length === 0 && (
          <div className="screenWarning">
            <span className="emoji">😢</span>
            <h1>Não há fotos cadastradas</h1>
          </div>
        )}
      </div>
    </div>
  );
};
