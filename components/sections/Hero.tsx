"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ASSETS } from "@/data/assets";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-800 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Coming Soon to Major Indian Cities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Certified Nursing Care <br className="hidden md:block" />
                <span className="text-primary">At Your Doorstep</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                India's first app to book verified home nurses instantly. 
                Expert care for elders, post-op recovery, and newborns—just a tap away.
              </p>


              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start text-sm text-gray-500 font-medium mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-500" />
                  <span>100% Certified Nurses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-500" />
                  <span>Background Verified</span>
                </div>
              </div>

              <div id="download" className="mt-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-center md:justify-start">
                  {/* Google Play badge */}
                  <a id="playStoreLink" href="https://play.google.com/store/apps/details?id=com.dot.nsd.client" target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center h-[45px]" aria-label="Get it on Google Play">
                    <img id="playStoreBadge" alt="Get it on Google Play" className="h-full w-auto select-none" loading="eager" decoding="async" src="/images/PlayStore.svg" />
                  </a>

                  {/* App Store badge*/}
                  <a id="appStoreLink" href="https://apps.apple.com/in/app/nsdcare-in/id6754030993" target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center h-[45px]" aria-label="Download on the App Store">
                    <img id="appStoreBadge" src="/images/AppStore.svg" alt="Download on the App Store" className="h-full w-auto select-none" loading="eager" decoding="async" />

                    {/* Fallback if badge not provided */}
                    <span id="appStoreFallback" className="inline-flex h-[56px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 shadow-soft transition hover:bg-white/10 hidden">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90" aria-hidden="true">
                        <path d="M16.8 13.7c.02 2.3 2.03 3.06 2.05 3.07-.01.05-.32 1.1-1.05 2.18-.63.95-1.29 1.9-2.32 1.92-1.01.02-1.34-.6-2.5-.6-1.16 0-1.53.58-2.49.62-.98.04-1.73-1.01-2.36-1.95-1.29-1.93-2.27-5.45-.95-7.84.66-1.18 1.85-1.93 3.14-1.95.98-.02 1.9.66 2.5.66.6 0 1.72-.82 2.9-.7.49.02 1.88.2 2.77 1.5-.07.04-1.65.96-1.63 2.89Z" fill="white" opacity=".9"></path>
                        <path d="M14.9 3.6c.52-.63.87-1.5.78-2.36-.75.03-1.67.5-2.2 1.13-.48.55-.9 1.45-.79 2.3.84.07 1.68-.42 2.21-1.07Z" fill="white" opacity=".85"></path>
                      </svg>
                      <span>App Store</span>
                    </span>
                  </a>
                </div>
              </div>

              <div id="features" className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-teal-100 bg-white shadow-sm p-5">
                  <div className="text-sm font-semibold text-gray-900">Fast workflows</div>
                  <div className="mt-1 text-sm text-gray-500">Install, open, act — no friction.</div>
                </div>
                <div className="rounded-3xl border border-teal-100 bg-white shadow-sm p-5">
                  <div className="text-sm font-semibold text-gray-900">Mobile-first</div>
                  <div className="mt-1 text-sm text-gray-500">Designed to feel native and modern.</div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Image Masked */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/3]">
                <img 
                  src={ASSETS.hero.main} 
                  alt="Nurse caring for patient" 
                  className="object-cover w-full h-full"
                />
                
                {/* Float Card 1 */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-teal-100 flex items-center gap-4"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Booking Confirmed</h4>
                    <p className="text-xs text-gray-500">Nurse Anjali is on her way</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
