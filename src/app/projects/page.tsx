import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Deep Learning for Dementia Detection",
      subtitle: "Hackathon '23",
      date: "August 2023",
      githubLink: "https://github.com/oguzgnrn/HackathonProject-DeepLearningForDementia",
      highlights: [
        "Developed a deep learning model to detect Dementia from MRI scans",
        "Achieved 91% accuracy on a Kaggle dataset containing 6400 MRI images",
        "Implemented a Gradio-based user interface for instant diagnosis"
      ],
      description: `Participated in TechCrew's 24-Hour Hackathon'23, securing 2nd place with a Dementia detection model. My project aimed to create a reliable deep learning system for identifying Dementia. Despite time constraints and a modest dataset, the model performed strongly, achieving 91% accuracy. It centered on a Kaggle-sourced dataset of 6400 MRI images across four classes: Mild, Moderate, Non-Demented, and Very Mild Demented. Overcoming challenges, I refined the model architecture, resulting in improved accuracy. The addition of Gradio library created a user-friendly interface, allowing easy MRI uploads for instant Dementia predictions. This achievement highlights the potential of machine learning in healthcare, even with limited data.`,
      skills: {
        ml: ["Deep Learning", "Image Classification", "Neural Networks", "Transfer Learning", "Model Optimization"],
        tools: ["TensorFlow", "Keras", "Gradio", "Python", "Jupyter Notebook", "Git"],
        analysis: ["Data Augmentation", "Histogram Equalization", "Data Preprocessing", "Image Normalization"]
      }
    },
    {
      title: "Real-Time Image Recognition with YOLO",
      date: "Nov 2022 - May 2023",
      githubLink: "https://github.com/oguzgnrn/RealLifeProject-YOLOv5",
      highlights: [
        "Developed an object detection model using YOLOv5, OpenCV, and PyTorch",
        "Achieved an 87% success rate in real-life object detection"
      ],
      description: `We capitalized on our past successes in image recognition, leveraging models like VGG16, VGG19, EfficientNet, GoogleNet, ResNet50, and ResNet100 on TUBITAK project. Embarking on a new endeavor, we embraced YOLO (You Only Look Once), a potent real-time object spotting tool. Our project was built on curated image sets, featuring 100 categories with 150 images each, seamlessly integrated into a K-Fold system. Techniques like histogram equalization were employed to elevate image quality. Our fascination grew for YOLOv5, a paradigm shift in object detection that processes entire images concurrently, boosting efficiency. The harmonious blend of YOLOv5 with OpenCV and PyTorch played a pivotal role in our triumph. Through rigorous testing, different YOLOv5 models were evaluated, yielding exceptional results. Models like yolov5m enabled rapid and precise object detection across the 100 categories, each enriched with 150 annotated images. This journey culminated in an unprecedented 87% success rate, in real-life, surpassing all prior achievements in object detection.`,
      skills: {
        ml: ["Object Detection", "Real-Time Vision", "Deep Learning", "Transfer Learning", "Model Evaluation"],
        tools: ["YOLOv5", "PyTorch", "OpenCV", "Python", "Git", "Jupyter Notebook"],
        analysis: ["Image Preprocessing", "Data Augmentation", "K-Fold Cross Validation", "Object Labeling"]
      }
    },
    {
      title: "Image Recognition with Keras and TensorFlow",
      date: "May 2022 - Nov 2023",
      githubLink: "https://github.com/oguzgnrn/DomainSpecific-ImageRecognition",
      highlights: [
        "Trained deep learning models on a 100-class dataset",
        "Optimized model accuracy using various architectures including ResNet, EfficientNet, and VGG"
      ],
      description: `I have actively contributed to a TUBITAK project focused on image recognition and Deep Learning. With a primary focus on the 100 class dataset, each class featuring a collection of 150 images, I curated and annotated data to establish a strong model foundation. Using advanced techniques like histogram equalization and glare reduction, I enhanced data quality. I experimented with AlexNet, VGG16, VGG19, EfficientNet, GoogleNet, Resnet50, and Resnet100 models, optimizing their performance through meticulous parameter tuning and architecture design. My role centered on precise object detection and classification, aligning with project goals. Iterative experiments and adaptations refined model accuracy and overall performance. My involvement in dataset curation, image preprocessing, and model experimentation significantly contributed to the project's success.`,
      skills: {
        ml: ["Image Recognition", "Deep Learning", "Object Detection", "Model Tuning", "Transfer Learning"],
        tools: ["Keras", "TensorFlow", "Python", "PyTorch", "Git", "Jupyter Notebook"],
        analysis: ["Data Annotation", "Image Normalization", "Data Augmentation", "Histogram Equalization"]
      }
    }
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-[#004225]">Projects</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#E7E4DA] p-6 rounded-lg hover:scale-[1.01] transform transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#004225]">
                  {project.title}
                  {project.subtitle && <span className="text-lg ml-2">({project.subtitle})</span>}
                </h2>
                <p className="text-black">{project.date}</p>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004225] hover:text-[#08591C] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>

            <div className="space-y-4 mb-6">
              <ul className="list-disc list-inside space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-black">{highlight}</li>
                ))}
              </ul>
            </div>

            <p className="text-black mb-6 text-justify">{project.description}</p>

            <div className="space-y-3">
              {Object.entries(project.skills).map(([category, skills]) => (
                <div key={category} className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FFFDE7] text-[#004225] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 