
'use client';
import React, { use, useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'What exactly is diabetes?',
      answer: 'Diabetes is a chronic metabolic disorder characterized by elevated blood glucose levels (hyperglycemia) resulting from defects in insulin production, insulin action, or both. The condition affects how your body processes blood sugar (glucose), which is the primary energy source for your cells.',
      categories: ['basics'],
    },
    {
      question: 'What are the main types of diabetes?',
      answer: 'There are several types of diabetes: \n\n1. Type 1 Diabetes: An autoimmune condition where the pancreas produces little or no insulin. \n2. Type 2 Diabetes: A condition where the body becomes resistant to insulin or doesn\'t produce enough. \n3. Gestational Diabetes: Develops during pregnancy and usually resolves after delivery. \n4. Prediabetes: Blood sugar levels are higher than normal but not high enough for a diabetes diagnosis. \n5. Other rare types like MODY (Maturity Onset Diabetes of the Young) and LADA (Latent Autoimmune Diabetes in Adults).',
      categories: ['types'],
    },
    {
      question: 'What are the common symptoms of diabetes?',
      answer: 'Symptoms may include:\n\n• Increased thirst (polydipsia)\n• Frequent urination (polyuria)\n• Extreme fatigue\n• Blurred vision\n• Slow-healing wounds\n• Tingling or numbness in hands/feet\n• Unexplained weight loss (common in Type 1)\n• Recurrent infections\n\nNote: Type 2 diabetes symptoms often develop gradually, while Type 1 symptoms can appear suddenly.',
      categories: ['symptoms'],
    },
    {
      question: 'How is diabetes diagnosed?',
      answer: 'Diabetes is typically diagnosed through these tests:\n\n1. Fasting Plasma Glucose Test: Measures blood sugar after fasting for 8 hours\n2. A1C Test: Provides average blood glucose levels over 2-3 months\n3. Oral Glucose Tolerance Test: Measures blood sugar before and after drinking a glucose solution\n4. Random Plasma Glucose Test: Taken at any time regardless of when you last ate\n\nDiagnostic criteria vary slightly between organizations like the ADA and WHO.',
      categories: ['diagnosis'],
    },
    {
      question: 'What are the most effective diabetes management strategies?',
      answer: 'Comprehensive diabetes management includes:\n\n• Medical Nutrition Therapy (personalized meal planning)\n• Regular physical activity (150+ minutes/week of moderate exercise)\n• Medication (oral meds, insulin, or other injectables as prescribed)\n• Blood glucose monitoring (CGM or fingerstick tests)\n• Stress management techniques\n• Regular health check-ups (A1C, blood pressure, cholesterol, kidney function)\n• Foot care and eye exams\n• Diabetes education and support programs',
      categories: ['management'],
    },
    {
      question: 'Can diabetes be cured?',
      answer: 'Current medical understanding:\n\n• Type 1 Diabetes: No cure exists, but it can be managed effectively with insulin therapy and lifestyle.\n• Type 2 Diabetes: While not typically "curable," it can often be put into remission through significant lifestyle changes, weight loss, and sometimes metabolic surgery.\n• Gestational Diabetes: Usually resolves after delivery but increases future diabetes risk.\n\nResearch continues in areas like islet cell transplantation and immunotherapy.',
      categories: ['treatment'],
    },
    {
      question: 'What complications can diabetes cause?',
      answer: 'Poorly managed diabetes can lead to:\n\nShort-term:\n• Hypoglycemia (low blood sugar)\n• Hyperglycemia (high blood sugar)\n• Diabetic ketoacidosis (DKA, mainly Type 1)\n• Hyperosmolar hyperglycemic state (HHS, mainly Type 2)\n\nLong-term:\n• Cardiovascular disease\n• Neuropathy (nerve damage)\n• Nephropathy (kidney disease)\n• Retinopathy (eye damage)\n• Foot complications\n• Skin conditions\n• Increased infection risk',
      categories: ['complications'],
    },
    {
      question: 'How does diet affect diabetes management?',
      answer: 'Nutrition plays a crucial role:\n\nKey Principles:\n• Focus on whole, minimally processed foods\n• Balance carbohydrates with protein and healthy fats\n• Monitor carbohydrate intake (quantity and quality)\n• Choose low glycemic index foods\n• Include fiber-rich foods\n• Limit added sugars and refined grains\n• Moderate alcohol consumption\n\nConsider working with a registered dietitian specializing in diabetes care.',
      categories: ['diet'],
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-5 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Diabetes FAQ</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              Showing {filteredFAQs.length} results for "{searchTerm}"
            </p>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button 
            onClick={() => setSearchTerm('')}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            All
          </button>
          {['basics', 'types', 'symptoms', 'diagnosis', 'management', 'treatment', 'complications', 'diet'].map(category => (
            <button
              key={category}
              onClick={() => setSearchTerm(category)}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    {faq.answer.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-3 last:mb-0 text-gray-700">
                        {paragraph.startsWith('•') || paragraph.match(/^\d+\./) 
                          ? <span className="block pl-4">{paragraph}</span>
                          : paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No questions found matching your search.
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Need More Information?</h2>
          <p className="mb-4 text-blue-700">
            Explore these trusted diabetes resources:
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://www.diabetes.org" className="text-blue-600 hover:underline">
                • American Diabetes Association
              </a>
            </li>
            <li>
              <a href="https://www.niddk.nih.gov" className="text-blue-600 hover:underline">
                • National Institute of Diabetes and Digestive and Kidney Diseases
              </a>
            </li>
            <li>
              <a href="https://www.cdc.gov/diabetes" className="text-blue-600 hover:underline">
                • CDC Diabetes Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;