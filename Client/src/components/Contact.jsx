import React, { useState, useEffect } from 'react';


const SERVER_ENDPOINT = 'http://localhost:3000/api/send-email'; 


const MessageToast = ({ message, type, onClose }) => {
    if (!message) return null;

    
    const baseClasses = "fixed bottom-5 right-5 p-4 rounded-xl shadow-2xl transition-all duration-300 transform font-medium max-w-sm";
    const successClasses = "bg-green-500 text-white";
    const errorClasses = "bg-red-500 text-white";

    const classes = type === 'success' ? successClasses : errorClasses;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); 
        return () => clearTimeout(timer);
    }, [message, onClose]);

    return (
        <div className={`${baseClasses} ${classes} z-50`}>
            <div className="flex justify-between items-start">
                <span>{message}</span>
                <button 
                    onClick={onClose} 
                    className="ml-4 text-white hover:text-gray-200 font-bold"
                    aria-label="Close message"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        user_name: "", 
        user_email: "", 
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [messageType, setMessageType] = useState('success');

    
    const showMessage = (message, type = 'success') => {
        setMessageType(type);
        setStatusMessage(message);
    };

    const handleInputChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!formData.user_name || !formData.user_email || !formData.message) {
            showMessage("Please fill in all required fields (Name, Email, Message).", 'error');
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null); 

        try {
            
            const response = await fetch(SERVER_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });

            
            const result = await response.json();

            if (response.ok && result.success) {
                
                setFormData({ user_name: "", user_email: "", subject: "", message: "" });
                showMessage("Thank you for your inquiry! We will get back to you soon.", 'success');
            } else {
                
                console.error("Server Error:", result.message);
                showMessage(`Submission failed: ${result.message || 'Server error occurred.'}`, 'error');
            }
            

        } catch (error) {
            console.error("Error submitting form via fetch:", error.message || error);
           
            showMessage(`Submission failed: Could not connect to server. Ensure Node.js server is running on ${SERVER_ENDPOINT}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

   
    return (
       
        <div className="min-h-screen bg-gray-50 flex items-center justify-center font-['Inter']">
            <script src="https://cdn.tailwindcss.com"></script>
            <section id="contact" className="py-20 w-full">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-tight leading-snug">
                            Request a Quote
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Contact us for a personalized software solution tailored to your business.
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
                      
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="user_name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-150 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 disabled:bg-gray-50"
                                        placeholder="Your full name"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="user_email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-150 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 disabled:bg-gray-50"
                                        placeholder="you@example.com"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-150 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 disabled:bg-gray-50"
                                    placeholder="Project or inquiry subject"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-150 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 resize-none disabled:bg-gray-50"
                                    placeholder="Tell us about your IT project..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-wait flex items-center justify-center space-x-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <span>Submit Request</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
            <MessageToast 
                message={statusMessage} 
                type={messageType} 
                onClose={() => setStatusMessage(null)} 
            />
        </div>
    );
};


export default function App() {
    return <ContactForm />;
}
