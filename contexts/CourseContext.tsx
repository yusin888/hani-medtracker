//D:\Codes\Hani\hani-medtracker\contexts\CourseContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import courseData, { Course } from '../lib/courseData';

interface CourseContextType {
  courses: Course[];
  updateCourseProgress: (courseId: number, newProgress: number) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(courseData);

  const updateCourseProgress = (courseId: number, newProgress: number) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, progress: newProgress } : course
    ));
  };
  

  return (
    <CourseContext.Provider value={{ courses, updateCourseProgress }}>
      {children}
    </CourseContext.Provider>
  );
};