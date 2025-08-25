import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'ordering', name: 'Ordering Process', count: 8 },
    { id: 'pricing', name: 'Pricing & Quotes', count: 6 },
    { id: 'production', name: 'Production & Quality', count: 5 },
    { id: 'shipping', name: 'Shipping & Delivery', count: 5 }
  ];

  const faqs = [
    {
      category: 'ordering',
      question: 'What information do I need to provide for a quote?',
      answer: 'To provide an accurate quote, we need: product type, quantity, dimensions, material preferences, printing requirements (colors, logos, text), and your timeline. The more details you provide, the more accurate your quote will be.'
    },
    {
      category: 'ordering',
      question: 'What are your minimum order quantities?',
      answer: 'Minimum orders vary by product: Custom plastic bags start at 1,000 units, custom boxes at 500 units, and labels at 2,500 units. We can accommodate smaller quantities for sample runs or specialty projects—contact us to discuss your needs.'
    },
    {
      category: 'pricing',
      question: 'How is pricing determined?',
      answer: 'Pricing depends on several factors: quantity (higher volumes = lower per-unit costs), materials, size and complexity, number of print colors, finishing options, and timeline. Rush orders may include expedite fees.'
    },
    {
      category: 'pricing',
      question: 'Do you offer volume discounts?',
      answer: 'Yes! We offer tiered pricing with significant savings at higher quantities. Typical break points are at 5,000, 10,000, 25,000, and 50,000+ units. Annual contracts and repeat orders also qualify for special pricing.'
    },
    {
      category: 'production',
      question: 'What are your standard lead times?',
      answer: 'Standard production times: Custom plastic bags: 10-12 business days, Custom boxes: 12-15 business days, Custom labels: 7-10 business days. Rush production is available for urgent orders—contact us for expedited options.'
    },
    {
      category: 'production',
      question: 'What quality certifications do you have?',
      answer: 'We maintain ISO 9001:2015 certification for quality management, FDA compliance for food-contact materials, FSC certification for sustainable sourcing, and SQF certification for food safety. All products undergo rigorous quality testing.'
    },
    {
      category: 'shipping',
      question: 'What are your shipping options?',
      answer: 'We offer multiple shipping options: Ground shipping (3-7 business days), Expedited shipping (2-3 business days), Overnight delivery available, Freight shipping for large orders. All orders include tracking information.'
    },
    {
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship worldwide! International shipping costs and delivery times vary by destination. We handle all export documentation and can ship via air or sea freight depending on your timeline and budget requirements.'
    },
    {
      category: 'ordering',
      question: 'Can I get samples before placing a large order?',
      answer: 'Absolutely! We recommend ordering samples to evaluate quality and ensure the product meets your expectations. Sample costs are typically $25-100 depending on complexity, and this cost is credited toward your production order.'
    },
    {
      category: 'pricing',
      question: 'What payment terms do you offer?',
      answer: 'For new customers: 50% deposit required, balance due before shipping. Established customers can qualify for Net 30 terms. We accept wire transfers, ACH, checks, and major credit cards. International customers may require letters of credit.'
    },
    {
      category: 'production',
      question: 'What file formats do you accept for artwork?',
      answer: 'We prefer vector files (AI, EPS, PDF) for best quality. We also accept high-resolution raster files (JPG, PNG, TIFF) at 300 DPI minimum. Our design team can help prepare your artwork or create new designs from your concepts.'
    },
    {
      category: 'ordering',
      question: 'Can you match specific colors?',
      answer: 'Yes! We can match PMS colors, provide color samples for approval, and ensure color consistency across your order. For critical color matching, we recommend ordering a color proof before full production begins.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Find quick answers to common questions about our custom packaging services, ordering process, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No questions found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our packaging experts are here to help. Get in touch and we'll provide personalized answers for your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our experts</p>
              <Button size="sm" asChild>
                <a href="tel:+1-800-555-0123">1-800-555-0123</a>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed answers</p>
              <Button size="sm" variant="outline" asChild>
                <Link to="/contact">Send Message</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">Q</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-gray-600 mb-4">Project-specific answers</p>
              <Button size="sm" variant="secondary" asChild>
                <Link to="/quote">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Help Topics
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Artwork Guidelines', desc: 'File formats, resolution, and design specs', link: '/artwork-guidelines' },
              { title: 'Shipping Policy', desc: 'Delivery options and tracking information', link: '/shipping' },
              { title: 'Sample Requests', desc: 'How to order samples and approval process', link: '/quote' },
              { title: 'Custom Capabilities', desc: 'Manufacturing options and specialties', link: '/capabilities' }
            ].map((topic, index) => (
              <Link
                key={index}
                to={topic.link}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;