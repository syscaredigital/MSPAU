import React from 'react';
import Footer from '../components/footer.jsx';
import Navigation from '../components/Navigation';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <Navigation/>
      <header className="bg-[#103d5d] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center mt-2 text-[#ffffff] opacity-90">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">1. Introduction</h2>
            <p className="text-[#000000] mb-4">
              Welcome to [Your MSP Company Name]. We are committed to protecting your privacy and 
              ensuring the security of your personal information. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-[#245684] mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-[#000000] space-y-1 ml-4">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>IP address and browser information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#245684] mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-[#000000] space-y-1 ml-4">
                  <li>Log files and analytics data</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>Provide and maintain our MSP services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send technical notices and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent activities</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-[#000000] mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">5. Data Security</h2>
            <p className="text-[#000000]">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">6. Your Rights</h2>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">7. Cookies and Tracking</h2>
            <p className="text-[#000000] mb-4">
              We use cookies and similar tracking technologies to track activity on our website 
              and hold certain information. You can instruct your browser to refuse all cookies 
              or to indicate when a cookie is being sent.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">8. Third-Party Links</h2>
            <p className="text-[#000000]">
              Our website may contain links to other sites that are not operated by us. We are 
              not responsible for the content or privacy practices of these third-party sites.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">9. Changes to This Policy</h2>
            <p className="text-[#000000]">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">10. Contact Us</h2>
            <p className="text-[#000000] mb-2">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200">
              <p className="text-[#000000]"><strong>Email:</strong> privacy@yourmsp.com</p>
              <p className="text-[#000000]"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="text-[#000000]"><strong>Address:</strong> [Your Company Address]</p>
            </div>
          </section>

          {/* Consent */}
          <div className="bg-[#103d5d] text-white p-6 rounded-lg mt-8">
            <p className="text-center font-medium">
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;