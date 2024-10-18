// src/app/course/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import CourseDetailView from '@/components/CourseDetailView';
import { useCourseContext } from '@/contexts/CourseContext';

export default function CourseDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : undefined;
  const { courses } = useCourseContext();
  const course = id !== undefined ? courses.find(c => c.id === id) : undefined;

  if (!course) return <div>Loading...</div>;

  return <CourseDetailView course={course} />;
}