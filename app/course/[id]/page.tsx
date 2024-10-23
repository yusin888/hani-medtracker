// src/app/course/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import CourseDetailView from '@/components/CourseDetailView';
import { useCourseContext } from '@/contexts/CourseContext';
import { Course as ContextCourse } from '@/lib/courseData';

type ViewCourse = ContextCourse & { name: string };

export default function CourseDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : undefined;
  const { courses } = useCourseContext();
  const course = id !== undefined ? courses.find(c => c.id === id) : undefined;

  if (!course) return <div>Loading...</div>;

  const viewCourse: ViewCourse = {
    ...course,
    name: course.title, // Assuming 'title' exists in ContextCourse
  };

  return <CourseDetailView course={viewCourse} />;
}
