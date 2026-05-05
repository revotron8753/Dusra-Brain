import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/sections/Footer';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Dusra Brain | AI Automation Insights</title>
        <meta name="description" content="Insights, strategies, and guides on AI automation for B2B growth teams." />
      </Head>

      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-hero__tag">Insights</div>
            <h1 className="blog-hero__title">
              AI growth, <span>decoded.</span>
            </h1>
            <p className="blog-hero__subtitle">
              Strategies, playbooks, and real-world results from the frontlines of B2B AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          <p className="blog-empty">No posts published yet. Check back soon.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
