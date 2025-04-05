

import React from 'react';

const PrivacyPage = () => {
   return (
      <div className="min-h-screen p-5 bg-gray-50 text-gray-800"> {/* Light bg, dark text */}
         <div className="max-w-4xl mx-auto"> {/* Centered content container */}
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            <p className="mb-4">
               Welcome to our Privacy Policy page. Your privacy is critically important to us, and we are committed to protecting the personal information you share with us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Information We Collect</h2>
            <p className="mb-4">
               We collect various types of information to provide and improve our services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
               <li>
                  <strong className="font-medium">Personal Information:</strong> Information you provide directly, such as your name, email address, and other contact details.
               </li>
               <li>
                  <strong className="font-medium">Usage Data:</strong> Information about how you interact with our website, such as pages visited, time spent on pages, and other diagnostic data.
               </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
            <p className="mb-4">
               We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
               <li>To provide, maintain, and improve our services.</li>
               <li>To communicate with you, including responding to inquiries and sending updates.</li>
               <li>To analyze usage patterns and improve user experience.</li>
               <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Sharing Your Information</h2>
            <p className="mb-4">
               We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
               <li>With service providers who assist us in operating our website and providing our services.</li>
               <li>When required by law or to protect our legal rights.</li>
               <li>In connection with a business transaction, such as a merger or acquisition.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Security</h2>
            <p className="mb-6">
               We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Your Rights</h2>
            <p className="mb-4">
               Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
               <li>The right to access, update, or delete your personal data.</li>
               <li>The right to object to or restrict certain types of data processing.</li>
               <li>The right to data portability.</li>
            </ul>
            <p className="mb-6">
               To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Changes to This Privacy Policy</h2>
            <p className="mb-6">
               We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-2">
               If you have any questions about this Privacy Policy or how we handle your information, please contact us at:
            </p>
            <p className="mb-1">
               <strong className="font-medium">Email:</strong> support@example.com
            </p>
            <p className="mb-6">
               <strong className="font-medium">Address:</strong> 123 Jumeirah, Health City, DC 45678
            </p>
         </div>
      </div>
   );
};

export default PrivacyPage;