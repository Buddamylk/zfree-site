import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Zap, Users, Target, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Zaccai Free — Heart-Centered Leadership Development",
  description:
    "Learn about Zaccai Free's approach to transformational leadership through emotional intelligence, stress relief, and authentic presence. Heart-centered consulting for lasting change.",
  keywords:
    "heart-centered leadership, emotional intelligence, stress relief, leadership development, authentic presence, transformational leadership, Zaccai Free",
  openGraph: {
    title: "About Zaccai Free — Heart-Centered Leadership Development",
    description:
      "Learn about Zaccai Free's approach to transformational leadership through emotional intelligence, stress relief, and authentic presence.",
    url: "https://www.zaccaifree.com/about",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zaccai Free</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                Home
              </a>
              <a href="/about" className="text-orange-600 font-medium">
                About
              </a>
              <a href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                Services
              </a>
              <a href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Heart-Centered Leadership</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Leading with Heart, Mind, and Purpose
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Transforming organizations through emotional intelligence, stress relief, and authentic leadership
            development that creates lasting change from the inside out.
          </p>
        </section>

        {/* Core Philosophy */}
        <section className="mb-16">
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-orange-500" />
                The Heart-Centered Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                True leadership transformation begins from within. My approach integrates emotional intelligence,
                mindfulness practices, and stress reduction techniques to help leaders develop authentic presence,
                deeper self-awareness, and the capacity to inspire genuine change in their organizations and
                communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When leaders operate from a place of emotional clarity and inner balance, they create environments where
                teams thrive, innovation flourishes, and sustainable solutions emerge naturally. This isn't just about
                managing stress—it's about cultivating the inner resources that make exceptional leadership possible.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transformational Leadership Development
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Emotional Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop deeper self-awareness, empathy, and emotional regulation skills that enhance decision-making,
                  communication, and relationship building in high-pressure environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Stress Relief & Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn evidence-based techniques for managing stress, building resilience, and maintaining peak
                  performance while navigating complex challenges and organizational change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Authentic Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cultivate genuine leadership presence that inspires trust, fosters collaboration, and creates
                  psychological safety for teams to perform at their highest potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Heart-Centered Leadership Matters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Enhanced Decision-Making:</strong> Leaders who understand their emotional patterns make
                    clearer, more strategic decisions under pressure.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Improved Team Dynamics:</strong> Emotionally intelligent leaders create environments where
                    creativity, innovation, and collaboration naturally flourish.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Sustainable Performance:</strong> Stress management and resilience practices prevent burnout
                    while maintaining high performance over the long term.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Organizational Transformation:</strong> When leaders embody these principles, positive
                    change ripples throughout the entire organization.
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "The best leaders are those who lead from the heart while thinking with the mind. They understand that
                  sustainable change happens when we address both the emotional and strategic dimensions of leadership."
                </blockquote>
                <cite className="text-orange-700 font-medium">— Zaccai Free</cite>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Leadership?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover how heart-centered leadership development can unlock your potential and create lasting positive
                change in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8" asChild>
                  <a href="mailto:info@zaccaifree.com">Schedule a Consultation</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 bg-transparent"
                  asChild
                >
                  <a href="/">Learn More About Services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
  )
}
