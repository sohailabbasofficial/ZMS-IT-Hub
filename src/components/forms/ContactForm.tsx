'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import Button from '@/components/ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // For static export, we'll simulate a successful submission
      // In production, you can integrate with:
      // - Formspree: https://formspree.io/
      // - Netlify Forms: https://www.netlify.com/products/forms/
      // - EmailJS: https://www.emailjs.com/
      // - Custom API endpoint

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, we'll always show success
      // In production, replace this with actual form submission
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });

      // Log form data for development (remove in production)
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
            placeholder="+92 300 1234567"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            <option value="custom-software">Custom Software Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="web-app">Web Application Development</option>
            <option value="cloud-devops">Cloud & DevOps</option>
            <option value="qa-testing">QA & Testing</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="product-strategy">Product Strategy</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="timeline"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Project Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-month">Within 1 month</option>
          <option value="2-3-months">2-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-plus-months">6+ months</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="resize-vertical w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
        >
          <FiCheck className="flex-shrink-0" size={20} />
          <span>
            Thank you! Your message has been sent successfully. We'll get back
            to you within 24 hours.
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
        >
          <FiAlertCircle className="flex-shrink-0" size={20} />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Send Message</span>
              <FiSend size={18} />
            </div>
          )}
        </Button>
      </div>
    </motion.form>
  );
}
