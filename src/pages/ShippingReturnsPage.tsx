import React from 'react';
import { Truck, Shield, Clock, MapPin, Package, CheckCircle, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ShippingReturnsPage = () => {
  const shippingOptions = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      name: 'Standard Ground',
      time: '5-7 business days',
      cost: 'Free on orders $500+',
      description: 'Most economical option for non-urgent orders'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      name: 'Expedited',
      time: '3-5 business days',
      cost: 'Starting at $75',
      description: 'Faster delivery for time-sensitive orders'
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      name: 'Express',
      time: '1-2 business days',
      cost: 'Starting at $150',
      description: 'Premium service for urgent deliveries'
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      name: 'Freight',
      time: '3-10 business days',
      cost: 'Quote based',
      description: 'For large orders requiring freight shipping'
    }
  ];

  const regions = [
    {
      region: 'Continental US',
      coverage: '48 contiguous states',
      standardTime: '5-7 business days',
      expedited: 'Available'
    },
    {
      region: 'Alaska & Hawaii',
      coverage: 'All locations',
      standardTime: '7-10 business days',
      expedited: 'Limited availability'
    },
    {
      region: 'Canada',
      coverage: 'Major cities and provinces',
      standardTime: '7-12 business days',
      expedited: 'Available to major centers'
    },
    {
      region: 'International',
      coverage: 'Worldwide shipping available',
      standardTime: '10-21 business days',
      expedited: 'Select countries only'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Shipping & Returns
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Fast, reliable shipping options and a straightforward returns policy to ensure your complete satisfaction with every order.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Free shipping on orders $500+</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Full order tracking</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Damage protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shipping Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the shipping method that best fits your timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-medium text-blue-600">{option.time}</div>
                  <div className="text-sm text-gray-600">{option.cost}</div>
                </div>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shipping Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ship to locations worldwide with reliable delivery times.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Region</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standard Delivery</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expedited Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {regions.map((region, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{region.region}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{region.coverage}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{region.standardTime}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{region.expedited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Shipping Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined shipping process ensures your order arrives safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Order Completion', desc: 'Production completed and quality checked', icon: <Package className="h-8 w-8 text-white" /> },
              { step: '2', title: 'Packaging', desc: 'Carefully packed for safe transport', icon: <Shield className="h-8 w-8 text-white" /> },
              { step: '3', title: 'Shipment', desc: 'Handed off to carrier with tracking', icon: <Truck className="h-8 w-8 text-white" /> },
              { step: '4', title: 'Delivery', desc: 'Delivered to your specified location', icon: <MapPin className="h-8 w-8 text-white" /> }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shipping Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Costs calculated based on weight, dimensions, and destination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Domestic Shipping</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Orders under $500</span>
                  <span className="text-blue-600 font-medium">$25 - $150</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Orders $500 - $2,500</span>
                  <span className="text-green-600 font-medium">FREE Standard</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Orders $2,500+</span>
                  <span className="text-green-600 font-medium">FREE Expedited</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Freight orders</span>
                  <span className="text-blue-600 font-medium">Quote based</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">International Shipping</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Canada</span>
                  <span className="text-blue-600 font-medium">$50 - $300</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Europe</span>
                  <span className="text-blue-600 font-medium">$100 - $500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Asia Pacific</span>
                  <span className="text-blue-600 font-medium">$150 - $600</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Other regions</span>
                  <span className="text-blue-600 font-medium">Custom quote</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Returns & Refunds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our quality. If you're not completely satisfied, we'll make it right.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Return Eligibility</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Manufacturing Defects</h4>
                    <p className="text-sm text-gray-600">Full refund or replacement for quality issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Shipping Damage</h4>
                    <p className="text-sm text-gray-600">Free replacement for items damaged in transit</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Wrong Specifications</h4>
                    <p className="text-sm text-gray-600">Our error in production specifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Custom Orders</h4>
                    <p className="text-sm text-gray-600">Returns limited to manufacturing defects only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Return Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Contact Us</h4>
                    <p className="text-sm text-gray-600">Call or email within 30 days of delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Return Authorization</h4>
                    <p className="text-sm text-gray-600">We'll provide RMA number and instructions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Ship Items</h4>
                    <p className="text-sm text-gray-600">Pack items securely with RMA number</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Processing</h4>
                    <p className="text-sm text-gray-600">Refund or replacement within 5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking & Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Order Tracking & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about your order status and get help when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-6">
                Get detailed tracking information and delivery updates via email and SMS.
              </p>
              <Button variant="outline" size="sm">
                Track Order
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Damage Protection</h3>
              <p className="text-gray-600 mb-6">
                All shipments are insured against damage and loss during transit.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Report Damage</Link>
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is available around the clock for shipping questions.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+1-800-555-0123">Call Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get started with a free quote and see how our reliable shipping and quality guarantee can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                Questions? Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingReturnsPage;