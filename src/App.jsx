import React, { useState } from "react";
import libros from "./data/libros.json";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

export default function App() {
	const [libroSeleccionado, setLibroSeleccionado] = useState(null);

	return (
		<div className="min-h-screen bg-gray-50 p-4 pb-10">
			<header className="max-w-xl mx-auto mb-10 text-center">
				<h1 className="text-4xl font-serif font-light tracking-tighter text-gray-900 italic">
					Lara's{" "}
					<span className="font-bold not-italic">Library</span>
				</h1>
				<div className="w-12 h-0.5 bg-blue-600 mx-auto mt-2"></div>
				<p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-3">
					Curated Collection
				</p>
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
