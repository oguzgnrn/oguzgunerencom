import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  const skills = {
    'Artificial Intelligence': [
      'TensorFlow', 'PyTorch', 'Keras', 'Neural Networks (CNN, RNN, GANs) ', 
      'Natural Language Processing (NLP)', 'Transformers', 'Reinforcement Learning', 
      'Model Deployment', 'Parameter Tuning'
    ],
    'Data Science': [
      'Python', 'R', 'SQL', 'Data Analysis', 'Data Visualization', 'Statistics', 
        'Machine Learning Pipelines', 'Data Preprocessing', 'Cloud Platforms (AWS, Google Cloud, Azure)'
    ],
    'Computer Vision': [
      'OpenCV', 'YOLO', 'Image Processing', 'Object Detection', 'Image Classification', 
       'Optical Character Recognition (OCR)', 'Video Analysis', 'Image Augmentation','Face Recognition'
    ],
    'Tools & Technologies': [
      'Docker', 'PowerBI', 'PowerAutomate', 'GitHub', 'Linux',
      'Jupyter Notebooks', 'VS Studio', 'Apache NiFi', 'Airflow',
      'SQL', 'Firebase','Replit','Cursor'
    ],
    'Programming Languages': [
      'Python','C++','SQL','JavaScript','HTML','CSS'
    ],
    'Languages': [
      'Turkish (Native)', 'English (C1)', 'German (A1)'
    ]
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[#E7E4DA] rounded-3xl" />
        <div className="relative px-8 py-12 md:py-16 rounded-3xl">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold text-[#004225]">Oğuz Güneren</h1>
            <p className="text-2xl text-black">Artificial Intelligence Engineer | Data Scientist</p>
          </div>
    
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#004225]">About Me</h2>
        <div className="prose prose-lg text-black bg-[#E7E4DA] p-6 rounded-lg">
          <p>
          As a Data Scientist with a solid background in Artificial Intelligence Engineering, I have worked on a range of AI projects spanning data analysis, computer vision, and automation. My experience includes developing deep learning models, designing and training neural networks, optimizing algorithms, and applying AI to real-world problems across various domains. I have also worked on data preprocessing, feature engineering, and model deployment, ensuring AI solutions are both effective and scalable.

          </p> 
          <br></br>
          <p>
          Now, as a student actively working in the field, I stay up to date with the rapidly evolving AI landscape and continuously explore new applications. I work on multiple AI-driven projects, focusing on integrating intelligent systems into different areas to improve efficiency, decision-making, and automation.

          </p>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#004225]">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#E7E4DA] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#004225] mb-2">Istanbul Technical University</h3>
            <p className="text-black mb-1">Artificial Intelligence and Data Engineering</p>
            <p className="text-sm text-black mb-2">2024 - Present</p>
            <ul className="list-disc list-inside text-sm text-black">
              <li>2.88/4 GPA</li>
            </ul>
          </div>
          <div className="bg-[#E7E4DA] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#004225] mb-2">Bahcesehir University</h3>
            <p className="text-black mb-1">Artificial Intelligence Engineering</p>
            <p className="text-sm text-black mb-2">2021 - 2024</p>
            <ul className="list-disc list-inside text-sm text-black">
              <li>3.25/4 GPA with Honor Degree</li>
              <li>Full Scholarship</li>
              <li>Transferred to ITU</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#004225]">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-[#E7E4DA] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#004225] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#FFFDE7] text-[#004225] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#004225]">Get in Touch</h2>
        <div className="bg-[#E7E4DA] p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#004225] text-xl" />
                <a href="mailto:gnrnoguz@gmail.com" className="text-black hover:text-[#004225]">
                  gnrnoguz@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#004225] text-xl" />
                <span className="text-black">+90 551 126 23 26</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/oguzgnrn"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://medium.com/@gnrnoguz"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FaMedium className="mr-2" /> Medium
              </a>
              <a
                href="https://www.linkedin.com/in/oguzgnrn"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
