import content from '../cv-content.json';
import { ProjectCards } from '../components/CvContent';
export default function Projects() {
  return <div className="space-y-8"><h1 className="text-3xl sm:text-4xl font-bold">Projects</h1><ProjectCards text={content.projects} /></div>;
}
