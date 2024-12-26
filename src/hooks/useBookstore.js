import { useEffect, useState } from 'react';

export const useBookstore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        { id: '1', titulo: 'El Gran Gatsby', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW6ty3ISqi2OxXS705sTDLA_V2ZeHxD7tiw&s', sinopsis: 'Una historia sobre el sueño americano.', genero: 'Ficción', popularidad: 4.5, precio: 10.99 },
        { id: '2', titulo: 'Matar a un ruiseñor', imagen: 'https://jaimeurcelay.me/wp-content/uploads/2017/10/matar-a-un-ruisec3b1or.jpg', sinopsis: 'Una novela sobre la injusticia racial.', genero: 'Ficción', popularidad: 4.9, precio: 12.99 },
        { id: '3', titulo: '1984', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9789588773834.webp', sinopsis: 'Una distopía sobre un régimen totalitario.', genero: 'Ciencia Ficción', popularidad: 4.2, precio: 15.99 },
        { id: '4', titulo: 'Orgullo y prejuicio', imagen: 'https://m.media-amazon.com/images/S/pv-target-images/15a41e61c30b3e9df74d61ac747fe3e1d5dc4ba30cf8ca3ac85a9148344efeba.jpg', sinopsis: 'Una historia de amor y malentendidos.', genero: 'Romance', popularidad: 4.7, precio: 9.99 },
        { id: '5', titulo: 'Moby-Dick', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9788483087565.webp', sinopsis: 'La caza de una ballena gigante.', genero: 'Aventura', popularidad: 3.6, precio: 14.99 },
        { id: '6', titulo: 'El guardián', imagen: 'https://www.alianzaeditorial.es/imagenes/libros/grande/9788491049418-el-guardian-entre-el-centeno.jpg', sinopsis: 'La historia de un adolescente rebelde.', genero: 'Ficción', popularidad: 4.1, precio: 11.99 },
        { id: '7', titulo: 'Cien años de soledad', imagen: 'https://www.capsulasliterarias.com/wp-content/uploads/2023/05/Cien-anos-de-soledad-resumen.png', sinopsis: 'La historia de la familia Buendía.', genero: 'Realismo Mágico', popularidad: 4.8, precio: 13.99 },
        { id: '8', titulo: 'Don Quijote', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9788466236645.webp', sinopsis: 'Las aventuras de Don Quijote y Sancho Panza.', genero: 'Clásico', popularidad: 4.9, precio: 19.99 },
        { id: '9', titulo: 'La sombra del viento', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg', sinopsis: 'Una novela de misterio en la Barcelona de posguerra.', genero: 'Misterio', popularidad: 4.6, precio: 17.99 },
        { id: '10', titulo: 'El amor de cólera', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ac/2d/ac2d0aa8cd9e21558d7b0778fdfd4a6b.jpg', sinopsis: 'Una historia de amor que perdura a través del tiempo.', genero: 'Romance', popularidad: 4.7, precio: 14.99 }
      ]);
    }, 2500);
  }, []);

  return books;
};