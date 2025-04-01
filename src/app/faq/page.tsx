import React from 'react';

const FAQPage = () => {
   const faqs = [
      {
         question: 'What is diabetes?',
         answer: 'Diabetes is a chronic condition that affects how your body processes blood sugar (glucose).',
      },
      {
         question: 'What are the types of diabetes?',
         answer: 'The main types of diabetes are Type 1, Type 2, and gestational diabetes.',
      },
      {
         question: 'What are the symptoms of diabetes?',
         answer: 'Common symptoms include increased thirst, frequent urination, extreme fatigue, and blurred vision.',
      },
      {
         question: 'How is diabetes managed?',
         answer: 'Diabetes can be managed through a combination of diet, exercise, medication, and regular monitoring of blood sugar levels.',
      },
   ];

   return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
         <h1>Frequently Asked Questions</h1>
         <div>
            {faqs.map((faq, index) => (
               <div key={index} style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '18px', color: '#333' }}>{faq.question}</h2>
                  <p style={{ fontSize: '16px', color: '#555' }}>{faq.answer}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FAQPage;