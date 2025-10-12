import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Zap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="gradient-primary p-2 rounded-xl">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Financia
            </span>
            <Badge variant="secondary" className="text-xs hidden sm:block">
              AI Finance
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="#features" className="px-4 py-2 hover:text-primary transition-colors cursor-pointer inline-block">
                  Features
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#how-it-works" className="px-4 py-2 hover:text-primary transition-colors cursor-pointer inline-block">
                  How it Works
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#testimonials" className="px-4 py-2 hover:text-primary transition-colors cursor-pointer inline-block">
                  Testimonials
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <form action="https://formspree.io/f/xwpbggnw" method="POST" className="flex gap-2">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  className="px-3 py-1 rounded border border-primary/30 bg-background/50 text-sm w-32"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  className="gradient-primary hover:scale-105 transition-all duration-300"
                >
                  Join
                </Button>
              </form>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="px-4 py-2 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="px-4 py-2 hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="px-4 py-2 hover:text-primary transition-colors">
                Testimonials
              </a>
              <form action="https://formspree.io/f/xwpbggnw" method="POST" className="px-4 space-y-2">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  required 
                  className="w-full px-3 py-2 rounded border border-primary/30 bg-background text-sm"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  className="gradient-primary w-full"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;