export default function BookCard({
	libro,
	onSelect,
	isFavorito,
	onToggleFavorito,
}) {
	return (
		<div className="relative bg-white rounded-lg shadow-md overflow-hidden active:scale-95 transition-transform">
			{/* Botón Corazón */}
			<button
				onClick={(e) => {
					e.stopPropagation(); // Para que no abra el detalle al pulsar el corazón
					onToggleFavorito(libro.id);
				}}
				className="absolute top-1 right-1 z-10 p-0 bg-white/80 backdrop-blur-sm rounded-full shadow-sm w-2 h-10 flex justify-center items-center"
			>
				<span className="text-xl">{isFavorito ? "❤️" : "🤍"}</span>
			</button>

			<div onClick={() => onSelect(libro)} className="cursor-pointer">
				<img
					src={libro.portada}
					alt={libro.titulo}
					className="w-full h-56 object-cover"
				/>
				<div className="p-2">
					<h2 className="text-sm font-semibold truncate text-gray-800">
						{libro.titulo}
					</h2>
					<p className="text-xs text-gray-500">{libro.autor}</p>
				</div>
			</div>
		</div>
	);
}
