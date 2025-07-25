import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Trophy } from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "Where did we have our Chat?",
    options: [
      "Whatsapp",
      "Telegram",
      "Instagram",
      "Anonymous App"
    ],
    correct: 3,
    hint: "☕ The aroma of coffee and the warmth of your smile..."
  },
  {
    id: 2,
    question: "What was our favorite motto ?",
    options: [
      "Easy Peasy",
      "Easy Peasy Lemon Squeezy",
      "Easy Peasy Boobie Squeezy",
      "Easyyy Peasy"
    ],
    correct: 2,
    hint: "🐚 Little treasures from the sea, just like our memories..."
  },
  {
    id: 3,
    question: "What special surprise did I prepare for you?",
    options: [
      "Video Edits",
      "Video Call",
      "A Website",
      "A gift"
    ],
    correct: 2,
    hint: "✨ Tiny lights that sparkled almost as much as your eyes..."
  },
  {
    id: 4,
    question: "What did you do to my heart?",
    options: [
      "Make it beat faster",
      "Make it beat slower",
      "Make it beat faster and slower",
      "Make it beat faster and slower and faster"
    ],
    correct: 2,
    hint: "🌹 A gentle touch that made my heart flutter..."
  },
  {
    id: 5,
    question: "What makes every sunset more beautiful?",
    options: [
      "The colors in the sky",
      "Being at the beach",
      "Having a camera",
      "Sharing it with you"
    ],
    correct: 3,
    hint: "💕 The secret ingredient to any perfect moment..."
  }
];

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const finalScore = selectedAnswers.reduce((total, answer, index) => {
        return total + (answer === quizQuestions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    if (score === quizQuestions.length) {
      return "Perfect! You know our love story by heart! 💕 You're absolutely amazing!";
    } else if (score >= quizQuestions.length * 0.8) {
      return "Wonderful! You remember our beautiful moments so well! 💖";
    } else if (score >= quizQuestions.length * 0.6) {
      return "Sweet! You know the important parts of our journey! 💝";
    } else {
      return "Adorable! Every moment with you is worth remembering! 💗";
    }
  };

  if (showResults) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-romance-light border-romance-pink shadow-romantic">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="text-romance-pink animate-bounce-heart" size={48} />
              </div>
              <CardTitle className="font-dancing text-4xl text-romance-deep">
                Quiz Results! 
              </CardTitle>
              <CardDescription className="font-poppins text-xl text-romance-deep/70">
                You scored {score} out of {quizQuestions.length}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center gap-2">
                {[...Array(quizQuestions.length)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`${i < score ? 'text-romance-pink' : 'text-romance-pink/30'} animate-sparkle`}
                    fill={i < score ? 'currentColor' : 'none'}
                    size={24}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              
              <p className="font-poppins text-lg text-romance-deep leading-relaxed">
                {getScoreMessage()}
              </p>
              
              <div className="space-y-3">
                <Button 
                  onClick={resetQuiz}
                  className="bg-romantic hover:scale-105 transition-all duration-300 font-poppins"
                >
                  <Heart className="mr-2" fill="currentColor" />
                  Take Quiz Again
                </Button>
              </div>
              
              {/* Confetti animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-sparkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      fontSize: `${Math.random() * 10 + 10}px`
                    }}
                  >
                    {['💕', '💖', '💝', '🌹', '✨'][Math.floor(Math.random() * 5)]}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold text-romance-deep mb-4 animate-bounce-heart">
            Love Story Quiz
          </h2>
          <p className="font-poppins text-xl text-romance-deep/70">
            How well do you know our beautiful journey together? 💕
          </p>
        </div>

        <Card className="bg-romance-light border-romance-pink shadow-romantic animate-scale-in">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="font-poppins text-romance-deep/60">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <div className="flex gap-1">
                {[...Array(quizQuestions.length)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i <= currentQuestion ? 'bg-romance-pink' : 'bg-romance-pink/30'
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
            </div>
            
            <CardTitle className="font-dancing text-3xl text-romance-deep">
              {question.question}
            </CardTitle>
            <CardDescription className="font-poppins text-romance-deep/60 italic">
              {question.hint}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                className={`w-full justify-start text-left h-auto p-4 font-poppins transition-all duration-300 hover:scale-105 ${
                  selectedAnswers[currentQuestion] === index 
                    ? 'bg-romantic border-romance-pink shadow-glow' 
                    : 'border-romance-pink/50 hover:border-romance-pink hover:bg-romance-light'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index 
                      ? 'border-white bg-white' 
                      : 'border-romance-pink'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <Heart className="text-romance-pink" size={12} fill="currentColor" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </Button>
            ))}
            
            <div className="pt-6">
              <Button 
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="w-full bg-romantic hover:scale-105 transition-all duration-300 font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'} 
                <Heart className="ml-2" fill="currentColor" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoveQuiz;