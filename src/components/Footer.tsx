
import { Car, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-xl p-3 mr-3">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">SmartPark</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Effortless car parking solutions for Rubavu District, Rwanda. 
              Making urban parking smart, efficient, and accessible for everyone.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Rubavu District, Rwanda</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@smartpark.rw</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Get a Slot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">View Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 SmartPark. All rights reserved. Built for Rwanda's smart cities initiative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
