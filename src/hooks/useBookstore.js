import { useEffect, useState } from 'react';

export const useBookstore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        { id: '1', titulo: 'El Gran Gatsby', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW6ty3ISqi2OxXS705sTDLA_V2ZeHxD7tiw&s', sinopsis: 'Una historia sobre el sueño americano.', genero: 'Ficción', popularidad: 4.5 },
        { id: '2', titulo: 'Matar a un ruiseñor', imagen: 'https://jaimeurcelay.me/wp-content/uploads/2017/10/matar-a-un-ruisec3b1or.jpg', sinopsis: 'Una novela sobre la injusticia racial.', genero: 'Ficción', popularidad: 4.9 },
        { id: '3', titulo: '1984', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9789588773834.webp', sinopsis: 'Una distopía sobre un régimen totalitario.', genero: 'Ciencia Ficción', popularidad: 4.2 },
        { id: '4', titulo: 'Orgullo y prejuicio', imagen: 'https://m.media-amazon.com/images/S/pv-target-images/15a41e61c30b3e9df74d61ac747fe3e1d5dc4ba30cf8ca3ac85a9148344efeba.jpg', sinopsis: 'Una historia de amor y malentendidos.', genero: 'Romance', popularidad: 4.7 },
        { id: '5', titulo: 'Moby-Dick', imagen: 'https://www.mrbooks.com/mrbooks/portadas/9788483087565.webp', sinopsis: 'La caza de una ballena gigante.', genero: 'Aventura', popularidad: 3.6 },
        { id: '6', titulo: 'El guardián entre el centeno', imagen: 'https://www.alianzaeditorial.es/imagenes/libros/grande/9788491049418-el-guardian-entre-el-centeno.jpg', sinopsis: 'La historia de un adolescente rebelde.', genero: 'Ficción', popularidad: 4.1 }
      ]);
    }, 2500);
  }, []);

  return books;
};