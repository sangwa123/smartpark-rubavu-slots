
import { Button } from "@/components/ui/button";
import { Car, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-600 rounded-2xl p-4 mr-4">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">SmartPark</h1>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Effortless Car Parking,<br />
          <span className="text-blue-600">One Slot at a Time</span>
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Smart parking management system for Rubavu District, Rwanda. 
          Real-time tracking, digital tokens, and automated billing make parking seamless.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
            Get a Slot
          </Button>
          <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50">
            View Dashboard
          </Button>
        </div>
        
        <div className="flex items-center justify-center text-slate-500">
          <MapPin className="h-5 w-5 mr-2" />
          <span>Serving Rubavu District, Rwanda</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
