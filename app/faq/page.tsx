import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "FAQ - Heart-Centered Leadership & Community Strategy | Zaccai Free",
  description:
    "Get answers to frequently asked questions about heart-centered leadership, community strategy consulting, emotional intelligence training, and community transformation services.",
  keywords:
    "heart-centered leadership FAQ, community strategy questions, emotional intelligence coaching, nonprofit leadership development, stakeholder alignment, community transformation consultant",
  openGraph: {
    title: "FAQ - Heart-Centered Leadership & Community Strategy",
    description:
      "Get answers to common questions about heart-centered leadership and community transformation consulting.",
    url: "https://www.zaccaifree.com/faq",
  },
}

const faqs = [
  {
    question: "What is heart-centered leadership?",
    answer:
      "Heart-centered leadership is an approach that integrates emotional intelligence, authentic connection, and strategic clarity to create sustainable community transformation. This leadership style combines proven business methodologies with mindfulness practices and stress reduction techniques, helping leaders develop genuine presence and the capacity to inspire meaningful change in their organizations and communities.",
  },
  {
    question: "How does heart-centered leadership differ from traditional leadership approaches?",
    answer:
      "Unlike traditional leadership that focuses primarily on results and processes, heart-centered leadership emphasizes the emotional and interpersonal aspects of leadership. It prioritizes self-awareness, empathy, and emotional regulation while maintaining strategic focus. This approach prevents burnout, improves decision-making under pressure, and creates environments where teams naturally collaborate and innovate.",
  },
  {
    question: "What services does Zaccai Free offer for community transformation?",
    answer:
      "Zaccai Free provides three core services: Community Strategy (stakeholder alignment workshops, strategic planning facilitation, and community engagement frameworks), Leadership Development (emotional intelligence coaching, stress relief techniques, and authentic leadership practices), and Implementation Support (project management guidance, performance measurement systems, and continuous improvement processes).",
  },
  {
    question: "Who can benefit from heart-centered leadership training?",
    answer:
      "Heart-centered leadership training is ideal for cities, nonprofits, housing communities, community leaders, and organization executives who want to move from vision to measurable outcomes. It's particularly valuable for leaders in high-stress environments who need to maintain peak performance while preventing burnout and fostering team collaboration.",
  },
  {
    question: "How long does it take to see results from heart-centered leadership development?",
    answer:
      "While individual experiences vary, most leaders begin noticing improved self-awareness and stress management within 3-4 weeks of implementing heart-centered practices. Measurable organizational changes, such as improved team dynamics and enhanced decision-making, typically emerge within 2-3 months. Long-term community transformation results develop over 6-12 months as new leadership practices become embedded in organizational culture.",
  },
  {
    question: "What is emotional intelligence integration in leadership?",
    answer:
      "Emotional intelligence integration involves building self-awareness and empathy directly into leadership practices. This includes developing skills in emotional regulation, understanding team dynamics, improving communication under pressure, and creating psychological safety for innovation. Leaders learn to recognize their emotional patterns to make clearer, more strategic decisions even in high-stress situations.",
  },
  {
    question: "How do you measure community transformation success?",
    answer:
      "Community transformation success is measured through clear metrics and accountability systems that track real progress. This includes stakeholder engagement levels, project milestone completion rates, community participation metrics, leadership effectiveness assessments, and long-term sustainability indicators. Each engagement includes customized performance measurement systems aligned with specific community goals.",
  },
  {
    question: "What stress relief techniques are most effective for community leaders?",
    answer:
      "Effective stress relief techniques for community leaders include mindfulness-based practices, emotional regulation strategies, resilience-building exercises, and sustainable work-life integration methods. These evidence-based techniques help leaders maintain peak performance while navigating complex challenges and organizational change, preventing burnout while sustaining momentum.",
  },
  {
    question: "How does stakeholder alignment work in community projects?",
    answer:
      "Stakeholder alignment involves structured workshops and facilitation processes that identify common goals, address conflicting interests, and create shared pathways forward. This process includes mapping stakeholder perspectives, facilitating difficult conversations, establishing clear communication protocols, and developing collaborative decision-making frameworks that ensure all voices are heard and valued.",
  },
  {
    question: "What makes community engagement frameworks effective?",
    answer:
      "Effective community engagement frameworks are built on authentic connection, clear communication structures, and sustainable participation models. They include systematic approaches for gathering community input, transparent decision-making processes, regular feedback loops, and mechanisms for addressing concerns. These frameworks ensure that community members feel genuinely heard and empowered to contribute to transformation efforts.",
  },
  {
    question: "Can heart-centered leadership principles be applied to nonprofit organizations?",
    answer:
      "Yes, heart-centered leadership is particularly well-suited for nonprofit organizations because it aligns with mission-driven values while providing practical tools for operational effectiveness. Nonprofit leaders using these principles report improved donor relationships, enhanced volunteer engagement, more effective board dynamics, and stronger community partnerships, all while maintaining focus on their social impact mission.",
  },
  {
    question: "What is the difference between community strategy and traditional strategic planning?",
    answer:
      "Community strategy goes beyond traditional strategic planning by emphasizing stakeholder engagement, emotional intelligence, and sustainable relationship-building. While traditional planning focuses on goals and tactics, community strategy integrates the human elements of change, addresses resistance compassionately, and creates frameworks for ongoing adaptation and community ownership of outcomes.",
  },
  {
    question: "How do you ensure sustainable implementation of community transformation initiatives?",
    answer:
      "Sustainable implementation requires comprehensive support systems including project management guidance, continuous improvement processes, regular progress assessment, stakeholder feedback integration, and adaptive strategy adjustment. This approach includes building internal capacity, creating accountability structures, and establishing maintenance protocols that ensure long-term success beyond the initial consulting engagement.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Zaccai Free Community Strategy & Consulting",
            description:
              "Heart-centered leadership development and community strategy consulting for cities, nonprofits, and housing communities",
            url: "https://www.zaccaifree.com",
            serviceType: ["Leadership Development", "Community Strategy", "Emotional Intelligence Coaching"],
            areaServed: "United States",
            founder: {
              "@type": "Person",
              name: "Zaccai Free",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-balance">
              Heart-Centered Leadership &<span className="text-orange-600"> Community Strategy FAQ</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty max-w-3xl mx-auto">
              Get answers about heart-centered leadership, community strategy consulting, and how we help transform
              community visions into measurable outcomes.
            </p>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Heart-Centered Leadership & Community Strategy</h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:text-orange-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
              Ready to Transform Your Community Vision Into Reality?
            </h2>
            <p className="text-xl text-gray-300 text-pretty">
              Let's work together to create sustainable change through heart-centered leadership and strategic
              implementation that delivers measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                <a href="mailto:info@zaccaifree.com">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About My Approach</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-bold">Zaccai Free</span>
                </div>
                <p className="text-gray-400">Heart-centered leadership development and strategic consulting.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Community Building</li>
                  <li>Stress Reduction</li>
                  <li>Strategic Planning</li>
                  <li>Change Management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>info@zaccaifree.com</p>
                  <p>WhatsApp: +1 (202) 787-0664</p>
                  <p>Available Worldwide</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Zaccai Free. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
