import React from 'react';

export default function Certifications() {
  const achievements = [
    {
      title: "Deep Learning A-Z™",
      issuer: "Udemy",
      date: "April 2024",
      credential: "Credential ID: UC-422ae809-5bbd-4e8e-ba7e-efeaf430e86b",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"]
    },
    {
      title: "IBM Data Science Professional Certificate (10-Course Series)",
      issuer: "IBM",
      date: "April 2024",
      credential: "Credential ID: 2V6SAERWN6SP",
      skills: ["Data Science", "Machine Learning", "Python", "SQL", "Data Analysis"]
    },
    {
      title: "Deep Learning Foundations",
      platform: "Udacity",
      date: "March 2022",
      skills: ["Keras", "AI", "Deep Learning", "PyTorch", "TensorFlow"]
    },
    {
      title: "HackerRank Certificate",
      issuer: "HackerRank",
      date: "December 2023",
      credential: "Credential ID: 8758E6E7D10B",
      skills: ["Problem Solving", "Algorithms", "Data Structures"]
    },
    {
      title: "AI Summit 2024",
      platform: "BAU GLOBAL",
      date: "April 2024",
      skills: ["AI", "Machine Learning", "Innovation"]
    },
    {
      title: "Application of Data Analysis in Business with R Programming",
      platform: "Coursera",
      date: "March 2024",
      credential: "Credential ID: 9EQCKWFZE9LV",
      skills: ["R Programming", "Data Analysis", "Business Analytics"]
    },
    {
      title: "Using Descriptive Statistics to Analyze Data in R",
      platform: "Coursera",
      date: "March 2024",
      credential: "Credential ID: 8J2SHR7LFKFF",
      skills: ["R", "Statistics", "Data Analysis"]
    },
    {
      title: "CS 188: Introduction to Artificial Intelligence",
      platform: "UC Berkeley",
      date: "November 2023",
      skills: ["AI", "Machine Learning", "Algorithms"]
    },
    {
      title: "Introduction to LLMs",
      platform: "Compec - Boğaziçi University",
      date: "November 2023",
      credential: "Credential ID: 08403425282494",
      skills: ["LLMs", "NLP", "AI"]
    },
    {
      title: "Machine Learning Models & FastAPI & Docker",
      platform: "Compec - Boğaziçi University",
      date: "November 2023",
      credential: "Credential ID: 77766618806954",
      skills: ["Machine Learning", "FastAPI", "Docker"]
    },
    {
      title: "Medical Image Generation with GANs",
      platform: "Compec - Boğaziçi University",
      date: "November 2023",
      credential: "Credential ID: 82508160000259",
      skills: ["GANs", "Deep Learning", "Image Generation"]
    },
    {
      title: "Understanding Artificial Intelligence",
      platform: "DataCamp",
      date: "November 2023",
      skills: ["AI", "Machine Learning", "Data Science"]
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      platform: "DeepLearning.AI",
      date: "May 2023",
      skills: ["Prompt Engineering", "ChatGPT", "NLP"]
    },
    {
      title: "NLP - Natural Language Processing with Python",
      platform: "Udemy",
      date: "May 2023",
      credential: "Credential ID: UC-2df4890e-d6a2-4090-9569-c00f867a3284",
      skills: ["NLP", "NLTK", "Spacy", "Deep Learning", "Python"]
    },

    {
      title: "Intro to SQL",
      platform: "Kaggle",
      date: "March 2022",
      skills: ["SQL", "Data Analysis", "Databases"]
    },
    {
      title: "SQL for Data Analysis",
      platform: "Udacity",
      date: "March 2022",
      skills: ["SQL", "Data Analysis", "Databases"]
    },
    {
      title: "TensorFlow and Python for Data Science",
      platform: "BTK Academy",
      date: "February 2022",
      credential: "Credential ID: wmlFJ9LVNL",
      skills: ["PyTorch", "Python", "TensorFlow"]
    },
    {
      title: "Intro to Data Analysis",
      platform: "Udacity",
      date: "December 2021",
      skills: ["Data Analysis", "Python"]
    },
    {
      title: "Intro to Programming Nanodegree",
      platform: "Udacity",
      date: "November 2021",
      skills: ["Programming", "Computer Science"]
    },
    {
      title: "Introduction to Python Programming",
      platform: "Udacity",
      date: "October 2021",
      skills: ["Python", "Programming"]
    },
    {
      title: "Hackathon'23 Second Place",
      organization: "TechCrew",
      date: "August 2023",
      skills: ["Keras", "Deep Learning", "Image Processing", "Data Analysis", "TensorFlow"]
    },
    {
      title: "WE'Boost Hackathon Participation Certificate",
      organization: "We'Boost Hackathon",
      date: "January 2022",
      credential: "Credential ID: DC-x5yklDe4"
    },
    {
      title: "Tubitak Tusside Science Camp",
      organization: "TÜBİTAK",
      date: "August 2016"
    },
    {
      title: "Math Olympics",
      organization: "Turkish Ministry of Education",
      date: "February 2013"
    }
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-[#004225]">Certifications & Courses</h1>
      
      <div className="space-y-12">
 

        <div>
          <h2 className="text-2xl font-semibold text-[#004225] mb-6">Professional Courses & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[#E7E4DA] p-6 rounded-lg hover:scale-[1.02] transform transition-transform">
                <h3 className="text-xl font-semibold text-[#004225] mb-2">{achievement.title}</h3>
                <p className="text-black mb-2">{achievement.organization}</p>
                <p className="text-sm text-black mb-2">{achievement.date}</p>
                {achievement.credential && (
                  <p className="text-sm text-[#08591C] mb-3">{achievement.credential}</p>
                )}
                {achievement.skills && (
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#FFFDE7] text-[#004225] rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 