import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do I need any prior coding experience?',
    answer: 'No! Our courses are designed for complete beginners. We start from the basics and guide you step-by-step through everything you need to know.',
  },
  {
    question: 'How does the 60-day guarantee work?',
    answer: "If you complete the Professional or Elite program and don't land your first paying AI automation client within 60 days, we'll refund every penny. No questions asked.",
  },
  {
    question: 'What is n8n and why should I learn it?',
    answer: 'n8n is a powerful workflow automation tool that lets you connect apps and automate tasks without coding. Businesses pay $5K-$50K for n8n automations, making it a highly profitable skill.',
  },
  {
    question: 'How long will it take to complete the courses?',
    answer: 'Most students complete the core curriculum in 4-6 weeks when studying 1-2 hours per day. However, you have lifetime access so you can learn at your own pace.',
  },
  {
    question: 'Will I get support if I get stuck?',
    answer: 'Absolutely! All plans include community access where you can ask questions. Professional and Elite plans include priority support and live classes for real-time help.',
  },
  {
    question: 'Can I really start an automation business with this?',
    answer: "Yes! Our curriculum is specifically designed to help you land paying clients. We teach you not just the technical skills, but also how to find clients, pitch your services, and deliver results.",
  },
];

const FAQsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked
            </h2>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-muted-foreground">
              Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:no-underline hover:text-foreground/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
