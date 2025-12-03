'use client';

import React, { use } from 'react'; // 1. Import 'use'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
// Make sure this path points to your data file
import { articles } from '@/app/data/articlesData'; 

// 2. Update the interface: params is now a Promise
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticleDetailPage({ params }: Props) {
  // 3. Unwrap the params using the use() hook
  const { slug } = use(params);

  // Now use the unwrapped 'slug' variable
  const article = articles.find((p) => p.slug === slug);

  // If no article matches the URL, show 404
  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#ffc107] h-2 w-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/publications/articles"
          className="inline-flex items-center gap-2 mb-8 text-[#3b82f6] hover:underline text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#5c8a9f] mb-8 leading-relaxed">
          {article.title}
        </h1>

        {/* Full Content */}
        <div className="prose max-w-none text-gray-800 leading-8">
          {article.content.split('\n').map((para, index) => (
            // Handle empty lines gracefully
            para.trim() !== "" ? (
              <p key={index} className="mb-6 text-lg">
                {para}
              </p>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}