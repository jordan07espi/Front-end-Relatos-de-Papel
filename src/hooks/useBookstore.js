import { useEffect, useState } from 'react';

export const useBookstore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        { id: '1', titulo: 'El Gran Gatsby', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW6ty3ISqi2OxXS705sTDLA_V2ZeHxD7tiw&s', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Ficción', popularidad: 4.5, precio: 10.99 },
        { id: '2', titulo: 'Matar a un ruiseñor', imagen: 'https://jaimeurcelay.me/wp-content/uploads/2017/10/matar-a-un-ruisec3b1or.jpg', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Ficción', popularidad: 4.9, precio: 12.99 },
        { id: '3', titulo: '1984', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9789588773834.webp', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Ciencia Ficción', popularidad: 4.2, precio: 15.99 },
        { id: '4', titulo: 'Orgullo y prejuicio', imagen: 'https://m.media-amazon.com/images/S/pv-target-images/15a41e61c30b3e9df74d61ac747fe3e1d5dc4ba30cf8ca3ac85a9148344efeba.jpg', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Romance', popularidad: 4.7, precio: 9.99 },
        { id: '5', titulo: 'Moby-Dick', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9788483087565.webp', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Aventura', popularidad: 3.6, precio: 14.99 },
        { id: '6', titulo: 'El guardián', imagen: 'https://www.alianzaeditorial.es/imagenes/libros/grande/9788491049418-el-guardian-entre-el-centeno.jpg', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Ficción', popularidad: 4.1, precio: 11.99 },
        { id: '7', titulo: 'Cien años de soledad', imagen: 'https://www.capsulasliterarias.com/wp-content/uploads/2023/05/Cien-anos-de-soledad-resumen.png', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Realismo Mágico', popularidad: 4.8, precio: 13.99 },
        { id: '8', titulo: 'Don Quijote', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9788466236645.webp', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Clásico', popularidad: 4.9, precio: 19.99 },
        { id: '9', titulo: 'La sombra del viento', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Misterio', popularidad: 4.6, precio: 17.99 },
        { id: '10', titulo: 'El amor de cólera', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ac/2d/ac2d0aa8cd9e21558d7b0778fdfd4a6b.jpg', sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', genero: 'Romance', popularidad: 4.7, precio: 14.99 }
      ]);
    }, 2500);
  }, []);

  return books;
};