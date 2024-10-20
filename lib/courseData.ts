// src/lib/courseData.ts
export interface Course {
    id: number;
    title: string;
    category: string;
    progress: number;
    icon: string;
    color: string;
    bgColor: string;
    duration: string;          // Add duration property
    enrolledCount: number;     // Add enrolledCount property
    rating: number;            // Add rating property
  }
  
  const courseData: Course[] = [
    {
      id: 1,
      title: 'Advanced Cardiology',
      category: 'Advanced Cardiology',
      progress: 75,
      icon: 'Heart',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      duration: '4h 30m',         // Sample duration
      enrolledCount: 150,         // Sample enrolled count
      rating: 4.5                 // Sample rating
    },
    {
      id: 2,
      title: 'Neurology Essentials',
      category: 'Neurology Essentials',
      progress: 30,
      icon: 'Brain',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      duration: '3h 15m',
      enrolledCount: 120,
      rating: 4.2
    },
    {
      id: 3,
      title: 'Emergency Medicine',
      category: 'Emergency Medicine',
      progress: 0,
      icon: 'Syringe',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      duration: '5h 00m',
      enrolledCount: 200,
      rating: 4.8
    },
    {
      id: 4,
      title: 'Clinical Microbiology',
      category: 'Clinical Microbiology',
      progress: 50,
      icon: 'Microscope',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      duration: '2h 45m',
      enrolledCount: 80,
      rating: 4.1
    }
  ];
  
  export default courseData;
  