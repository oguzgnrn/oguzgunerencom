import content from '../cv-content.json';
import { CvCards } from '../components/CvContent';
export default function Projects() {
  const [, ...lines] = content.projects.split('\n');
  const repeatedHeading = lines.shift();
  return <div className="space-y-8">
    <header><h1 className="text-3xl sm:text-4xl font-bold">PROJECTS</h1><p className="text-sm mt-2 text-[#004225]">{repeatedHeading}</p></header>
    <CvCards text={lines.join('\n').trim()} />
  </div>;
}
