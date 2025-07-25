import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, RefreshCw } from 'lucide-react';

const loveNotes = [
  "You are the sunshine that brightens my darkest days and the moonlight that guides me through the night. 🌟",
  "In a world full of temporary things, you are my forever. Every heartbeat whispers your name. 💕",
  "Your smile is my favorite work of art, and your laugh is my favorite song. You're my everything! 🎨🎵",
  "I fall in love with you more every day, like a never-ending beautiful dream that I never want to wake up from. ✨",
  "You're not just my girlfriend, you're my best friend, my soulmate, and my greatest adventure. 🗺️❤️",
  "With you, I've learned that home isn't a place – it's wherever you are, wherever we're together. 🏠💖",
  "Your love gives me wings to fly and roots to stay grounded. You're my perfect balance. 🦋🌳",
  "Every love story is beautiful, but ours is my absolute favorite. We're writing magic together. 📚✨",
  "You make my heart skip beats and my soul sing melodies I never knew existed. 🎶💝",
  "In your eyes, I see my future, my dreams, and all the love I never knew I was capable of giving. 👀💕",
  "You're the missing piece I didn't know my heart was searching for. Now I'm complete. 🧩❤️",
  "Your love is like a beautiful garden where happiness blooms in every corner of my heart. 🌸🌺",
  "Time stops when I'm with you, and yet every moment feels like a precious eternity. ⏰💫",
  "You turn ordinary moments into extraordinary memories just by being yourself. 📸✨",
  "My love for you grows stronger with each sunrise and deeper with every sunset. 🌅🌄",
  "You're my favorite notification, my sweetest distraction, and my most beautiful reality. 📱💕",
  "In a universe of billions of stars, you shine the brightest in my sky. ⭐🌌",
  "Your hugs are my safe haven, your kisses are my salvation, and your love is my greatest blessing. 🤗😘",
  "You make me believe in magic, fairytales, and happily ever afters. 🧚‍♀️✨",
  "Every day with you feels like Valentine's Day, and every moment feels like a celebration of love. 💝🎉"
];

const LoveNoteGenerator = () => {
  const [currentNote, setCurrentNote] = useState(loveNotes[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const generateNewNote = () => {
    setIsGenerating(true);
    setShowAnimation(true);
    
    // Add a small delay for animation effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * loveNotes.length);
      setCurrentNote(loveNotes[randomIndex]);
      setIsGenerating(false);
      
      // Reset animation after a moment
      setTimeout(() => setShowAnimation(false), 500);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-romance-deep mb-4 animate-bounce-heart">
            Love Note Generator
          </h2>
          <p className="font-poppins text-xl text-romance-deep/70">
            Sweet messages straight from my heart to yours 💌
          </p>
        </div>

        <Card className="bg-romance-light border-romance-pink shadow-romantic animate-scale-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Heart 
                  className={`text-romance-pink animate-pulse ${showAnimation ? 'animate-bounce-heart' : ''}`} 
                  size={48} 
                  fill="currentColor" 
                />
                {showAnimation && (
                  <div className="absolute inset-0 animate-ping">
                    <Heart className="text-romance-pink opacity-50" size={48} fill="currentColor" />
                  </div>
                )}
              </div>
            </div>
            <CardTitle className="font-dancing text-3xl text-romance-deep">
              A Message Just For You
            </CardTitle>
            <CardDescription className="font-poppins text-romance-deep/60">
              Click the button below for a new romantic message!
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className={`relative min-h-[120px] flex items-center justify-center transition-all duration-500 ${
              isGenerating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              {isGenerating ? (
                <div className="text-center">
                  <Sparkles className="text-romance-pink animate-spin mx-auto mb-4" size={32} />
                  <p className="font-poppins text-romance-deep/60 animate-pulse">
                    Crafting a special message for you...
                  </p>
                </div>
              ) : (
                <blockquote className={`font-poppins text-lg text-romance-deep leading-relaxed text-center italic animate-fade-in ${
                  showAnimation ? 'animate-typewriter' : ''
                }`}>
                  "{currentNote}"
                </blockquote>
              )}
            </div>
            
            <div className="text-center">
              <Button 
                onClick={generateNewNote}
                disabled={isGenerating}
                className={`bg-romantic hover:scale-105 transition-all duration-300 font-poppins text-lg px-8 py-6 ${
                  isGenerating ? 'animate-pulse' : 'animate-pulse-glow'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 animate-spin" size={20} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} />
                    Generate New Love Note
                  </>
                )}
              </Button>
            </div>

            {/* Floating sparkles animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {showAnimation && [...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 1}s`,
                    fontSize: `${Math.random() * 8 + 12}px`
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Decorative hearts */}
        <div className="flex justify-center mt-12 gap-4">
          {[...Array(7)].map((_, i) => (
            <Heart 
              key={i}
              className="text-romance-pink animate-float-hearts opacity-60" 
              size={16 + i * 2}
              fill="currentColor"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNoteGenerator;