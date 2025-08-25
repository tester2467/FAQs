import React from 'react';
import { Users, Award, Globe, Shield, Clock, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500K+', label: 'Orders Delivered' },
    { number: '5K+', label: 'Happy Clients' },
    { number: '98%', label: 'On-Time Delivery' }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality First',
      description: 'Every product meets our rigorous quality standards with ISO certification and continuous improvement.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Speed & Reliability',
      description: 'Fast turnaround times without compromising quality. We deliver on our promises, every time.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Customer Success',
      description: 'Your success is our priority. We go above and beyond to ensure you achieve your packaging goals.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable packaging solutions for a better future.'
    }
  ];

  const team = [
    {
      name: 'Michael Rodriguez',
      role: 'CEO & Founder',
      bio: '25+ years in packaging industry, former VP at Fortune 500 packaging company.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'VP Operations',
      bio: 'Manufacturing expert with 15 years optimizing production and quality control.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'David Park',
      role: 'VP Sales',
      bio: 'Customer relationship specialist focused on building long-term partnerships.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About PackagingPro
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              For over 25 years, we've been the trusted partner for businesses seeking custom packaging solutions that protect products, elevate brands, and drive growth. Our commitment to quality, innovation, and customer success has made us a leader in the packaging industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/quote">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  PackagingPro was founded in 1998 with a simple mission: to help businesses succeed through exceptional packaging solutions. What started as a small family operation has grown into a trusted industry leader, serving thousands of companies across North America.
                </p>
                <p>
                  Our founder, Michael Rodriguez, recognized that businesses needed more than just packaging—they needed a partner who understood their unique challenges and could deliver solutions that truly made a difference. This vision continues to drive everything we do today.
                </p>
                <p>
                  From our state-of-the-art manufacturing facility to our dedicated customer success team, every aspect of our operation is designed to exceed expectations and deliver results that help your business thrive.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="PackagingPro facility" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-sm opacity-90">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders dedicated to your success and the future of packaging innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is validated by industry-leading certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'FDA Compliant', desc: 'Food Contact Safe' },
              { name: 'FSC Certified', desc: 'Sustainable Sourcing' },
              { name: 'SQF Certified', desc: 'Food Safety Quality' }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the PackagingPro difference. Let's discuss how we can help elevate your packaging and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get Your Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                Call 1-800-555-0123
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;