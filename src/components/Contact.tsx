import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : undefined;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : undefined;
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : undefined;
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setFormErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setFormErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // validate all
    const errors: Partial<FormData> = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((k) => {
      const err = validateField(k, formData[k]);
      if (err) errors[k] = err;
    });
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate send
      await new Promise((r) => setTimeout(r, 800));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-heading text-center mb-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Let's talk
          </motion.h2>
          <motion.p className="text-center text-gray-600 dark:text-gray-300 mb-12" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Interested in working together? Got a question? I'd love to hear from you.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full name <span className="text-red-500">*</span></label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white" />
              {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email address <span className="text-red-500">*</span></label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white" />
              {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject <span className="text-red-500">*</span></label>
              <input id="subject" name="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white" />
              {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message <span className="text-red-500">*</span></label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white resize-none" />
              {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              <motion.button type="submit" disabled={isSubmitting} className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${isSubmitting ? 'bg-gray-400' : 'bg-gradient-to-r from-accent to-accent-light'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span className="relative z-10 flex items-center justify-center gap-2">{isSubmitting ? 'Sending…' : 'Send Message'}</span>
              </motion.button>
            </motion.div>
          </form>

          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Thank you! Your message has been sent successfully.
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Sorry, something went wrong. Please try again later.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Or reach out through your preferred platform:</p>
            <div className="flex justify-center gap-4">
              <motion.a href="https://wa.me/972534169661" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </motion.a>
              <motion.a href="https://t.me/rivkash" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.247-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </motion.a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:rivsh2005@gmail.com" className="text-accent hover:underline">rivsh2005@gmail.com</a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+972534169661" className="text-accent hover:underline">+972 53-416-9661</a>
            </div>
            <div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/rivka" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">/in/rivka</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noreferrer" className="btn-primary mr-4">Book a short tech chat ☕</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;