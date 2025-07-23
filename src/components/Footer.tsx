import { Instagram, Mail, MessageCircle, Heart, Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-pink-500 rounded-full p-2 mr-3">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">LivArt</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transformando ideias em arte desde 2019! Cartoon 2D é meu estilo do coração 💖
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/livart"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:livart@exemplo.com"
                className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-pink-400">Meus Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-pink-400 transition-colors cursor-pointer">🎭 Mascotes Empresariais</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">🎓 Mascotes Universitários</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">🏷️ Logos Criativos</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">🎨 Caricaturas</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">✨ Design Gráfico</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">🖼️ Ilustrações Cartoon 2D</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-pink-400"></h4>
            <div className="space-y-4 text-gray-400">
            </div>

            {/* Fun Quote */}
            <div className="mt-6 p-4 bg-gray-800 rounded-2xl">
              <p className="text-yellow-200 italic text-sm">
                "Cada projeto é uma nova aventura criativa! Bora criar algo único juntos? 🚀"
              </p>
              <div className="text-right text-pink-400 font-semibold mt-2">
                - Liv ✨
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p className="flex items-center">
                © 2025 LivArt - Feito com 
                <Heart className="w-4 h-4 text-pink-500 mx-1" fill="currentColor" />
                e muito café ☕
              </p>
            </div>
            <div className="text-gray-400">
              <p className="italic">Transformando ideias em arte desde 2019! 🎨</p>
            </div>
          </div>
          
          {/* Signature Design Element */}
          <div className="mt-6 text-center">
            <div className="inline-block">
              <svg
                className="w-32 h-8 text-pink-500/20"
                viewBox="0 0 200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20 Q 50 5, 100 20 T 190 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="20" r="2" fill="currentColor" />
                <circle cx="190" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;