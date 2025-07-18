import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Shield, 
  FileText, 
  Phone,
  MapPin,
  Coins,
  TrendingUp
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const productLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Security", href: "#" },
    { name: "API Docs", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "NBFC Disclosure", href: "#" },
    { name: "Grievance Redressal", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const partners = [
    "HDFC Mutual Fund",
    "SBI Mutual Fund",
    "Digital Gold by SafeGold",
    "NSDL",
    "BSE",
    "Razorpay"
  ];

  return (
    <footer className="py-16 border-t border-border relative">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                Trezr
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your fallen angel for every financial good deed. 
                Building wealth through smart habits and AI guidance.
              </p>
              <Badge className="gradient-gold border-gold/30">
                <Coins className="h-3 w-3 mr-1" />
                2.5% Avg Gold Cashback
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@trezr.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 80000 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card border-border hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <Card className="glass-card border-border p-6 mb-8">
          <h4 className="font-semibold mb-4 text-center">Trusted Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            {partners.map((partner, index) => (
              <span key={index} className="hover:text-foreground transition-colors duration-200">
                {partner}
              </span>
            ))}
          </div>
        </Card>

        {/* Regulatory Compliance */}
        <Card className="glass-card border-primary/20 p-6 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                Regulatory Compliance
                <Badge variant="outline" className="border-primary/30 text-primary">
                  RBI Compliant
                </Badge>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trezr Technologies Pvt. Ltd. is registered with the Reserve Bank of India (RBI) 
                and follows all applicable guidelines for digital payments and financial services. 
                Your investments are secured through NSDL and all transactions are processed 
                through RBI-approved payment gateways.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>• NBFC License: IN-NBFC-2024-001234</span>
                <span>• CIN: U65920KA2023PTC123456</span>
                <span>• GST: 29ABCDE1234F1Z5</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground">
            © 2024 Trezr Technologies Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>v2.1.0</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 glass-card border-border rounded-lg">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Investment Disclaimer:</strong> Mutual fund investments are subject to market risks. 
            Read all scheme-related documents carefully. Past performance is not indicative of future results. 
            Digital gold investments are subject to price fluctuation and regulatory changes. 
            Trezr does not guarantee returns and all investment decisions should be made after careful consideration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;