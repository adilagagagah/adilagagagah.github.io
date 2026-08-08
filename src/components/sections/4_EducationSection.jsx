export default function EducationSection() {
  return (
    <section id="education" className="px-8 py-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 border-b border-white/20 pb-3">
          <h2 className="text-4xl font-bold tracking-wide">Education</h2>
          <span className="text-sm mb-4 text-teal-400 font-mono tracking-widest">03 - Education</span>
        </div>

        {/* Timeline Container */}
        <div className="relative ml-2 md:ml-4 pb-4">

          {/* 1. Garis Vertikal Custom */}
          <div className="absolute -left-[2px] top-2 bottom-0 w-[2px] bg-white z-0"></div>
          
          {/* 2. Konten Timeline */}
          <div className="space-y-6">
            
            {/* Item 1: Diponegoro University */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white z-10"></div>
              
              <h3 className="text-2xl font-bold text-white">Bachelor of Statistics</h3>
              <p className="text-lg text-gray-200 mb-1">Diponegoro University, Semarang, Indonesia</p>
              <p className="text-gray-300 mb-2">July 2021 – July 2025</p>
              
              <p className="text-sm text-gray-400 mb-1">About this program :</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-0.5 text-sm md:text-base leading-relaxed">
                <li>Create 2 Graphical User Interface to simplify the use of statistics model.</li>
                <li>Create Computer Vision Model for Learning Apps called Hijaiyah App.</li>
                <li>Be Assistant Lecturer for 5 Subjects such as Algorithm Programming, System Information Management, Computational Statistics, Artificial Neural Network, and others.</li>
              </ul>
            </div>
            
            {/* Item 2: Bangkit Academy */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white z-10"></div>
              
              <h3 className="text-2xl font-bold text-white">Machine Learning Cohort</h3>
              <p className="text-lg text-gray-200 mb-1">Bangkit Academy by Google, Goto, & Traveloka</p>
              <p className="text-gray-300 mb-2">August 2023 – January 2024</p>
              
              <p className="text-sm text-gray-400 mb-1">About this program :</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-0.5 text-sm md:text-base leading-relaxed">
                <li>Learn Machine Learning, Deep Learning, and Forecasting using Tensorflow.</li>
                <li>Learn Git & Github for project management.</li>
                <li>Create Deep Learning model for Regression & image classification from zero.</li>
                <li>Create Deep Learning model from pre-trained model.</li>
              </ul>
            </div>

          </div>
        </div>  

      </div>
    </section>
  );
}