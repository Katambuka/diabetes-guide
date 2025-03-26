// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allBlogPosts } from '@/data/page';
import Image from 'next/image';
import { FiTag } from 'react-icons/fi';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allBlogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Post Header */}
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Post Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                {post.date} • {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              {/* Add your full post content here */}
              <p className="text-gray-700">[Understanding Type 2 Diabetes
Type 2 diabetes is a chronic metabolic disorder characterized by elevated blood sugar levels, insulin resistance, and, in some cases, relative insulin deficiency. It has become one of the most common endocrine disorders worldwide, largely due to changes in lifestyle, dietary habits, and an aging population.

Causes and Risk Factors
1. Insulin Resistance and Beta-Cell Dysfunction
At its core, Type 2 diabetes arises when the body’s cells become less sensitive to insulin—a hormone produced by the pancreas that facilitates glucose uptake—and when pancreatic beta-cells cannot compensate for this resistance by producing adequate insulin. A combination of genetic predisposition and environmental factors typically underpins this dual defect. Studies have demonstrated that insulin resistance often precedes the clinical onset of diabetes, while beta-cell dysfunction progressively worsens the condition over time1.

2. Obesity and Sedentary Lifestyle
Obesity, particularly central adiposity (excess fat around the abdomen), is one of the strongest risk factors for Type 2 diabetes. Excess fat tissue releases inflammatory cytokines and hormones that disrupt insulin signaling pathways. Research published in peer-reviewed journals shows that even moderate weight loss can significantly improve insulin sensitivity and reduce the risk of developing diabetes2. Sedentary behavior further exacerbates this risk, as regular physical activity has been consistently shown to improve glucose uptake in muscle tissues.

3. Genetic Factors
Family history and ethnicity play important roles in the risk of developing Type 2 diabetes. Genome-wide association studies have identified several genetic variants that increase susceptibility to insulin resistance and beta-cell dysfunction. While genetics alone do not determine one’s fate, they interact with lifestyle factors to influence overall risk3.

4. Diet and Nutrition
Diets high in refined carbohydrates, saturated fats, and sugary beverages contribute to weight gain and metabolic disturbances. Conversely, diets rich in fiber, whole grains, lean proteins, and unsaturated fats are associated with lower risk. Numerous clinical trials have underscored the benefits of the Mediterranean diet and other balanced eating patterns in reducing the incidence of diabetes and managing blood glucose levels in those already diagnosed.

Symptoms of Type 2 Diabetes
The clinical presentation of Type 2 diabetes can be insidious. Many individuals may remain undiagnosed for years because early symptoms are often mild or absent. However, common symptoms include:

1. Hyperglycemia-Related Signs
Increased Thirst and Frequent Urination: High blood glucose levels cause the kidneys to work harder to filter and absorb the excess sugar. When they can’t keep up, the excess sugar is excreted into the urine, dragging fluids from body tissues and leading to dehydration.
Fatigue: When cells do not get enough glucose, the body may feel tired despite adequate calorie intake.
Blurred Vision: High blood sugar can lead to fluid leakage in the lenses of the eyes, affecting the ability to focus clearly.
2. Slow-Healing Wounds and Frequent Infections
Chronic hyperglycemia can damage blood vessels and nerves, impairing the body’s natural healing processes. Patients might notice cuts or wounds that heal slowly, and they are more prone to infections such as skin infections and urinary tract infections.

3. Other Symptoms
Unintended weight loss (though less common in Type 2 than Type 1 diabetes)
Tingling or numbness in hands and feet, indicating possible diabetic neuropathy
Management Strategies
Effective management of Type 2 diabetes involves a multi-pronged approach that includes lifestyle modifications, pharmacotherapy, and regular monitoring. Peer-reviewed studies have demonstrated that a combination of these strategies can significantly improve patient outcomes.

1. Lifestyle Modifications
Dietary Changes: Adopting a balanced, nutrient-rich diet is the cornerstone of managing diabetes. Clinical evidence suggests that reducing the intake of refined sugars and saturated fats while increasing fiber intake can help control blood glucose levels. Registered dietitians often recommend meal planning and portion control as key strategies.
Physical Activity: Regular exercise helps improve insulin sensitivity and can lower blood sugar levels. Both aerobic exercises (like walking, cycling, and swimming) and resistance training are beneficial. Studies indicate that at least 150 minutes of moderate-intensity exercise per week is optimal for glycemic control.
Weight Management: Even modest weight loss (5-10% of body weight) can lead to significant improvements in insulin sensitivity and glycemic control.
2. Pharmacological Treatments
For many patients, lifestyle changes alone are not enough to maintain target blood glucose levels. Medications are therefore an important part of treatment:

Metformin: Often the first-line medication, metformin helps reduce hepatic glucose production and improve insulin sensitivity. Its safety and efficacy are well documented in numerous randomized controlled trials.
Sulfonylureas, DPP-4 Inhibitors, and GLP-1 Receptor Agonists: These drugs act through different mechanisms to either stimulate insulin secretion or improve insulin action.
Insulin Therapy: In more advanced cases, patients may require insulin injections to achieve glycemic control.
3. Monitoring and Regular Check-Ups
Self-monitoring of blood glucose and regular HbA1c testing are essential to evaluate the effectiveness of treatment and make necessary adjustments. Healthcare providers also monitor for complications such as diabetic retinopathy, nephropathy, and cardiovascular disease. Peer-reviewed studies stress the importance of early detection and aggressive management of these complications to reduce morbidity and mortality.

Scientific Evidence and Peer-Reviewed Research
The management of Type 2 diabetes has been extensively studied. Landmark studies such as the United Kingdom Prospective Diabetes Study (UKPDS) and the Diabetes Prevention Program (DPP) have provided strong evidence that early intervention through lifestyle modification and pharmacotherapy can delay the onset of diabetes and reduce complications4. Furthermore, meta-analyses published in journals like The Lancet and Diabetes Care continue to validate the effectiveness of these management strategies.

In summary, understanding Type 2 diabetes involves recognizing the interplay between genetic predisposition, lifestyle factors, and metabolic dysfunction. The condition is marked by insulin resistance and beta-cell dysfunction, which leads to elevated blood sugar levels and a host of potential complications. Effective management hinges on a combination of lifestyle interventions, medications, and regular monitoring. For those interested in delving deeper into the scientific literature, reputable sources include the American Diabetes Association, Diabetes Care, and The Lancet Diabetes & Endocrinology.

This article is based on a synthesis of peer-reviewed research and established clinical guidelines. Always consult original sources and healthcare professionals for the most current information.

Footnotes
DeFronzo RA. Pathogenesis of type 2 diabetes mellitus. Med Clin North Am. 2004. ↩

Wing RR, et al. Benefits of modest weight loss in improving cardiovascular risk factors in overweight and obese individuals with type 2 diabetes. Diabetes Care. 1999. ↩

McCarthy MI. Genomics, type 2 diabetes, and obesity. N Engl J Med. 2010. ↩

UK Prospective Diabetes Study (UKPDS) Group. Lancet. 1998. ↩]</p>
            </div>
            
            {post.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded flex items-center"
                  >
                    <FiTag className="mr-1" size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}