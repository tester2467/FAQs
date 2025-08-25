import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Clock, Award, Shield, Truck, CheckCircle, ArrowRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';

const CapabilitiesPage = () => {
  const capabilities = [
    {
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art equipment for precision packaging production',
      features: ['8-color flexographic printing', 'Hot stamping & embossing', 'Die-cutting & converting', 'Automated quality control']
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Premium Materials',
      description: 'Wide selection of materials for any application',
      features: ['Food-grade plastics', 'Recycled & biodegradable options', 'Specialty films & laminates', 'Custom material development']
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
      features: ['ISO 9001:2015 certified', 'FDA compliance testing', 'Color matching guarantee', 'Pre-production samples']
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: 'Logistics Excellence',
      description: 'Efficient production and reliable delivery',
      features: ['Rush order capability', 'Global shipping network', 'Inventory management', 'Just-in-time delivery']
    }
  ];

  const printMethods = [
    {
      method: 'Flexographic Printing',
      description: 'High-quality, cost-effective printing for large runs',
      colors: 'Up to 8 colors',
      minOrder: '1,000 units',
      leadTime: '10-12 days',
      bestFor: 'Large quantities, solid colors'
    },
    {
      method: 'Digital Printing',
      description: 'Perfect for short runs and complex designs',
      colors: 'Full color (CMYK)',
      minOrder: '500 units',
      leadTime: '7-10 days',
      bestFor: 'Short runs, photo quality'
    },
    {
      method: 'Hot Stamping',
      description: 'Premium metallic and specialty foil effects',
      colors: 'Metallic foils',
      minOrder: '2,500 units',
      leadTime: '12-15 days',
      bestFor: 'Premium branding, luxury look'
    },
    {
      method: 'Screen Printing',
      description: 'Durable printing for specialty applications',
      colors: 'Up to 4 colors',
      minOrder: '1,500 units',
      leadTime: '10-14 days',
      bestFor: 'Specialty inks, thick deposits'
    }
  ];

  const materials = [
    {
      category: 'Plastic Films',
      options: ['LDPE (Low-density polyethylene)', 'HDPE (High-density polyethylene)', 'PP (Polypropylene)', 'PET (Polyethylene terephthalate)', 'Biodegradable films'],
      applications: 'Bags, pouches, wraps, liners'
    },
    {
      category: 'Paper & Cardboard',
      options: ['Kraft paper', 'Coated cardboard', 'Corrugated cardboard', 'Recycled content options', 'FSC certified materials'],
      applications: 'Boxes, bags, inserts, dividers'
    },
    {
      category: 'Specialty Materials',
      options: ['Anti-static films', 'Barrier films', 'Metalized films', 'Tamper-evident materials', 'Food-grade materials'],
      applications: 'Electronics, food, pharmaceuticals'
    },
    {
      category: 'Sustainable Options',
      options: ['Recycled plastics', 'Biodegradable films', 'Compostable materials', 'Plant-based plastics', 'Reduced material thickness'],
      applications: 'Eco-conscious brands, food service'
    }
  ];

  const specifications = [
    {
      product: 'Custom Plastic Bags',
      minOrder: '1,000 units',
      maxSize: '24" x 36"',
      thickness: '1-10 mil',
      leadTime: '10-12 business days',
      printColors: 'Up to 8 colors'
    },
    {
      product: 'Custom Boxes',
      minOrder: '500 units',
      maxSize: '36" x 24" x 18"',
      thickness: '32-275 ECT',
      leadTime: '12-15 business days',
      printColors: 'Full color + spot colors'
    },
    {
      product: 'Custom Labels',
      minOrder: '2,500 units',
      maxSize: '12" x 18"',
      thickness: '2-5 mil + adhesive',
      leadTime: '7-10 business days',
      printColors: 'Full color digital'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'FDA Compliant', description: 'Food Contact Materials' },
    { name: 'FSC Certified', description: 'Sustainable Forest Management' },
    { name: 'SQF Certified', description: 'Safe Quality Food Program' },
    { name: 'BRC Certified', description: 'Global Food Safety Standard' },
    { name: 'AIB International', description: 'Food Safety Inspection' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Custom Manufacturing Capabilities
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Advanced manufacturing technologies, premium materials, and rigorous quality control to bring your custom packaging vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/quote">Request Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                  Speak with Engineer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we provide comprehensive manufacturing solutions for all your custom packaging needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Printing Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from multiple printing technologies to achieve the perfect look for your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{method.method}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Colors:</span>
                    <p className="text-gray-600">{method.colors}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Min Order:</span>
                    <p className="text-gray-600">{method.minOrder}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Lead Time:</span>
                    <p className="text-gray-600">{method.leadTime}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Best For:</span>
                    <p className="text-gray-600">{method.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Available Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with a wide range of materials to meet your specific requirements and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{material.category}</h3>
                <ul className="space-y-2 mb-6">
                  {material.options.map((option, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-900">Typical Applications: </span>
                  <span className="text-sm text-gray-600">{material.applications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for our most popular custom packaging products.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Min Order</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Max Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Lead Time</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Print Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.product}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.minOrder}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.maxSize}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.thickness}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.leadTime}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.printColors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated by industry-leading certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final delivery, here's how we bring your custom packaging to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Quote & Design', time: '1-2 days', desc: 'Specifications review and design development' },
              { step: '2', title: 'Sample Production', time: '3-5 days', desc: 'Physical samples for approval' },
              { step: '3', title: 'Production Setup', time: '2-3 days', desc: 'Equipment setup and pre-production checks' },
              { step: '4', title: 'Manufacturing', time: '7-12 days', desc: 'Full production run with quality control' },
              { step: '5', title: 'Quality & Ship', time: '1-2 days', desc: 'Final inspection and shipping preparation' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{phase.time}</p>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Custom Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our manufacturing experts are ready to discuss your specific requirements and provide a detailed quote for your custom packaging project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Request Detailed Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                Call Manufacturing Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;