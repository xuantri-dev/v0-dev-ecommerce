import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About LUXE</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're passionate about bringing you the finest fashion pieces that combine timeless elegance with contemporary
          style. Our mission is to make luxury fashion accessible to everyone.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Founded in 2020, LUXE began as a small boutique with a big dream: to democratize luxury fashion and make
              it accessible to style enthusiasts everywhere.
            </p>
            <p>
              What started as a passion project has grown into a global fashion destination, serving customers in over
              50 countries. We carefully curate each piece in our collection, working directly with designers and
              artisans who share our commitment to quality and craftsmanship.
            </p>
            <p>
              Today, LUXE continues to evolve, always staying true to our core values of quality, sustainability, and
              exceptional customer service.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="LUXE boutique interior"
            width={600}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every piece is carefully selected and inspected to meet our high
                standards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical fashion practices and supporting sustainable production methods.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to exceed expectations at every
                touchpoint.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Fashion knows no boundaries. We bring the world's best styles to customers everywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah Johnson"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-3">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Fashion industry veteran with 15+ years of experience in luxury retail.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Michael Chen"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-3">Creative Director</p>
              <p className="text-sm text-gray-500">Award-winning designer with a passion for sustainable fashion.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Emma Wilson"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emma Wilson</h3>
              <p className="text-gray-600 mb-3">Head of Customer Experience</p>
              <p className="text-sm text-gray-500">
                Dedicated to ensuring every customer has an exceptional experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">100K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center bg-black text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl leading-relaxed max-w-4xl mx-auto">
          To inspire confidence and self-expression through exceptional fashion, while building a more sustainable and
          inclusive industry for future generations.
        </p>
      </div>
    </div>
  )
}
