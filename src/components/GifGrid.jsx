import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
      <h1 className="title-category">{category}</h1>

      {
        isLoading && (<h2>Cargando...</h2> ) //si isLoading es verdero, ejecuta la condicion (h2), si es falso no continua haciendo las demas evaluaciones
      }

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem 
              key={image.id} 
              {...image}/>
          ))
        }
      </div>
    </>
  )
}
