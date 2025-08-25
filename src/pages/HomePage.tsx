import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Users, Truck, CheckCircle, Star, Play } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Guaranteed',
      description: 'ISO certified manufacturing with rigorous quality control at every step.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Fast Turnaround',
      description: 'Rush orders available. Standard delivery in 10-15 business days.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Industry Expert',
      description: '25+ years of packaging experience serving Fortune 500 companies.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Dedicated Support',
      description: 'Personal account managers and 24/7 customer service.'
    }
  ];

  const process = [
    { step: '1', title: 'Share Your Vision', description: 'Tell us about your packaging needs and specifications' },
    { step: '2', title: 'Get Your Quote', description: 'Receive a detailed quote within 24 hours' },
    { step: '3', title: 'Approve & Order', description: 'Review designs, approve, and place your order' },
    { step: '4', title: 'Fast Delivery', description: 'Receive your custom packaging on time, every time' }
  ];

  const testimonials = [
    {
      quote: "PackagingPro transformed our brand with stunning custom bags. Quality exceeded expectations!",
      author: "Sarah Johnson",
      company: "Retail Boutique Co.",
      rating: 5
    },
    {
      quote: "Fast turnaround, competitive pricing, and exceptional customer service. Highly recommended!",
      author: "Michael Chen",
      company: "Food Service Corp",
      rating: 5
    },
    {
      quote: "Their team guided us through the entire process. The final products were perfect for our launch.",
      author: "Emily Rodriguez",
      company: "Tech Startup Inc.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Custom Packaging
                  <span className="block text-blue-200">That Sells</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Professional packaging solutions that protect your products and elevate your brand. Fast quotes, premium quality, competitive pricing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/quote">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                    Call 1-800-555-0123
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm text-blue-200">Orders Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24hrs</div>
                  <div className="text-sm text-blue-200">Quote Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-blue-200">On-Time Delivery</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Popular Products</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Custom Plastic Bags', desc: 'From $0.15/unit • 1000 min', popular: true },
                      { name: 'Custom Boxes', desc: 'From $0.45/unit • 500 min', popular: false },
                      { name: 'Custom Labels', desc: 'From $0.08/unit • 2500 min', popular: false }
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{product.name}</span>
                            {product.popular && (
                              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                            )}
                          </div>
                          <div className="text-sm text-blue-200">{product.desc}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PackagingPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced manufacturing capabilities with personalized service to deliver exceptional packaging solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Process, Amazing Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we make custom packaging easy and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/quote">Start Your Project Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Custom Packaging Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From retail bags to industrial packaging, we create solutions that fit your exact needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Plastic Bags',
                description: 'Retail bags, shopping bags, promotional bags with your branding.',
                features: ['Custom printing', 'Multiple sizes', 'Eco-friendly options'],
                image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400',
                link: '/custom-plastic-bags'
              },
              {
                title: 'Custom Boxes',
                description: 'Shipping boxes, display boxes, gift boxes tailored to your brand.',
                features: ['Custom sizes', 'Full-color printing', 'Various materials'],
                image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
                link: '/custom-boxes'
              },
              {
                title: 'Custom Labels',
                description: 'Product labels, shipping labels, promotional stickers.',
                features: ['Waterproof options', 'Custom shapes', 'Premium finishes'],
                image: 'https://images.pexels.com/photos/6995266/pexels-photo-6995266.jpeg?auto=compress&cs=tinysrgb&w=400',
                link: '/custom-labels'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={product.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what businesses like yours are saying about our packaging solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who trust PackagingPro for their custom packaging needs. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                Speak with Expert
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;