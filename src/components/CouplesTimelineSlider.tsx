import { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import confetti from 'canvas-confetti';
import mem1 from '@/assets/mem1.jpg';
import mem2 from '@/assets/mem2.jpg';
import mem3 from '@/assets/mem3.jpg';
import nature from '@/assets/nature.mp4';
import train from '@/assets/Train.mp4';

// Timeline milestones data
const TIMELINE_MILESTONES = [
  {
    id: 1,
    title: "The Day We Met",
    date: "April 15, 2023",
    description: "The day my heart found its home. I remember calling you 'dude' and it was so funny, but I instantly fell in love with your voice. That moment when we first connected changed everything.",
    image: mem3,
    type: "image",
    emoji: "💫"
  },
  {
    id: 2,
    title: "Endless Conversations",
    date: "April 18, 2023",
    description: "We talked so much in just two days! Reading through our chats now, I'm amazed at how quickly and deeply we connected. Every message made me fall more in love with you.",
    image: mem1,
    type: "image",
    emoji: "💕"
  },
  {
    id: 3,
    title: "The 'Babe' Moments",
    date: "April 19, 2023",
    description: "I was so hooked that calling you 'babe' just felt natural. Those sweet conversations and the way we naturally grew closer with each passing moment were magical.",
    image: mem2,
    type: "image",
    emoji: "💋"
  },
  {
    id: 4,
    title: "Our Beautiful Journey",
    date: "April 20, 2023",
    description: "After a small argument and a brief call disconnect, a miracle happened. We spoke again, and that's when I asked you to be my girlfriend. Your 'yes' made me the happiest person alive.",
    image: nature,
    type: "video",
    emoji: "✈️"
  },
  {
    id: 5,
    title: "Today - Our Love Grows",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    description: "Every day with you is a new adventure. Like this train journey, our love keeps moving forward, getting stronger and more beautiful with each passing moment. Happy Birthday, my love!",
    image: train,
    type: "video",
    emoji: "🎂"
  }
];

const CouplesTimelineSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerHeartBurst = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF69B4', '#FFC1CC', '#FFB6C1'],
      shapes: ['circle'],
      scalar: 1.2
    });
  };

  const nextSlide = () => {
    if (!isAnimating && currentSlide < TIMELINE_MILESTONES.length - 1) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev + 1);
      triggerHeartBurst();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev - 1);
      triggerHeartBurst();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      triggerHeartBurst();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide(prev => (prev + 1) % TIMELINE_MILESTONES.length);
        triggerHeartBurst();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentMilestone = TIMELINE_MILESTONES[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-romance-light to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romance-pink/5 animate-float-hearts"
            size={Math.random() * 40 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-romantic mb-4">
            Our Love Story Timeline
          </h2>
          <p className="font-poppins text-lg text-romantic-dark max-w-2xl mx-auto">
            Every moment with you is a milestone worth celebrating 💕
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 gap-3">
            {TIMELINE_MILESTONES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-romantic scale-125 shadow-romantic'
                    : 'bg-romance-accent hover:bg-romantic/50'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <div className="relative">
            <Card className={`p-8 bg-white border-4 border-romantic shadow-romantic transition-all duration-500 ${
              isAnimating ? 'animate-scale-in' : ''
            }`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden border-4 border-romance-accent">
                    {currentMilestone.type === 'video' ? (
                      <video
                        src={currentMilestone.image}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : (
                      <img
                        src={currentMilestone.image}
                        alt={currentMilestone.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="absolute -top-4 -right-4 text-6xl animate-bounce-heart">
                    {currentMilestone.emoji}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-romantic">
                    <Calendar size={24} />
                    <span className="font-poppins font-semibold">
                      {currentMilestone.date}
                    </span>
                  </div>

                  <h3 className="font-dancing text-4xl text-romantic">
                    {currentMilestone.title}
                  </h3>

                  <p className="font-poppins text-romantic-dark leading-relaxed text-lg">
                    {currentMilestone.description}
                  </p>

                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i}
                        className="text-romance-pink animate-sparkle" 
                        size={24}
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0 || isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-romantic hover:bg-romantic/90 disabled:opacity-50 shadow-romantic"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === TIMELINE_MILESTONES.length - 1 || isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-romantic hover:bg-romantic/90 disabled:opacity-50 shadow-romantic"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          <div className="mt-8 bg-romance-accent rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-romantic transition-all duration-500"
              style={{ 
                width: `${((currentSlide + 1) / TIMELINE_MILESTONES.length) * 100}%` 
              }}
            />
          </div>

          <div className="text-center mt-4">
            <span className="font-poppins text-romantic">
              {currentSlide + 1} of {TIMELINE_MILESTONES.length}
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-poppins text-romantic-dark animate-pulse">
            💝 Navigate through our beautiful journey together 💝
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouplesTimelineSlider; 