import { useState, useEffect } from 'react';
import { Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Change this message to customize the love letter content
const LOVE_LETTER_TEXT = `My Dearest Love,

Rola babu Every day with you feels like a beautiful dream that I never want to wake up from.Cutu Your smile lights up my world, and your laughter is the sweetest melody I've ever heard.

From the moment we met, I knew you were special Cutu. You've brought so much joy, love, and meaning into my life. Every memory we've created together is a treasure I hold close to my heart.

On this special day, I want you to know how grateful I am to have you in my life. You're not just my girlfriend, you're my best friend, my partner in adventure, and the love of my life.

Happy Birthday, beautiful! Here's to many more years of love, laughter, and unforgettable memories together.

Forever yours,
With all my love ❤️`;

const InteractiveLoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen && !isTyping) {
      setIsTyping(true);
      setDisplayedText('');
      
      let currentIndex = 0;
      const typeText = () => {
        if (currentIndex < LOVE_LETTER_TEXT.length) {
          setDisplayedText(prev => prev + LOVE_LETTER_TEXT[currentIndex]);
          currentIndex++;
          setTimeout(typeText, 30); // Adjust typing speed here
        } else {
          setIsTyping(false);
        }
      };
      
      // Delay before starting to type
      setTimeout(typeText, 500);
    }
  }, [isOpen]);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setDisplayedText('');
    setIsTyping(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-romance-light to-white relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romance-pink/10 animate-float-hearts"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-romantic mb-4">
            A Letter From My Heart
          </h2>
          <p className="font-poppins text-lg text-romantic-dark max-w-2xl mx-auto">
            Click the envelope to reveal a special message just for you
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            {/* Envelope */}
            <div 
              className={`relative cursor-pointer transition-all duration-700 ${
                isOpen ? 'scale-110' : 'hover:scale-105 hover:rotate-1'
              }`}
              onClick={handleEnvelopeClick}
            >
              {/* Envelope Body */}
              <div 
                className={`w-80 h-56 bg-romance-accent border-4 border-romantic rounded-lg shadow-romantic relative overflow-hidden transition-all duration-700 ${
                  isOpen ? 'transform -translate-y-4' : 'animate-pulse-glow'
                }`}
              >
                {/* Heart Seal */}
                <div className="absolute top-4 right-4">
                  <Heart 
                    className="text-romantic animate-sparkle" 
                    size={32} 
                    fill="currentColor"
                  />
                </div>
                
                {/* Mail Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="text-romantic" size={64} />
                </div>
                
                {/* Envelope Flap */}
                <div 
                  className={`absolute top-0 left-0 w-full h-32 bg-romantic border-4 border-romantic origin-top transition-transform duration-700 ${
                    isOpen ? 'transform rotate-12 translate-y-2' : ''
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                  }}
                />
              </div>
            </div>

            {/* Love Letter */}
            {isOpen && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-scale-in">
                <div className="bg-white border-4 border-romantic rounded-lg shadow-romantic p-8 max-w-2xl max-h-96 overflow-y-auto animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <Heart className="text-romantic animate-float-hearts" size={24} fill="currentColor" />
                    <Button
                      onClick={handleClose}
                      variant="ghost"
                      size="sm"
                      className="text-romantic hover:bg-romance-light"
                    >
                      ✕
                    </Button>
                  </div>
                  
                  <div 
                    className="font-poppins text-romantic-dark leading-relaxed whitespace-pre-line"
                    style={{ minHeight: '200px' }}
                  >
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-5 bg-romantic ml-1 animate-pulse" />
                    )}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Heart 
                          key={i}
                          className="text-romance-pink animate-sparkle" 
                          size={16}
                          fill="currentColor"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!isOpen && (
          <div className="text-center mt-8">
            <p className="font-poppins text-romantic-dark animate-bounce-heart">
              💝 Click the envelope to open your love letter 💝
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveLoveLetter;