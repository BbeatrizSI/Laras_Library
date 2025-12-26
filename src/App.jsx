import React, { useEffect, useState } from "react";
import libros from "./data/libros.json";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

export default function App() {
	const [libroSeleccionado, setLibroSeleccionado] = useState(null);
	const [favoritos, setFavoritos] = useState(() => {
		const saved = localStorage.getItem("favoritos");
		return saved ? JSON.parse(saved) : [];
	});
	const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

	useEffect(() => {
		localStorage.setItem("favoritos", JSON.stringify(favoritos));
	}, [favoritos]);

	const toggleFavorito = (id) => {
		setFavoritos((prev) =>
			prev.includes(id)
				? prev.filter((favId) => favId !== id)
				: [...prev, id]
		);
	};

	const librosAMostrar = mostrarFavoritos
		? libros.filter((l) => favoritos.includes(l.id))
		: libros;

	return (
		<div className="min-h-screen bg-gray-50 pb-10 flex flex-col items-center w-screen">
			{/* Header estilo Kindle */}
			<header className="pt-10 pb-6 text-center bg-[#B2D8D0] shadow-sm mb-8 rounded-b-[3rem] w-screen">
				<h1 className="text-4xl font-serif font-light tracking-tighter text-gray-900 italic">
					Lara's{" "}
					<span className="font-bold not-italic">Library</span>
				</h1>
				<div className="w-12 h-0.5 bg-gray-600 mx-auto mt-2"></div>
				<p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mt-3">
					Saphic Collection
				</p>

				{/* Navegación Superior */}
				<div className="flex justify-center gap-6 mt-6">
					{/* Botón de Favoritos */}
					<button
						onClick={() =>
							setMostrarFavoritos(!mostrarFavoritos)
						}
						type="button"
						className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-[#3e5652] bg-transparent cursor-pointer transition-all active:scale-95"
					>
						<span className="text-2xl leading-none">
							{mostrarFavoritos
								? "📚"
								: favoritos.length === 0
								? "🤍"
								: "❤️"}
						</span>
					</button>

					{/* Botón de Drive (Enlace que parece un botón) */}
					<button
						onClick={() =>
							window.open(
								"https://drive.google.com/drive/folders/14t3yxUcVzmGdpmHyP3Ho2XKacv1txtg1?usp=drive_link",
								"_blank"
							)
						}
						type="button"
						className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-[#3e5652] bg-transparent cursor-pointer transition-all active:scale-95 p-0 m-0"
					>
						<span className="text-2xl leading-none">📁</span>
					</button>
				</div>
			</header>

			<main className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-5xl mx-auto">
				{librosAMostrar.map((libro) => (
					<BookCard
						key={libro.id}
						libro={libro}
						isFavorito={favoritos.includes(libro.id)}
						onToggleFavorito={toggleFavorito}
						onSelect={setLibroSeleccionado}
					/>
				))}
			</main>

			<BookDetail
				libro={libroSeleccionado}
				isFavorito={favoritos.includes(libroSeleccionado?.id)}
				onToggleFavorito={toggleFavorito}
				onClose={() => setLibroSeleccionado(null)}
			/>
		</div>
	);
}
