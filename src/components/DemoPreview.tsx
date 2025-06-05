import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const DemoPreview = () => {
  const navigate = useNavigate();
  
  const mockData = [
    { slot: "A-01", plate: "RAE 123B", timeIn: "09:30", status: "Occupied", duration: "2h 15m" },
    { slot: "A-02", plate: "RAD 456C", timeIn: "10:45", status: "Occupied", duration: "1h 30m" },
    { slot: "A-03", plate: "-", timeIn: "-", status: "Available", duration: "-" },
    { slot: "B-01", plate: "RAB 789D", timeIn: "08:15", status: "Occupied", duration: "4h 00m" },
    { slot: "B-02", plate: "-", timeIn: "-", status: "Available", duration: "-" },
  ];

  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Dashboard Preview
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-time monitoring and management of parking slots with comprehensive analytics
          </p>
        </div>
        
        <Card className="rounded-2xl border-slate-200 shadow-xl">
          <CardHeader className="bg-white rounded-t-2xl border-b border-slate-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-slate-900">
                SmartPark Dashboard
              </CardTitle>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-slate-500">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-slate-500">Occupied</div>
                </div>
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
                  <TableHead className="font-semibold text-slate-700">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row, index) => (
                  <TableRow key={index} className="border-slate-100 hover:bg-slate-50">
                    <TableCell className="font-medium text-slate-900">{row.slot}</TableCell>
                    <TableCell className="text-slate-700">{row.plate}</TableCell>
                    <TableCell className="text-slate-700">{row.timeIn}</TableCell>
                    <TableCell className="text-slate-700">{row.duration}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={row.status === "Occupied" ? "default" : "secondary"}
                        className={row.status === "Occupied" ? "bg-blue-600" : "bg-green-100 text-green-700"}
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
            onClick={() => navigate('/dashboard')}
          >
            View Full Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
