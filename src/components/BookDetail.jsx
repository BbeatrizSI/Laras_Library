export default function BookDetail({ libro, onClose }) {
    if (!libro) return null;
  
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="bg-white w-full max-w-md p-6 rounded-t-2xl sm:rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
          <img src={libro.portada} alt={libro.titulo} className="w-32 h-48 mx-auto rounded shadow-lg mb-4 object-cover" />
          <h2 className="text-xl font-bold text-gray-900 text-center">{libro.titulo}</h2>
          <p className="text-blue-600 text-center font-medium mb-4">{libro.autor}</p>
          
          <div className="space-y-4 text-sm">
            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px]">Género</span>
              <p className="text-gray-700">{libro.genero}</p>
            </div>
            <div>
              <span className="font-bold text-gray-400 uppercase text-[10px]">Sinopsis</span>
              <p className="text-gray-600 leading-relaxed">{libro.sinopsis}</p>
            </div>
          </div>
  
          <div className="flex flex-col gap-3 mt-6">
            <a href={libro.enlace} target="_blank" rel="noreferrer" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center active:bg-blue-700">
              Abrir en Drive
            </a>
            <button onClick={onClose} className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-bold active:bg-gray-200">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }