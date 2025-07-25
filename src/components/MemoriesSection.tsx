import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Heart } from 'lucide-react';
import mem1 from '@/assets/mem1.jpg';
import mem2 from '@/assets/mem2.jpg';
import mem3 from '@/assets/mem3.jpg';
import nature from '@/assets/nature.mp4';
import train from '@/assets/Train.mp4';

const memories = [
  {
    id: 1,
    title: "The Day We Met",
    date: "April 15, 2023",
    location: "Anonymous App",
    description: "The day my heart knew it had found its home. Your voice lit up world. Cutu",
    fullStory: "I remember call u a dude and it was soo funny but i loved your voice baby.",
    image: mem3,
    type: "image",
    color: "from-romance-pink to-romance-glow"
  },
  {
    id: 2,
    title: "2 Days later",
    date: "April 18, 2023",
    location: "Telegram",
    description: "Sleepless nights and endless conversations",
    fullStory: "We fucking spoke so much in like 2 days baby i was just reading our chats and i was like oh my god i love you so much",
    image: mem1,
    type: "image",
    color: "from-romance-accent to-romance-pink"
  },
  {
    id: 3,
    title: "The 'Babe' Moments",
    date: "April 19, 2023",
    location: "Telegram",
    description: "We were soo hooked or i was more hooked and i started calling u babe",
    fullStory: "I remember all the funyn conversations we had and how easy i transitioned into calling you babe and it was so fun baby",
    image: mem2,
    type: "image",
    color: "from-romance-glow to-romance-accent"
  },
  {
    id: 4,
    title: "Asking you to be my girlfriend",
    date: "April 20, 2023",
    location: "Telegram",
    description: "I asked you to be my girlfriend and you said yes",
    fullStory: "I remember we had a small argument and we cut the call but later somehow a miracle just happened and we spoke again and i asked you to be my girlfriend and you said yes",
    image: nature,
    type: "video",
    color: "from-romance-pink to-romance-deep"
  },
  {
    id: 5,
    title: "Present",
    date: "Today ❤️",
    location: "In Your Heart",
    description: "Creating this digital love letter to celebrate another year of your beautiful existence.",
    fullStory: "Today me and you celebrate you baby - your kindness, your beauty, your sexyness, your hotness, your voice, your everything. This website is my gift to you, a digital scrapbook of our love story. Here's to many more birthdays together, my darling. You make every day feel like a celebration.",
    image: train,
    type: "video",
    color: "from-romance-accent to-romance-glow"
  }
];

const MemoriesSection = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-romance-deep mb-4 animate-bounce-heart">
            Our Beautiful Memories
          </h2>
          <p className="font-poppins text-xl text-romance-deep/70 max-w-2xl mx-auto">
            Every moment with you is a treasure worth remembering forever 💕
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memories.map((memory, index) => (
            <Dialog key={memory.id}>
              <DialogTrigger asChild>
                <Card 
                  className="cursor-pointer group hover:scale-105 transition-all duration-500 shadow-soft hover:shadow-romantic animate-fade-in border-romance-pink/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    {memory.type === 'video' ? (
                      <video 
                        src={memory.image}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${memory.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute top-4 right-4">
                      <Heart className="text-white animate-pulse" fill="currentColor" size={24} />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-dancing text-2xl text-romance-deep group-hover:text-romance-pink transition-colors">
                      {memory.title}
                    </CardTitle>
                    <CardDescription className="font-poppins">
                      <div className="flex items-center gap-2 text-romance-deep/60 mb-2">
                        <Calendar size={16} />
                        {memory.date}
                      </div>
                      <div className="flex items-center gap-2 text-romance-deep/60">
                        <MapPin size={16} />
                        {memory.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="font-poppins text-romance-deep/80">{memory.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl bg-romance-light border-romance-pink">
                <DialogHeader>
                  <DialogTitle className="font-dancing text-3xl text-romance-deep">
                    {memory.title}
                  </DialogTitle>
                  <DialogDescription className="font-poppins text-romance-deep/70">
                    {memory.date} • {memory.location}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  {memory.type === 'video' ? (
                    <video 
                      src={memory.image}
                      className="w-full h-64 object-cover rounded-lg shadow-soft"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={memory.image} 
                      alt={memory.title}
                      className="w-full h-64 object-cover rounded-lg shadow-soft"
                    />
                  )}
                  <p className="font-poppins text-romance-deep leading-relaxed">
                    {memory.fullStory}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection; 