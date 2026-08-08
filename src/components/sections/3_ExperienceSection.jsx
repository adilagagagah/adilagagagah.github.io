import { useState } from "react";

export default function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="work" className="px-8 py-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 border-b border-white/20 pb-3">
          <h2 className="text-4xl font-bold tracking-wide">Work Experiences</h2>
          <span className="text-sm mb-4 text-teal-400 font-mono tracking-widest">02 - Works</span>
        </div>

        {/* Timeline Container */}
        <div className="relative ml-2 md:ml-4 pb-4">

          {/* 1. Garis Vertikal Custom*/}
          <div className="absolute -left-[2px] top-2 bottom-4 w-[2px] bg-white z-0"></div>
          
          {/* 2. Konten Timeline */}
          <div className="space-y-6">

            {/* Item 1: PT Surveyor Indonesia */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white"></div>
              
              <h3 className="text-2xl font-bold text-white">Business Data Analyst</h3>
              <p className="text-lg text-gray-200 mb-1">PT Surveyor Indonesia – Contract</p>
              <p className="text-gray-300 mb-2">April 2026 – Present</p>
              
              <p className="text-sm text-gray-400 mb-1">About this positions :</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-0.5 text-sm md:text-base leading-relaxed">
                <li>Optimize Excel formula so it can speed up monthly report by ~30%.</li>
                <li>Analyzed Branch Classification concept & formula, with the output flowchart.</li>
                <li>Create Python Script to inject manual input data to fully automated.</li>
                <li>Create Python Script to scraping data for additional analysis needed.</li>
              </ul>
            </div>
            
            {/* Item 2: PT Telkom Indonesia */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white"></div>
              
              <h3 className="text-2xl font-bold text-white">Business Analyst</h3>
              <p className="text-lg text-gray-200 mb-1">PT Telkom Indonesia (Persero) Tbk – Internship</p>
              <p className="text-gray-300 mb-2">October 2025 – March 2026</p>
              
              <p className="text-sm text-gray-400 mb-1">About this positions :</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-0.5 text-sm md:text-base leading-relaxed">
                <li>Developed short-term revenue forecasting models using Single Exponential Smoothing to support data-driven planning under limited historical data conditions.</li>
                <li>Built business intelligence dashboards to monitor key KPIs (potential revenue, response rate, customer segments), enabling faster and more accurate decision-making for pricing and product strategy.</li>
                <li>Automated data extraction from unstructured client communications using an LLM-based parsing system, improving data availability and reducing manual processing effort.</li>
                <li>Designed and maintained a Excel-VBA databased management system, ensuring structured data storage, consistency, and efficient update processes.</li>
              </ul>
            </div>

            {/* Item 3: PT Erajaya Swasembada Tbk (Di-Render jika showMore === true) */}
            {showMore && (
              <>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white"></div>
                  
                  <h3 className="text-2xl font-bold text-white">Data Analyst</h3>
                  <p className="text-lg text-gray-200 mb-1">PT Erajaya Swasembada Tbk – Internship</p>
                  <p className="text-gray-300 mb-2">September 2024 – Desember 2024</p>
                  
                  <p className="text-sm text-gray-400 mb-1">About this positions :</p>
                  <ul className="list-disc pl-5 text-gray-400 space-y-0.5 text-sm md:text-base leading-relaxed">
                    <li>Developed Python-based automation scripts to streamline stock and sales data processing for more than 400 retail store, reducing manual reporting time by 90% and improving operational efficiency.</li>
                    <li>Built a Power BI B2B performance dashboard covering 8,000+ partner dealers, enabling monitoring of KPIs such as average sales, regional performance, store-level target achievement, and city-level insights.</li>
                    <li>Conducted exploratory data analysis (EDA) to identify sales patterns and support business planning initiatives across multiple regions.</li>
                    <li>Supported target-setting strategy by assisting team leaders in aligning store-level sales targets using historical performance data.</li>
                  </ul>
                </div>

                <div className="pl-8 md:pl-12">
                  <button 
                    onClick={() => setShowMore(false)}
                    className="rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/5 transition-colors"
                  >
                    Show Less
                  </button>
                </div>
              </>
            )}

            {/* Show More Button (Ditampilkan jika showMore === false) */}
            {!showMore && (
              <div className="pl-8 md:pl-12">
                <button 
                  onClick={() => setShowMore(true)}
                  className="rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/5 transition-colors"
                >
                  Show More
                </button>
              </div>
            )}

          </div>
        </div>  
        
      </div>
    </section>
  );
}