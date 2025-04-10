
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  FileSpreadsheet,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Mock data for demonstration
const mockOrders = [
  { 
    id: "ORD-001", 
    customer: "דוד לוי", 
    date: "12/03/2024", 
    total: 298, 
    status: "חדש",
    items: 2
  },
  { 
    id: "ORD-002", 
    customer: "יעל כהן", 
    date: "10/03/2024", 
    total: 199, 
    status: "בתהליך",
    items: 1
  },
  { 
    id: "ORD-003", 
    customer: "אבי גולן", 
    date: "08/03/2024", 
    total: 428, 
    status: "נשלח",
    items: 3
  },
  { 
    id: "ORD-004", 
    customer: "דנה שרון", 
    date: "05/03/2024", 
    total: 179, 
    status: "בוטל",
    items: 1
  },
];

const OrdersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("הכל");

  const filteredOrders = mockOrders.filter(order => 
    (order.customer.includes(searchTerm) || order.id.includes(searchTerm)) &&
    (statusFilter === "הכל" || order.status === statusFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ניהול הזמנות</h1>
        <Button className="gap-2">
          <FileSpreadsheet size={18} />
          ייצוא לאקסל
        </Button>
      </div>
      
      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          <div className="relative w-64">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="חיפוש לפי מזהה או שם לקוח..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-3 pr-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="סטטוס" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="הכל">הכל</SelectItem>
                <SelectItem value="חדש">חדש</SelectItem>
                <SelectItem value="בתהליך">בתהליך</SelectItem>
                <SelectItem value="נשלח">נשלח</SelectItem>
                <SelectItem value="בוטל">בוטל</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="bg-white rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>מזהה הזמנה</TableHead>
              <TableHead>לקוח</TableHead>
              <TableHead>תאריך</TableHead>
              <TableHead>סכום</TableHead>
              <TableHead>סטטוס</TableHead>
              <TableHead>פריטים</TableHead>
              <TableHead>פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>₪{order.total}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "חדש" 
                      ? "bg-blue-100 text-blue-800" 
                      : order.status === "בתהליך"
                      ? "bg-amber-100 text-amber-800"
                      : order.status === "נשלח"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Eye size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersManagement;
