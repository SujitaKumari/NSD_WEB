"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DeleteAccount() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto md:p-6 mt-12">
                <div className="rounded-lg md:p-12 w-full mx-auto">
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

                    <h1 className="text-2xl font-bold mb-4">How to delete your account?</h1>
                    <p className="mb-4">
                        NSD currently does not provide an in-app “Delete Account” button. If you want to delete your account and associated
                        personal data, please raise a deletion request with our support team.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">1. Steps to Request Account Deletion</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Send an email to our support team from your registered email address.</li>
                        <li>Use the subject line: <span className="font-semibold">“Account Deletion Request”</span>.</li>
                        <li>In the email, mention your registered mobile number and your full name (as used in the app).</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">2. ⏱️ Processing Time</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li>We will verify your request and process deletion within <span className="font-semibold">48 hours</span>.</li>
                        <li>After deletion is completed, you will no longer be able to access your NSD account.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">3. 🔐 What Happens After Deletion?</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Your profile and personal data associated with your NSD account will be removed from our active systems.</li>
                        <li>Some records may be retained where legally required (for example: compliance, dispute resolution, fraud prevention, or accounting).</li>
                        <li>Anonymized or aggregated data (not linked back to you) may be retained for internal analytics and service improvement.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">4. 📩 Need Help?</h2>
                    <p className="mb-2">For account deletion or any support, contact us at:</p>
                    <p className="mb-4">
                        Email:
                        <a href="mailto:support@nsdcare.in" className="text-blue-500"> support@nsdcare.in</a>
                    </p>
                    <p className="text-sm text-gray-500">
                        Tip: Email us from your registered email ID for faster verification.
                    </p>
                </div>
            </div>
        </div>
    );
}