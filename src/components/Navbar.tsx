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
              Trezr
            </span>
            <Badge variant="secondary" className="text-xs hidden sm:block">
              AI Finance
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors cursor-pointer">
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors cursor-pointer">
                  How it Works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors cursor-pointer">
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <form action="https://formspree.io/f/xwpbggnw" method="POST" className="hidden sm:block">
              <Button 
                type="submit"
                size="sm" 
                className="gradient-primary hover:scale-105 transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </form>
            
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
              <form action="https://formspree.io/f/xwpbggnw" method="POST" className="px-4">
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