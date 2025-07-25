import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Happy Birthday, My Cutu Jaan!";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-soft overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <Heart 
              className="text-romance-pink opacity-30" 
              size={Math.random() * 20 + 10}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="font-dancing text-6xl md:text-8xl font-bold text-romance-deep mb-6 animate-bounce-heart">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="font-poppins text-xl md:text-2xl text-romance-deep/80 mb-8 animate-fade-in">
          A digital diary filled with our beautiful memories and endless love 💕
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg"
            className="bg-romantic hover:scale-105 transition-all duration-300 shadow-romantic animate-pulse-glow font-poppins text-lg px-8 py-6"
          >
            <Heart className="mr-2" fill="currentColor" />
            Explore Our Love Story
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-romance-pink text-romance-pink hover:bg-romance-light transition-all duration-300 font-poppins text-lg px-8 py-6"
          >
            Start Our Journey 💝
          </Button>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;