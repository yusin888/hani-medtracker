'use client';

import React from 'react';
import { 
  Bell, 
  BookOpen, 
  Brain, 
  ChevronRight, 
  Heart, 
  Microscope, 
  Stethoscope, 
  Syringe,
  Award,
  Clock,
  Baby,
  Scissors,
  Bone,
  Calendar // Add this import
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Course {
  id: number;
  name: string;
  progress: number;
  duration: string;
}

const getIconColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'surgery study':
      return 'text-red-500';
    case 'orthopedic study':
      return 'text-purple-500';
    case 'emergencies in medicine':
      return 'text-yellow-500';
    case 'gynecology':
      return 'text-pink-500';
    default:
      return 'text-blue-500';
  }
};

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://backend-nu-tan.vercel.app/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const upcomingEvents = [
    { 
      id: 1, 
      title: 'Cardiology Webinar', 
      date: 'May 15, 2024', 
      time: '2:00 PM',
      type: 'Webinar',
      credits: 2
    },
    { 
      id: 2, 
      title: 'Neurology Conference', 
      date: 'June 3, 2024', 
      time: '9:00 AM',
      type: 'Conference',
      credits: 4
    },
  ];

  const getCourseIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'surgery study':
        return Scissors;
      case 'orthopedic study':
        return Bone;
      case 'emergencies in medicine':
        return Syringe;
      case 'gynecology':
        return Microscope;
      case 'obstetrics':
        return Baby;
      case 'cardiology':
        return Heart;
      case 'neurology':
        return Brain;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-blue-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900 truncate">
                Hani MedTracker Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                Library
              </Button>
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5 text-blue-600" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Dr. Hani" />
                <AvatarFallback>DH</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Welcome back, Dr. Hani!
            </h1>
            <p className="mt-1 text-sm text-blue-600">
              Continue your professional development journey
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            Explore New Courses
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 md:col-span-2 border-blue-200 shadow-lg">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="text-blue-800">Your Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="current">Current Courses</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>
                <TabsContent value="current">
                  <div className="grid gap-4 mt-4">
                    {courses.map((course) => {
                      const IconComponent = getCourseIcon(course.name);
                      const iconColor = getIconColor(course.name);
                      return (
                        <Link key={course.id} href={`/course/${course.id}`}>
                          <div className="flex items-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors cursor-pointer">
                            <div className={`p-3 rounded-full mr-4 ${iconColor.replace('text-', 'bg-').replace('500', '100')}`}>
                              <IconComponent className={`h-6 w-6 ${iconColor}`} />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <h3 className="text-lg font-semibold text-blue-900 truncate mb-2 sm:mb-0">
                                  {course.name}
                                </h3>
                                <div className="flex items-center text-sm text-blue-600 whitespace-nowrap">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {course.duration}
                                </div>
                              </div>
                              <Progress value={course.progress} className="mt-2" />
                              <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                                <span className="text-sm text-blue-600">
                                  {course.progress}% Complete
                                </span>
                                <Button variant="outline" size="sm">
                                  Continue
                                  <ChevronRight className="ml-2 h-4 w-4 text-blue-600" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="recommended">
                  <div className="mt-4 text-center text-blue-600">
                    Personalizing your recommendations. Check back soon!
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* CME Progress Card */}
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="text-blue-800">CME Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600">
                  <Award className="h-10 w-10" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Completed</span>
                  <span className="font-semibold text-blue-900">24 credits</span>
                </div>
                <Progress value={48} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Required</span>
                  <span className="font-semibold text-blue-900">50 credits</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-center text-blue-600">
                You&apos;re making great progress!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card className="mt-6 border-blue-200 shadow-lg">
          <CardHeader className="border-b border-blue-100">
            <CardTitle className="text-blue-800">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-blue-200">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                  <div>
                    <h4 className="text-blue-900 font-semibold">{event.title}</h4>
                    <p className="text-sm text-blue-600">
                      <Calendar className="inline h-4 w-4 mr-1 text-blue-500" />
                      {event.date} at {event.time}
                    </p>
                  </div>
                  <Badge className="text-blue-600">{event.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
