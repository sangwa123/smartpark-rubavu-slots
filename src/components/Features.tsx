
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CreditCard, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Digital Token System",
    description: "Generate secure tokens with car plate, slot number, entry time, and date for seamless parking management."
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "RWF 500/hour base rate with RWF 300/hour for additional time. No hidden fees, pay only for time used."
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description: "Real-time monitoring of slot usage, transaction history, and comprehensive analytics for parking operators."
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "User-friendly exit payment system with secure processing and automated billing calculations."
  }
];

const Features = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose SmartPark?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Modern parking solutions designed for efficiency, transparency, and user experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-50 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
