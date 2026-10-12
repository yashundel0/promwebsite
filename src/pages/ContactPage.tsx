import { useState, type FormEvent } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2, MessageCircle, Instagram, Music2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormData {
  name: string;
  applicantType: string;
  age: string;
  phone: string;
  email: string;
  message: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const initialForm: FormData = {
  name: '',
  applicantType: 'Parent',
  age: '',
  phone: '',
  email: '',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('trial_bookings').insert({
        name: form.name,
        applicant_type: form.applicantType,
        age: form.age,
        phone: form.phone,
        email: form.email,
        message: form.message || null,
      });

      if (error) throw error;

      setSubmitState('success');
      setForm(initialForm);
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  return (
    <>
      <PageHero
        title="Book a Trial"
        subtitle="Take the first step. Fill out the form below and our team will be in touch within 24 hours."
        image="/images/approach/3.jpg"
        breadcrumb="Contact"
      />

      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <Reveal direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-8 h-0.5 bg-accent" />
                  <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
                    Get in Touch
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white leading-[0.95] mb-6">
                  Let&apos;s Build Your Game Together
                </h2>
                <p className="text-grey-2 text-base leading-relaxed mb-10">
                  Whether you&apos;re a parent looking for the right academy for your child, or a player ready to take the next step, we&apos;re here to help. Reach out and we&apos;ll guide you through the process.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: 'Locations',
                      value: 'Dubai · Ras Al Khaimah · Abu Dhabi',
                      sub: 'United Arab Emirates',
                    },
                    {
                      icon: Phone,
                      label: 'Phone / WhatsApp',
                      value: '+971 54 465 1751',
                      sub: 'Call or message us anytime',
                      href: 'tel:+971544651751',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@promfa.ae',
                      sub: 'We reply within 24 hours',
                      href: 'mailto:info@promfa.ae',
                    },
                    {
                      icon: Clock,
                      label: 'Training Hours',
                      value: 'Mon, Wed, Fri',
                      sub: 'U3-8: 16:00–17:00 · U9-14: 17:00–18:30',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 bg-dark-2 border border-dark-4 rounded-sm shrink-0">
                        <item.icon size={18} className="text-accent" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-display text-xs uppercase tracking-wider text-grey-1 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-display text-white text-base font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-display text-white text-base font-medium">
                            {item.value}
                          </p>
                        )}
                        <p className="text-grey-2 text-xs mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-10 pt-8 border-t border-dark-3">
                  <p className="font-display text-xs uppercase tracking-wider text-grey-1 mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/promfootballacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 border border-dark-4 rounded-sm text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} strokeWidth={2} />
                    </a>
                    <a
                      href="https://wa.me/971544651751"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 border border-dark-4 rounded-sm text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={18} strokeWidth={2} />
                    </a>
                    <a
                      href="https://tiktok.com/@promfootballacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 border border-dark-4 rounded-sm text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                      aria-label="TikTok"
                    >
                      <Music2 size={18} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right">
                <div className="bg-dark-1 border border-dark-3 p-8 md:p-10">
                  {submitState === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="flex items-center justify-center w-20 h-20 bg-accent/15 rounded-full mb-6">
                        <CheckCircle size={40} className="text-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">
                        Booking Received
                      </h3>
                      <p className="text-grey-2 text-sm max-w-md leading-relaxed mb-8">
                        Thank you for your interest in PRO-M Football Academy. Our team will contact you within 24 hours to confirm your trial session.
                      </p>
                      <button
                        onClick={() => setSubmitState('idle')}
                        className="btn-secondary"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                          Trial Session Request
                        </h3>
                        <p className="text-grey-2 text-sm">
                          Fill in your details and we&apos;ll arrange your first session.
                        </p>
                      </div>

                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm placeholder:text-grey-1 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      {/* Parent / Player + Age */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="applicantType" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                            Parent / Player <span className="text-accent">*</span>
                          </label>
                          <select
                            id="applicantType"
                            name="applicantType"
                            required
                            value={form.applicantType}
                            onChange={handleChange}
                            className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Parent">Parent</option>
                            <option value="Player">Player</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="age" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                            Age <span className="text-accent">*</span>
                          </label>
                          <input
                            id="age"
                            name="age"
                            type="text"
                            required
                            value={form.age}
                            onChange={handleChange}
                            placeholder="e.g. 10"
                            className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm placeholder:text-grey-1 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                            Phone <span className="text-accent">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+971 54 465 1751"
                            className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm placeholder:text-grey-1 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm placeholder:text-grey-1 focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-display uppercase tracking-wider text-grey-2 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your child's experience, preferred location, or any questions you have..."
                          className="w-full bg-dark-2 border border-dark-4 text-white px-4 py-3 text-sm placeholder:text-grey-1 focus:outline-none focus:border-accent transition-colors resize-none"
                        />
                      </div>

                      {/* Error */}
                      {submitState === 'error' && (
                        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
                          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                          <p className="text-red-300 text-sm leading-relaxed">{errorMessage}</p>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitState === 'loading'}
                        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitState === 'loading' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" strokeWidth={2.5} />
                            Submitting...
                          </>
                        ) : (
                          'Book a Trial'
                        )}
                      </button>

                      <p className="text-grey-1 text-xs text-center leading-relaxed">
                        By submitting this form, you agree to be contacted by PRO-M Football Academy regarding your trial session.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
