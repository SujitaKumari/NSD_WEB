"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto p-6 mt-12">
                <div className="  rounded-lg p-8 md:p-12 w-full mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <Link href="/">
                            <Image
                                src="/nsd_logo.svg"
                                alt="Logo"
                                width={150}
                                height={150}
                                className="h-[150px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                    <p className="mb-4">
                        Welcome to Nursing Service at Doorstep (NSD). Your privacy is important to us. This policy outlines how we collect, use, and protect your personal data when using our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect personal data such as name, email, phone number, and address when you register or place an order through our app. Additionally, we may collect location data to facilitate efficient service delivery.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
                    <div className="mb-4">
                        We use the information collected to:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Process and fulfill your service requests.</li>
                            <li>Enhance our service delivery and improve customer experience.</li>
                            <li>Communicate with you regarding orders, promotions, or service updates.</li>
                            <li>Ensure security and prevent fraudulent activities.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl font-semibold mt-6">3. Data Protection</h2>
                    <p className="mb-4">
                        We take industry-standard measures to protect your data from unauthorized access, modification, or disclosure. Our security protocols ensure your information remains confidential.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">4. Location Data Usage</h2>
                    <p className="mb-4">
                        To provide efficient services at your doorstep, our app may collect and use your location data. This data is only used to optimize the service process and is not shared with third parties.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">5. Cookies and Tracking Technologies</h2>
                    <p className="mb-4">
                        We use cookies and tracking technologies to enhance your experience, analyze traffic, and improve our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">6. Third-Party Services</h2>
                    <p className="mb-4">
                        We may share necessary data with third-party partners to fulfill services. However, we do not sell or share your personal information with advertisers.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">7. Your Rights and Choices</h2>
                    <p className="mb-4">
                        You can update or delete your personal data by contacting us. You may also disable location tracking through your device settings.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us at{" "}
                        <a href="mailto:info@nsdcare.in" className="text-blue-500 hover:underline">
                            info@nsdcare.in
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}