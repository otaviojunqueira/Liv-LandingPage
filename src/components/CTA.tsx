import { MessageCircle, Mail, Instagram, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full"></div>
        <svg className="absolute top-1/3 right-1/3 w-32 h-32 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-3" />
            <h2 className="text-4xl lg:text-6xl font-bold">
              Bora Criar Juntos?
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-3" />
          </div>
          <p className="text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Quer um mascote exclusivo ou um logo com sua cara? 
            <br />
            <span className="text-yellow-200 font-semibold">Me chama que a gente faz acontecer! 🎨</span>
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-white/80 mb-4">Me conte mais sobre sua ideia!</p>
            <div className="text-yellow-200 font-semibold">Clica aqui 📱</div>
          </a>

          {/* Email */}
          <a
            href="mailto:livart@exemplo.com"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">E-mail</h3>
            <p className="text-white/80 mb-4">Prefere por email? Sem problemas!</p>
            <div className="text-yellow-200 font-semibold">Manda mensagem 📧</div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/livandrart"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-white/80 mb-4">Vem ver mais trabalhos!</p>
            <div className="text-yellow-200 font-semibold">@livandrart 📸</div>
          </a>
        </div>

        {/* Main CTA */}
        <div className="bg-white rounded-3xl p-8 text-gray-800 max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-pink-600">
            Pronta para dar vida às suas ideias! 
          </h3>
          <p className="text-lg mb-6 text-gray-600">
            Seja mascote, logo, caricatura ou qualquer coisa que der na telha - 
            vamos criar algo incrível juntos! 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg" onClick={() => window.open('https://www.instagram.com/livandrart', '_blank')}>
              Quero Meu Projeto Agora! 🚀
            </button>
            <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-300" onClick={() => window.open('https://drive.google.com/file/d/1UIIW_TeI21rgZS2QTkVLb7zDSHOvzPTW/view', '_blank')}>
              Ver Mais Trabalhos 👀
            </button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12">
          <p className="text-yellow-200 text-lg italic">
            "Resposta rápida garantida! Adoro conversar sobre projetos criativos 💬✨"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;