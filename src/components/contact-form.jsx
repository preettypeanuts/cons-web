"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { BsSend } from "react-icons/bs"

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setSuccess(false);
                console.error(data.error);
            }
        } catch (err) {
            setSuccess(false);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="spacing margin">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Side - Image */}
                <div className="relative h-[400px] lg:h-auto lg:min-h-[600px] rounded-lg overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1604574081819-cca83c2b0b6d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987"
                        alt="Contact Us"
                        fill
                        className="object-cover grayscale hover:grayscale-0 duration-500"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                Get In Touch
                            </h2>
                            <p className="text-white/80 text-sm">We'd love to hear from you</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col justify-center">
                    <div className="mb-8">
                        <h3 className="text-xs uppercase tracking-wider opacity-60 mb-2">Contact Us</h3>
                        <h1 className="text-3xl lg:text-4xl font-light">Send us a message</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm opacity-70">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-orange-400 dark:focus:border-orange-400 outline-none duration-200 text-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm opacity-70">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-orange-400 dark:focus:border-orange-400 outline-none duration-200 text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm opacity-70">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-orange-400 dark:focus:border-orange-400 outline-none duration-200 text-sm"
                                    placeholder="+62 812-3456-7890"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm opacity-70">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-orange-400 dark:focus:border-orange-400 outline-none duration-200 text-sm resize-none"
                                placeholder="Tell us more about your inquiry..."
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
                                <BsSend /> {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>

                        {success === true && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
                        {success === false && <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
