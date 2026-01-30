import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Star, ArrowRight } from 'lucide-react';
import { rooms, amenities, testimonials, faqs, pricingPackages } from '../data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem, SlideIn } from '@/components/AnimatedSection';
import { AnimatedCard, FloatingElement } from '@/components/AnimatedCard';
import ParticleStars from '@/components/ParticleStars';
import MobileMenu from '@/components/MobileMenu';
import BackToTop from '@/components/BackToTop';
import Gallery from '@/components/Gallery';

const Home = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    navigate('/coming-soon');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleStars />
      
      <BackToTop />

      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 text-primary text-2xl font-semibold tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-8 h-8" />
            <span>jasX</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {['rooms', 'amenities', 'pricing', 'about'].map((item, index) => (
              <motion.button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="text-muted-foreground hover:text-foreground transition-colors relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button onClick={handleBookNow} className="btn-primary">
                Book Now
              </Button>
            </motion.div>
          </nav>
          <MobileMenu onNavigate={scrollToSection} onBookNow={handleBookNow} />
        </div>
      </motion.header>

      <section className="hero-section flex flex-col items-center justify-center text-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto pt-20">
          <motion.div 
            className="text-primary font-bold tracking-widest mb-6 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RE-IMAGINE TRAVEL
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            EXPERIENCE LUXURY BEYOND EARTH
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The world's first orbital space hotel. Where dreams meet the cosmos.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleBookNow} className="btn-primary group px-8 py-6 text-lg h-auto">
                Reserve Your Journey
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => scrollToSection('rooms')} className="btn-secondary px-8 py-6 text-lg h-auto">
                Explore Suites
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <FloatingElement className="mt-12 cursor-pointer text-primary" duration={1.5}>
          <motion.div 
            onClick={() => scrollToSection('rooms')}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </FloatingElement>
      </section>

      <AnimatedSection>
        <div className="stats-bar">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Successful Orbits' },
                { value: '100%', label: 'Safety Rating' },
                { value: '24h', label: 'Earth View' },
                { value: '8yr', label: 'In Operation' },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </AnimatedSection>

      <section id="rooms" className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">OUR SUITES</h2>
          <p className="section-description">Accommodations designed for the ultimate space experience</p>
        </AnimatedSection>
        <StaggerContainer className="rooms-grid">
          {rooms.map((room, index) => (
            <StaggerItem key={room.id}>
              <AnimatedCard className="card-space h-full" hoverY={-12}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{room.name}</h3>
                  <div className="mt-2">
                    <span className="text-primary font-bold">{room.price}</span>
                    <span className="text-muted-foreground">/{room.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{room.description}</p>
                <ul className="space-y-2 mb-8">
                  {room.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleBookNow} className="btn-secondary w-full">
                    Select Suite
                  </Button>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="amenities" className="section-container bg-card/30 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">AMENITIES</h2>
          <p className="section-description">World-class facilities for an extraordinary stay</p>
        </AnimatedSection>
        <StaggerContainer className="amenities-grid">
          {amenities.map((amenity, index) => (
            <StaggerItem key={amenity.id}>
              <AnimatedCard className="card-space h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket size={40} className="text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="pricing" className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">PACKAGES</h2>
          <p className="section-description">Choose your perfect cosmic adventure</p>
        </AnimatedSection>
        <StaggerContainer className="pricing-grid">
          {pricingPackages.map((pkg, index) => (
            <StaggerItem key={pkg.id}>
              <AnimatedCard 
                className={`card-space relative h-full ${pkg.popular ? 'border-primary' : ''}`}
                hoverY={pkg.popular ? -16 : -10}
                hoverScale={pkg.popular ? 1.03 : 1.02}
              >
                {pkg.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 10px hsl(347 77% 50% / 0.4)',
                        '0 0 25px hsl(347 77% 50% / 0.6)',
                        '0 0 10px hsl(347 77% 50% / 0.4)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-primary text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <Star size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    onClick={handleBookNow} 
                    className={pkg.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    Choose Package
                  </Button>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <Gallery />

      <section id="about" className="section-container bg-card/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="section-title text-center mb-8">OUR MISSION</h2>
          </AnimatedSection>
          <SlideIn direction="up" className="space-y-6 text-muted-foreground text-lg text-center mb-12">
            <p>
              jasX represents humanity's boldest venture into space tourism. We've transformed the dream of space travel into an accessible luxury experience.
            </p>
            <p>
              Located 400km above Earth in low orbit, our hotel offers unparalleled views, zero-gravity experiences, and the adventure of a lifetime. Every detail has been crafted to ensure safety, comfort, and wonder.
            </p>
          </SlideIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '400km', label: 'Above Earth' },
              { value: '24/7', label: 'Guest Services' },
              { value: '100%', label: 'Safety Record' },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="card-space">
                  <motion.div 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">GUEST EXPERIENCES</h2>
          <p className="section-description">Hear from those who've journeyed beyond</p>
        </AnimatedSection>
        <StaggerContainer className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.id}>
              <AnimatedCard className="card-space h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star size={20} fill="hsl(var(--primary))" className="text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground mb-6">"{testimonial.comment}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="section-container bg-card/30 mb-0 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="section-title text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          </AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${faq.id}`} className="border-white/10">
                    <AccordionTrigger className="text-foreground hover:text-primary text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <motion.footer 
        className="bg-card border-t border-white/5 py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <SlideIn direction="left">
              <motion.div 
                className="flex items-center gap-2 text-2xl font-bold text-primary mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Star size={32} />
                <span>jasX</span>
              </motion.div>
              <p className="text-muted-foreground">
                Luxury beyond Earth's atmosphere. Experience the cosmos like never before.
              </p>
            </SlideIn>
            <SlideIn direction="up" delay={0.1}>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {['rooms', 'pricing', 'about'].map((link) => (
                  <li key={link}>
                    <motion.button 
                      onClick={() => scrollToSection(link)} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Contact</h4>
              <p className="text-muted-foreground">reservations@jasx.space</p>
              <p className="text-muted-foreground">+1 (555) SPACE-01</p>
            </SlideIn>
          </div>
          <motion.div 
            className="border-t border-white/5 pt-8 text-center text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>&copy; 2026 jasX Space Hotel. An NSS School Project.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
