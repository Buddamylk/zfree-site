"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Zap, Mail, MessageCircle, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted via-background to-card py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Professional Consulting Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Transform Your Organization with <span className="text-primary">Zaccai Free</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Empowering communities, reducing stress, and driving strategic change through personalized consulting
              solutions that create lasting impact.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <a href="mailto:info@zaccaifree.com">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Comprehensive Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four specialized areas of expertise designed to help you and your organization thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Community Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Foster meaningful connections and build stronger, more engaged communities through proven strategies
                  and collaborative approaches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Stress Reduction Facilitator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Implement evidence-based wellness programs and mindfulness practices to reduce stress and improve
                  overall well-being.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Strategic Planner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Develop comprehensive strategic plans that align with your vision and drive sustainable growth and
                  success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Change Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Navigate organizational transformation with confidence through structured change management and
                  leadership development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Meet Zaccai Free</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience in organizational development and community building, I bring a unique blend of
                strategic thinking and compassionate leadership to every engagement.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach combines evidence-based methodologies with personalized attention, ensuring that each client
                receives solutions tailored to their specific needs and organizational culture.
              </p>

              {showFullBio && (
                <div className="mb-8 p-6 bg-background rounded-lg border border-border/50">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi, I'm Zaccai Free—a consultant, strategist, and community builder dedicated to helping
                    organizations turn vision into impact. For over two decades, I've worked at the intersection of
                    housing, youth empowerment, and social change—leading initiatives that strengthen families, create
                    opportunity, and inspire resilience.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    From helping residents shape redevelopment projects in Washington, D.C., to coordinating trauma
                    relief after Hurricane Katrina, to guiding community partnerships in New Orleans, I bring hands-on
                    experience and a passion for authentic engagement. My work blends strategy, storytelling, and
                    leadership training—all grounded in the belief that when communities thrive, everyone wins.
                  </p>
                </div>
              )}

              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowFullBio(!showFullBio)}
                className="flex items-center gap-2"
              >
                {showFullBio ? "Hide Bio" : "View Full Bio"}
                {showFullBio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/strategy-board-meeting-diverse-professionals.jpg"
                  alt="Strategic planning and board meeting consultation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real results from organizations that have transformed with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "I've had the privilege of knowing Zaccai Free for many years, and his expertise in conflict
                  transformation, resilience training, and stress reduction is truly exceptional. His ability to turn
                  challenges into opportunities makes him an invaluable asset to any team."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">EL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Eugene Laney Jr., Ph.D.</p>
                    <p className="text-xs text-muted-foreground">President and CEO at AAEI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "Two decades ago, Zaccai taught me 'life skills' to deal with my personal and professional challenges.
                  His ability to empathize with the needs of a leader make him a great wellness and leadership coach."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">MA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mandar Apte</p>
                    <p className="text-xs text-muted-foreground">Executive Director at Cities4Peace</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "He is gifted in various techniques that will allow your spirit to reset in a place that will allow
                  your soul to begin rooting itself back to the spiritual existence of LIFE AND PURPOSE."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">BD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Byron Dunn</p>
                    <p className="text-xs text-muted-foreground">Computer Database Manager at ASALH</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "Zaccai was an immeasurable resource during our Katrina response work. He is adept at managing diverse
                  personalities and difficult situations. His creativity makes him a joy in any work situation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">RD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Rev. Dele</p>
                    <p className="text-xs text-muted-foreground">Public Speaker</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Let's discuss how we can work together to build stronger communities, reduce stress, and create lasting
            positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="mailto:info@zaccaifree.com">Schedule Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Zaccai Free Consulting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering organizations through community building, stress reduction, strategic planning, and change
                management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Community Building</li>
                <li>Stress Reduction Programs</li>
                <li>Strategic Planning</li>
                <li>Change Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@zaccaifree.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +12027870664</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Zaccai Free Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
