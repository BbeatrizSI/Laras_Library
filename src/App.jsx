import React, { useState } from 'react';
import libros from './data/libros.json';
import BookCard from './components/BookCard';
import BookDetail from './components/BookDetail';

export default function App() {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-10">
      <header className="max-w-xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lara's Library</h1>
        <p className="text-gray-500 text-sm mt-1">Mi colección personal de epubs</p>
      </header>
      
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {libros.map((libro) => (
          <BookCard 
            key={libro.id} 
            libro={libro} 
            onSelect={setLibroSeleccionado} 
          />
        ))}
      </main>

      <BookDetail 
        libro={libroSeleccionado} 
        onClose={() => setLibroSeleccionado(null)} 
      />
    </div>
  );
}