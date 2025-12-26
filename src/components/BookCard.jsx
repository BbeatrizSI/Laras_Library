export default function BookCard({ libro, onSelect }) {
	return (
		<div
			className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer active:scale-95 transition-transform"
			onClick={() => onSelect(libro)}
		>
			<img
				src={libro.portada}
				alt={libro.titulo}
				className="w-full h-56 object-cover"
				loading="lazy" // Optimización de carga
			/>
			<div className="p-2">
				<h2 className="text-sm font-semibold truncate">
					{libro.titulo}
				</h2>
				<p className="text-xs text-gray-500">{libro.autor}</p>
			</div>
		</div>
	);
}
