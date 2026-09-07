import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaPhone } from 'react-icons/fa';
import content from './cv-content.json';
import Link from 'next/link';
import OrganizationLogo from './components/OrganizationLogo';
import { CvText, CvDownloads, EducationCard } from './components/CvContent';

export default function Home() {
  return <div className="space-y-10 sm:space-y-14">
    <section className="bg-[#E7E4DA] px-5 py-10 sm:py-16 rounded-2xl text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{content.name}</h1>
      <p className="text-lg sm:text-2xl mt-4">{content.title}</p>
      <CvDownloads />
    </section>
    <section className="space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
      <div className="bg-[#E7E4DA] p-5 sm:p-8 rounded-xl"><CvText text={content.about} /></div>
    </section>
    <section className="space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
      <EducationCard text={content.education} gpa={content.educationGpa} />
    </section>
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4"><h2 className="text-2xl sm:text-3xl font-bold">AI products I build</h2><Link href="/projects" className="text-sm text-[#004225] underline underline-offset-4">All projects ↗</Link></div>
      <div className="grid gap-5 md:grid-cols-2">
        <article className="flex flex-col rounded-xl border border-[#004225]/15 bg-white/60 p-5 sm:p-7">
          <div className="flex items-center gap-4"><OrganizationLogo name="SPOT" /><div><h3 className="text-2xl">SPOT</h3><p className="mt-1 text-sm text-[#4A4A4A]">AI Engineer &amp; Founding Partner</p></div></div>
          <p className="my-5 leading-relaxed">Full basketball games become automated statistics, shot maps, and highlight clips. Five vision models, custom algorithms, and distributed GPU inference power the platform.</p>
          <div className="mt-auto flex flex-wrap gap-5 text-sm font-medium text-[#004225]"><Link className="underline underline-offset-4" href="/projects#spot">See SPOT ↗</Link><a className="underline underline-offset-4" href="https://youtube.com/watch?v=W4eGxCQr0tk" target="_blank" rel="noopener noreferrer">Watch demo ↗</a></div>
        </article>
        <article className="flex flex-col rounded-xl border border-[#004225]/15 bg-white/60 p-5 sm:p-7">
          <div className="py-2"><h3 className="text-2xl">EComGen</h3><p className="mt-1 text-sm text-[#4A4A4A]">Founder · Full-Stack AI / Generative AI</p></div>
          <p className="my-5 leading-relaxed">A generative AI platform for product imagery, video, and multilingual SEO content, connecting Gemini and Veo with Shopify and Amazon workflows in a complete SaaS product.</p>
          <div className="mt-auto flex flex-wrap gap-5 text-sm font-medium text-[#004225]"><Link className="underline underline-offset-4" href="/projects#ecomgen">See EComGen ↗</Link><a className="underline underline-offset-4" href="https://www.youtube.com/watch?v=BnrTY1mWj_E" target="_blank" rel="noopener noreferrer">Watch demo ↗</a></div>
        </article>
      </div>
    </section>
    <section className="space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">{content.skills.split('\n').filter(Boolean).map((line, i) => {
        const colon = line.indexOf(':');
        return <div key={i} className="bg-[#E7E4DA] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">{line.slice(0, colon)}:</h3>
          <p className="text-sm sm:text-base leading-relaxed">{line.slice(colon + 1)}</p>
        </div>;
      })}</div>
    </section>
      {/* Contact Section */}
      <section className="space-y-4 sm:space-y-6 md:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#004225]">Get in Touch</h2>
        <div className="bg-[#E7E4DA] p-4 sm:p-5 md:p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaEnvelope className="text-[#004225] text-lg sm:text-xl flex-shrink-0" />
                <a href="mailto:gnrnoguz@gmail.com" className="text-sm sm:text-base text-black hover:text-[#004225] break-all">
                  gnrnoguz@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <FaPhone className="text-[#004225] text-lg sm:text-xl flex-shrink-0" />
                <span className="text-sm sm:text-base text-black">+90 551 126 23 26</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://github.com/oguzgnrn"
                target="_blank"
                rel="noopener noreferrer"
                className="button text-sm sm:text-base px-4 sm:px-6 py-2 flex items-center justify-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://medium.com/@gnrnoguz"
                target="_blank"
                rel="noopener noreferrer"
                className="button text-sm sm:text-base px-4 sm:px-6 py-2 flex items-center justify-center"
              >
                <FaMedium className="mr-2" /> Medium
              </a>
              <a
                href="https://www.linkedin.com/in/oguzgnrn"
                target="_blank"
                rel="noopener noreferrer"
                className="button text-sm sm:text-base px-4 sm:px-6 py-2 flex items-center justify-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
  </div>;
}
