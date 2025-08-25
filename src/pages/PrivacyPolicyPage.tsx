import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Last updated: January 1, 2025
            </p>
            <p className="text-lg text-gray-600 mt-4">
              PackagingPro is committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm text-gray-600">We use industry-standard security measures</p>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Clear information about data collection</p>
            </div>
            <div className="text-center">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Limited Access</h3>
              <p className="text-sm text-gray-600">Only authorized personnel access your data</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-sm text-gray-600">Control over your personal information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <p className="text-gray-700 mb-6">
              We collect personal information you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Name, email address, phone number, and company information</li>
              <li>• Billing and shipping addresses</li>
              <li>• Payment information (processed securely through third-party providers)</li>
              <li>• Order history and communication preferences</li>
              <li>• Files and documents you upload for custom orders</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• IP address, browser type, and device information</li>
              <li>• Pages visited, time spent on site, and referral sources</li>
              <li>• Cookies and similar tracking technologies</li>
              <li>• Usage patterns and preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• Process orders, payments, and provide customer service</li>
              <li>• Create and manage your account</li>
              <li>• Communicate about orders, updates, and promotional offers</li>
              <li>• Improve our website, products, and services</li>
              <li>• Comply with legal obligations and protect against fraud</li>
              <li>• Personalize your experience and provide relevant content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
            
            <p className="text-gray-700 mb-6">
              We do not sell, rent, or trade your personal information. We may share information in the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• <strong>Service Providers:</strong> Third parties who help us operate our business (payment processors, shipping companies, etc.)</li>
              <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li>• <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sales of assets</li>
              <li>• <strong>With Consent:</strong> When you explicitly agree to share information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>• SSL encryption for data transmission</li>
              <li>• Secure servers and databases with restricted access</li>
              <li>• Regular security audits and updates</li>
              <li>• Employee training on data protection</li>
              <li>• Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
            
            <p className="text-gray-700 mb-6">
              You have several rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Access:</strong> Request information about the data we hold about you</li>
              <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
              <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
              <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>

            <p className="text-gray-700 mb-8">
              To exercise these rights, contact us at <a href="mailto:privacy@packagingpro.com" className="text-blue-600 hover:text-blue-700">privacy@packagingpro.com</a> or call 1-800-555-0123.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
            
            <p className="text-gray-700 mb-6">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <p className="text-gray-700 mb-8">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may limit website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
            
            <p className="text-gray-700 mb-8">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Specific retention periods vary based on the type of information and business requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
            
            <p className="text-gray-700 mb-8">
              If you are located outside the United States, please note that we may transfer your information to and process it in the United States. We implement appropriate safeguards to protect your information during international transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            
            <p className="text-gray-700 mb-8">
              Our services are designed for businesses and are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Third-Party Links</h2>
            
            <p className="text-gray-700 mb-8">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Updates to This Policy</h2>
            
            <p className="text-gray-700 mb-8">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website and indicating the revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
            
            <p className="text-gray-700 mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2"><strong>PackagingPro Privacy Officer</strong></p>
              <p className="text-gray-700 mb-2">123 Industrial Boulevard</p>
              <p className="text-gray-700 mb-2">Manufacturing City, ST 12345</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@packagingpro.com" className="text-blue-600 hover:text-blue-700">privacy@packagingpro.com</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+1-800-555-0123" className="text-blue-600 hover:text-blue-700">1-800-555-0123</a></p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">California Privacy Rights</h3>
              <p className="text-blue-800 text-sm">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). This includes the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information. For more information or to exercise your rights, contact us using the information above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;