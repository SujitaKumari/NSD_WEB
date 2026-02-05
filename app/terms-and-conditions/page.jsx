"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 policies">
            <style jsx>{`
                .policies p {
                    text-align: justify;
                }
            `}</style>
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

                    <h1 className="text-2xl font-bold mb-4">TERMS AND CONDITIONS OF USE</h1>

                    <p className="mb-4">
                        These Terms and Conditions (“Terms”) govern access to and use of the mobile application,
                        website and digital platform branded as NSD – Nursing Services at Doorstep (collectively,
                        the “Platform”), owned and operated by Trisha Helping Hands LLP, a limited liability
                        partnership incorporated under the laws of India, having its registered office at 93 Shiv
                        Shakti Nagar, Behind Anup Cinema, CGO Complex, MIG Thana, Indore – 452001, Madhya Pradesh,
                        India (“NSD”, “we”, “us” or “our”).
                    </p>

                    <p className="mb-4">
                        These Terms, together with the Privacy Policy, constitute a legally binding agreement
                        between NSD and:
                    </p>
                    <ul className="list-disc ml-6 mb-6 space-y-1">
                        <li>
                            Users / End-Users – patients, family members, guardians or authorised representatives
                            booking nursing or caregiving services;
                        </li>
                        <li>
                            Service Providers – nurses, caregivers, attendants and allied healthcare professionals
                            registered or empanelled on the Platform; and
                        </li>
                        <li>Any other person accessing or using the Platform.</li>
                    </ul>

                    <p className="mb-6">
                        By accessing, browsing, registering on, or using the Platform or any services offered
                        through it (“Services”), you agree to be bound by these Terms and the Privacy Policy. If
                        you do not agree, you must not access or use the Platform.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">1. NATURE AND APPLICABILITY OF TERMS</h2>

                    <h3 className="text-lg font-semibold mt-3">1.1 Binding Legal Agreement</h3>
                    <p className="mb-4">
                        These Terms and Conditions (“Terms”), together with the Privacy Policy and any other
                        policies or guidelines published on the Platform from time to time, constitute a legally
                        binding and enforceable agreement between you and NSD – Nursing Services at Doorstep,
                        operated by Trisha Helping Hands LLP (“NSD”, “we”, “us” or “our”), under the provisions
                        of the Indian Contract Act, 1872, the Information Technology Act, 2000, and other
                        applicable laws of India.
                    </p>
                    <p className="mb-4">
                        By accessing, browsing, registering on, or using the Platform or availing any services
                        through the Platform, you irrevocably accept and agree to be bound by these Terms. If you
                        do not agree with any part of these Terms, you must immediately discontinue access to and
                        use of the Platform.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.2 Applicability to Categories of Users</h3>
                    <p className="mb-2">
                        These Terms apply to all persons who access or use the Platform, including but not limited
                        to:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>
                            (a) Users / End-Users – patients, family members, legal guardians, caregivers or authorised
                            representatives who access the Platform to search for, book or manage nursing, caregiving
                            or attendant services;
                        </li>
                        <li>
                            (b) Service Providers – nurses, caregivers, attendants and allied healthcare professionals
                            who are empanelled, registered or otherwise engaged through the Platform to provide
                            services to Users; and
                        </li>
                        <li>
                            (c) Visitors – any individual who merely browses or accesses the Platform without
                            registering or availing services.
                        </li>
                    </ul>
                    <p className="mb-4">
                        For the purposes of these Terms, all such persons shall collectively be referred to as
                        “Users”, unless the context requires otherwise.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.3 Nature of NSD’s Platform and Role</h3>
                    <p className="mb-2">
                        NSD operates solely as a technology-enabled facilitation and marketplace platform, which
                        enables Users to discover, connect with and engage independent Service Providers for the
                        provision of nursing, caregiving and allied healthcare services at the User’s chosen
                        location.
                    </p>
                    <p className="mb-2">The Platform provides digital tools for, inter alia:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>listing and discovery of Service Providers;</li>
                        <li>submission and management of service requests;</li>
                        <li>scheduling and coordination of services;</li>
                        <li>facilitation of payments and invoicing; and</li>
                        <li>communication and support relating to bookings.</li>
                    </ul>
                    <p className="mb-4">
                        NSD’s role is strictly limited to providing access to the Platform and facilitating
                        interactions between Users and Service Providers.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.4 No Provision of Healthcare Services by NSD</h3>
                    <p className="mb-2">It is expressly clarified that:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>NSD does not itself provide medical, nursing, caregiving or clinical services of any nature;</li>
                        <li>NSD does not practise medicine, nursing or healthcare under any law;</li>
                        <li>NSD does not diagnose, treat, prescribe, supervise or control any clinical or nursing activity.</li>
                    </ul>
                    <p className="mb-4">
                        All nursing, caregiving and healthcare services are provided solely by independent Service
                        Providers, who exercise their own professional judgment, qualifications and discretion in
                        accordance with applicable laws and standards of care.
                    </p>
                    <p className="mb-4">
                        For the avoidance of doubt, NSD’s role in relation to healthcare data, medical records and
                        health-related information is strictly limited to facilitation and coordination in
                        accordance with its Privacy Policy. NSD does not analyse, interpret or make clinical
                        determinations based on such data.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.5 No Employment or Agency Relationship</h3>
                    <p className="mb-2">Nothing contained in these Terms shall be construed as creating:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>an employer–employee relationship,</li>
                        <li>a principal–agent relationship,</li>
                        <li>a partnership or joint venture, or</li>
                        <li>any other fiduciary or representative relationship</li>
                    </ul>
                    <p className="mb-4">
                        between NSD and any Service Provider, or between NSD and any User.
                    </p>
                    <p className="mb-4">
                        Service Providers are independent professionals and are not employees, agents or
                        representatives of NSD.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.6 Modification of Terms</h3>
                    <p className="mb-4">
                        NSD reserves the right, at its sole discretion, to modify, amend, suspend or replace any
                        part of these Terms at any time. Any such modifications shall be effective upon being
                        published on the Platform.
                    </p>
                    <p className="mb-4">
                        Your continued access to or use of the Platform after such modification constitutes your
                        acceptance of the revised Terms. Users are advised to review these Terms periodically.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">1.7 Supremacy and Entire Agreement</h3>
                    <p className="mb-6">
                        These Terms, together with the Privacy Policy, constitute the entire agreement between you
                        and NSD in relation to your use of the Platform and supersede all prior oral or written
                        communications, understandings or arrangements.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">2. REGULATORY AND LEGAL COMPLIANCE</h2>

                    <h3 className="text-lg font-semibold mt-3">2.1 Statutory Framework and Publication</h3>
                    <p className="mb-2">
                        These Terms are published and shall be governed in accordance with the applicable laws of
                        India, including but not limited to:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>the Indian Contract Act, 1872;</li>
                        <li>the Information Technology Act, 2000;</li>
                        <li>the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021;</li>
                        <li>the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011;</li>
                        <li>the Digital Personal Data Protection Act, 2023;</li>
                        <li>the Consumer Protection Act, 2019; and</li>
                        <li>
                            all applicable healthcare, nursing, caregiving and allied health regulations, rules,
                            guidelines, notifications and standards in force in India, as amended from time to time.
                        </li>
                    </ul>
                    <p className="mb-4">
                        These Terms are intended to comply with and be interpreted in a manner consistent with the
                        above legal framework.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.2 Intermediary Status of NSD</h3>
                    <p className="mb-4">
                        NSD operates the Platform as a technology-enabled intermediary and facilitation marketplace,
                        within the meaning of applicable information technology and intermediary laws.
                    </p>
                    <p className="mb-2">NSD’s role is strictly limited to providing digital infrastructure and facilitation services that enable Users to connect with independent Service Providers. NSD does not:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>render nursing, caregiving, medical or clinical services;</li>
                        <li>practise medicine, nursing or healthcare;</li>
                        <li>exercise control over the professional judgment, methods or manner of service delivery by Service Providers.</li>
                    </ul>
                    <p className="mb-4">
                        NSD claims protection under Section 79 of the Information Technology Act, 2000, read with
                        the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules,
                        2021, subject to compliance with applicable due diligence requirements.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.3 No Clinical Responsibility or Medical Advice</h3>
                    <p className="mb-4">
                        NSD does not provide any form of medical, nursing or clinical advice, diagnosis,
                        prescription, treatment or care. Any information made available on or through the Platform,
                        including service descriptions, profiles, communications or support interactions, is
                        provided solely for facilitation and informational purposes and shall not be construed as
                        healthcare advice.
                    </p>
                    <p className="mb-4">
                        All healthcare-related services are provided independently by Service Providers, who alone
                        are responsible for compliance with applicable professional, ethical and regulatory
                        requirements.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.4 Compliance Obligations of Users and Service Providers</h3>
                    <p className="mb-4">
                        Users and Service Providers acknowledge and agree that they are individually responsible for
                        complying with all applicable laws, rules and regulations governing their conduct, including
                        but not limited to healthcare, nursing, labour, tax, consumer protection and data protection
                        laws, as applicable to them. NSD shall not be liable for any non-compliance, violation or
                        breach of law by any User or Service Provider.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.5 Consumer Protection and Non-Excludable Rights</h3>
                    <p className="mb-4">
                        Nothing contained in these Terms shall be construed to exclude or limit any rights or
                        remedies available to Users under applicable consumer protection or other mandatory laws, to
                        the extent such exclusion or limitation is prohibited by law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.6 Platform Governance and Due Diligence</h3>
                    <p className="mb-4">
                        NSD undertakes reasonable due diligence measures as required under applicable intermediary
                        and information technology laws, including mechanisms for grievance redressal, content
                        moderation and lawful takedown, in accordance with statutory requirements. However, NSD does
                        not independently verify or guarantee the accuracy, completeness or legality of information
                        provided by Users or Service Providers, except to the extent required by law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">2.7 Severability and Interpretation</h3>
                    <p className="mb-6">
                        If any provision of this Clause or these Terms is held to be invalid or unenforceable under
                        applicable law, such provision shall be severed and the remaining provisions shall continue
                        to remain valid and enforceable to the fullest extent permitted by law.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">3. ELIGIBILITY AND USER REPRESENTATIONS</h2>

                    <h3 className="text-lg font-semibold mt-3">3.1 Age and Legal Capacity</h3>
                    <p className="mb-4">
                        Access to and use of the Platform and Services is permitted only to individuals who are
                        eighteen (18) years of age or older and who are competent to enter into a legally binding
                        contract under the Indian Contract Act, 1872. By accessing, registering on, or using the
                        Platform, you represent and warrant that you meet the above eligibility criteria and that
                        you have the legal capacity and authority to agree to and be bound by these Terms.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">3.2 Use on Behalf of Minors, Elderly or Dependents</h3>
                    <p className="mb-4">
                        Services in respect of minors, elderly persons, incapacitated individuals or other dependents
                        may be booked only by their parent, legal guardian, authorised representative or caregiver,
                        who is legally competent and duly authorised to act on their behalf.
                    </p>
                    <p className="mb-2">By booking services for another individual, you represent and warrant that:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>you have obtained all necessary consents and authorisations required under applicable law;</li>
                        <li>you are legally entitled to share the personal and health-related information of such individual with NSD and the Service Provider; and</li>
                        <li>you accept responsibility for compliance with these Terms on behalf of such individual.</li>
                    </ul>
                    <p className="mb-4">
                        NSD shall not be responsible or liable for any claim arising out of lack of valid authorisation
                        or consent, and you agree to indemnify NSD against any such claims.
                    </p>
                    <p className="mb-4">
                        In respect of personal data of children, NSD shall process such data only upon verifiable
                        consent of the parent or lawful guardian, in accordance with the Digital Personal Data
                        Protection Act, 2023 and applicable rules.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">3.3 Accuracy and Completeness of Information</h3>
                    <p className="mb-4">
                        You represent and warrant that all information, data and documents provided by you on or
                        through the Platform, whether at the time of registration, booking, communication or during
                        the course of service delivery, are true, accurate, current and complete in all respects.
                    </p>
                    <p className="mb-4">
                        NSD does not independently verify the authenticity or accuracy of information provided by Users
                        and shall not be responsible for any consequences arising from inaccurate, incomplete or
                        misleading information supplied by you.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">3.4 Duty to Update Information</h3>
                    <p className="mb-4">
                        You agree to promptly update any information provided to NSD if there is any change or if such
                        information becomes inaccurate, outdated or incomplete. Failure to update such information may
                        adversely affect service delivery, for which NSD shall not be responsible.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">3.5 Right to Suspend or Terminate Access</h3>
                    <p className="mb-2">
                        NSD reserves the right, at its sole discretion and without prejudice to any other rights or
                        remedies, to suspend, restrict or terminate your access to the Platform or Services, with or
                        without notice, if:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>any information provided by you is found to be false, misleading, inaccurate or incomplete;</li>
                        <li>NSD has reasonable grounds to believe that you have violated these Terms or applicable law; or</li>
                        <li>such action is required to protect the interests of NSD, other Users, Service Providers or to comply with legal or regulatory obligations.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">3.6 Effect of Termination</h3>
                    <p className="mb-6">
                        Suspension or termination of access shall not affect any rights or obligations that have accrued
                        prior to such suspension or termination, including payment obligations or liabilities arising
                        from prior use of the Platform.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">4. SCOPE OF SERVICES</h2>

                    <h3 className="text-lg font-semibold mt-3">4.1 Platform Facilitation Services</h3>
                    <p className="mb-2">
                        NSD provides a technology-enabled facilitation platform that enables Users to access, discover
                        and connect with independent nurses, caregivers, attendants and allied healthcare professionals
                        (“Service Providers”) for the provision of nursing, caregiving and attendant services at the
                        User’s chosen location.
                    </p>
                    <p className="mb-2">Through the Platform, NSD facilitates, inter alia:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>(a) discovery, listing and display of Service Provider profiles, qualifications, experience and availability;</li>
                        <li>(b) submission, acceptance and management of service requests and bookings;</li>
                        <li>(c) scheduling, coordination and tracking of service appointments;</li>
                        <li>(d) facilitation of digital payments, invoicing and refunds, where applicable; and</li>
                        <li>(e) customer support, grievance handling and operational assistance in relation to Platform usage.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">4.2 Limited Role of NSD</h3>
                    <p className="mb-2">The Services provided by NSD are limited strictly to platform facilitation and operational support. NSD does not:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>provide medical, nursing, caregiving or clinical services of any nature;</li>
                        <li>offer medical diagnosis, treatment, prescription or clinical advice;</li>
                        <li>supervise, direct, control or influence the professional or clinical decision-making of Service Providers; or</li>
                        <li>guarantee the quality, safety, suitability or outcome of any services rendered by Service Providers.</li>
                    </ul>
                    <p className="mb-4">
                        All professional services are rendered independently by Service Providers, who exercise their
                        own judgment and expertise.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">4.3 No Endorsement or Assurance</h3>
                    <p className="mb-4">
                        The display of Service Providers on the Platform, including their profiles, qualifications,
                        experience, ratings or feedback, does not constitute an endorsement, recommendation or
                        certification by NSD of any Service Provider or of the services offered by them.
                    </p>
                    <p className="mb-4">
                        Users acknowledge that selection and engagement of a Service Provider is undertaken at their
                        own discretion and risk, subject to applicable law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">4.4 Payments and Financial Facilitation</h3>
                    <p className="mb-4">
                        NSD facilitates collection of service fees from Users through authorised payment gateways and
                        digital payment mechanisms and remits the applicable amounts to Service Providers after
                        deduction of platform facilitation charges, as disclosed at the time of booking.
                    </p>
                    <p className="mb-4">
                        All charges, commissions, taxes and statutory levies applicable to a booking shall be
                        transparently disclosed to Users prior to confirmation of the booking, in compliance with the
                        Consumer Protection Act, 2019. NSD acts solely as a payment facilitator and does not assume
                        responsibility for the underlying service performance.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">4.5 Customer Support and Grievance Handling</h3>
                    <p className="mb-4">
                        NSD provides customer support and grievance redressal mechanisms to assist Users and Service
                        Providers with respect to Platform-related issues, bookings, payments or operational concerns.
                        Such support is provided without prejudice to the independent nature of the services rendered
                        by Service Providers and shall not be construed as supervision or control of service delivery.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">4.6 Service Availability and Modifications</h3>
                    <p className="mb-6">
                        NSD reserves the right to add, modify, suspend or discontinue any aspect of the Platform or
                        Services, temporarily or permanently, at its sole discretion, with or without notice, subject
                        to applicable law.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">5. ROLE OF SERVICE PROVIDERS</h2>

                    <h3 className="text-lg font-semibold mt-3">5.1 Independent Professional Status</h3>
                    <p className="mb-4">
                        All nurses, caregivers, attendants and allied healthcare professionals engaged or empanelled
                        on the Platform (“Service Providers”) act solely as independent professionals. Nothing
                        contained in these Terms, the Privacy Policy or any communication by NSD shall be construed
                        as creating an employer–employee relationship, agency, partnership, joint venture or any other
                        fiduciary relationship between NSD and any Service Provider.
                    </p>
                    <p className="mb-4">
                        Service Providers are not employees, agents or representatives of NSD, and are not authorised
                        to bind NSD in any manner whatsoever.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">5.2 Professional Judgment and Decision-Making</h3>
                    <p className="mb-4">
                        All clinical, nursing, caregiving and healthcare-related decisions, including but not limited
                        to assessment, care planning, execution of services, medication administration, monitoring of
                        patient condition and escalation of care, are taken solely and independently by the Service
                        Provider based on their professional judgment, qualifications, experience and applicable
                        standards of care. NSD does not participate in, influence, supervise, direct or control the
                        manner or method in which Service Providers render services.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">5.3 Credential Verification and Onboarding</h3>
                    <p className="mb-2">
                        As part of the onboarding and empanelment process, NSD may collect and review certain
                        documentation from Service Providers, including identity proofs, professional qualifications,
                        registrations, licences, certifications and experience details, for the limited purpose of
                        basic verification and platform eligibility.
                    </p>
                    <p className="mb-2">Users expressly acknowledge and agree that:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>such verification is document-based and administrative in nature;</li>
                        <li>
                            NSD does not independently certify, guarantee or warrant the clinical competence, skill,
                            performance or suitability of any Service Provider; and
                        </li>
                        <li>
                            responsibility for professional competence, lawful practice and compliance with applicable
                            healthcare and nursing regulations rests solely with the Service Provider.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Any verification undertaken by NSD is limited to document review and does not amount to
                        professional certification, endorsement or guarantee of competence, skill or suitability.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">5.4 Compliance Obligations of Service Providers</h3>
                    <p className="mb-4">
                        Service Providers are solely responsible for ensuring compliance with all applicable laws,
                        rules, regulations, professional standards and ethical obligations governing the provision
                        of nursing, caregiving and allied healthcare services, including but not limited to
                        registration, licensing, scope of practice, patient safety and record-keeping requirements.
                        NSD shall not be liable for any act, omission, negligence or breach of law by any Service
                        Provider.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">5.5 Limitation of NSD’s Responsibility</h3>
                    <p className="mb-2">NSD shall not be responsible or liable for:</p>
                    <ul className="list-disc ml-6 mb-6 space-y-1">
                        <li>the quality, safety or outcome of services rendered by Service Providers;</li>
                        <li>any injury, harm, deterioration of health or adverse event suffered by a User;</li>
                        <li>any misconduct, negligence or professional lapse on the part of a Service Provider.</li>
                    </ul>
                    <p className="mb-6">
                        Engagement of Service Providers through the Platform is undertaken by Users at their own
                        discretion and risk, subject to applicable law.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">6. NO NURSE–PATIENT RELATIONSHIP WITH NSD</h2>

                    <h3 className="text-lg font-semibold mt-3">6.1 No Professional Relationship with NSD</h3>
                    <p className="mb-4">
                        Use of the Platform, including access to information, profiles, communications, support
                        services or any interaction facilitated through the Platform, does not create any nurse–patient,
                        caregiver–patient, healthcare professional–patient or other medical or fiduciary relationship
                        between NSD and any User. NSD does not act as a healthcare provider, medical institution or
                        clinical service entity in any manner whatsoever.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">6.2 Independent Relationship Between User and Service Provider</h3>
                    <p className="mb-4">
                        Any nurse–patient, caregiver–patient or healthcare professional–patient relationship, if
                        established, arises solely and exclusively between the User and the Service Provider engaged
                        through the Platform. Such relationship is independent of NSD and governed by applicable
                        healthcare laws, professional standards and the mutual understanding between the User and the
                        Service Provider.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">6.3 No Medical Advice or Clinical Obligation by NSD</h3>
                    <p className="mb-4">
                        NSD does not provide medical, nursing or clinical advice, diagnosis, treatment or care. Any
                        information exchanged through the Platform, including messages, service descriptions, profiles
                        or support communications, is provided solely for facilitation and informational purposes and
                        shall not be construed as professional healthcare advice.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">6.4 Limitation of Responsibility</h3>
                    <p className="mb-2">NSD shall not be responsible or liable for:</p>
                    <ul className="list-disc ml-6 mb-6 space-y-1">
                        <li>the existence, nature or quality of any nurse–patient or caregiver–patient relationship;</li>
                        <li>any act, omission, negligence or misconduct of Service Providers; or</li>
                        <li>any outcome, injury, harm or adverse event arising from services provided by Service Providers.</li>
                    </ul>
                    <p className="mb-6">
                        Users acknowledge and agree that engagement of Service Providers through the Platform is
                        undertaken at their own discretion and risk, subject to applicable law.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">7. BOOKINGS, PAYMENTS & COMMISSION MODEL</h2>

                    <h3 className="text-lg font-semibold mt-3">7.1 Booking of Services</h3>
                    <p className="mb-4">
                        Users may book nursing, caregiving or attendant services through the Platform by selecting a
                        Service Provider, service category, duration and schedule, in accordance with the options
                        made available on the Platform from time to time. Submission of a booking request through
                        the Platform constitutes an offer by the User to avail services from the selected Service
                        Provider. A booking shall be deemed confirmed only upon acceptance through the Platform and
                        receipt of payment, as applicable.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">7.2 Collection of Service Fees</h3>
                    <p className="mb-4">
                        Users agree to pay all applicable service fees, charges and taxes for the services booked
                        through the Platform. Payments shall be made exclusively through the digital payment
                        mechanisms and authorised payment gateways integrated with the Platform. NSD facilitates the
                        collection of service fees on behalf of Service Providers and acts solely as a payment
                        collection and facilitation intermediary.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">7.3 Platform Facilitation Commission</h3>
                    <p className="mb-4">
                        In consideration of providing access to the Platform, digital infrastructure and facilitation
                        services, NSD shall be entitled to deduct a platform facilitation commission from the total
                        service fee collected from the User, at such rates as may be disclosed on the Platform at the
                        time of booking. The balance amount, after deduction of the applicable commission, taxes and
                        statutory levies, shall be remitted to the concerned Service Provider in accordance with NSD’s
                        settlement cycle.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">7.4 Taxation and Invoicing</h3>
                    <p className="mb-4">
                        NSD shall issue a tax invoice in respect of the platform facilitation commission charged by it,
                        in accordance with applicable provisions of the Central Goods and Services Tax Act, 2017 and
                        related rules. Service Providers shall be solely responsible for compliance with their
                        respective tax obligations, including issuance of invoices (where applicable), payment of
                        taxes, filing of returns and statutory reporting in respect of the services rendered by them.
                        NSD shall not be responsible for any tax liability, default or non-compliance on the part of
                        any Service Provider.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">7.5 Payment Processing and Gateway Services</h3>
                    <p className="mb-4">
                        Payments made through the Platform are processed by authorised third-party payment gateway
                        service providers. NSD does not store users’ complete card, banking or payment instrument
                        details. NSD shall not be liable for any delay, failure or error in payment processing
                        attributable to payment gateways, banks or financial institutions.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">7.6 Refunds, Chargebacks and Reversals</h3>
                    <p className="mb-6">
                        Refunds, chargebacks or payment reversals, if any, shall be governed by the applicable
                        cancellation and refund policy displayed on the Platform and subject to the rules and
                        timelines of the respective payment gateway or banking institution.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">8. CANCELLATION, REFUNDS & NO-SHOW POLICY</h2>

                    <h3 className="text-lg font-semibold mt-3">8.1 Cancellation by Users</h3>
                    <p className="mb-4">
                        Users may cancel a confirmed booking through the Platform in accordance with the cancellation
                        timelines and conditions displayed at the time of booking. Cancellation requests shall be
                        effective only upon successful confirmation through the Platform. Any cancellation made
                        outside the prescribed timelines may attract cancellation charges, as disclosed at the time
                        of booking.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">8.2 Cancellation by Service Providers</h3>
                    <p className="mb-4">
                        In the event a Service Provider is unable to render the booked service due to unavailability,
                        emergency or other valid reasons, the Service Provider shall endeavour to inform the User
                        through the Platform as soon as reasonably practicable. Where a service is cancelled by a
                        Service Provider prior to commencement, NSD shall facilitate a refund of the applicable
                        service fee to the User, subject to the Platform’s refund policy.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">8.3 No-Show by Users</h3>
                    <p className="mb-2">
                        A “No-Show” shall mean a situation where a User, having confirmed a booking, is unavailable,
                        unresponsive or fails to permit commencement of the service at the scheduled time and location,
                        without cancelling the booking in advance.
                    </p>
                    <p className="mb-2">In case of a No-Show by the User:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>the User may not be entitled to a refund, in full or in part;</li>
                        <li>the Service Provider may be compensated for time and availability blocked; and</li>
                        <li>
                            NSD reserves the right to impose reasonable restrictions on repeated misuse of the Platform,
                            including temporary suspension of booking privileges.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">8.4 Refund Processing</h3>
                    <p className="mb-4">
                        Refunds, where applicable, shall be processed through the original mode of payment used by the
                        User at the time of booking and shall be subject to the timelines prescribed by the applicable
                        payment gateway or banking institution. NSD shall not be responsible for delays caused by banks,
                        payment gateways or third-party financial service providers.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">8.5 Non-Refundable Charges</h3>
                    <p className="mb-4">
                        Platform facilitation fees, payment gateway charges, taxes or other statutory levies may be
                        non-refundable, unless otherwise required under applicable law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">8.6 Disputes Relating to Cancellations and Refunds</h3>
                    <p className="mb-4">
                        Any dispute relating to cancellation or refund shall be raised through NSD’s customer support
                        or grievance redressal mechanism within a reasonable time from the occurrence of the event.
                        NSD’s role in such disputes shall be limited to facilitation and coordination and shall not
                        extend to adjudication of clinical or professional issues between Users and Service Providers.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">8.7 Limitation of Liability</h3>
                    <p className="mb-6">
                        To the maximum extent permitted under applicable law, NSD’s total liability in relation to any
                        cancellation, refund or No-Show dispute shall be limited to the platform facilitation fee
                        actually collected by NSD for the concerned booking. Nothing in this Clause shall prejudice
                        the rights of Users under applicable consumer protection laws where refund obligations are
                        mandatory.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">9. USER OBLIGATIONS & PROHIBITED CONDUCT</h2>

                    <h3 className="text-lg font-semibold mt-3">9.1 General User Obligations</h3>
                    <p className="mb-4">
                        Users agree to access and use the Platform lawfully, responsibly and in good faith, and solely
                        for the purposes permitted under these Terms. Users shall ensure that their use of the Platform
                        does not violate any applicable law, regulation, guideline or third-party right, including but
                        not limited to healthcare, data protection, consumer protection and information technology laws.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">9.2 Accuracy of Information and Cooperation</h3>
                    <p className="mb-4">
                        Users shall provide accurate, complete and up-to-date information while using the Platform and
                        shall cooperate reasonably with NSD and Service Providers to enable effective service delivery,
                        including providing timely access to the service location and relevant information. NSD shall
                        not be responsible for any service failure arising due to incorrect, incomplete or misleading
                        information provided by Users.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">9.3 Prohibited Conduct</h3>
                    <p className="mb-2">Users agree not to engage in any conduct that:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>(a) is unlawful, fraudulent, misleading or deceptive;</li>
                        <li>(b) infringes the rights of NSD, Service Providers or any third party;</li>
                        <li>(c) involves abuse, harassment, intimidation, discrimination or inappropriate behaviour towards Service Providers or NSD personnel;</li>
                        <li>(d) involves misuse of the Platform, including repeated cancellations, No-Shows or attempts to circumvent Platform processes;</li>
                        <li>(e) involves posting, transmitting or sharing content that is defamatory, obscene, offensive, harmful, hateful or otherwise unlawful;</li>
                        <li>(f) attempts to access, interfere with or disrupt the Platform, servers, networks or security mechanisms; or</li>
                        <li>(g) seeks to obtain services outside the Platform with the intent to avoid payment of Platform fees or commissions.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">9.4 Prohibition on Emergency Use</h3>
                    <p className="mb-4">
                        The Platform is not intended for emergency medical situations. Users shall not use the Platform
                        to seek urgent or emergency healthcare services. In case of a medical emergency, Users must
                        contact local emergency services or visit the nearest hospital immediately. NSD does not
                        provide emergency medical services and shall not be used as a substitute for emergency medical care.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">9.5 Reviews, Feedback and Communications</h3>
                    <p className="mb-4">
                        Users may provide feedback or reviews regarding Service Providers or Platform experience, provided
                        such feedback is truthful, fair, lawful and non-defamatory. NSD reserves the right to remove or
                        moderate any feedback or content that violates these Terms or applicable law, without notice.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">9.6 Suspension and Restriction of Access</h3>
                    <p className="mb-4">
                        NSD reserves the right, at its sole discretion, to suspend, restrict or terminate User access to
                        the Platform, with or without notice, in case of breach of these Terms; misuse or abuse of the
                        Platform; unlawful or prohibited conduct; or requirement under applicable law or regulatory direction.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">9.7 Consequences of Breach</h3>
                    <p className="mb-6">
                        Users shall be solely responsible for any loss, damage, liability or expense arising from their breach
                        of these Terms or misuse of the Platform and agree to indemnify NSD against any claims arising therefrom.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">10. PLATFORM DISCLAIMER & LIMITATION OF LIABILITY</h2>

                    <h3 className="text-lg font-semibold mt-3">10.1 Platform Provided on “As Is” Basis</h3>
                    <p className="mb-4">
                        The Platform and all services, content, information and features made available through it are provided
                        on an “as is” and “as available” basis, without any warranties of any kind, whether express or implied,
                        except to the extent required under applicable law. NSD does not warrant that the Platform will be
                        uninterrupted, error-free, secure or free from defects, or that any information provided through the
                        Platform will be accurate, complete or reliable.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">10.2 Disclaimer of Warranties</h3>
                    <p className="mb-4">
                        To the maximum extent permitted under applicable law, NSD expressly disclaims all warranties, including
                        but not limited to implied warranties of merchantability, fitness for a particular purpose, accuracy,
                        non-infringement or availability. NSD does not guarantee the availability, quality, safety, legality or
                        suitability of any Service Provider or the services rendered by them.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">10.3 Limitation of Liability</h3>
                    <p className="mb-2">
                        To the fullest extent permitted under applicable law, NSD shall not be liable for any direct, indirect,
                        incidental, special, consequential or punitive damages, including but not limited to loss of profits,
                        loss of data, loss of goodwill, personal injury or adverse health outcomes, arising out of or in connection
                        with:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>use of or inability to use the Platform;</li>
                        <li>services provided by Service Providers;</li>
                        <li>reliance on any information made available through the Platform; or</li>
                        <li>any act, omission, negligence or misconduct of Service Providers or third parties.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">10.4 Cap on Liability</h3>
                    <p className="mb-4">
                        Without prejudice to the foregoing, and to the extent permitted under applicable law, NSD’s aggregate
                        liability for any claim arising out of or relating to the Platform or these Terms shall be limited to the
                        platform facilitation fee actually collected by NSD in respect of the relevant transaction.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">10.5 Third-Party Services and Content</h3>
                    <p className="mb-4">
                        The Platform may contain links to or integrations with third-party websites, services or payment gateways.
                        NSD does not control and shall not be responsible or liable for the content, policies or practices of such
                        third parties. Users access such third-party services at their own risk and subject to the respective third
                        party’s terms.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">10.6 No Waiver of Statutory Rights</h3>
                    <p className="mb-4">
                        Nothing in these Terms shall exclude or limit NSD’s liability to the extent such exclusion or limitation is
                        prohibited under applicable law, including rights available to consumers under the Consumer Protection Act, 2019.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">10.7 Indemnity</h3>
                    <p className="mb-6">
                        Users agree to indemnify, defend and hold harmless NSD, its partners, affiliates, officers and employees from and
                        against any claims, damages, losses, liabilities and expenses arising out of breach of these Terms; misuse of the
                        Platform; or violation of applicable law or third-party rights.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">11. DATA PROTECTION & PRIVACY</h2>

                    <h3 className="text-lg font-semibold mt-3">11.1 Governing Privacy Policy</h3>
                    <p className="mb-4">
                        NSD is committed to protecting the privacy and personal data of Users and Service Providers. All collection, use,
                        processing, storage, disclosure and protection of personal data, sensitive personal data and health-related
                        information shall be governed by NSD’s Privacy Policy, which forms an integral part of these Terms. By accessing
                        or using the Platform, you acknowledge that you have read, understood and agreed to the Privacy Policy and consent
                        to the processing of your data in accordance with its terms and applicable law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.2 Compliance with Data Protection Laws</h3>
                    <p className="mb-4">
                        NSD processes personal data in accordance with applicable Indian data protection and information technology laws,
                        including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and rules made
                        thereunder. NSD acts as the Data Fiduciary / Platform Operator, as applicable, in respect of personal data processed
                        through the Platform. Users, as Data Principals, shall have the rights of access, correction, erasure, consent
                        withdrawal, grievance redressal and nomination as detailed in the Privacy Policy and under the Digital Personal Data
                        Protection Act, 2023.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.3 Healthcare and Sensitive Personal Data</h3>
                    <p className="mb-4">
                        Users acknowledge that certain information shared through the Platform, including medical records, health conditions
                        and care requirements, may constitute Sensitive Personal Data or Information. Such data is collected and processed
                        solely for lawful purposes connected with facilitation of services, platform operations, legal compliance and
                        protection of legitimate interests, in accordance with the Privacy Policy.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.4 Data Sharing with Service Providers</h3>
                    <p className="mb-4">
                        To enable service delivery, NSD may share relevant personal and health-related information of Users with the concerned
                        Service Provider on a need-to-know basis. Service Providers are obligated to maintain confidentiality and use such
                        information solely for the purpose of rendering services and complying with applicable law. NSD shall not be responsible
                        for any misuse of data by Service Providers beyond the scope of authorised use.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.5 User Responsibilities</h3>
                    <p className="mb-4">
                        Users are responsible for ensuring that they have the necessary authority and consent to share personal data, including
                        data relating to minors, elderly persons or dependents, through the Platform. Users agree to indemnify NSD against any
                        claims arising from unauthorised sharing of personal data or violation of privacy rights.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.6 Data Security and Breach Response</h3>
                    <p className="mb-4">
                        NSD implements reasonable security practices and procedures, in accordance with applicable law, to protect personal data
                        processed through the Platform. In the event of a personal data breach, NSD shall take such steps as may be required under
                        applicable law, including notification to affected users and authorities where mandated.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">11.7 Conflict</h3>
                    <p className="mb-6">
                        In the event of any inconsistency between these Terms and the Privacy Policy with respect to data protection or privacy
                        matters, the Privacy Policy shall prevail.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">12. INTELLECTUAL PROPERTY RIGHTS</h2>

                    <h3 className="text-lg font-semibold mt-3">12.1 Ownership of Platform Intellectual Property</h3>
                    <p className="mb-4">
                        All intellectual property rights in and to the Platform, including but not limited to its design, layout, software,
                        source code, databases, text, graphics, logos, trademarks, service marks, brand names, user interfaces and content
                        (collectively, “NSD Content”), are owned by or licensed to NSD and are protected under applicable intellectual property
                        laws of India. Nothing contained in these Terms shall be construed as granting any right, title or interest in the NSD
                        Content to any User or Service Provider, except as expressly permitted under these Terms.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">12.2 Limited Licence to Users</h3>
                    <p className="mb-4">
                        Subject to compliance with these Terms, NSD grants Users a limited, non-exclusive, non-transferable and revocable licence
                        to access and use the Platform and NSD Content solely for personal, non-commercial use in connection with booking or
                        providing services through the Platform. Users shall not copy, modify, reproduce, distribute, transmit, display, perform,
                        publish, license, create derivative works from, or otherwise exploit any part of the Platform or NSD Content without prior
                        written consent of NSD.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">12.3 User-Generated Content</h3>
                    <p className="mb-4">
                        Any content, feedback, reviews, ratings, comments or communications submitted by Users through the Platform (“User Content”)
                        shall remain the property of the User; however, by submitting such User Content, the User grants NSD a royalty-free, worldwide,
                        perpetual and irrevocable licence to use, reproduce, modify, display, distribute and publish such User Content for platform
                        operations, service improvement, dispute resolution and compliance purposes. Users represent and warrant that they have all
                        necessary rights to submit such User Content and that such content does not infringe any third-party rights or applicable law.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">12.4 Service Provider Content</h3>
                    <p className="mb-4">
                        Service Providers grant NSD a limited licence to display their profiles, qualifications, experience details, photographs and
                        related information on the Platform solely for the purpose of facilitating service discovery and bookings. Service Providers
                        shall ensure that all content provided by them is accurate, lawful and non-infringing.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">12.5 Prohibited Use</h3>
                    <p className="mb-2">Users and Service Providers shall not:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>use any trademark, logo or brand name of NSD without prior written permission;</li>
                        <li>remove or alter any copyright, trademark or proprietary notices on the Platform;</li>
                        <li>use the Platform or NSD Content for competitive, commercial or benchmarking purposes without authorisation.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">12.6 Infringement and Takedown</h3>
                    <p className="mb-6">
                        NSD reserves the right to remove or disable access to any content that it believes, in good faith, infringes intellectual
                        property rights or violates applicable law, without prior notice.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">13. TERMINATION & SUSPENSION</h2>

                    <h3 className="text-lg font-semibold mt-3">13.1 Term</h3>
                    <p className="mb-4">
                        These Terms shall remain in effect for as long as you access or use the Platform or avail any services through it, unless
                        terminated in accordance with this Clause.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">13.2 Termination by Users</h3>
                    <p className="mb-4">
                        Users may discontinue access to or use of the Platform at any time. Such discontinuation shall not affect any rights,
                        obligations or liabilities accrued prior to termination, including payment obligations or dispute resolution.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">13.3 Suspension or Termination by NSD</h3>
                    <p className="mb-2">
                        NSD reserves the right, at its sole discretion and without prejudice to any other rights or remedies, to suspend, restrict
                        or terminate access to the Platform, with or without notice, in the event that:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>(a) a User or Service Provider breaches these Terms, the Privacy Policy or applicable law;</li>
                        <li>(b) information provided is found to be false, misleading or incomplete;</li>
                        <li>(c) the Platform is misused, abused or accessed for unlawful purposes;</li>
                        <li>(d) such action is required to comply with legal or regulatory obligations; or</li>
                        <li>(e) continuation of access poses a risk to NSD, other Users, Service Providers or the public.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">13.4 Effect of Suspension or Termination</h3>
                    <p className="mb-2">Upon suspension or termination:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>access to the Platform or Services may be restricted or disabled;</li>
                        <li>pending or future bookings may be cancelled, subject to applicable refund or settlement policies; and</li>
                        <li>
                            NSD shall not be liable for any loss or inconvenience arising from such suspension or termination, except as required under
                            applicable law.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Termination shall not affect provisions which by their nature are intended to survive, including limitation of liability,
                        indemnity, governing law and dispute resolution.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">13.5 Regulatory and Legal Compliance</h3>
                    <p className="mb-6">
                        NSD may suspend or terminate access to the Platform without notice where required by law, court order or directive of a
                        competent authority.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">14. FORCE MAJEURE</h2>

                    <h3 className="text-lg font-semibold mt-3">14.1 Force Majeure Events</h3>
                    <p className="mb-2">
                        NSD shall not be liable for any failure or delay in the performance of its obligations under these Terms where such failure
                        or delay results from events or circumstances beyond its reasonable control (“Force Majeure Event”). Force Majeure Events shall
                        include, without limitation:
                    </p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>acts of God, natural disasters, floods, earthquakes, storms, fires or other natural calamities;</li>
                        <li>epidemics, pandemics, public health emergencies or government-mandated health restrictions;</li>
                        <li>acts of government, orders, regulations, directions or restrictions imposed by any governmental or regulatory authority;</li>
                        <li>war, hostilities, terrorism, riots, civil unrest or labour disturbances;</li>
                        <li>failures or disruptions of telecommunications networks, internet services, power supply, data centres or third-party technology infrastructure; and</li>
                        <li>any other event which could not reasonably have been foreseen or prevented by NSD.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">14.2 Effect of Force Majeure</h3>
                    <p className="mb-4">
                        During the continuance of a Force Majeure Event: NSD’s obligations under these Terms shall be suspended to the extent affected by
                        such Force Majeure Event; and NSD shall not be deemed to be in breach of these Terms or liable for any loss, damage or inconvenience
                        arising from such failure or delay.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">14.3 Resumption of Services</h3>
                    <p className="mb-4">
                        NSD shall use reasonable efforts to resume performance of its obligations under these Terms as soon as practicable after the
                        cessation of the Force Majeure Event.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">14.4 No Waiver of Statutory Rights</h3>
                    <p className="mb-6">
                        Nothing in this Clause shall exclude or limit any rights or remedies available to Users under applicable law, to the extent such
                        exclusion or limitation is prohibited.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">15. GOVERNING LAW & JURISDICTION</h2>

                    <h3 className="text-lg font-semibold mt-3">15.1 Governing Law</h3>
                    <p className="mb-4">
                        These Terms, the Privacy Policy and all matters arising out of or relating to the Platform or Services shall be governed by and
                        construed in accordance with the laws of India, without regard to conflict of law principles.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">15.2 Jurisdiction</h3>
                    <p className="mb-4">
                        Subject to applicable law, the courts at Indore, Madhya Pradesh, shall have exclusive jurisdiction over any disputes, claims or
                        proceedings arising out of or in connection with these Terms, the Privacy Policy, the Platform or the Services.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">15.3 Amicable Resolution</h3>
                    <p className="mb-6">
                        NSD encourages Users and Service Providers to first seek amicable resolution of disputes by contacting NSD’s customer support or
                        grievance redressal mechanism, prior to initiating any legal proceedings.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">16. GRIEVANCE REDRESSAL & CONTACT DETAILS</h2>

                    <h3 className="text-lg font-semibold mt-3">16.1 Grievance Redressal Mechanism</h3>
                    <p className="mb-2">
                        In accordance with the provisions of the Information Technology Act, 2000, the Information Technology (Intermediary Guidelines and
                        Digital Media Ethics Code) Rules, 2021, the Consumer Protection Act, 2019, and the Digital Personal Data Protection Act, 2023,
                        NSD has established a grievance redressal mechanism for addressing User and Service Provider complaints, queries or concerns relating
                        to the Platform or Services.
                    </p>
                    <p className="mb-2">Users and Service Providers may submit grievances relating to:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>use of the Platform or Services;</li>
                        <li>bookings, payments, cancellations or refunds;</li>
                        <li>data protection or privacy-related issues;</li>
                        <li>alleged misuse of the Platform; or</li>
                        <li>any other concern arising under these Terms.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-3">16.2 Grievance Officer</h3>
                    <p className="mb-4">
                        NSD shall designate a Grievance Officer, whose name and contact details shall be made available on the Platform and/or the website in
                        accordance with applicable law. Grievances may be submitted in writing through the contact details provided on the Platform.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">16.3 Resolution Timeline</h3>
                    <p className="mb-4">
                        NSD shall endeavour to acknowledge and resolve grievances within the timelines prescribed under applicable law and, where no specific
                        timeline is prescribed, within a reasonable period, depending on the nature and complexity of the grievance.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">16.4 Escalation</h3>
                    <p className="mb-4">
                        Where a User or Service Provider is not satisfied with the resolution provided by NSD, they may pursue remedies available under
                        applicable law before the appropriate judicial or regulatory authority.
                    </p>

                    <h3 className="text-lg font-semibold mt-3">16.5 Communication</h3>
                    <p className="mb-6">
                        NSD may communicate with Users and Service Providers in connection with grievances through email, telephone, SMS or in-app
                        notifications, as deemed appropriate.
                    </p>

                    <p className="text-sm text-gray-600 mt-8">Effective Date: 03/02/2026</p>
                </div>
            </div>
        </div>
    );
}
