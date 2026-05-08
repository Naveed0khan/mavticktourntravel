import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your inbox for travel deals.");
      setEmail("");
    }
  };

  return (
    <>
      <section className="py-10 md:py-16 bg-gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Get Exclusive Travel Deals
            </h2>
            <p className="opacity-90 mb-8">
              Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/50 h-11 sm:h-12 text-sm sm:text-base"
              />
              <Button type="submit" className="bg-sunset hover:bg-sunset/90 text-primary-foreground gap-2 shrink-0 h-11 sm:h-12 px-8 font-bold text-sm sm:text-base">
                Subscribe
                <Send className="h-4 w-4" />
              </Button>
            </form>

            <p className="text-xs opacity-70 mt-4">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default Newsletter;
