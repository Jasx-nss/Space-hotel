import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 text-foreground stars-bg">
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <AlertTriangle size={120} className="text-primary animate-pulse mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          MOCK WEBSITE DISCLAIMER
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This is an NSS project website for demonstration purposes only.
        </p>
        <div className="bg-primary/10 border border-primary/20 p-8 rounded-xl my-10 backdrop-blur-sm">
          <p className="text-2xl font-bold text-primary uppercase tracking-widest mb-4">
            Do Not Attempt To Buy Anything
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            This system does not process real transactions or reservations. All content is simulated for educational purposes.
          </p>
        </div>
        <Button onClick={() => navigate('/')} className="btn-primary px-8 py-6 text-lg h-auto">
          <ArrowLeft size={24} className="mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
