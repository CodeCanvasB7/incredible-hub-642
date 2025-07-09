import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, BrainCircuit, Code2, GraduationCap, Layers, Shield, Sparkles, Zap, Star, Users, Award, CheckCircle, Play, Menu, X, ChevronDown, Globe, Clock, Target } from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, modules: 0, rating: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate stats on mount
  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        setter(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      animateValue(0, 50000, 2000, (val) => setAnimatedStats(prev => ({ ...prev, students: val })));
      animateValue(0, 100, 2000, (val) => setAnimatedStats(prev => ({ ...prev, modules: val })));
      animateValue(0, 4.9, 2000, (val) => setAnimatedStats(prev => ({ ...prev, rating: val })));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "The system design course transformed my understanding of scalable architectures. Got promoted within 6 months!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      content: "MERN stack projects were incredibly practical. Built my portfolio and landed my dream job at a startup.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Senior Backend Engineer",
      content: "DSA bootcamp helped me crack interviews at top tech companies. The practice problems were spot-on.",
      avatar: "PP",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Code2,
      title: "Interactive Coding Environment",
      description: "Write, test, and debug code in real-time with our cloud-based IDE featuring intelligent autocomplete and instant feedback.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Learning Path",
      description: "Personalized curriculum that adapts to your learning style and pace, powered by advanced machine learning algorithms.",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Live Mentorship Sessions",
      description: "Weekly 1-on-1 sessions with industry experts from FAANG companies to accelerate your career growth.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Career Placement Support",
      description: "Dedicated career services including resume review, mock interviews, and direct connections with hiring partners.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Global Community Access",
      description: "Join a vibrant community of 50k+ developers worldwide for networking, collaboration, and peer learning.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Award,
      title: "Industry-Recognized Certificates",
      description: "Earn verifiable certificates and digital badges that are recognized by top tech companies and recruiters.",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const courses = [
    {
      icon: BookOpen,
      title: "Advanced DSA Mastery",
      description: "Complete data structures and algorithms program with 200+ coding challenges and system design integration.",
      duration: "12 weeks",
      students: "15,420",
      rating: 4.9,
      price: "$299",
      badge: "Most Popular"
    },
    {
      icon: Layers,
      title: "Full-Stack MERN Pro",
      description: "Build 5 production-ready applications with modern React, Node.js, and cloud deployment strategies.",
      duration: "16 weeks",
      students: "12,180",
      rating: 4.8,
      price: "$399",
      badge: "New"
    },
    {
      icon: Shield,
      title: "System Design Architecture",
      description: "Design scalable systems like Netflix, Uber, and WhatsApp with hands-on projects and case studies.",
      duration: "10 weeks",
      students: "8,950",
      rating: 4.9,
      price: "$349",
      badge: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DevCourseHub
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-indigo-600 transition font-medium">Courses</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition font-medium">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition font-medium">Reviews</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition font-medium">Pricing</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition font-medium">
              Start Free Trial
            </button>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#courses" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Courses</a>
              <a href="#features" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Features</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Reviews</a>
              <a href="#pricing" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Pricing</a>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200 mb-8">
            <Zap className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-medium text-sm">New: AI-Powered Learning Paths Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Developer Career</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master cutting-edge technologies with hands-on projects, expert mentorship, and AI-powered learning paths designed for the modern developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg">
              Watch Demo
            </button>
          </div>

          {/* Enhanced Animated Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {animatedStats.students > 1000 ? `${Math.floor(animatedStats.students / 1000)}k+` : animatedStats.students}
              </div>
              <div className="text-gray-600 font-medium">Active Learners</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {animatedStats.modules}+
              </div>
              <div className="text-gray-600 font-medium">Expert Modules</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {animatedStats.rating.toFixed(1)}
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose DevCourseHub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of coding education with our comprehensive platform designed for serious developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Course Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully crafted courses that take you from beginner to industry-ready professional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                {course.badge && (
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    {course.badge}
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl mx-auto mb-6">
                    <course.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">{course.title}</h4>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Students</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rating</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-indigo-600">{course.price}</span>
                    <span className="text-gray-500 line-through">$599</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:shadow-xl">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of developers who've transformed their careers</p>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl max-w-2xl mx-auto border border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonials[activeTestimonial].content}"</p>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Level Up Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 50,000+ developers who've already transformed their careers with our proven learning system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
          <p className="text-sm mt-6 opacity-75">No credit card required • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DevCourseHub</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering developers worldwide with cutting-edge education and career support.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">DSA Bootcamp</a></li>
                <li><a href="#" className="hover:text-white transition">MERN Stack</a></li>
                <li><a href="#" className="hover:text-white transition">System Design</a></li>
                <li><a href="#" className="hover:text-white transition">DevOps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Career Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 DevCourseHub. All rights reserved. Made with ❤️ for developers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;