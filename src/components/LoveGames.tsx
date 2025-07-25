import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Shuffle, RotateCcw, Trophy } from 'lucide-react';

// Love Match Game Data
const loveMatches = [
  { id: 1, left: "You", right: "Me", matched: false },
  { id: 2, left: "Forever", right: "Always", matched: false },
  { id: 3, left: "Heart", right: "Soul", matched: false },
  { id: 4, left: "Love", right: "Life", matched: false },
  { id: 5, left: "Dream", right: "Reality", matched: false }
];

// Memory Flip Game Data
const memoryCards = [
  { id: 1, symbol: "💕", matched: false, flipped: false },
  { id: 2, symbol: "💕", matched: false, flipped: false },
  { id: 3, symbol: "🌹", matched: false, flipped: false },
  { id: 4, symbol: "🌹", matched: false, flipped: false },
  { id: 5, symbol: "💖", matched: false, flipped: false },
  { id: 6, symbol: "💖", matched: false, flipped: false },
  { id: 7, symbol: "✨", matched: false, flipped: false },
  { id: 8, symbol: "✨", matched: false, flipped: false },
  { id: 9, symbol: "💝", matched: false, flipped: false },
  { id: 10, symbol: "💝", matched: false, flipped: false },
  { id: 11, symbol: "🦋", matched: false, flipped: false },
  { id: 12, symbol: "🦋", matched: false, flipped: false }
];

const LoveMatchGame = () => {
  const [matches, setMatches] = useState(loveMatches);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [gameWon, setGameWon] = useState(false);

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
  };

  const handleDrop = (e: React.DragEvent, targetItem: string) => {
    e.preventDefault();
    if (!draggedItem) return;

    const match = matches.find(m => 
      (m.left === draggedItem && m.right === targetItem) ||
      (m.right === draggedItem && m.left === targetItem)
    );

    if (match && !match.matched) {
      const newMatches = matches.map(m => 
        m.id === match.id ? { ...m, matched: true } : m
      );
      setMatches(newMatches);

      // Check if all matched
      if (newMatches.every(m => m.matched)) {
        setGameWon(true);
      }
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const resetGame = () => {
    setMatches(loveMatches.map(m => ({ ...m, matched: false })));
    setGameWon(false);
  };

  return (
    <Card className="bg-romance-light border-romance-pink shadow-soft">
      <CardHeader>
        <CardTitle className="font-dancing text-3xl text-romance-deep text-center">
          💕 Love Match Game
        </CardTitle>
        <CardDescription className="font-poppins text-center">
          Drag and drop to match the perfect pairs!
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {gameWon ? (
          <div className="text-center space-y-4 animate-scale-in">
            <Trophy className="text-romance-pink mx-auto animate-bounce-heart" size={48} />
            <h3 className="font-dancing text-2xl text-romance-deep">Perfect Match! 💕</h3>
            <p className="font-poppins text-romance-deep/70">Just like us in real life!</p>
            <Button onClick={resetGame} className="bg-romantic">
              <RotateCcw className="mr-2" size={16} />
              Play Again
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-poppins font-semibold text-romance-deep text-center">Drag from here</h4>
                {matches.filter(m => !m.matched).map(match => (
                  <div
                    key={`left-${match.id}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, match.left)}
                    className="bg-romantic text-white p-3 rounded-lg text-center cursor-move hover:scale-105 transition-transform font-poppins animate-pulse-glow"
                  >
                    {match.left}
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <h4 className="font-poppins font-semibold text-romance-deep text-center">Drop here</h4>
                {matches.filter(m => !m.matched).map(match => (
                  <div
                    key={`right-${match.id}`}
                    onDrop={(e) => handleDrop(e, match.right)}
                    onDragOver={handleDragOver}
                    className="bg-romance-accent border-2 border-dashed border-romance-pink p-3 rounded-lg text-center font-poppins hover:bg-romance-light transition-colors"
                  >
                    {match.right}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-poppins text-sm text-romance-deep/60">
                Matched: {matches.filter(m => m.matched).length} / {matches.length}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const MemoryFlipGame = () => {
  const [cards, setCards] = useState<typeof memoryCards>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    // Shuffle cards on mount
    const shuffled = [...memoryCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards.find(c => c.id === cardId)?.matched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlippedCards;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      if (firstCard?.symbol === secondCard?.symbol) {
        // Match found
        setTimeout(() => {
          const newCards = cards.map(c => 
            c.id === first || c.id === second ? { ...c, matched: true } : c
          );
          setCards(newCards);
          setFlippedCards([]);
          
          // Check if all matched
          if (newCards.every(c => c.matched)) {
            setGameWon(true);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffled = [...memoryCards].sort(() => Math.random() - 0.5);
    setCards(shuffled.map(c => ({ ...c, matched: false, flipped: false })));
    setFlippedCards([]);
    setGameWon(false);
    setMoves(0);
  };

  return (
    <Card className="bg-romance-light border-romance-pink shadow-soft">
      <CardHeader>
        <CardTitle className="font-dancing text-3xl text-romance-deep text-center">
          🧠 Memory Flip Game
        </CardTitle>
        <CardDescription className="font-poppins text-center">
          Find all the matching pairs! Moves: {moves}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {gameWon ? (
          <div className="text-center space-y-4 animate-scale-in">
            <Trophy className="text-romance-pink mx-auto animate-bounce-heart" size={48} />
            <h3 className="font-dancing text-2xl text-romance-deep">Amazing Memory! 🎉</h3>
            <p className="font-poppins text-romance-deep/70">Completed in {moves} moves!</p>
            <Button onClick={resetGame} className="bg-romantic">
              <Shuffle className="mr-2" size={16} />
              New Game
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {cards.map(card => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square bg-romance-accent border-2 border-romance-pink rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105 ${
                  flippedCards.includes(card.id) || card.matched
                    ? 'bg-romantic border-romance-glow shadow-glow' 
                    : 'hover:bg-romance-light'
                }`}
                style={{
                  transform: flippedCards.includes(card.id) || card.matched ? 'rotateY(0deg)' : 'rotateY(180deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-2xl">
                  {flippedCards.includes(card.id) || card.matched ? card.symbol : '💝'}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const LoveGames = () => {
  return (
    <section className="py-20 bg-romance-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-romance-deep mb-4 animate-bounce-heart">
            Fun Love Games
          </h2>
          <p className="font-poppins text-xl text-romance-deep/70 max-w-2xl mx-auto">
            Let's play some romantic games together! 🎮💕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <LoveMatchGame />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <MemoryFlipGame />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveGames;