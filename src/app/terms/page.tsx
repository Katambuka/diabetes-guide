import React from 'react';

const TermsPage: React.FC = () => {
   return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
         <h1>Terms and Conditions</h1>
         <p>Welcome to Diabetes Guide!</p>
         <p>
            These terms and conditions outline the rules and regulations for the use of our website.
         </p>

         <h2>1. Acceptance of Terms</h2>
         <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not
            continue to use Diabetes Guide if you do not accept all of the terms and conditions stated
            on this page.
         </p>

         <h2>2. License</h2>
         <p>
            Unless otherwise stated, Diabetes Guide and/or its licensors own the intellectual property
            rights for all material on the website. All intellectual property rights are reserved. You
            may view and/or print pages from the website for your own personal use subject to
            restrictions set in these terms and conditions.
         </p>

         <h2>3. User Obligations</h2>
         <p>You must not:</p>
         <ul>
            <li>Republish material from Diabetes Guide</li>
            <li>Sell, rent, or sub-license material from Diabetes Guide</li>
            <li>Reproduce, duplicate, or copy material from Diabetes Guide</li>
         </ul>

         <h2>4. Limitation of Liability</h2>
         <p>
            In no event shall Diabetes Guide, nor any of its officers, directors, and employees, be
            held liable for anything arising out of or in any way connected with your use of this
            website.
         </p>

         <h2>5. Changes to Terms</h2>
         <p>
            We reserve the right to revise these terms and conditions at any time. By using this
            website, you are expected to review these terms on a regular basis.
         </p>
         <p>Last updated: [Insert Date]</p>
      </div>
   );
};

export default TermsPage;
