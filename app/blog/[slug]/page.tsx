import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { BLOGS } from "@/data/blogs";
import { Navbar } from "@/components/layout/Navbar";

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <article className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="relative h-[400px]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-10 items-end">
                <div>
                   <div className="flex items-center gap-4 text-white/80 mb-4">
                     <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
                       <Tag className="w-3.5 h-3.5" />
                       {blog.category}
                     </span>
                     <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
                       <Clock className="w-3.5 h-3.5" />
                       4 min read
                     </span>
                   </div>
                   <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {blog.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="text-2xl font-medium text-gray-900 mb-8 border-l-4 border-teal-500 pl-6 py-2 italic">
                  "{blog.scenario}"
                </p>
                
                <p className="mb-6">
                  {blog.content}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Home Nursing makes a difference</h3>
                <p className="mb-6">
                  Recovering at home is not just about comfort—it's about faster healing, reduced risk of hospital-acquired infections, and the psychological benefit of being in a familiar environment. For families, it means being together while ensuring professional care standards are maintained.
                </p>

                <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 mt-12">
                  <h4 className="text-xl font-bold text-teal-900 mb-4">How NSD can help:</h4>
                  <ul className="space-y-3 text-teal-800">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>Certified nurses available for 24/7 or scheduled shifts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>Regular monitoring and digital daily health reports.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>Coordination with primary physicians for medication management.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-center md:text-left">
                   <h4 className="text-xl font-bold text-gray-900 mb-2">Need professional home care?</h4>
                   <p className="text-gray-600">Download our app or contact our team to discuss your needs.</p>
                 </div>
                 <div className="flex gap-4">
                   <Link 
                     href="/#download" 
                     className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all"
                   >
                     Get Started
                   </Link>
                 </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
