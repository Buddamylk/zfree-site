import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, TrendingUp, Heart, Brain, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  Community Strategy & Consulting
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  Transform Vision Into
                  <span className="text-orange-600"> Meaningful Outcomes</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                  Hi, I'm <strong>Zaccai Free</strong>. I help cities, nonprofits, and housing communities move from
                  vision to outcomes through heart-centered leadership development rooted in emotional intelligence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <a href="mailto:info@zaccaifree.com">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                  asChild
                >
                  <Link href="/about">Learn More About My Approach</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Heart className="h-16 w-16 text-orange-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Heart-Centered Leadership</h3>
                  <p className="text-gray-600">Transforming communities through authentic connection</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Heart-Centered Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Core Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Comprehensive Community Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Specialized consulting services that bridge the gap between ambitious visions and sustainable, measurable
              outcomes for communities and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Community Strategy</CardTitle>
                <CardDescription>
                  Develop comprehensive strategies that align stakeholders and create sustainable pathways to success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stakeholder alignment workshops</li>
                  <li>• Strategic planning facilitation</li>
                  <li>• Community engagement frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Leadership Development</CardTitle>
                <CardDescription>
                  Heart-centered leadership training that integrates emotional intelligence and stress management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Emotional intelligence coaching</li>
                  <li>• Stress relief techniques</li>
                  <li>• Authentic leadership practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Implementation Support</CardTitle>
                <CardDescription>
                  Hands-on guidance to ensure your vision translates into concrete, measurable results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Project management guidance</li>
                  <li>• Performance measurement systems</li>
                  <li>• Continuous improvement processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                My Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                Heart-Centered Leadership That Delivers Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that sustainable community transformation happens when leaders operate from a place of
                emotional intelligence, authentic connection, and strategic clarity. My approach combines proven
                business methodologies with heart-centered practices that reduce stress and increase effectiveness.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emotional Intelligence Integration</h3>
                    <p className="text-gray-600">Building self-awareness and empathy into leadership practices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Stress Relief & Resilience</h3>
                    <p className="text-gray-600">Sustainable practices that prevent burnout and maintain momentum</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Measurable Outcomes</h3>
                    <p className="text-gray-600">Clear metrics and accountability systems that track real progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/strategy-board-meeting-diverse-professionals.jpg"
                  alt="Strategic planning session with diverse professionals"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
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
  )
}
