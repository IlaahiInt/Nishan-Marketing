import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, Bell, RefreshCw } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>Introduction</h2>
              <p>
                At Nishan Marketing, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <UserCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Personal Information</h3>
                    <p>Name, email address, phone number, and company information when you fill out our contact forms or subscribe to our newsletter.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Database className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Usage Data</h3>
                    <p>Information about how you interact with our website, including pages visited, time spent, and browser information.</p>
                  </div>
                </div>
              </div>

              <h2>How We Use Your Information</h2>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our service, provide service-related 
                services, or assist us in analyzing how our service is used.
              </p>

              <h2>Your Rights</h2>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate personal data</li>
                <li>Right to request deletion of your personal data</li>
                <li>Right to object to processing of your personal data</li>
                <li>Right to data portability</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: info@nishanmarketing.com</li>
                <li>Phone: +92 306 9098 198</li>
                <li>Address: Office#5, Opposite Fatima Hospital, University Road, Sargodha</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy; 