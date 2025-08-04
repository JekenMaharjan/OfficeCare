import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  FileText, 
  HelpCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { CustomerLayout } from "@/components/customer/customerLayout";

const Support = () => {
  const supportTickets = [
    {
      id: "TKT-001",
      subject: "Order delivery delay",
      status: "Open",
      priority: "High",
      date: "2024-01-20",
      lastUpdate: "2 hours ago"
    },
    {
      id: "TKT-002", 
      subject: "Product return request",
      status: "Resolved",
      priority: "Medium",
      date: "2024-01-18",
      lastUpdate: "1 day ago"
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number provided in your confirmation email or by visiting the Orders page in your account."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with all packaging and accessories."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days delivery."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer volume discounts for orders over $500. Contact our sales team for custom pricing."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-orange-100 text-orange-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
            <p className="text-muted-foreground">Get help with your orders and account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Options */}
            <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Choose your preferred contact method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat
                <Badge className="ml-auto bg-green-100 text-green-800">Online</Badge>
                </Button>
                
                <Button className="w-full justify-start" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Support
                <span className="ml-auto text-xs text-muted-foreground">24/7</span>
                </Button>
                
                <Button className="w-full justify-start" variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
                <span className="ml-auto text-xs text-muted-foreground">~2hrs</span>
                </Button>
                
                <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Support Hours: 24/7</span>
                </div>
                </div>
            </CardContent>
            </Card>

            {/* New Ticket Form */}
            <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Submit a Support Request</CardTitle>
                <CardDescription>Describe your issue and we'll help you resolve it</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <select className="w-full p-2 border rounded-md">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    </select>
                </div>
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail..."
                    className="min-h-[120px]"
                />
                </div>
                
                <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Submit Ticket
                </Button>
            </CardContent>
            </Card>
        </div>

        {/* Support Tickets */}
        <Card>
            <CardHeader>
            <CardTitle>Your Support Tickets</CardTitle>
            <CardDescription>Track your support requests</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <p className="font-medium">{ticket.id}</p>
                        <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status === 'Resolved' ? <CheckCircle className="h-3 w-3 mr-1" /> : 
                        <AlertCircle className="h-3 w-3 mr-1" />}
                        {ticket.status}
                        </Badge>
                        <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                        </Badge>
                    </div>
                    <p className="text-sm font-medium">{ticket.subject}</p>
                    <p className="text-xs text-muted-foreground">
                        Created: {ticket.date} • Last update: {ticket.lastUpdate}
                    </p>
                    </div>
                    <Button variant="outline" size="sm">
                    View Details
                    </Button>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
            </CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
        </div>
    </CustomerLayout>
  );
};

export default Support;