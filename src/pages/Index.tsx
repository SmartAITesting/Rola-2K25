import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import MemoriesSection from '@/components/MemoriesSection';
import MediaGallery from '@/components/MediaGallery';
import LoveQuiz from '@/components/LoveQuiz';
import LoveGames from '@/components/LoveGames';
import LoveNoteGenerator from '@/components/LoveNoteGenerator';
import InteractiveLoveLetter from '@/components/InteractiveLoveLetter';
import VirtualGiftBox from '@/components/VirtualGiftBox';
import CouplesTimelineSlider from '@/components/CouplesTimelineSlider';
import { Button } from '@/components/ui/button';
import { Heart, Music, VolumeX } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Note: In a real implementation, you would control actual audio playback here
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Background Music Toggle */}
      <Button
        onClick={toggleMusic}
        className={`fixed top-6 right-6 z-50 rounded-full w-14 h-14 shadow-romantic animate-pulse-glow ${
          isPlaying ? 'bg-romantic' : 'bg-romance-accent'
        }`}
        title={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
      >
        {isPlaying ? <VolumeX size={20} /> : <Music size={20} />}
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-romantic shadow-romantic animate-bounce-heart"
          title="Scroll to top"
        >
          <Heart size={20} fill="currentColor" />
        </Button>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Memories Section */}
      <MemoriesSection />

      {/* Media Gallery */}
      <MediaGallery />

      {/* Love Quiz */}
      <LoveQuiz />

      {/* Love Games */}
      <LoveGames />

      {/* Love Note Generator */}
      <LoveNoteGenerator />

      {/* Interactive Love Letter */}
      <InteractiveLoveLetter />

      {/* Virtual Gift Box */}
      <VirtualGiftBox />

      {/* Couple's Timeline Slider */}
      <CouplesTimelineSlider />

      {/* Footer */}
      <footer className="bg-romance-deep text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Heart className="text-romance-pink mx-auto animate-float-hearts" size={32} fill="currentColor" />
          </div>
          <h3 className="font-dancing text-3xl mb-4">Made with Endless Love</h3>
          <p className="font-poppins mb-6 opacity-90">
            Happy Birthday to the most amazing person in my world! 🎂💕
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="text-romance-pink animate-sparkle" 
                size={20}
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="font-poppins text-sm opacity-70">
            Every pixel crafted with love, every animation filled with our memories ✨
          </p>
        </div>
      </footer>

      {/* Particle Effect Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-hearts opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <Heart 
              className="text-romance-pink" 
              size={Math.random() * 15 + 5}
              fill="currentColor"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
