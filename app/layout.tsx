// src/app/layout.tsx
import { CourseProvider } from '@/contexts/CourseContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CourseProvider>
          {children}
        </CourseProvider>
      </body>
    </html>
  );
}