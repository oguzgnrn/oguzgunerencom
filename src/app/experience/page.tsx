import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Turkish Airlines Technology",
      location: "Part Time - Hybrid",
      period: "Nov 2025 - Present",
      skills: ["Big Data","Data Analysis","Data Science"]
    },
    {
      title: "Data Engineering Intern",
      company: "TÜBİTAK BİLGEM",
      location: "Full Time - Office",
      period: "Aug 2025 - Sept 2025 • 2 month",
      responsibilities: [
        "B3LAB - Cloud Computing and Big Data Research Laboratory - b3lab.org"
      ],
      skills: ["Big Data","Data Analysis","Data Engineering","Data Science"]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Cezeri Artificial Intelligence and Robotic Technologies",
      location: "Full Time - Office",
      period: "Jun 2025 - Aug 2025 • 3 month",
      responsibilities: [
        "Computer Vision",
        "VLMs",
        "GWMs",
      ],
      skills: ["Computer Vision","Deep Learning", "Data Cleaning & Processing" ,"Object Detection"]
    },
    {
      title: "Data Scientist",
      company: "Seller Integral",
      location: "Part Time - Remote",
      period: "Sep 2023 - Feb 2025 • 1 years 6 month",
      responsibilities: [
        "Specialize in transforming extensive raw datasets into valuable insights using tools like Pandas and NumPy",
        "Proficient in data analysis, enhancement and manipulation with expertise in understanding complex data structures",
        "Skilled in web scraping for data collection and using tools like Postman for API interaction",
        "Developed a small-scale image classification model using Keras and PIL",
        "Focused on refining data quality and efficiently integrating it into databases and APIs"
      ],
      skills: ["Data Insights & Analytics","E-Commerce","Deep Learning", "Machine Learning", "Web Scraping & API Integration", "Data Cleaning & Processing"]
    },
    {
      title: "Data Scientist",
      company: "Maestrozon",
      location: "Part Time - Hybrid",
      period: "Jul 2024 - Aug 2024 • 3 month",
      responsibilities: [
        "Developed tools to simplify data collection and organization for Amazon sellers",
        "Designed user-friendly applications to make processes accessible for non-technical users",
        "Streamlined e-commerce operations with efficient and time-saving solutions"
      ],
      skills: ["E-Commerce Analytics", "Process Automation", "User-Centric Tool Development", "Data Collection & Organization", "Python", "Automation"]
    },
    {
      title: "Data Scientist",
      company: "Schneider Electric",
      location: "Part Time - Hybrid",
      period: "May 2024 - Jul 2024 • 3 month",
      responsibilities: [
        "Specialize in using Python for advanced data visualization and manipulation tasks",
        "Leverage tools like PowerAutomate and PowerBI for seamless data integration and reporting",
        "Expertise in Robotic Process Automation (RPA) enhances data processing efficiency",
        "Perform RFM (Recency, Frequency, Monetary) analysis to enable strategic decision-making based on customer behavior insights"
      ],
      skills: ["Business Intelligence & RFM Analysis", "RPA & Process Automation", "Power BI & Data Visualization", "Power Automate", "Database Integration"]
    },
    {
      title: "Computer Vision Engineer",
      company: "Overtech Information Technologies Inc.",
      location: "Part Time - Hybrid",
      period: "Oct 2022 - May 2023 • 8 month",
      responsibilities: [
        "Worked with a 100-class dataset for a TUBITAK project on image recognition and deep learning",
        "Prepared and labeled datasets and applied image preprocessing methods like histogram equalization",
        "Tested deep learning models including VGG16, VGG19, InceptionV3 and ResNet50",
        "Made significant contributions to model performance optimization, accuracy improvement and domain-specific customization",
        "Focused on YOLO object detection and classification, contributing to dataset preparation, image preprocessing and deep learning model experimentation"
      ],
      skills: ["Deep Learning", "Computer Vision", "YOLO", "Image Processing", "Object Detection", "Dataset Labeling"]
    },
    {
      title: "Junior Data Scientist",
      company: "Overtech Information Technologies Inc.",
      location: "Full Time - Office",
      period: "May 2022 - Oct 2022 • 6 month",
      responsibilities: [
        "Performed web scraping using BeautifulSoup and Selenium",
        "Learned SQL to manage the acquired data",
        "Analyzed scraped data to gain valuable insights and used Google Firebase for efficient storage",
        "Created SQL databases to organize information",
        "Developed a Python-based GUI for easy access and interaction with the scraping model"
      ],
      skills: ["Web Scraping", "SQL", "Python", "BeautifulSoup", "Selenium", "Firebase", "GUI Development"]
    },
    {
      title: "Data Scientist Intern",
      company: "Overtech Information Technologies Inc.",
      location: "Full Time - Office",
      period: "Feb 2022 - May 2022 • 4 month",
      responsibilities: [
        "Data Analysis",
        "Web Scraping",
        "Database Development SQL",
        "Data Mining"
      ],
      skills: ["Data Analysis", "Web Scraping", "SQL", "Data Mining"]
    }
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-[#004225]">Experience</h1>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-[#E7E4DA] p-6 rounded-lg hover:scale-[1.01] transform transition-transform">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#004225]">{experience.title}</h2>
                <div className="text-black">
                  <span className="font-medium">{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="text-black mt-2 md:mt-0 md:text-right">
                {experience.period}
              </div>
            </div>

            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-black">{responsibility}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FFFDE7] text-[#004225] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
