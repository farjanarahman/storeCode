// PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">Privacy Policy</h1>
            <p className="text-gray-700 mb-6 text-center">Last updated: 23 September 2023</p>

            <p className="text-gray-800">
                At Storecode, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website and use our services.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Information We Collect</h2>
                <ul className="list-disc ml-8 text-gray-800">
                    <li><strong>Personal Information:</strong> When you register for an account, we may collect information such as your name, email address, and contact details.</li>
                    <li><strong>Usage Data:</strong> We gather data on how you interact with our website, including your browsing activity, IP address, and device information.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">How We Use Your Information</h2>
                <ul className="list-disc ml-8 text-gray-800">
                    <li><strong>Providing Services:</strong> We use your information to deliver the services you request, such as account management and product searches.</li>
                    <li><strong>Improving Our Services:</strong> Your data helps us enhance our website's functionality, content, and user experience.</li>
                    <li><strong>Communication:</strong> We may use your email address to send updates, newsletters, or respond to inquiries.</li>
                </ul>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Data Security</h2>
                <p className='text-gray-800'>We prioritize the security of your data. We employ industry-standard measures to protect your information from unauthorized access, disclosure, or alteration.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Cookies and Tracking Technologies
                </h2>
                <p className='text-gray-800'>Our website may use cookies and similar tracking technologies to enhance your experience and gather information about your usage patterns. You can manage your cookie preferences through your browser settings.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Third-Party Links

                </h2>
                <p className='text-gray-800'>Storecode may include links to third-party websites. Please be aware that we have no control over their content or privacy practices. We encourage you to review their Privacy Policies.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Your Rights
                </h2>
                <p className='text-gray-800'>You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have concerns about your data, please contact us at support@storecode.in.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Changes to this Privacy Policy
                </h2>
                <p className='text-gray-800'>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant updates via email or a notice on our website.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">Contact Us
                </h2>
                <p className='text-gray-800'>If you have questions or concerns about this Privacy Policy or your data, please contact us at support@storecode.in.
                </p>
            </div>
            <p className="mt-8 text-gray-800">
                By using the Storecode website, you agree to the terms outlined in this Privacy Policy.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
