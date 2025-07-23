import { Heart, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Oi, eu sou a <span className="text-pink-500">Liv!</span>
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              {/* Comic book style elements */}
              <div className="">
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Ilustro desde que me entendo por gente (tenho 20 anos, então já tem um tempinho haha). 
                Sempre amei criar personagens e histórias. Comecei vendendo meu primeiro desenho na escola 
                aos 16 e desde então nunca parei!
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Hoje trabalho com mascotes, caricaturas, logos, ilustrações livres e tudo que der na telha! 
                Cartoon 2D é meu estilo do coração.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                É um prazer ter você por aqui! 💖
                <span className="text-pink-500 text-xl ml-1"></span>
              </p>

              {/* Signature */}
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-pink-500" style={{fontFamily: 'cursive'}}>
                  ~ Liv
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Mascotes & Personagens</h3>
                </div>
                <p className="text-gray-600">Criação de mascotes empresariais e universitários únicos que representam sua marca com personalidade!</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Logos & Design Gráfico</h3>
                </div>
                <p className="text-gray-600">Desenvolvimento visual completo, desde logos até materiais gráficos criativos e impactantes.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Caricaturas & Cartoon 2D</h3>
                </div>
                <p className="text-gray-600">Meu estilo do coração! Ilustrações em cartoon 2D e caricaturas cheias de vida e expressividade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;