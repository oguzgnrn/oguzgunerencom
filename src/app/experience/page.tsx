import content from '../cv-content.json';
import { ExperienceCards } from '../components/CvContent';
export default function Experience() {
  return <div className="space-y-8"><h1 className="text-3xl sm:text-4xl font-bold">Experience</h1><ExperienceCards text={content.experience} /></div>;
}
