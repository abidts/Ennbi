import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xzzrqaly', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Failed to submit. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl p-8">
        {/* Left - Contact Info */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
          <p>We're here to help. Reach out to us using the information below or send a message using the form.</p>

          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>Habak NaseemBagh Hazratbal<br />Srinagar, J&K 190006</p>
            <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1018043943513!2d74.83521661073875!3d34.143737473010525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1844fb09e56f1%3A0x533561aabfa52c80!2s4RVQ%2BF4V%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1747992942619!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                title="View on Google Maps"
              >
                <MapPin size={20} />
              </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>+91 7006016082</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p>hr@ennbi.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Office Hours</h3>
            <div className="flex items-center gap-2">
              <p>Monday to Friday: 10:00 AM – 6:00 PM</p>
              
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
          <p className="text-gray-600 mb-6">
            Whether you have a question, need support, or just want to say hello — we're here and ready to help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitSuccess && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p>We have received your inquiry and will get back to you shortly.</p>
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded text-black focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
              placeholder="Full Name *"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded text-black focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
              placeholder="Email Address *"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded text-black focus:outline-none focus:ring-2 ${
                errors.phone ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
              placeholder="Phone Number *"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full p-3 border rounded text-black focus:outline-none focus:ring-2 ${
                errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
              placeholder="Message *"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Our Location</h3>
        <iframe
          title="ENNBI Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1018043943513!2d74.83521661073875!3d34.143737473010525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1844fb09e56f1%3A0x533561aabfa52c80!2s4RVQ%2BF4V%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1747992942619!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Contact;