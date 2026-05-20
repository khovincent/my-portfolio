import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">Eric.io</span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col items-center text-center pt-10">
          <div className="text-emerald-400 text-xs md:text-sm font-mono mb-6 tracking-widest uppercase">
            $ deploy-cloud-infra --platform=gcp&aws --scale=auto
          </div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-2 tracking-tighter">
            eric@cloud:~$
          </h1>
          <h2 className="text-5xl md:text-7xl font-mono font-bold text-cyan-400 mb-8 tracking-tighter shadow-cyan-500/20 drop-shadow-lg">
            whoami
          </h2>
          
          <h3 className="text-xl md:text-2xl text-gray-400 font-mono mb-8">
            {">"} Cloud Engineer & ML Infrastructure
          </h3>
          
          <p className="max-w-2xl text-gray-400 leading-relaxed mb-10 text-lg">
            Architecting scalable cloud infrastructure, containerizing machine learning models, and building modern web applications. Focused on high-availability deployments and intelligent systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 font-mono text-xs">
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded-full">Cloud Run & GCE</span>
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full">Docker & Orchestration</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full">MLOps / AI</span>
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1.5 rounded-full">Next.js</span>
          </div>

          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/ericvkho/" target="_blank" className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </Link>
            <Link href="mailto:ericvincentkho@gmail.com" className="bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Email Me
            </Link>
          </div>
        </section>

        {/* METRICS & OVERVIEW SECTION */}
        <section className="border border-gray-800 bg-[#111111] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Cloud Engineer & Developer</h2>
            <p className="text-gray-400">Building scalable infrastructure and deploying intelligent models that power innovation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: "5+", label: "Cloud Certifications" },
              { stat: "100%", label: "Uptime on Deployments" },
              { stat: "4+", label: "Major Projects Delivered" },
              { stat: "Cloud Computing", label: "Bangkit Academy 2024" },
              { 
                stat: "AWS Certified Practitioner", 
                label: "Jan 2025 - Jan 2029", 
                span: "col-span-2 md:col-span-2", // Forces it to stretch
                link: "https://www.credly.com/badges/9740df02-bbda-46a1-947b-1fc87913304e/linked_in_profile" // Add your cert URL
              },
              { 
                stat: "AWS Certified Developer Associate", 
                label: "May 2025 - May 2029", 
                span: "col-span-2 md:col-span-2", // Forces it to stretch
                link: "https://www.credly.com/badges/983af7ca-c15f-4b36-aedd-343fe895efc6/linked_in_profile" // Add your cert URL
              }
            ].map((item, i) => {
              // Dynamic Tag: Renders an <a> if there is a link, otherwise a <div>
              const isLink = !!item.link;
              const CardTag = isLink ? 'a' : ('div' as any);
              const linkProps = isLink ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};

              return (
                <CardTag
                  key={i}
                  {...linkProps}
                  className={`border border-gray-800 bg-[#1a1a1a] rounded-xl p-6 text-center transition-all ${
                    item.span ? item.span : 'col-span-1'
                  } ${
                    isLink 
                      ? 'hover:border-cyan-500/50 hover:bg-[#1f1f1f] cursor-pointer group block' 
                      : 'hover:border-gray-700'
                  }`}
                >
                  <div className={`font-bold text-cyan-400 mb-2 ${item.span ? 'text-2xl md:text-3xl' : 'text-3xl'} ${isLink ? 'group-hover:text-cyan-300' : ''}`}>
                    {item.stat}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold flex items-center justify-center gap-2">
                    {item.label}
                    {/* Adds a small external link icon if it's clickable */}
                    {isLink && (
                      <svg className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    )}
                  </div>
                </CardTag>
              );
            })}
          </div>
        </section>

        {/* SKILLS TERMINAL SECTION */}
        <section id="skills" className="pt-10">
          <div className="text-center mb-16">
            <div className="text-emerald-400 text-xs md:text-sm font-mono mb-4 tracking-widest uppercase">
              $ grep -r "expertise" /var/log/career.log
            </div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              ./skills --list --verbose
            </h2>
            <p className="text-gray-400 font-mono">
              {">"} A comprehensive arsenal of modern Cloud, ML, and Development tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Card 1 */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">Infrastructure</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expertise in Google Cloud (GCE, Cloud Run, App Engine) and AWS. Building hybrid cloud strategies and scalable automated deployments.
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">DevOps</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Containerization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Packaging applications for portability and failover using Docker. Deployment to Cloud Run and managing cluster environments.
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">AI / ML</span>
              </div>
              <h3 className="text-xl font-bold mb-2">MLOps & Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploying CNN models (TensorFlow), YOLOv11 systems, and local LLM/RAG applications into production-ready Flask backends.
              </p>
            </div>

            {/* Skill Card 4 */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">Frontend</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Web Dev</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building fast, responsive frontends using Next.js, React, and TailwindCSS. Creating seamless APIs bridging UI and Cloud systems.
              </p>
            </div>

             {/* Skill Card 5 */}
             <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">Core</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Languages & Databases</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Proficient in Python, Java, JavaScript, and TypeScript. Extensive experience managing data securely across Firebase, MySQL, and SQLite within Linux environments.
              </p>
              <div className="flex gap-2 font-mono text-xs text-gray-500">
                <span>❯ python</span>
                <span>❯ typescript</span>
                <span>❯ bash</span>
                <span>❯ sql</span>
              </div>
            </div>
            
            {/* New IaC / Orchestration Card */}
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all md:col-span-2 lg:col-span-3">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">Automation</span>
              </div>
              <h3 className="text-xl font-bold mb-2">IaC & Orchestration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automating scalable infrastructure provisioning on Google Cloud using Terraform. Container orchestration and cluster management using Kubernetes.
              </p>
            </div>
          </div>
        </section>
        
        {/* PROJECTS TERMINAL SECTION */}
        <section id="projects" className="pt-20 border-t border-gray-800/50 mt-20">
          <div className="mb-12">
            <div className="text-blue-400 text-xs md:text-sm font-mono mb-4 tracking-widest uppercase">
              $ ls -la /var/www/deployments
            </div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              ./projects --status=production
            </h2>
            <p className="text-gray-400 font-mono">
              {">"} Architecting scalable systems, automated pipelines, and cloud-native applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* FEATURED CAPSTONE: ANPR (Spans Full Width) */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-cyan-500/50 transition-all lg:col-span-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase">Featured Architecture</span>
                  <span className="text-gray-500 text-sm font-mono">Oct 2024 - Dec 2024</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Automatic Number Plate Recognition (ANPR)</h3>
                <p className="text-cyan-400 font-mono text-sm mb-6">{">"} Team Lead & Cloud Engineer</p>
                
                <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                  Designed and deployed a highly scalable, cloud-based ANPR system. Integrated YOLOv11 for object detection and PaddleOCR for text recognition on Compute Engine instances. Architected the infrastructure for high availability by containerizing services with Docker and deploying them to Cloud Run as a failover mechanism. Secured the platform using HTTPS, customized firewall rules, and integrated a Next.js frontend with Firebase.
                </p>
                
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-gray-800">Google Cloud (GCE/Cloud Run)</span>
                  <span className="text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-gray-800">Docker</span>
                  <span className="text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-gray-800">YOLOv11</span>
                  <span className="text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-gray-800">Next.js</span>
                </div>
              </div>
            </div>

            {/* PROJECT: Cloud Infrastructure Automation */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-orange-500/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Cloud Infrastructure Automation</h3>
                <p className="text-orange-400 font-mono text-sm mb-4">{">"} Infrastructure as Code (IaC)</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Automated complex infrastructure setup on Google Cloud using Terraform. Focused on modular scalability, immutable infrastructure principles, and enforcing cloud security best practices to eliminate manual provisioning errors.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Terraform</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">GCP</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Security Policies</span>
              </div>
            </div>

            {/* PROJECT: AgriScan */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">AgriScan AI Backend</h3>
                <p className="text-emerald-400 font-mono text-sm mb-4">{">"} MLOps & Cloud Engineer</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Engineered the backend infrastructure for a mobile plant disease detection app. Containerized a TensorFlow/Keras classification model within a Flask API, deploying it seamlessly to Google Cloud Run to handle fluctuating traffic loads efficiently.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Docker</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Cloud Run</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">TensorFlow</span>
              </div>
            </div>

            {/* PROJECT: Car Brand Identifier */}
            <div className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-purple-500/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Car Brand Identifier AI</h3>
                <p className="text-purple-400 font-mono text-sm mb-4">{">"} Cloud Engineer</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Managed the cloud deployment lifecycle for an AI identification tool. Packaged application services via Docker and orchestrated the deployment on Cloud Run for high fault tolerance. Secured data storage utilizing Firebase and GCP Cloud Buckets.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Cloud Run</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Firebase</span>
                <span className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">Cloud Storage</span>
              </div>
            </div>

          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="pt-20 border-t border-gray-800/50 mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to discuss cloud infrastructure and deployment solutions? I'd love to hear about your engineering challenges and explore how we can build something highly scalable together.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Email Card */}
            <a href="mailto:ericvincentkho@gmail.com" className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all flex items-center gap-6 group">
              <div className="p-4 bg-[#1a1a1a] rounded-full text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <p className="text-gray-400 text-sm">ericvincentkho@gmail.com</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all flex items-center gap-6 group">
              <div className="p-4 bg-[#1a1a1a] rounded-full text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">GitHub</h4>
                <p className="text-gray-400 text-sm">Check out my repositories</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://linkedin.com/in/ericvkho/" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 transition-all flex items-center gap-6 group">
              <div className="p-4 bg-[#1a1a1a] rounded-full text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">LinkedIn</h4>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </div>
            </a>

            {/* Resume Card */}
            <a href="/resume-ericvincentkho.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-all flex items-center gap-6 group">
              <div className="p-4 bg-[#1a1a1a] rounded-full text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Download Resume</h4>
                <p className="text-gray-400 text-sm">View my full experience</p>
              </div>
            </a>
          </div>

          {/* CTA Box */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's discuss your vision and architect a highly resilient, cloud-native backend to support it.</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:ericvincentkho@gmail.com" className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Send a Message
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                View GitHub
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-[#0a0a0a] pt-16 pb-8 px-6 text-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="w-full h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-6"></div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Cloud Engineer & Informatics Student specializing in highly scalable architecture, containerization, and automated deployments. Building the modern web, one container at a time.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://linkedin.com/in/ericvkho/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-gray-200 mb-4 tracking-wide">Quick Links</h5>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-200 mb-4 tracking-wide">Resources</h5>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/resume-ericvincentkho.pdf" target="_blank" className="hover:text-cyan-400 transition-colors">Download Resume</a></li>
              <li><a href="https://github.com/khovincent" target="_blank" className="hover:text-cyan-400 transition-colors">GitHub Projects</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-5xl mx-auto pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>Copyright © 2026. Designed and Developed by <span className="text-cyan-400 font-medium">Eric Vincent Kho</span></p>
          <p className="mt-2 md:mt-0">Architecting Scalable Cloud Platforms</p>
        </div>
      </footer>
    </div>
  );
}