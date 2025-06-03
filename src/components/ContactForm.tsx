
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600">
            Partner with us or contact us for more information
          </p>
        </div>
        
        <Tabs defaultValue="partner" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white rounded-xl p-1">
            <TabsTrigger value="partner" className="rounded-lg">
              <Building2 className="h-4 w-4 mr-2" />
              Partner With Us
            </TabsTrigger>
            <TabsTrigger value="contact" className="rounded-lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Us
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="partner">
            <Card className="rounded-2xl border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 text-center">
                  Become a SmartPark Partner
                </CardTitle>
                <p className="text-slate-600 text-center">
                  Join our network of modern parking facilities in Rwanda
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input id="business-name" placeholder="Your parking facility name" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-person">Contact Person</Label>
                    <Input id="contact-person" placeholder="Manager/Owner name" className="rounded-lg" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="business@example.com" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+250 XXX XXX XXX" className="rounded-lg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Rubavu District, Rwanda" className="rounded-lg" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="slots">Number of Parking Slots</Label>
                  <Input id="slots" type="number" placeholder="e.g., 50" className="rounded-lg" />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold">
                  Submit Partnership Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card className="rounded-2xl border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 text-center">
                  Get in Touch
                </CardTitle>
                <p className="text-slate-600 text-center">
                  Have questions? We'd love to hear from you
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" className="rounded-lg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="john@example.com" className="rounded-lg" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="rounded-lg" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold">
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-500 text-green-600 hover:bg-green-50 py-3 px-6 rounded-xl text-lg font-semibold"
                    onClick={() => window.open('https://wa.me/250XXXXXXXXX', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ContactForm;
