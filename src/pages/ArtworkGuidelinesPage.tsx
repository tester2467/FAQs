import React from 'react';
import { Download, CheckCircle, AlertCircle, FileText, Image, Palette } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ArtworkGuidelinesPage = () => {
  const fileFormats = [
    {
      format: 'Vector Files (Preferred)',
      extensions: 'AI, EPS, PDF',
      description: 'Best for logos, text, and graphics that need to scale without quality loss',
      icon: <FileText className="h-6 w-6 text-green-600" />,
      recommended: true
    },
    {
      format: 'High-Resolution Raster',
      extensions: 'PSD, TIFF, PNG',
      description: 'For complex designs and photos. Must be 300 DPI minimum at final size',
      icon: <Image className="h-6 w-6 text-blue-600" />,
      recommended: false
    },
    {
      format: 'Standard Images',
      extensions: 'JPG, PNG (RGB)',
      description: 'Acceptable for simple designs. 300 DPI minimum required',
      icon: <Image className="h-6 w-6 text-orange-600" />,
      recommended: false
    }
  ];

  const colorSpecs = [
    {
      type: 'Print Production',
      colorMode: 'CMYK',
      description: 'Convert all colors to CMYK for accurate print reproduction',
      note: 'RGB colors may shift when converted to CMYK'
    },
    {
      type: 'Spot Colors',
      colorMode: 'PMS (Pantone)',
      description: 'Use PMS colors for brand consistency and special effects',
      note: 'Provide PMS color numbers for exact matching'
    },
    {
      type: 'Special Effects',
      colorMode: 'Metallic/Foil',
      description: 'Hot stamping and foil effects for premium look',
      note: 'Requires separate artwork layer and additional setup'
    }
  ];

  const productSpecs = [
    {
      product: 'Custom Plastic Bags',
      bleed: '0.125" (3mm)',
      safeArea: '0.25" (6mm) from edges',
      maxSize: '24" x 36"',
      notes: 'Handle and gusset areas cannot have printing'
    },
    {
      product: 'Custom Boxes',
      bleed: '0.125" (3mm)',
      safeArea: '0.375" (9mm) from edges',
      maxSize: '36" x 24" flat',
      notes: 'Fold lines must be clearly marked'
    },
    {
      product: 'Custom Labels',
      bleed: '0.0625" (1.5mm)',
      safeArea: '0.125" (3mm) from edges',
      maxSize: '12" x 18"',
      notes: 'Die-cut shapes require separate cut line'
    }
  ];

  const commonIssues = [
    {
      issue: 'Low Resolution Images',
      problem: 'Pixelated or blurry print quality',
      solution: 'Use 300 DPI minimum at final print size'
    },
    {
      issue: 'RGB Color Mode',
      problem: 'Colors appear different when printed',
      solution: 'Convert to CMYK or specify PMS colors'
    },
    {
      issue: 'Missing Fonts',
      problem: 'Text displays incorrectly or substitutes',
      solution: 'Outline fonts or include font files'
    },
    {
      issue: 'No Bleed Area',
      problem: 'White edges on finished product',
      solution: 'Extend artwork beyond trim line'
    },
    {
      issue: 'Text Too Close to Edge',
      problem: 'Important text may be cut off',
      solution: 'Keep text within safe area guidelines'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Artwork Guidelines
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ensure your artwork prints perfectly with our comprehensive guidelines. Follow these specifications for the best results on your custom packaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#" className="inline-flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Templates
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/quote">Submit Artwork for Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pre-Flight Checklist</h2>
            <p className="text-xl text-blue-100">
              Use this checklist before submitting your artwork
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'File is high resolution (300 DPI minimum)',
              'Colors are in CMYK or PMS specified',
              'Artwork extends to bleed area',
              'Text is within safe area margins',
              'Fonts are outlined or included',
              'File format is AI, EPS, or PDF',
              'All images are embedded or linked',
              'Spelling and content are final'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Accepted File Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept various file formats, but some produce better results than others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fileFormats.map((format, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-sm border-2 ${
                format.recommended ? 'border-green-200 bg-green-50' : 'border-gray-100'
              }`}>
                {format.recommended && (
                  <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    RECOMMENDED
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {format.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{format.format}</h3>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-3">{format.extensions}</div>
                <p className="text-gray-600 leading-relaxed">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Color Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper color setup ensures your printed packaging matches your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colorSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <Palette className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{spec.type}</h3>
                </div>
                <div className="text-lg text-blue-600 font-medium mb-3">{spec.colorMode}</div>
                <p className="text-gray-600 mb-4">{spec.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Note:</strong> {spec.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Matching Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">PMS Color Matching</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Exact color matching using Pantone system
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Color proofs available for approval
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Consistent color across multiple runs
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Custom Color Development</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Create unique brand colors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Physical color samples provided
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Color formulation documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific Guidelines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product-Specific Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product type has specific requirements for optimal printing results.
            </p>
          </div>

          <div className="space-y-8">
            {productSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{spec.product}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Bleed Area</span>
                    <p className="text-lg text-blue-600 font-medium">{spec.bleed}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Safe Area</span>
                    <p className="text-lg text-blue-600 font-medium">{spec.safeArea}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Max Size</span>
                    <p className="text-lg text-blue-600 font-medium">{spec.maxSize}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Special Notes</span>
                    <p className="text-sm text-gray-600">{spec.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Issues & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avoid these common artwork problems to ensure smooth production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                    <p className="text-red-600 text-sm mb-3"><strong>Problem:</strong> {item.problem}</p>
                    <p className="text-green-600 text-sm"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates & Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Templates & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download templates and guides to ensure your artwork meets our specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Adobe Illustrator Templates',
                description: 'AI templates with proper setup for all product types',
                format: '.AI files'
              },
              {
                title: 'Photoshop Templates',
                description: 'PSD templates with layers and guides',
                format: '.PSD files'
              },
              {
                title: 'Print-Ready PDFs',
                description: 'Example files showing proper setup',
                format: '.PDF files'
              },
              {
                title: 'Color Guide',
                description: 'PMS color charts and CMYK conversion guide',
                format: '.PDF guide'
              },
              {
                title: 'Typography Guide',
                description: 'Font sizing and spacing recommendations',
                format: '.PDF guide'
              },
              {
                title: 'Dieline Collection',
                description: 'Cutting patterns for custom shapes',
                format: 'Vector files'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">{resource.format}</span>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
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
            Need Help with Your Artwork?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our design team can help review your files, create artwork from scratch, or make modifications to ensure perfect printing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Submit Files for Review</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+1-800-555-0123" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-700">
                Speak with Designer
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkGuidelinesPage;