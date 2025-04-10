
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
  UserX,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for demonstration
const mockUsers = [
  { 
    id: 1, 
    name: "אירית כהן", 
    email: "irit@example.com", 
    registered: "15/01/2024", 
    orders: 5,
    lastLogin: "12/03/2024"
  },
  { 
    id: 2, 
    name: "דני לוי", 
    email: "dany@example.com", 
    registered: "22/01/2024", 
    orders: 2,
    lastLogin: "10/03/2024"
  },
  { 
    id: 3, 
    name: "מיכל ברקת", 
    email: "michal@example.com", 
    registered: "05/02/2024", 
    orders: 0,
    lastLogin: "07/03/2024"
  },
  { 
    id: 4, 
    name: "יוסי אבידן", 
    email: "yossi@example.com", 
    registered: "18/02/2024", 
    orders: 3,
    lastLogin: "11/03/2024"
  },
];

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  const filteredUsers = users.filter(user => 
    user.name.includes(searchTerm) || 
    user.email.includes(searchTerm)
  );

  const handleBlockUser = (id: number) => {
    // In a real implementation, this would mark the user as blocked in the database
    alert(`משתמש מספר ${id} נחסם בהצלחה`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ניהול משתמשים</h1>
      </div>
      
      <div className="flex justify-between mb-6">
        <div className="relative w-64">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="חיפוש משתמשים..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-10"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>שם</TableHead>
              <TableHead>אימייל</TableHead>
              <TableHead>תאריך הרשמה</TableHead>
              <TableHead>הזמנות</TableHead>
              <TableHead>כניסה אחרונה</TableHead>
              <TableHead>פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registered}</TableCell>
                <TableCell>{user.orders}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <div className="flex space-x-3 space-x-reverse">
                    <Button variant="ghost" size="icon">
                      <Eye size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleBlockUser(user.id)}
                    >
                      <UserX size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersManagement;
