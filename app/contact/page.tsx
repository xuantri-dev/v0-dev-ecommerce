"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-black mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit Our Store</h3>
                  <p className="text-gray-600">
                    123 Fashion Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-black mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri: 9AM-6PM EST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-black mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    support@luxefashion.com
                    <br />
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-black mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Store Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 10AM - 8PM</p>
                    <p>Saturday: 10AM - 6PM</p>
                    <p>Sunday: 12PM - 5PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Support</SelectItem>
                      <SelectItem value="returns">Returns & Exchanges</SelectItem>
                      <SelectItem value="product">Product Question</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">What are your shipping options?</h3>
              <p className="text-gray-600">
                We offer free standard shipping on orders over $100, with express and overnight options available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                We accept returns within 30 days of purchase. Items must be in original condition with tags attached.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship to over 50 countries worldwide. International shipping rates vary by destination.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via email. You can also track orders in your
                account.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
