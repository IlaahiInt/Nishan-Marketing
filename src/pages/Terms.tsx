import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Shield, Scale, Clock, FileCheck } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Terms of Service
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using Nishan Marketing's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access our services.
              </p>

              <h2>2. Services</h2>
              <p>
                Nishan Marketing provides digital marketing services, including but not limited to:
              </p>
              <ul>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Web Design & Development</li>
                <li>Branding & Identity Design</li>
                <li>Content Marketing</li>
              </ul>

              <h2>3. Service Delivery & Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Project Timeline</h3>
                    <p>Project timelines will be established at the beginning of each engagement and may vary based on project scope and complexity.</p>
                  </div>
                </div>
              </div>

              <h2>4. Payment Terms</h2>
              <ul>
                <li>Payment schedules will be outlined in individual project proposals</li>
                <li>All invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept various payment methods as specified in the invoice</li>
              </ul>

              <h2>5. Intellectual Property Rights</h2>
              <p>
                Upon full payment, clients receive full rights to all final deliverables. Nishan Marketing retains rights 
                to display work in portfolios and marketing materials unless explicitly agreed otherwise.
              </p>

              <h2>6. Client Responsibilities</h2>
              <ul>
                <li>Providing necessary materials and information in a timely manner</li>
                <li>Reviewing and providing feedback within agreed timeframes</li>
                <li>Ensuring all provided content complies with applicable laws</li>
                <li>Maintaining confidentiality of project details</li>
              </ul>

              <h2>7. Termination</h2>
              <p>
                Either party may terminate services with 30 days written notice. Client is responsible for payment for 
                all work completed up to the termination date.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                Nishan Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of our services.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at:
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

export default Terms; 