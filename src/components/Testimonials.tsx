import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marina Silva',
      company: 'Tech Startup',
      text: 'A Liv criou nosso mascote e foi PERFEITO! Super criativa e entendeu exatamente o que queríamos. Recomendo demais! 🚀',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      company: 'Universidade Federal',
      text: 'O mascote da nossa universidade ficou incrível! Os alunos amaram e a Liv foi super profissional durante todo o processo.',
      rating: 5,
      avatar: '👨‍🎓'
    },
    {
      id: 3,
      name: 'Ana Costa',
      company: 'Loja Online',
      text: 'Logo lindo, entrega rápida e preço justo! A Liv tem um talento incrível e fez exatamente o que eu sonhava. Tamo junto sempre! 💕',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            O que meus <span className="text-pink-500">clientes</span> falam
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Nada melhor que o carinho de quem já trabalhou comigo!
          </p>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
              
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-pink-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Comic style elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-sm">💬</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">50+</div>
                <div className="text-gray-600">Projetos Criados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">100%</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Cada projeto é uma nova oportunidade de criar algo único e especial!" - Liv 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;