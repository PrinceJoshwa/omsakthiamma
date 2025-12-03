// app/terms/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Accent Bar */}
      <div className="bg-[#ffc107] h-2 w-full"></div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 mb-8 text-[#a7150b] hover:text-[#8a0d08] font-bold text-sm uppercase tracking-wide transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-8 border-[#a7150b]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose max-w-none text-gray-700 space-y-10 leading-relaxed">
            
            {/* Online Payments */}
            <section>
              <h2 className="text-2xl font-bold text-[#a7150b] mb-4">Online Payments</h2>
              <p>
                This online payment system is provided by <strong>Adhiparasakthi Siddhar Peedam</strong>. 
                Adhiparasakthi Siddhar Peedam may update these terms from time to time and any changes will be effective immediately on being set out here. 
                Please ensure you are aware of the current terms. The country of domicile for Adhiparasakthi Siddhar Peedam is India.
              </p>
            </section>

            {/* Terms & Conditions */}
            <section>
              <h2 className="text-2xl font-bold text-[#a7150b] mb-4">Terms & Conditions</h2>
              <p className="mb-4">
                Please read these terms carefully before using the online payment facility. Using the online payment facility on this website indicates that you accept these terms. If you do not accept these terms do not use this facility.
              </p>
              <p className="font-semibold mb-2">All payments are subject to the following conditions:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#ffc107]">
                <li>
                  The description of services of fee making are specific to your need, when you log in with your unique password. Normally payment is required in advance (i.e. before you commence your activity).
                </li>
                <li>
                  All rates quoted are in Indian Rupees. The Adhiparasakthi Siddhar Peedam reserves the right to change the rate at any time.
                </li>
                <li>
                  Your payment will normally reach the Adhiparasakthi Siddhar Peedam account to which you are making a payment within two working days.
                </li>
                <li>
                  We cannot accept liability for a payment not reaching the correct Adhiparasakthi Siddhar Peedam account due to you quoting an incorrect account number or incorrect personal details. Neither can we accept liability if payment is refused or declined by the credit/debit card supplier for any reason.
                </li>
                <li>
                  If the card supplier declines payment the Adhiparasakthi Siddhar Peedam is under no obligation to bring this fact to your attention. You should check with your bank/credit/debit card supplier that payment has been deducted from your account.
                </li>
                <li>
                  In no event will the Adhiparasakthi Siddhar Peedam be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.
                </li>
              </ul>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#a7150b] mb-4">Cancellations and Refund Policy</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#ffc107]">
                <li>
                  Any request for cancellations of orders once duly placed on the site, shall not be entertained under any circumstances.
                </li>
                <li>
                  Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the Adhiparasakthi Siddhar Peedam to refund the Price (or part thereof) unless such Price (or part thereof) have previously been paid.
                </li>
              </ul>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#a7150b] mb-4">Privacy Policy</h2>
              <p className="mb-4">
                This Privacy Policy applies to all of the products, services and websites offered by Adhiparasakthi Siddhar Peedam. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.
              </p>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please feel free to contact us through our website or write to us at <a href="mailto:aspwct@gmail.com" className="text-blue-600 hover:underline">aspwct@gmail.com</a>.
              </p>
              
              <h3 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-2">Changes to our Privacy Policy</h3>
              <p>
                Adhiparasakthi Siddhar Peedam reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between Adhiparasakthi Siddhar Peedam and any user visiting the Adhiparasakthi Siddhar Peedam website or providing identifying information of any kind.
              </p>
            </section>

            {/* DND Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#a7150b] mb-4">DND Policy</h2>
              <p>
                If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email to <a href="mailto:aspwct@gmail.com" className="text-blue-600 hover:underline">aspwct@gmail.com</a> with your mobile numbers and you will be excluded from the alerts list.
              </p>
            </section>

          </div>

          <hr className="my-10 border-gray-200" />

          {/* Contact Details Grid */}
          <section className="bg-orange-50 p-6 md:p-8 rounded-xl border border-orange-100">
            <h2 className="text-2xl font-bold text-[#a7150b] mb-6">Contact Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-full h-fit shadow-sm text-[#a7150b]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">Adhiparasakthi Siddhar Peedam</h3>
                  <p className="text-gray-600 text-sm">
                    Melmaruvathur,<br />
                    Kancheepuram District,<br />
                    TamilNadu - 603319
                  </p>
                </div>
              </div>

              {/* Communication */}
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="bg-white p-2 rounded-full h-fit shadow-sm text-[#a7150b]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Main Office</p>
                    <a href="tel:+914427529096" className="text-[#1a1a1a] hover:text-[#a7150b] transition-colors">+91 44 27529096</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                   <div className="bg-white p-2 rounded-full h-fit shadow-sm text-[#a7150b]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Public Relation Office</p>
                    <a href="tel:+914427529276" className="text-[#1a1a1a] hover:text-[#a7150b] transition-colors">+91 44 27529276</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="bg-white p-2 rounded-full h-fit shadow-sm text-[#a7150b]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:aspwct@gmail.com" className="text-[#1a1a1a] hover:text-[#a7150b] transition-colors">aspwct@gmail.com</a>
                </div>

                 <div className="flex gap-4 items-center">
                  <div className="bg-white p-2 rounded-full h-fit shadow-sm text-[#a7150b]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-[#1a1a1a]">8:00 AM To 8:00 PM</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}