
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { UserRound, BookOpen, UserCheck } from 'lucide-react';

const LoginPage = () => {
  const [studentData, setStudentData] = useState({
    usn: '',
    password: '',
    semester: '1',
  });
  const [teacherData, setTeacherData] = useState({
    employeeId: '',
    password: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Login - RNSIT Department of CSE (Data Science)";
  }, []);

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally, this would be a server request. For now, we'll just store in localStorage
    localStorage.setItem(`student_${studentData.usn}_${studentData.semester}`, JSON.stringify({
      usn: studentData.usn,
      semester: studentData.semester,
      loggedIn: true,
      type: 'student'
    }));
    
    toast({
      title: "Student Login Successful",
      description: `Welcome, ${studentData.usn}! You're logged in for Semester ${studentData.semester}.`,
    });
  };

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally, this would be a server request. For now, we'll just store in localStorage
    localStorage.setItem(`teacher_${teacherData.employeeId}`, JSON.stringify({
      employeeId: teacherData.employeeId,
      loggedIn: true,
      type: 'teacher'
    }));
    
    toast({
      title: "Teacher Login Successful",
      description: `Welcome, ${teacherData.employeeId}!`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="student" className="flex items-center justify-center gap-2">
                <BookOpen size={16} />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger value="teacher" className="flex items-center justify-center gap-2">
                <UserCheck size={16} />
                <span>Teacher</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <Card>
                <CardHeader>
                  <CardTitle>Student Login</CardTitle>
                  <CardDescription>Enter your USN and password to access your account.</CardDescription>
                </CardHeader>
                <form onSubmit={handleStudentLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-usn">USN</Label>
                      <Input 
                        id="student-usn" 
                        placeholder="Enter your USN" 
                        value={studentData.usn}
                        onChange={(e) => setStudentData({...studentData, usn: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input 
                        id="student-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={studentData.password}
                        onChange={(e) => setStudentData({...studentData, password: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester</Label>
                      <Select 
                        value={studentData.semester} 
                        onValueChange={(value) => setStudentData({...studentData, semester: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                            <SelectItem key={sem} value={sem.toString()}>
                              {`Semester ${sem}`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">Login as Student</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="teacher">
              <Card>
                <CardHeader>
                  <CardTitle>Teacher Login</CardTitle>
                  <CardDescription>Enter your employee ID and password to access your account.</CardDescription>
                </CardHeader>
                <form onSubmit={handleTeacherLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-id">Employee ID</Label>
                      <Input 
                        id="teacher-id" 
                        placeholder="Enter your employee ID"
                        value={teacherData.employeeId}
                        onChange={(e) => setTeacherData({...teacherData, employeeId: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-password">Password</Label>
                      <Input 
                        id="teacher-password" 
                        type="password" 
                        placeholder="••••••••"
                        value={teacherData.password}
                        onChange={(e) => setTeacherData({...teacherData, password: e.target.value})}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">Login as Teacher</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
