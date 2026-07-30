import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, CheckCircle, Utensils, MapPin } from 'lucide-react';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:30',
    guests: 2,
    seatingPreference: 'Open Kitchen View',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const phoneNumber = '254752114450';
    let text = `*TABLE RESERVATION - BAKEMART COFFEE HOUSE*\n`;
    text += `------------------------------------\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    text += `*Date:* ${formData.date}\n`;
    text += `*Time:* ${formData.time}\n`;
    text += `*Party Size:* ${formData.guests} Guest(s)\n`;
    text += `*Seating:* ${formData.seatingPreference}\n`;
    if (formData.specialRequests) {
      text += `*Special Requests:* ${formData.specialRequests}\n`;
    }
    text += `------------------------------------\n`;
    text += `Please confirm table availability for us. Thank you!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="reservation-section" className="py-16 px-4 sm:px-6 bg-[#2B1B12] text-[#F2E8D5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-[#58241B] text-[#F2E8D5] font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3 border border-white/10">
            TABLE RESERVATION
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2E8D5]">
            Book a Table at BakeMart
          </h2>
          <p className="text-[#F2E8D5]/80 mt-2 text-base sm:text-lg">
            Reserve your seats at Nakuru's open-kitchen coffee house for family lunches, business coffee meetings, or weekend celebrations.
          </p>
        </div>

        <div className="bg-[#140B06] p-6 sm:p-10 rounded-3xl border border-[#58241B]/40 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#8B3A2B]/20 text-[#E8B4A0] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif-display font-bold text-2xl text-[#F2E8D5]">
                Reservation Sent via WhatsApp!
              </h3>
              <p className="text-sm text-[#F2E8D5]/80 max-w-md mx-auto">
                We have redirected your request to BakeMart Coffee House WhatsApp (0752 114450). Our team will confirm your table in moments.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#58241B] text-[#F2E8D5] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#6E2E23] border border-white/10"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Mwangi"
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0752 114450"
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B3A2B] focus:outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B3A2B] focus:outline-none"
                  >
                    <option value="08:00">08:00 AM (Breakfast)</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:30">03:30 PM (Coffee & Pastry)</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:30">06:30 PM (Dinner & BBQ)</option>
                    <option value="19:30">07:30 PM (Last Order)</option>
                  </select>
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> Guests / Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B3A2B] focus:outline-none"
                  >
                    <option value={1}>1 Guest (Solo Coffee/Work)</option>
                    <option value={2}>2 Guests (Table for 2)</option>
                    <option value={4}>4 Guests (Family Table)</option>
                    <option value={6}>6 Guests (Group Celebration)</option>
                    <option value={10}>10+ Guests (Large Party)</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5 flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5" /> Seating Area
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full bg-[#2B1B12] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B3A2B] focus:outline-none"
                  >
                    <option value="Open Kitchen View">Front Row (Open Kitchen View)</option>
                    <option value="Quiet Main Hall">Quiet Main Hall</option>
                    <option value="Patio / Outdoor">Patio / Window View</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#E8B4A0] uppercase mb-1.5">
                  Special Requests / Birthday / High Chair Needs
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Birthday cake slice celebration, high chair for toddler..."
                  rows={2}
                  className="w-full bg-[#2B1B12] border border-white/15 rounded-xl p-3 text-sm text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#58241B] hover:bg-[#6E2E23] text-[#F2E8D5] font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-xl border border-white/10 transition-all active:scale-98"
              >
                <MessageSquare className="w-5 h-5 text-[#8B3A2B]" />
                <span>Submit Reservation via WhatsApp (0752 114450)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#F2E8D5]/70 text-center">
                <MapPin className="w-3.5 h-3.5 text-[#E8B4A0]" />
                <span>BakeMart Coffee House · Tropical House, Watalii Rd, Nakuru City</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
