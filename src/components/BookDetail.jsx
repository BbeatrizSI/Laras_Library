import React from "react";

export default function BookDetail({ libro, onClose }) {
	// Si no hay libro seleccionado, no renderizamos nada
	if (!libro) return null;

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
			{/* Fondo clickeable para cerrar */}
			<div className="absolute inset-0" onClick={onClose}></div>

			{/* Contenedor del Modal */}
			<div className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in slide-in-from-bottom duration-300">
				{/* Barra superior estética para móviles */}
				<div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-3 sm:hidden"></div>

				{/* Contenido con Scroll */}
				<div className="overflow-y-auto p-6 pt-2">
					{/* Imagen y Título Principal */}
					<div className="flex flex-col items-center mb-6">
						<img
							src={libro.portada}
							alt={libro.titulo}
							className="w-40 h-56 object-cover rounded-lg shadow-2xl mb-4 border border-gray-100"
						/>
						<h2 className="text-2xl font-bold text-gray-900 text-center leading-tight">
							{libro.titulo}
						</h2>
						<p className="text-blue-600 font-semibold text-lg mt-1">
							{libro.autor}
						</p>
					</div>

					{/* Ficha Técnica: Año, Páginas y Género */}
					<div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-6">
						<div className="text-center">
							<span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
								Año
							</span>
							<p className="text-sm font-bold text-gray-800">
								{libro.año}
							</p>
						</div>
						<div className="text-center border-x border-gray-100">
							<span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
								Páginas
							</span>
							<p className="text-sm font-bold text-gray-800">
								{libro.paginas}
							</p>
						</div>
						<div className="text-center">
							<span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
								Género
							</span>
							<p className="text-[11px] font-bold text-gray-800 leading-tight uppercase">
								{libro.genero}
							</p>
						</div>
					</div>

					{/* Sinopsis Larga */}
					<div className="mb-8">
						<h3 className="text-sm font-bold text-gray-900 uppercase mb-3 tracking-wider">
							Sinopsis
						</h3>
						<p className="text-gray-600 leading-relaxed text-base italic">
							"{libro.sinopsis}"
						</p>
					</div>

					{/* Botones de Acción */}
					<div className="flex flex-col gap-3 pb-4">
						<a
							href={libro.enlace}
							target="_blank"
							rel="noreferrer"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white! no-underline! py-4 rounded-2xl font-bold text-center shadow-lg shadow-blue-200 block transition-all active:scale-[0.98]"
						>
							Leer Libro en Drive
						</a>
						<button
							onClick={onClose}
							className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 py-4 rounded-2xl font-bold transition-colors active:scale-[0.98]"
						>
							Volver a la biblioteca
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
