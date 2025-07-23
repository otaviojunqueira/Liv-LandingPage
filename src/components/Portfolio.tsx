import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const portfolioItems = [
    {
      id: 1,
      title: 'Mascote Universitário',
      category: 'mascote',
      image: '/paulo-freire.png',
      description: 'Mascote criativo para universidade'
    },
    {
      id: 2,
      title: 'Logo Criativo',
      category: 'logo',
      image: '/laesa.png',
      description: 'Design de logo moderno'
    },
    {
      id: 3,
      title: 'Ilustração Cartoon',
      category: 'ilustracao',
      image: '/ilustracao-1.png',
      description: 'Personagem cartoon 2D'
    },
    {
      id: 4,
      title: 'Caricatura Personalizada',
      category: 'caricatura',
      image: '/caricatura.png',
      description: 'Retrato em caricatura'
    },
    {
      id: 5,
      title: 'Mascote Empresarial',
      category: 'mascote',
      image: '/copacabana-beach.png',
      description: 'Mascote para empresa'
    },
    {
      id: 6,
      title: 'Design Gráfico',
      category: 'logo',
      image: '/design.png',
      description: 'Material gráfico completo'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'mascote', label: 'Mascotes' },
    { key: 'logo', label: 'Logos' },
    { key: 'ilustracao', label: 'Ilustrações' },
    { key: 'caricatura', label: 'Caricaturas' }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Meu <span className="text-pink-500">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Cada projeto é uma nova aventura criativa! Vem dar uma olhada no que já criei 🎨
          </p>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.category === 'mascote' ? 'bg-pink-500' :
                      item.category === 'logo' ? 'bg-purple-500' :
                      item.category === 'ilustracao' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}>
                      {item.category}
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
            <p className="text-lg mb-6">Cada projeto é único e feito com muito amor! Bora criar algo incrível juntos? 💖</p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300">
              Quero Meu Projeto!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;