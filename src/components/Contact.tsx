import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-[#0A1128] relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,rgba(58,134,255,0.3)_25px,transparent_26px),linear-gradient(90deg,transparent_24px,rgba(58,134,255,0.3)_25px,transparent_26px)] bg-[size:25px_25px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <span className="text-[#3A86FF]">~/</span>contact
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A86FF]/50 to-transparent"></span>
            </h2>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Send Me a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                  Name
                </label>
                <input type="text" id="name" className="w-full bg-[#0C1B3A] border border-[#1A2A4A] rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-[#3A86FF] transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                  Email
                </label>
                <input type="email" id="email" className="w-full bg-[#0C1B3A] border border-[#1A2A4A] rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-[#3A86FF] transition-colors" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full bg-[#0C1B3A] border border-[#1A2A4A] rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-[#3A86FF] transition-colors" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/50 text-[#FFD700] px-6 py-3 rounded-md transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] flex items-center gap-2">
                <SendIcon size={18} />
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#3A86FF] mt-1">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:carlo.pizzutow@gmail.com" className="text-gray-400 hover:text-[#3A86FF] transition-colors">
                      carlo.pizzutow@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#3A86FF] mt-1">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">Dallas, TX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#3A86FF] mt-1">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a href="tel:+11234567890" className="text-gray-400 hover:text-[#3A86FF] transition-colors">
                      +1 (682) 758-5446
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6 flex-1">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {[{
                name: 'GitHub',
                url: 'https://github.com/carlopizzuto'
              }, {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/carl0pizzut0'
              }].map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0C1B3A] border border-[#1A2A4A] rounded-md text-gray-300 hover:text-[#3A86FF] hover:border-[#3A86FF]/50 transition-all">
                    {social.name}
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};