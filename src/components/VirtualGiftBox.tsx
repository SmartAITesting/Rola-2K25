import { useState } from 'react';
import { Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

// Change this message to customize the gift box content
const GIFT_MESSAGE = "Happy Birthday, my love! 🎂💕";
const GIFT_DESCRIPTION = "You are the most precious gift in my life cutu baacha. Cutu Baacha Every day with you is a celebration of love, joy, and endless happiness. This special day is just another reason to shower you with all the love you deserve!";

const VirtualGiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = () => {
    // Pink and white confetti burst
    const colors = ['#FFC1CC', '#FF69B4', '#FFFFFF', '#FFB6C1'];
    
    // Multiple confetti bursts for dramatic effect
    const burst = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle', 'square'],
        scalar: 1.2
      });
    };

    burst();
    setTimeout(burst, 200);
    setTimeout(burst, 400);

    // Heart-shaped confetti
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#FF69B4', '#FFC1CC'],
        shapes: ['circle'],
        scalar: 1.5
      });
    }, 600);
  };

  const handleGiftBoxClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      triggerConfetti();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-romance-light via-white to-romance-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <Gift
            key={i}
            className="absolute text-romantic animate-float-hearts"
            size={Math.random() * 25 + 15}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-romantic mb-4">
            A Special Gift For You
          </h2>
          <p className="font-poppins text-lg text-romantic-dark max-w-2xl mx-auto">
            Click the gift box to unwrap your birthday surprise
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative perspective-1000">
            {/* Gift Box Container */}
            <div 
              className={`relative cursor-pointer transition-all duration-1000 transform-style-3d ${
                isOpen ? 'scale-110' : 'hover:scale-105 animate-pulse-glow'
              }`}
              onClick={handleGiftBoxClick}
            >
              {/* Gift Box Base */}
              <div className="w-64 h-64 bg-romance-accent border-4 border-romantic rounded-lg shadow-romantic relative overflow-hidden">
                {/* Gift Box Pattern */}
                <div className="absolute inset-4 border-2 border-romantic/30 rounded"></div>
                <div className="absolute inset-8 border-2 border-romantic/20 rounded"></div>
                
                {/* Center Gift Icon (when closed) */}
                {!isOpen && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gift className="text-romantic animate-bounce-heart" size={80} />
                  </div>
                )}
                
                {/* Ribbon Vertical */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-romantic"></div>
                
                {/* Ribbon Horizontal */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-romantic"></div>
              </div>

              {/* Gift Box Lid */}
              <div 
                className={`absolute top-0 left-0 w-64 h-32 bg-romantic border-4 border-romantic rounded-t-lg transition-all duration-1000 transform-origin-bottom ${
                  isOpen ? 'transform rotate-x-90 translate-y-8' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Bow */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-romance-pink"></div>
                    <div className="w-8 h-4 bg-white rounded-full border-2 border-romance-pink"></div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-romance-pink"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Content */}
            {isOpen && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-scale-in">
                <div className="bg-white border-4 border-romantic rounded-lg shadow-romantic p-8 max-w-md text-center animate-fade-in">
                  <div className="mb-6">
                    <Heart className="text-romantic mx-auto animate-float-hearts" size={48} fill="currentColor" />
                  </div>
                  
                  <h3 className="font-dancing text-3xl text-romantic mb-4">
                    {GIFT_MESSAGE}
                  </h3>
                  
                  <p className="font-poppins text-romantic-dark leading-relaxed mb-6">
                    {GIFT_DESCRIPTION}
                  </p>
                  
                  {/* Digital Rose */}
                  <div className="mb-6 animate-scale-in">
                    <div className="text-6xl animate-spin-slow">🌹</div>
                  </div>
                  
                  <div className="flex justify-center gap-2 mb-4">
                    {[...Array(7)].map((_, i) => (
                      <Heart 
                        key={i}
                        className="text-romance-pink animate-sparkle" 
                        size={20}
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  <Button
                    onClick={handleClose}
                    className="bg-romantic hover:bg-romantic/90 text-white font-poppins"
                  >
                    Close Gift
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {!isOpen && (
          <div className="text-center mt-8">
            <p className="font-poppins text-romantic-dark animate-bounce-heart">
              🎁 Click the gift box to unwrap your surprise 🎁
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VirtualGiftBox;