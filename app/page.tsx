"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
  
      {/* Sticky Wrapper */}
      <header className="sticky top-0 z-50">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-xl tracking-tight">Eric.io</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </motion.nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col items-center text-center pt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-emerald-400 text-xs md:text-sm font-mono mb-6 tracking-widest uppercase"
          >
            $ deploy-cloud-infra --platform=gcp --scale=auto
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-mono font-bold mb-2 tracking-tighter"
          >
            eric@cloud:~$
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-mono font-bold text-cyan-400 mb-8 tracking-tighter shadow-cyan-500/20 drop-shadow-lg"
          >
            whoami
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 font-mono mb-8"
          >
            {">"} Cloud Engineer & ML Infrastructure
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-2xl text-gray-400 leading-relaxed mb-10 text-lg"
          >
            Architecting scalable cloud infrastructure, containerizing machine learning models, and building modern web applications. Focused on high-availability deployments and intelligent systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-10 font-mono text-xs"
          >
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded-full">Cloud Run & GCE</span>
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full">Docker & Orchestration</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full">MLOps / AI</span>
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1.5 rounded-full">Next.js</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ericvkho/" 
              target="_blank" 
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ericvincentkho@gmail.com" 
              className="bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Email Me
            </motion.a>
          </motion.div>
        </section>

        {/* METRICS & OVERVIEW SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border border-gray-800 bg-[#111111] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black"
        >
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
                span: "col-span-2 md:col-span-2",
                link: "https://www.credly.com/your-practitioner-link"
              },
              { 
                stat: "AWS Certified Developer Associate", 
                label: "May 2025 - May 2029", 
                span: "col-span-2 md:col-span-2",
                link: "https://www.credly.com/your-developer-link"
              }
            ].map((item, i) => {
              const isLink = !!item.link;
              const CardTag = isLink ? 'a' : ('div' as any);
              const linkProps = isLink ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={item.span ? item.span : 'col-span-1'}
                >
                  <CardTag
                    {...linkProps}
                    className={`h-full border border-gray-800 bg-[#1a1a1a] rounded-xl p-6 text-center transition-all ${
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
                      {isLink && (
                        <svg className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      )}
                    </div>
                  </CardTag>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* SKILLS TERMINAL SECTION */}
        <section id="skills" className="pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-emerald-400 text-xs md:text-sm font-mono mb-4 tracking-widest uppercase">
              $ grep -r "expertise" /var/log/career.log
            </div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              ./skills --list --verbose
            </h2>
            <p className="text-gray-400 font-mono">
              {">"} A comprehensive arsenal of modern Cloud, ML, and Development tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Computing",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>,
                color: "blue",
                tag: "Infrastructure",
                desc: "Expertise in Google Cloud (GCE, Cloud Run, App Engine) and AWS. Building hybrid cloud strategies and scalable automated deployments.",
              },
              {
                title: "Containerization",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>,
                color: "emerald",
                tag: "DevOps",
                desc: "Packaging applications for portability and failover using Docker. Deployment to Cloud Run and managing cluster environments.",
              },
              {
                title: "MLOps & Integration",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>,
                color: "purple",
                tag: "AI / ML",
                desc: "Deploying CNN models (TensorFlow), YOLOv11 systems, and local LLM/RAG applications into production-ready Flask backends.",
              },
              {
                title: "Modern Web Dev",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>,
                color: "rose",
                tag: "Frontend",
                desc: "Building fast, responsive frontends using Next.js, React, and TailwindCSS. Creating seamless APIs bridging UI and Cloud systems.",
              }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 bg-${skill.color}-500/10 rounded-lg text-${skill.color}-400`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{skill.icon}</svg>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider border border-gray-700 px-2 py-1 rounded text-gray-400">{skill.tag}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}

             {/* Core Skill Card */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all lg:col-span-2"
              >
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
            </motion.div>
            
            {/* Automation Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:bg-[#151515] transition-all md:col-span-2 lg:col-span-3"
            >
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
            </motion.div>
          </div>
        </section>
        
        {/* PROJECTS TERMINAL SECTION */}
        <section id="projects" className="pt-20 border-t border-gray-800/50 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-blue-400 text-xs md:text-sm font-mono mb-4 tracking-widest uppercase">
              $ ls -la /var/www/deployments
            </div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              ./projects --status=production
            </h2>
            <p className="text-gray-400 font-mono">
              {">"} Architecting scalable systems, automated pipelines, and cloud-native applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* FEATURED CAPSTONE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-cyan-500/50 transition-all lg:col-span-2 group relative overflow-hidden"
            >
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
            </motion.div>

            {/* Other Projects */}
            {[
              {
                title: "Cloud Infrastructure Automation",
                role: "Infrastructure as Code (IaC)",
                color: "orange",
                desc: "Automated complex infrastructure setup on Google Cloud using Terraform. Focused on modular scalability, immutable infrastructure principles, and enforcing cloud security best practices to eliminate manual provisioning errors.",
                tags: ["Terraform", "GCP", "Security Policies"]
              },
              {
                title: "AgriScan AI Backend",
                role: "MLOps & Cloud Engineer",
                color: "emerald",
                desc: "Engineered the backend infrastructure for a mobile plant disease detection app. Containerized a TensorFlow/Keras classification model within a Flask API, deploying it seamlessly to Google Cloud Run to handle fluctuating traffic loads efficiently.",
                tags: ["Docker", "Cloud Run", "TensorFlow"]
              },
              {
                title: "Car Brand Identifier AI",
                role: "Cloud Engineer",
                color: "purple",
                desc: "Managed the cloud deployment lifecycle for an AI identification tool. Packaged application services via Docker and orchestrated the deployment on Cloud Run for high fault tolerance. Secured data storage utilizing Firebase and GCP Cloud Buckets.",
                tags: ["Cloud Run", "Firebase", "Cloud Storage"]
              }
            ].map((proj, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-${proj.color}-500/50 transition-all flex flex-col justify-between`}
               >
                 <div>
                   <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                   <p className={`text-${proj.color}-400 font-mono text-sm mb-4`}>{">"} {proj.role}</p>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
                 </div>
                 <div className="flex flex-wrap gap-2 font-mono text-xs">
                   {proj.tags.map(tag => (
                     <span key={tag} className="text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800">{tag}</span>
                   ))}
                 </div>
               </motion.div>
            ))}
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="pt-20 border-t border-gray-800/50 mt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to discuss cloud infrastructure and deployment solutions? I'd love to hear about your engineering challenges and explore how we can build something highly scalable together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Email", desc: "ericvincentkho@gmail.com", link: "mailto:ericvincentkho@gmail.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, color: "cyan" },
              { title: "GitHub", desc: "Check out my repositories", link: "https://github.com/khovincent", icon: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />, color: "emerald" },
              { title: "LinkedIn", desc: "Connect with me", link: "https://linkedin.com/in/ericvkho/", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />, color: "blue" },
              { title: "Download Resume", desc: "View my full experience", link: "/resume-ericvincentkho.pdf", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />, color: "purple" }
            ].map((contact, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-${contact.color}-500/50 transition-colors flex items-center gap-6 group`}
              >
                <div className={`p-4 bg-[#1a1a1a] rounded-full text-${contact.color}-400 group-hover:bg-${contact.color}-500/10 transition-colors`}>
                  <svg className="w-6 h-6" fill={contact.color === 'cyan' || contact.color === 'purple' ? 'none' : 'currentColor'} stroke={contact.color === 'cyan' || contact.color === 'purple' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                    {contact.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{contact.title}</h4>
                  <p className="text-gray-400 text-sm">{contact.desc}</p>
                </div>
              </motion.a>
            ))}
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
          </div>

          <div>
            <h5 className="font-bold text-gray-200 mb-4 tracking-wide">Quick Links</h5>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#about" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
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
          <p>Copyright © 2026. Designed and Developed by <span className="text-cyan-400 font-medium">Eric.io</span></p>
          <p className="mt-2 md:mt-0">Architecting Scalable Cloud Platforms</p>
        </div>
      </footer>
    </div>
  );
}