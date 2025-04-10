
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ניהול תוכן</h1>
      </div>
      
      <Tabs defaultValue="homepage" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="homepage">דף הבית</TabsTrigger>
          <TabsTrigger value="about">אודות</TabsTrigger>
          <TabsTrigger value="contact">יצירת קשר</TabsTrigger>
          <TabsTrigger value="footer">כותרת תחתונה</TabsTrigger>
        </TabsList>
        
        <TabsContent value="homepage">
          <Card>
            <CardHeader>
              <CardTitle>עריכת דף הבית</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל לערוך את התוכן של דף הבית
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>עריכת דף אודות</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל לערוך את התוכן של דף אודות
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>עריכת דף יצירת קשר</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל לערוך את התוכן של דף יצירת קשר
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="footer">
          <Card>
            <CardHeader>
              <CardTitle>עריכת כותרת תחתונה</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל לערוך את התוכן של הכותרת התחתונה
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
