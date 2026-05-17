import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const TEAM = [
  { img: '/assets/Faces/Priyam.jpg', name: 'Priyam', title: 'CEO', bio: 'Helping businesses move from manual chaos to AI-driven systems across marketing, sales, and operations. Vision — System that builds 100CR business with Solo Founders.', tag: 'CEO' },
  { img: '/assets/Faces/Ayush.jpg', name: 'Ayush Kapoor', title: 'Founder', bio: 'Business Automations Expert, Founder at Dusra Brain. Building 1-person businesses to reach $1M+ valuations.', tag: 'Founder', imgPosition: 'center 20%' },
  { img: '/assets/Faces/Anurag Gupta.jpg', name: 'Anurag Gupta', title: 'Co-Founder', bio: 'AI automation professional driving NGO-led impact projects and smart technology solutions. Connected with government policymakers, global investors, and international networks. Empowering businesses, villages, and young entrepreneurs through digital transformation, sustainability, and innovation. Building a smarter, globally connected India through technology, climate action, and impactful partnerships.', tag: 'Co-Founder', imgPosition: 'right 50%' },
];

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="team-header text-center"
        >
          <div className="section-tag-light">The People</div>
          <h2 className="team-title">
            Meet the team behind<br />
            <span className="team-accent">the magic.</span>
          </h2>
          <p className="team-sub">
            Operators, strategists, and builders who've done it at scale —
            now putting AI to work for your growth.
          </p>
        </motion.div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="team-card"
            >
              <div className="team-photo-wrap">
                <Image src={member.img} alt={member.name} fill className="team-photo" style={member.imgScale ? { transform: `scale(${member.imgScale})`, transformOrigin: member.imgPosition || 'center center' } : member.imgPosition ? { objectPosition: member.imgPosition } : undefined} />
                <span className="team-tag-badge">{member.tag}</span>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title-text">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  <a href="https://www.linkedin.com/company/100xaico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="team-social-link">
                    <Linkedin size={15} />
                  </a>
                  <a href="#" aria-label="Twitter" className="team-social-link">
                    <Twitter size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
