import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Last updated: January 1, 2025
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Please read these terms carefully before using our services or placing orders with PackagingPro.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Agreement</h3>
              <p className="text-sm text-gray-600">By using our services, you agree to these terms</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Protection</h3>
              <p className="text-sm text-gray-600">Rights and responsibilities for all parties</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-sm text-gray-600">Standards for products and services</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Important</h3>
              <p className="text-sm text-gray-600">Legal obligations and limitations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-8">
              By accessing and using the PackagingPro website, services, or placing orders with us, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Company Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2"><strong>PackagingPro LLC</strong></p>
              <p className="text-gray-700 mb-2">123 Industrial Boulevard</p>
              <p className="text-gray-700 mb-2">Manufacturing City, ST 12345</p>
              <p className="text-gray-700 mb-2">Phone: 1-800-555-0123</p>
              <p className="text-gray-700">Email: legal@packagingpro.com</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Services</h2>
            <p className="text-gray-700 mb-6">
              PackagingPro provides custom packaging manufacturing services including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• Design and manufacturing of custom plastic bags, boxes, and labels</li>
              <li>• Packaging consultation and specification development</li>
              <li>• Quality control and testing services</li>
              <li>• Shipping and logistics coordination</li>
              <li>• Customer support and account management</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Orders and Quotations</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quote Requests</h3>
            <p className="text-gray-700 mb-6">
              Quotes provided are estimates based on information provided and are valid for 30 days unless otherwise specified. Final pricing may vary based on exact specifications and current material costs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Acceptance</h3>
            <p className="text-gray-700 mb-6">
              Orders are subject to acceptance by PackagingPro. We reserve the right to refuse or cancel orders for any reason, including but not limited to product availability, pricing errors, or credit approval.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimum Orders</h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• Custom plastic bags: 1,000 units minimum</li>
              <li>• Custom boxes: 500 units minimum</li>
              <li>• Custom labels: 2,500 units minimum</li>
              <li>• Minimum order values may apply for certain products</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
            <p className="text-gray-700 mb-6">
              Prices are subject to change without notice. Confirmed orders will be honored at the agreed price unless changes are requested by the customer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• New customers: 50% deposit required, balance due before shipping</li>
              <li>• Established customers: Net 30 terms available with approved credit</li>
              <li>• Late payments subject to 1.5% monthly service charge</li>
              <li>• International orders may require letters of credit</li>
            </ul>

            <p className="text-gray-700 mb-8">
              Accepted payment methods include wire transfers, ACH, company checks, and major credit cards. All payments are processed securely through third-party payment providers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Production and Delivery</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Times</h3>
            <p className="text-gray-700 mb-6">
              Standard production lead times are estimates and begin after receipt of approved artwork and deposit. Rush orders may be available for additional fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery</h3>
            <p className="text-gray-700 mb-8">
              Risk of loss transfers to buyer upon delivery to carrier. Shipping dates are estimates and PackagingPro is not liable for delays beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Artwork and Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Responsibilities</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Customer warrants ownership or right to use all artwork and content</li>
              <li>• Customer is responsible for accuracy of all specifications and content</li>
              <li>• Customer must approve proofs before production begins</li>
              <li>• Files must meet our technical specifications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property Protection</h3>
            <p className="text-gray-700 mb-8">
              We will not reproduce customer artwork or proprietary information without authorization. Customer artwork and specifications are treated as confidential information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Quality and Returns</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
            <p className="text-gray-700 mb-6">
              All products are manufactured to industry standards and our internal quality specifications. We maintain ISO 9001:2015 certification and conduct regular quality audits.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Returns and Defects</h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• Manufacturing defects must be reported within 30 days of delivery</li>
              <li>• Returns require prior authorization (RMA number)</li>
              <li>• Customer approval of proofs limits return eligibility</li>
              <li>• Custom orders are generally not returnable except for manufacturing defects</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Legal Notice</h3>
                  <p className="text-yellow-800 text-sm mb-4">
                    PackagingPro's total liability for any claim arising from our services shall not exceed the purchase price paid for the specific products or services giving rise to the claim.
                  </p>
                  <p className="text-yellow-800 text-sm">
                    We are not liable for indirect, incidental, special, or consequential damages, including lost profits, business interruption, or loss of data.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Force Majeure</h2>
            <p className="text-gray-700 mb-8">
              We are not liable for delays or failures to perform due to circumstances beyond our reasonable control, including natural disasters, labor disputes, supply chain disruptions, government actions, or other force majeure events.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-8">
              Our collection and use of personal information is governed by our Privacy Policy, which is incorporated by reference into these Terms. By using our services, you consent to our privacy practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Governing Law</h2>
            <p className="text-gray-700 mb-8">
              These Terms are governed by the laws of [State] without regard to conflict of law principles. Any disputes will be resolved in the courts of [State/County], and both parties consent to the jurisdiction of such courts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Modifications</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right to modify these Terms at any time. Changes will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Severability</h2>
            <p className="text-gray-700 mb-8">
              If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For questions about these Terms & Conditions, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Legal Department</strong></p>
              <p className="text-gray-700 mb-2">PackagingPro LLC</p>
              <p className="text-gray-700 mb-2">123 Industrial Boulevard</p>
              <p className="text-gray-700 mb-2">Manufacturing City, ST 12345</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@packagingpro.com" className="text-blue-600 hover:text-blue-700">legal@packagingpro.com</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+1-800-555-0123" className="text-blue-600 hover:text-blue-700">1-800-555-0123</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;