import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Users } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using EcoStore's website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">User Accounts</h2>
              </div>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must be at least 18 years old to create an account</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Orders and Payments</h2>
              </div>
              <p className="text-gray-700 mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Prices are subject to change without notice</li>
                <li>Payment must be received before order processing</li>
                <li>We accept major credit cards and digital payment methods</li>
                <li>All transactions are processed in Indian Rupees (INR)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping and Returns</h2>
              <p className="text-gray-700 mb-4">
                We strive to deliver your orders in a timely manner. Shipping times may vary based on location and product availability.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Standard shipping within India: 3-7 business days</li>
                <li>Express shipping available for select locations</li>
                <li>Returns accepted within 30 days of delivery</li>
                <li>Items must be in original condition for returns</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Prohibited Uses</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no case shall EcoStore, our directors, officers, employees, affiliates, agents, contractors, interns, 
                suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, 
                incidental, punitive, special, or consequential damages of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service and any separate agreements whereby we provide you services shall be governed by 
                and construed in accordance with the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                Questions about the Terms of Service should be sent to us at:
                <br />
                Email: legal@ecostore.com
                <br />
                Phone: +91 98765 43210
                <br />
                Address: 123 MG Road, Bangalore, Karnataka 560001, India
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;