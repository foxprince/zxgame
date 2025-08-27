'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 fixed w-full bg-black/50 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">ZX</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ZX Game
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0">
              Beijing Zhenxiang Game Technology Co., Ltd.
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              ZX Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the Future of Mini Game Development & Publishing
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              We create innovative, engaging mini-games and provide comprehensive publishing solutions for the next generation of gaming experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg">
                Explore Our Games
              </Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Animated Tech Elements */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-lg font-semibold text-cyan-400">Development</h3>
              <p className="text-gray-400 text-sm">Cutting-edge game creation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-400">Publishing</h3>
              <p className="text-gray-400 text-sm">Global distribution network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Innovation</h3>
              <p className="text-gray-400 text-sm">Future-ready technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About ZX Game
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beijing Zhenxiang Game Technology Co., Ltd. is a leading innovator in the mini-game development and publishing industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                At ZX Game, we're passionate about creating engaging, innovative mini-games that captivate players worldwide. Our mission is to push the boundaries of what's possible in casual gaming while maintaining the highest standards of quality and user experience.
              </p>
              <p className="text-gray-300 mb-6">
                Founded in Beijing, we combine cutting-edge technology with creative excellence to deliver games that not only entertain but also inspire. Our team of talented developers, designers, and strategists work tirelessly to bring unique gaming experiences to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500">Innovation</Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500">Quality</Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500">Creativity</Badge>
                <Badge className="bg-pink-500/20 text-pink-400 border-pink-500">Excellence</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-black/50 border-gray-800 hover:border-cyan-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-cyan-400">50+</CardTitle>
                  <CardDescription>Games Developed</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-black/50 border-gray-800 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-purple-400">10M+</CardTitle>
                  <CardDescription>Active Players</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-black/50 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-400">5+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-black/50 border-gray-800 hover:border-pink-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-pink-400">20+</CardTitle>
                  <CardDescription>Team Members</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive game development and publishing solutions tailored for success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">🎮</span>
                </div>
                <CardTitle className="text-cyan-400">Game Development</CardTitle>
                <CardDescription className="text-gray-300">
                  Full-cycle game development services from concept to launch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Concept & Design</li>
                  <li>• Prototyping & Development</li>
                  <li>• Testing & Quality Assurance</li>
                  <li>• Optimization & Performance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-gray-800 hover:border-purple-500 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">🚀</span>
                </div>
                <CardTitle className="text-purple-400">Game Publishing</CardTitle>
                <CardDescription className="text-gray-300">
                  Strategic publishing and global distribution solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li>• Market Analysis</li>
                  <li>• Distribution Strategy</li>
                  <li>• Marketing & Promotion</li>
                  <li>• Revenue Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to create something amazing together?
            </p>
          </div>
          
          <Card className="bg-black/50 border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-cyan-400">Contact Information</CardTitle>
              <CardDescription className="text-gray-300">
                Reach out to us for partnerships, investments, or media inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cyan-400">Company</h3>
                  <p className="text-gray-300">Beijing Zhenxiang Game Technology Co., Ltd.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-400">Website</h3>
                  <p className="text-gray-300">zxgaming.xyz</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400">Email</h3>
                  <p className="text-gray-300">contact@zxgaming.xyz</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">ZX</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ZX Game
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Beijing Zhenxiang Game Technology Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}