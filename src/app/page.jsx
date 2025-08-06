'use client';

import Usuario from '../app/components/Usuario';

export default function Home() {
  const usuarios = [
    { nombre: 'Karen Galeano', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Isa Buitrago', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Tatiana Vanegas', edad: 28, ciudad: 'Valencia' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}