import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, Plane } from "lucide-react";
import { setSEO } from "../../utils/seo";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Contact Us | Maverick Tour & Travels - Get in Touch for Kashmir Tours',
      description: 'Ready to plan your dream getaway? Contact Maverick Tour & Travels today. Reach out via phone or email for personalized Kashmir tours.',
      keywords: [
        'contact Maverick Tour & Travels',
        'Kashmir tour inquiry',
        'Maverick travels support'
      ],
      canonicalPath: '/contact'
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://storage.eduyaam.com/uploads/1767866740_Lakes_Peaks_5_Nights_Nature_Immersion_Package_shghgx.webp"
            alt="Contact Us Background"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative text-center text-white px-4 z-10 animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="h-1 w-20 bg-sunset mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-white/90 leading-relaxed">
            Planning your next journey? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8 animate-fade-right">
            <div>
              <span className="text-sm font-bold text-sunset uppercase tracking-widest mb-2 block">Reach Out</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 italic italic">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a specific itinerary in mind or just want to explore possibilities,
                our travel experts are ready to assist you.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "+91 9797157962, 8825061623", accent: "bg-primary/10 text-primary" },
                { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "info@rMaverickTravels.in", accent: "bg-sunset/10 text-sunset" },
                { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", value: "Budu Bagh Khanyar, Srinagar, J&K 190003", accent: "bg-primary/10 text-primary" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 ${item.accent} rounded-xl flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-64 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Maverick Tour and Travels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.4401585755772!2d74.8206527!3d34.0857157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1857e71675c99%3A0x98504ab3e40913f7!2sMaverick%20Tour%20and%20Travels!5e1!3m2!1sen!2sin!4v1770273375695!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 animate-fade-left">
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunset/10 rounded-full blur-3xl -mr-16 -mt-16" />

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-8 italic">Send us a Message</h3>

              {submitted ? (
                <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center animate-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">Message Received!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-4 bg-muted/50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 bg-muted/50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-5 py-4 bg-muted/50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-1">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      className="w-full px-5 py-4 bg-muted/50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none"
                      placeholder="Tell us about your dream trip..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Plane className="w-5 h-5 -rotate-45" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
