
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600">
            Pay only for the time you park. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-600 rounded-2xl shadow-xl">
            <CardHeader className="text-center bg-blue-50 rounded-t-2xl">
              <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                Base Rate
              </CardTitle>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                RWF 500
                <span className="text-lg font-normal text-slate-600">/hour</span>
              </div>
              <p className="text-slate-600">First hour of parking</p>
            </CardHeader>
            <CardContent className="pt-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Digital token generation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Real-time slot tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Secure payment processing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">24/7 support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 rounded-2xl shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                Extended Time
              </CardTitle>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                RWF 300
                <span className="text-lg font-normal text-slate-600">/hour</span>
              </div>
              <p className="text-slate-600">Additional hours after first hour</p>
            </CardHeader>
            <CardContent className="pt-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Discounted hourly rate</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Automatic calculation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">No maximum time limit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">Flexible payment options</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Example Calculation</h3>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <span className="text-slate-700">First hour:</span>
              <span className="font-semibold">RWF 500</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <span className="text-slate-700">Additional 2 hours:</span>
              <span className="font-semibold">RWF 600</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg font-bold text-blue-600">
              <span>Total (3 hours):</span>
              <span>RWF 1,100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
