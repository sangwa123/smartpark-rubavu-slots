
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Car, MapPin, Clock, CreditCard, Search, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ParkingSlot {
  id: string;
  slot: string;
  plate: string;
  timeIn: string;
  status: "Available" | "Occupied";
  duration: string;
  fee: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [slots, setSlots] = useState<ParkingSlot[]>([
    { id: "1", slot: "A-01", plate: "RAE 123B", timeIn: "09:30", status: "Occupied", duration: "2h 15m", fee: 1400 },
    { id: "2", slot: "A-02", plate: "RAD 456C", timeIn: "10:45", status: "Occupied", duration: "1h 30m", fee: 950 },
    { id: "3", slot: "A-03", plate: "", timeIn: "", status: "Available", duration: "", fee: 0 },
    { id: "4", slot: "B-01", plate: "RAB 789D", timeIn: "08:15", status: "Occupied", duration: "4h 00m", fee: 2300 },
    { id: "5", slot: "B-02", plate: "", timeIn: "", status: "Available", duration: "", fee: 0 },
    { id: "6", slot: "B-03", plate: "RAC 321E", timeIn: "11:20", status: "Occupied", duration: "0h 45m", fee: 500 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newCarPlate, setNewCarPlate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const availableSlots = slots.filter(slot => slot.status === "Available");
  const occupiedSlots = slots.filter(slot => slot.status === "Occupied");
  const totalRevenue = occupiedSlots.reduce((sum, slot) => sum + slot.fee, 0);

  const filteredSlots = slots.filter(slot => 
    slot.slot.toLowerCase().includes(searchTerm.toLowerCase()) ||
    slot.plate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const assignSlot = () => {
    if (!newCarPlate || !selectedSlot) return;
    
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    
    setSlots(prev => prev.map(slot => 
      slot.slot === selectedSlot 
        ? { ...slot, plate: newCarPlate, timeIn: timeString, status: "Occupied", duration: "0h 00m", fee: 0 }
        : slot
    ));
    
    setNewCarPlate("");
    setSelectedSlot("");
  };

  const releaseSlot = (slotId: string) => {
    setSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? { ...slot, plate: "", timeIn: "", status: "Available", duration: "", fee: 0 }
        : slot
    ));
  };

  // Simulate time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSlots(prev => prev.map(slot => {
        if (slot.status === "Occupied" && slot.timeIn) {
          const timeIn = new Date();
          const [hours, minutes] = slot.timeIn.split(':').map(Number);
          timeIn.setHours(hours, minutes, 0);
          
          const now = new Date();
          const diffMs = now.getTime() - timeIn.getTime();
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          
          const duration = `${diffHours}h ${diffMinutes.toString().padStart(2, '0')}m`;
          const fee = diffHours > 0 ? 500 + (diffHours * 300) : 500;
          
          return { ...slot, duration, fee };
        }
        return slot;
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-xl p-2 mr-3">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">SmartPark Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center text-slate-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Rubavu District, Rwanda</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="rounded-xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Available Slots</p>
                  <p className="text-3xl font-bold text-green-600">{availableSlots.length}</p>
                </div>
                <div className="bg-green-100 rounded-xl p-3">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Occupied Slots</p>
                  <p className="text-3xl font-bold text-blue-600">{occupiedSlots.length}</p>
                </div>
                <div className="bg-blue-100 rounded-xl p-3">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-slate-900">RWF {totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-slate-100 rounded-xl p-3">
                  <CreditCard className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Time</p>
                  <p className="text-3xl font-bold text-slate-900">8h 24m</p>
                </div>
                <div className="bg-slate-100 rounded-xl p-3">
                  <Clock className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="rounded-xl border-slate-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Enter car plate number"
                value={newCarPlate}
                onChange={(e) => setNewCarPlate(e.target.value)}
                className="rounded-xl"
              />
              <select 
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-xl bg-white"
              >
                <option value="">Select Available Slot</option>
                {availableSlots.map(slot => (
                  <option key={slot.id} value={slot.slot}>{slot.slot}</option>
                ))}
              </select>
              <Button 
                onClick={assignSlot}
                disabled={!newCarPlate || !selectedSlot}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6"
              >
                <Plus className="h-4 w-4 mr-2" />
                Assign Slot
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Parking Slots Table */}
        <Card className="rounded-xl border-slate-200">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold text-slate-900">Parking Slots</CardTitle>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search slots or plates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100">
                  <TableHead className="font-semibold text-slate-700">Slot</TableHead>
                  <TableHead className="font-semibold text-slate-700">Car Plate</TableHead>
                  <TableHead className="font-semibold text-slate-700">Time In</TableHead>
                  <TableHead className="font-semibold text-slate-700">Duration</TableHead>
                  <TableHead className="font-semibold text-slate-700">Fee (RWF)</TableHead>
                  <TableHead className="font-semibold text-slate-700">Status</TableHead>
                  <TableHead className="font-semibold text-slate-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSlots.map((slot) => (
                  <TableRow key={slot.id} className="border-slate-100 hover:bg-slate-50">
                    <TableCell className="font-medium text-slate-900">{slot.slot}</TableCell>
                    <TableCell className="text-slate-700">{slot.plate || "-"}</TableCell>
                    <TableCell className="text-slate-700">{slot.timeIn || "-"}</TableCell>
                    <TableCell className="text-slate-700">{slot.duration || "-"}</TableCell>
                    <TableCell className="text-slate-700">
                      {slot.fee > 0 ? slot.fee.toLocaleString() : "-"}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={slot.status === "Occupied" ? "default" : "secondary"}
                        className={slot.status === "Occupied" ? "bg-blue-600" : "bg-green-100 text-green-700"}
                      >
                        {slot.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {slot.status === "Occupied" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => releaseSlot(slot.id)}
                          className="rounded-lg"
                        >
                          Release
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
