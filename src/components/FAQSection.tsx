import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does your monthly retainer model work?",
    answer:
      "Our monthly retainer gives you full access to our design, production, and sourcing teams. You pay a fixed monthly fee and receive unlimited support for your fashion projects.\nThere are no hidden costs, no minimum order quantities (MOQs) — just a dedicated, expert team working alongside you to bring your brand vision to life.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "We believe in flexibility. That’s why Krazy Kreators operates with no MOQ. Whether you're a new brand starting small or experimenting with fresh ideas, we're here to support you without rigid production constraints.",
  },
  {
    question: "Can I use only design services without opting for production?",
    answer:
      "Absolutely. You can work with us just for design. We offer:\n\n- Tech pack creation\n- Pattern making\n- Sample development\n- Design consultations\n\nAll as standalone services. You’re free to add production later when you’re ready.",
  },
  {
    question: "Do you support international brands?",
    answer:
      "Yes, we do. Krazy Kreators collaborates with brands across America, Europe, Australia, and Asia. Our team is experienced in handling international shipping, customs documentation, and time zone coordination — ensuring smooth execution wherever you are.",
  },
  {
    question: "What’s included in the sample development phase?",
    answer:
      "Our sample development phase includes:\n\n- Concept sketches\n- Technical drawings\n- Material sourcing\n- Pattern creation\n- 2–3 sample iterations for refinement\n\nWe work closely with you at every step to ensure your design is production-ready.",
  },
  {
    question: "Can I pause or cancel my retainer anytime?",
    answer:
      "Yes, you have complete control and flexibility. You can pause your retainer whenever needed and resume it at any time — no long-term commitments or lock-ins.",
  },
  {
    question: "Do you offer tech packs or CADs separately?",
    answer:
      "Yes. If you only need tech packs, flat sketches, or CAD files, we offer these as independent deliverables. Perfect if you’re working with another production partner or just getting your concepts documented.",
  },
  {
    question: "How do I track the progress of my project?",
    answer:
      "You get access to our Client Dashboard — a custom-built tool developed by Krazy Kreators. It gives you real-time updates on every stage: from design approvals to sourcing and dispatch.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Our pricing is transparent and tiered. We offer flat monthly retainers for ongoing support and clear estimates for one-off projects. You'll always have access to cost breakdowns, so there are no surprises.",
  },
  {
    question: "What if I need both design and production — but not at the same time?",
    answer:
      "No problem. You can start with design, pause, and come back for production whenever you're ready. Our systems are built to support your pace and growth.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-br from-[#23182b] to-[#1a1a1a] py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-3xl rounded-3xl bg-[#18121e]/90 px-6 py-12 md:px-12 md:py-16 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Everything you need to know about working with Krazy Kreators. If you have more questions, just reach out!
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none"
                  onClick={() => handleToggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-content-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-5 pt-0 text-base text-white/80 whitespace-pre-line"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection; 