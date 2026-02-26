import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 about-us">
            <Navbar />
            
            <div className="max-w-4xl mx-auto md:p-6">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-16 w-full mx-auto mt-12">
                    <div className="flex items-center justify-center mb-12">
                        <Link href="/">
                            <Image
                                src="/nsd_logo.svg"
                                alt="NSD Logo"
                                width={180}
                                height={180}
                                className="h-[180px] w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 border-b pb-6">About NSD</h1>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            At Nursing Service at Doorstep (NSD), our mission is simple yet profound: to bring high-quality, certified, and compassionate nursing care directly to the homes of those who need it most. We believe that recovery and care are most effective when provided in a familiar, comfortable environment. Our digital platform bridges the gap between expert healthcare professionals and families, ensuring that professional medical assistance is just a few taps away.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            We envision a future where home-based medical care is the standard, not the exception. By leveraging technology and a network of dedicated nursing professionals, we aim to become India's most trusted platform for home healthcare. We strive to empower families to provide the best possible care for their aging parents, newborn babies, and recovering patients without the stress and logistical challenges of constant hospital visits.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Why Choose NSD?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-justify">
                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-2">100% Certified Nurses</h3>
                                <p className="text-teal-800 text-sm">Every nurse on our platform undergoes rigorous background checks and certification verification.</p>
                            </div>
                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-2">Personalized Care</h3>
                                <p className="text-teal-800 text-sm">We provide tailored care plans that address the unique physical and emotional needs of every patient.</p>
                            </div>
                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-2">Seamless Booking</h3>
                                <p className="text-teal-800 text-sm">Our mobile-first approach makes it easy to schedule, manage, and track nursing sessions in real-time.</p>
                            </div>
                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-2">Peace of Mind</h3>
                                <p className="text-teal-800 text-sm">Regular updates and professional monitoring ensure that your loved ones are always in safe hands.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Our Commitment</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            NSD is more than just a service—it's a commitment to the well-being of our community. We are constantly expanding our team of experts and refining our technology to provide a safer, faster, and more empathetic care experience. Whether it's post-surgery recovery, elderly companionship, or neonatal care, NSD stands as a pillar of support for every household across the country.
                        </p>
                    </section>
                    
                    <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                        <Link href="/#download" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                            Join Our Journey
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
