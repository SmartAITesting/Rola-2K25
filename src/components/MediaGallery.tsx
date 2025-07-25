import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, Heart } from 'lucide-react';
import mem1 from '@/assets/mem1.jpg';
import mem2 from '@/assets/mem2.jpg';
import mem3 from '@/assets/mem3.jpg';
import nature from '@/assets/nature.mp4';
import train from '@/assets/Train.mp4';

const galleryItems = [
  {
    id: 1,
    src: mem1,
    alt: "Our First Connection",
    caption: "The moment we first connected - my heart knew it found its home 💕",
    type: "image"
  },
  {
    id: 2,
    src: mem2,
    alt: "Early Days Together",
    caption: "Those endless conversations that made me fall deeper in love 🌹",
    type: "image"
  },
  {
    id: 3,
    src: mem3,
    alt: "Special Memories",
    caption: "Every moment with you becomes a treasured memory ✨",
    type: "image"
  },
  {
    id: 4,
    src: nature,
    alt: "Our Nature Connection",
    caption: "Like nature's beauty, our love grows more beautiful each day 🌿",
    type: "video"
  },
  {
    id: 5,
    src: train,
    alt: "Our Journey Together",
    caption: "Life is a beautiful journey with you by my side 🚂💖",
    type: "video"
  }
];

const MediaGallery = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-romance-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-romance-deep mb-4 animate-bounce-heart">
            Our Memory Gallery
          </h2>
          <p className="font-poppins text-xl text-romance-deep/70 max-w-2xl mx-auto">
            A collection of moments that make my heart skip a beat 📸💕
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="break-inside-avoid mb-6 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-romantic transition-all duration-500 group-hover:scale-105">
                    {item.type === 'video' ? (
                      <video 
                        src={item.src}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="text-white animate-pulse" fill="currentColor" size={24} />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-romance-deep/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-poppins text-white text-sm">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl bg-romance-light/95 border-romance-pink p-0">
                <div className="relative">
                  {item.type === 'video' ? (
                    <video 
                      src={item.src}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-romance-deep/90 to-transparent p-6">
                    <p className="font-poppins text-white text-lg font-medium">{item.caption}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="relative mt-16">
          <div className="flex justify-center items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="text-romance-pink animate-float-hearts opacity-60" 
                size={20 + i * 4}
                fill="currentColor"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery; 