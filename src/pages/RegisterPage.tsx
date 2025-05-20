
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Info, CheckCircle } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface EventRegistrationForm {
  name: string;
  usn: string;
  email: string;
  phone: string;
  event: string;
  semester: string;
  interest: string;
  hearAbout: string;
}

const RegisterPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Event Registration | RNSIT Department of CSE (Data Science)";
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample upcoming events for dropdown
  const upcomingEvents = [
    { id: 1, name: "AI/ML Workshop Series (May 20-22, 2025)" },
    { id: 2, name: "Data Science Symposium (June 5, 2025)" },
    { id: 3, name: "Kaggle Competition Bootcamp (July 10-12, 2025)" },
    { id: 4, name: "DataHack 2025 (August 8-9, 2025)" },
    { id: 5, name: "Big Data Conference (September 15, 2025)" }
  ];

  const form = useForm<EventRegistrationForm>({
    defaultValues: {
      name: "",
      usn: "",
      email: "",
      phone: "",
      event: "",
      semester: "",
      interest: "",
      hearAbout: ""
    }
  });

  // Form submission handler
  const onSubmit = async (data: EventRegistrationForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Registration successful!",
        description: "You have successfully registered for the event.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      
      toast({
        title: "Registration failed",
        description: "There was a problem with your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Event Registration
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4">
              Register for upcoming events hosted by the Department of CSE (Data Science).
            </p>
            <div className="flex items-center text-sm text-rnsit-blue dark:text-rnsit-lightBlue">
              <Info size={16} className="mr-1" />
              <span>Registration is required for certain events due to limited seating capacity.</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container max-w-4xl">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold mb-4">
                    Registration Form
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Please fill out the form below to register for an event. Fields marked with * are required.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div>
                        <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <input
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    placeholder="Enter your full name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="usn"
                            rules={{ required: "USN is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>University Seat Number (USN) *</FormLabel>
                                <FormControl>
                                  <input
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    placeholder="e.g., 1RN21CS001"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            rules={{ 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address"
                              }
                            }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    placeholder="your.email@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            rules={{ 
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Please enter a valid 10-digit phone number"
                              }
                            }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <input
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    placeholder="10-digit number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Event Information */}
                      <div>
                        <h3 className="text-xl font-bold mb-4">Event Details</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="event"
                            rules={{ required: "Please select an event" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Select Event *</FormLabel>
                                <FormControl>
                                  <select
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    {...field}
                                  >
                                    <option value="">Select an event</option>
                                    {upcomingEvents.map(event => (
                                      <option key={event.id} value={event.id}>
                                        {event.name}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="semester"
                            rules={{ required: "Please select your semester" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Semester *</FormLabel>
                                <FormControl>
                                  <select
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    {...field}
                                  >
                                    <option value="">Select your semester</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                      <option key={sem} value={sem}>
                                        Semester {sem}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="interest"
                            render={({ field }) => (
                              <FormItem className="md:col-span-2">
                                <FormLabel>Areas of Interest</FormLabel>
                                <FormControl>
                                  <input
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    placeholder="e.g., Machine Learning, Data Visualization, Cloud Computing"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="hearAbout"
                            render={({ field }) => (
                              <FormItem className="md:col-span-2">
                                <FormLabel>How did you hear about this event?</FormLabel>
                                <FormControl>
                                  <select
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                                    {...field}
                                  >
                                    <option value="">Select an option</option>
                                    <option value="department">Department Notice</option>
                                    <option value="website">College Website</option>
                                    <option value="social">Social Media</option>
                                    <option value="friend">Friend or Classmate</option>
                                    <option value="faculty">Faculty Member</option>
                                    <option value="other">Other</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex justify-center pt-4">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-2 bg-rnsit-blue hover:bg-rnsit-blue/90 text-white rounded-lg"
                        >
                          {isSubmitting ? "Submitting..." : "Register for Event"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </>
            ) : (
              <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Registration Successful!</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
                  Thank you for registering. A confirmation email has been sent to your email address 
                  with all the event details. We look forward to seeing you at the event!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="px-6"
                  >
                    Register for Another Event
                  </Button>
                  <Button 
                    asChild
                    className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white"
                  >
                    <a href="/events">
                      <Calendar size={18} className="mr-2" />
                      View All Events
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Info size={20} className="mr-2 text-rnsit-blue dark:text-rnsit-lightBlue" />
                Important Information
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Registration is on a first-come, first-served basis for events with limited capacity.
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> You will receive a confirmation email after successful registration.
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> For any issues with registration, please contact the department office or email <a href="mailto:events@datasciencernsit.com" className="text-rnsit-blue dark:text-rnsit-lightBlue hover:underline">events@datasciencernsit.com</a>.
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Some events may require additional prerequisites or materials. Check the event details page for more information.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;
