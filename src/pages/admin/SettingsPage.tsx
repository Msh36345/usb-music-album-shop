
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

const SettingsPage = () => {
  const form = useForm({
    defaultValues: {
      siteName: "מוזיקה על USB",
      siteEmail: "contact@example.com",
      phoneNumber: "03-1234567",
      enableNotifications: true,
      orderConfirmationEmail: true,
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // In a real implementation, save these settings to the database
    alert("ההגדרות נשמרו בהצלחה");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">הגדרות</h1>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">הגדרות כלליות</TabsTrigger>
          <TabsTrigger value="emails">דואר אלקטרוני</TabsTrigger>
          <TabsTrigger value="payments">תשלומים</TabsTrigger>
          <TabsTrigger value="shipping">משלוחים</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>הגדרות כלליות</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>שם האתר</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="siteEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>דואר אלקטרוני</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>מספר טלפון</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enableNotifications"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-x-reverse space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                          </FormControl>
                          <FormLabel className="font-normal">הפעל התראות באתר</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="orderConfirmationEmail"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-x-reverse space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                          </FormControl>
                          <FormLabel className="font-normal">שלח אימייל אישור הזמנה</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit">שמור הגדרות</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emails">
          <Card>
            <CardHeader>
              <CardTitle>הגדרות דואר אלקטרוני</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל להגדיר את תבניות האימייל והגדרות השליחה
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>הגדרות תשלומים</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל להגדיר את שיטות התשלום ופרטי החיבור לספקי סליקה
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>הגדרות משלוחים</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                כאן תוכל להגדיר את שיטות המשלוח ועלויות המשלוח
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
