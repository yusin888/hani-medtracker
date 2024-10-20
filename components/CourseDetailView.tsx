"components\CourseDetailView.tsx"

import React from 'react';
import { 
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  PlayCircle,
  MessageSquare,
  Star,
  FileText,
  Video,
  PenTool,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage 
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define Course type here
interface Course {
    id: string|number;
    title: string;
    progress: number;
    icon: string;
    color: string;
    bgColor: string;
    duration: string;          // Add duration property
    enrolledCount: number;     // Add enrolledCount property
    rating: string|number;            // Add rating property
}

interface Module {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'reading' | 'quiz';
  description: string;
}

interface CourseDetailViewProps {
  course: Course;
}

export default function CourseDetailView({ course }: CourseDetailViewProps) {
  const courseModules: Module[] = [
    { 
      id: 1, 
      title: 'Introduction to Advanced Cardiology',
      duration: '45 min',
      completed: true,
      type: 'video',
      description: 'Overview of advanced cardiac concepts and course objectives'
    },
    { 
      id: 2, 
      title: 'Cardiac Imaging Techniques',
      duration: '30 min',
      completed: false,
      type: 'reading',
      description: 'Detailed explanation of cardiac imaging techniques including MRI and CT scans'
    },
    { 
      id: 3, 
      title: 'Electrophysiology Basics',
      duration: '25 min',
      completed: false,
      type: 'quiz',
      description: 'Test your knowledge of electrophysiology basics and principles'
    },
    // More modules can be added here
  ];

  const resources = [
    { 
      id: 1,
      title: 'Advanced Cardiology Textbook',
      type: 'PDF',
      size: '15.2 MB',
      icon: FileText
    },
    { 
      id: 2,
      title: 'Cardiac MRI Guidelines',
      type: 'PDF',
      size: '8.7 MB',
      icon: FileText
    },
    { 
      id: 3,
      title: 'Electrophysiology Case Studies',
      type: 'Video',
      size: '1.4 GB',
      icon: Video
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-blue-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                Hani MedTracker Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
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
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{course.title}</h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center text-blue-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration} hours total</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>256 enrolled</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-2" />
                  <span>4.8/5</span>
                </div>
              </div>
            </div>
            <Button>Resume Course</Button>
          </div>
          <Progress value={course.progress} className="h-2" />
          <p className="mt-2 text-sm text-blue-600">{course.progress}% Complete</p>
        </div>

        {/* Course Content Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Modules List */}
          <div className="md:col-span-2">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">Course Modules</CardTitle>
                <CardDescription>Complete all modules to earn your certificate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseModules.map((module) => (
                    <TooltipProvider key={module.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                            <div className="flex items-center flex-grow">
                              {module.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              ) : (
                                <PlayCircle className="h-5 w-5 text-blue-500 mr-3" />
                              )}
                              <div className="flex-grow">
                                <div className="flex items-center">
                                  <h3 className="text-sm font-semibold text-blue-900">{module.title}</h3>
                                  <Badge variant="outline" className="ml-2">
                                    {module.type}
                                  </Badge>
                                </div>
                                <p className="text-xs text-blue-600 flex items-center mt-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {module.duration}
                                </p>
                              </div>
                            </div>
                            <Button 
                              variant={module.completed ? "secondary" : "default"} 
                              size="sm"
                              className="ml-4"
                            >
                              {module.completed ? 'Review' : 'Start'}
                            </Button>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{module.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Progress */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600">
                    <span className="text-2xl font-bold">{course.progress}%</span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-sm text-blue-600">2 of 5 modules completed</p>
                  <p className="text-sm text-blue-600">Estimated time remaining: 4h 30min</p>
                </div>
              </CardContent>
            </Card>

            {/* Course Resources */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <resource.icon className="h-6 w-6 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-blue-900">{resource.title}</p>
                          <p className="text-xs text-blue-600">{resource.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
