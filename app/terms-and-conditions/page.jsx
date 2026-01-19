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

                    <h1 class="text-2xl font-bold mb-4">Terms and Conditions</h1>
                    <p class="mb-4">
                        By using the NSD app and services, you agree to the following terms
                        and conditions:
                    </p>

                    <h2 class="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
                    <p class="mb-4">
                        By accessing or using our delivery app, you acknowledge that you have
                        read, understood, and agree to be bound by these terms.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">2. Use of Services</h2>
                    <p class="mb-4">
                        NSD provides Nursing Service at Doorstep (NSD) delivery services across various locations in
                        India. Users must provide accurate information and comply with all
                        applicable laws.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">3. User Accounts</h2>
                    <p class="mb-4">
                        Users must create an account to access our services. You are
                        responsible for maintaining the security of your account credentials.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">4. Payments and Refunds</h2>
                    <p class="mb-4">
                        Payments must be made through our authorized gateways. Refund requests
                        must be submitted within 7 days of purchase and will be processed
                        according to our refund policy.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">
                        5. Order Processing and Deliveries
                    </h2>
                    <p class="mb-4">
                        Orders are processed based on availability. Estimated delivery times
                        are provided but not guaranteed.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">6. Restrictions</h2>
                    <p class="mb-4">
                        Users may not misuse our services, engage in fraudulent activities, or
                        violate any applicable laws.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">7. Termination</h2>
                    <p class="mb-4">
                        NSD reserves the right to suspend or terminate accounts that
                        violate these terms.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">8. Changes to Terms</h2>
                    <p class="mb-4">
                        We may update these terms at any time. Continued use of the app
                        implies acceptance of any modifications.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">9. Accurate Information & Failed Delivery Attempts</h2>
                    <p>
                        Customers must provide complete and accurate delivery details (including name, phone number, address, unit/suite number, entry/buzzer code, and any access instructions) and re-verify this information before placing an order. If a delivery attempt fails due to incorrect, incomplete, or unverified customer-provided information, NSD may reschedule the delivery, and additional delivery or re-delivery charges may apply.
                    </p>

                    <h2 class="text-xl font-semibold mt-6">10. Contact Information</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us
                        at
                        <a href="mailto:info@nsdcare.in" class="text-blue-500"
                        > info@nsdcare.in
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}