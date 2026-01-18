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
            Effective Date: 10/02/2025
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-[#000000] mb-4">
              SysCare IT Solutions Pty Ltd ("SysCare IT Solutions", "we", "our", or "us") is committed 
              to protecting your privacy and safeguarding your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and protect personal information when you interact 
              with our website, services, and communications.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">1. Information We Collect</h2>
            <p className="text-[#000000] mb-4">
              We may collect personal and business information including, but not limited to:
            </p>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>Name, email address, phone number, and company details</li>
              <li>Enquiry and contact form submissions</li>
              <li>Technical information such as IP address, browser type, and device information</li>
              <li>Service-related data required to deliver managed IT and security services</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#000000] mb-4">
              We collect and use your information to:
            </p>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>Respond to enquiries and provide IT and cybersecurity services</li>
              <li>Deliver managed IT services, managed security services, and support</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Communicate service updates, security notices, and business information</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">3. Disclosure of Information</h2>
            <p className="text-[#000000] mb-4">
              SysCare IT Solutions does not sell or rent personal information. We may disclose information:
            </p>
            <ul className="list-disc list-inside text-[#000000] space-y-2 ml-4">
              <li>To trusted third-party service providers who assist in service delivery</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect our rights, systems, or the security of our clients</li>
            </ul>
            <p className="text-[#000000] mt-4">
              All third parties are required to comply with strict confidentiality and data protection standards.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">4. Data Security</h2>
            <p className="text-[#000000]">
              As a Managed IT and Managed Security Services Provider, we take data protection seriously. 
              We implement appropriate technical and organisational security measures to protect personal 
              information from unauthorised access, loss, misuse, or disclosure.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">5. Cookies & Website Analytics</h2>
            <p className="text-[#000000]">
              Our website may use cookies and analytics tools to enhance user experience and monitor website 
              performance. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Access & Correction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">6. Access & Correction</h2>
            <p className="text-[#000000]">
              You may request access to the personal information we hold about you or request corrections 
              if the information is inaccurate or outdated. Requests can be made by contacting us directly.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">7. Data Retention</h2>
            <p className="text-[#000000]">
              We retain personal information only for as long as necessary to fulfil the purposes outlined 
              in this policy or as required by law.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">8. Third-Party Links</h2>
            <p className="text-[#000000]">
              Our website may contain links to third-party websites. SysCare IT Solutions is not responsible 
              for the privacy practices or content of external sites.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">9. Changes to This Policy</h2>
            <p className="text-[#000000]">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated effective date.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#103d5d] mb-4">10. Contact Us</h2>
            <p className="text-[#000000] mb-2">
              If you have any questions about this Privacy Policy or how we handle personal information, 
              please contact:
            </p>
            <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200">
              <p className="text-[#000000]"><strong>Company:</strong> SysCare IT Solutions Pty Ltd</p>
              <p className="text-[#000000]"><strong>Location:</strong> Melbourne & Sydney, Australia</p>
              <p className="text-[#000000]"><strong>Email:</strong> info@syscare.com.au</p>
              <p className="text-[#000000]"><strong>Phone:</strong> +1300 69 79 72</p>
              <p className="text-[#000000]"><strong>Website:</strong> syscare.com.au</p>
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