import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "./paquetes.jpg";
import "./ItemListContainer.css";

function ItemListContainer() {
  const item = {
    name: "Pack de 10 paquetes",
    stock: 7,
    id: 1,
  };

  return (
    <div>
      <img src={FotoPaquetes} alt="Foto Paquetes" />
      <p>{item.name}</p>
      <ItemCount
        stck={item.stock}
        inicial={1}
        onAdd={(cantidad) => {
          console.log(`Se agregaron ${cantidad} packs al carrito`);
        }}
      />
    </div>
  );
}

export default ItemListContainer;
