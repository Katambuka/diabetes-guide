
import React from 'react';

const TermsPage: React.FC = () => {
   return (
      <div className="min-h-screen p-5 bg-gray-50 text-gray-800">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms and Conditions</h1>
            <p className="mb-4">Welcome to Diabetes Guide!</p>
            <p className="mb-6">
               These terms and conditions outline the rules and regulations for the use of our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="mb-6">
               By accessing this website, we assume you accept these terms and conditions in full. Do not
               continue to use Diabetes Guide if you do not accept all of the terms and conditions stated
               on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. License</h2>
            <p className="mb-6">
               Unless otherwise stated, Diabetes Guide and/or its licensors own the intellectual property
               rights for all material on the website. All intellectual property rights are reserved. You
               may view and/or print pages from the website for your own personal use subject to
               restrictions set in these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. User Obligations</h2>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
               <li>Republish material from Diabetes Guide</li>
               <li>Sell, rent, or sub-license material from Diabetes Guide</li>
               <li>Reproduce, duplicate, or copy material from Diabetes Guide</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Limitation of Liability</h2>
            <p className="mb-6">
               In no event shall Diabetes Guide, nor any of its officers, directors, and employees, be
               held liable for anything arising out of or in any way connected with your use of this
               website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Changes to Terms</h2>
            <p className="mb-4">
               We reserve the right to revise these terms and conditions at any time. By using this
               website, you are expected to review these terms on a regular basis.
            </p>
            <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
         </div>
      </div>
   );
};

export default TermsPage;
