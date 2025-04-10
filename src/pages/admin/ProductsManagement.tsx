
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
  Edit, 
  Trash2, 
  Plus, 
  Search 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for demonstration
const mockProducts = [
  { 
    id: 1, 
    name: "אוסף קלאסיקות", 
    price: 149, 
    status: "זמין",
    albums: 5,
    created: "10/03/2023"
  },
  { 
    id: 2, 
    name: "אוסף הלהיטים", 
    price: 199, 
    status: "זמין",
    albums: 7,
    created: "15/04/2023"
  },
  { 
    id: 3, 
    name: "אוסף נוסטלגיה", 
    price: 179, 
    status: "אזל מהמלאי",
    albums: 6,
    created: "22/05/2023"
  },
  { 
    id: 4, 
    name: "אוסף הופעות חיות", 
    price: 229, 
    status: "זמין",
    albums: 4,
    created: "05/06/2023"
  },
];

const ProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(mockProducts);

  const filteredProducts = products.filter(product => 
    product.name.includes(searchTerm)
  );

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ניהול מוצרים</h1>
        <Button className="gap-2">
          <Plus size={18} />
          מוצר חדש
        </Button>
      </div>
      
      <div className="flex justify-between mb-6">
        <div className="relative w-64">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="חיפוש מוצרים..." 
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
              <TableHead>שם המוצר</TableHead>
              <TableHead>מחיר</TableHead>
              <TableHead>סטטוס</TableHead>
              <TableHead>מספר אלבומים</TableHead>
              <TableHead>תאריך יצירה</TableHead>
              <TableHead>פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>₪{product.price}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === "זמין" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {product.status}
                  </span>
                </TableCell>
                <TableCell>{product.albums}</TableCell>
                <TableCell>{product.created}</TableCell>
                <TableCell>
                  <div className="flex space-x-3 space-x-reverse">
                    <Button variant="ghost" size="icon">
                      <Edit size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 size={18} />
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

export default ProductsManagement;
