import { Palette, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/25 rounded-full"></div>
        <svg className="absolute top-1/4 right-1/4 w-24 h-24 text-white/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2">
              <Palette className="w-8 h-8 text-pink-500" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">LivArt</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-white hover:text-yellow-200 transition-colors font-medium">Sobre Mim</a>
            <a href="#portfolio" className="text-white hover:text-yellow-200 transition-colors font-medium">Meu Portfólio</a>
            <a href="#contato" className="text-white hover:text-yellow-200 transition-colors font-medium">Contato</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-yellow-200 font-semibold">Illustradora & Designer</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Criando
              <span className="text-yellow-300 block">Personagens</span>
              que Inspiram!
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Cartoon 2D, mascotes empresariais, logos e design gráfico criativo. 
              Bora transformar suas ideias em arte? 🎨
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Vamos Criar Juntos!
            </button>
          </div>

          {/* Mascot Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-pink-100 rounded-full flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform duration-500">
                <img src="/liv.jpg" alt="LivArt" className="w-full h-full object-cover rounded-full w-64 h-64" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-400 rounded-full p-3 animate-pulse">
                <span className="text-2xl">💖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;