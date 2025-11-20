import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Phone, MapPin, Star, Menu, X, Instagram, Linkedin, Globe } from "lucide-react";

export default function Website() {
  const [open, setOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "work", label: "Showcase" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-zinc-900 text-white grid place-items-center font-bold">W</div>
            <div className="leading-tight">
              <div className="text-lg font-semibold">Woma Lifestyle</div>
              <div className="text-xs text-zinc-500">Client Relations • Phoebe Wei</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-zinc-900 text-zinc-600">
                {n.label}
              </button>
            ))}
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}}>
              <Button className="rounded-2xl">Get in touch</Button>
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-zinc-200">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2 text-zinc-700">
                  {n.label}
                </button>
              ))}
              <Button onClick={() => scrollTo("contact")} className="rounded-2xl">Get in touch</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Thoughtful design for everyday living
            </h1>
            <p className="mt-4 text-zinc-600 max-w-prose">
              We help customers discover lifestyle products and services that elevate daily life — with curated guidance,
              attentive client care, and a seamless end‑to‑end experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl" onClick={() => scrollTo("services")}>Our services</Button>
              <Button variant="outline" className="rounded-2xl" onClick={() => scrollTo("contact")}>Work with us</Button>
            </div>
            <div className="mt-6 flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_,i)=> <Star key={i} className="w-4 h-4 fill-amber-500"/>) }
              <span className="ml-2 text-sm text-zinc-600">Trusted by clients in LA & beyond</span>
            </div>
          </div>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 grid gap-4">
              <div className="text-sm uppercase tracking-wider text-zinc-500">Concierge highlights</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Clienteling & after‑sales","Sourcing & gifting","Home & lifestyle curation","VIP appointment support"].map((t)=> (
                  <div key={t} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5"/>
                    <div className="text-zinc-700">{t}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-zinc-500">Certified low‑touch onboarding • Confidential client care</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">About us</h2>
            <p className="text-zinc-600">Woma Lifestyle is a boutique client relations practice led by <strong>Phoebe Wei</strong>. We combine luxury retail standards with practical, everyday guidance. Our focus is long‑term relationships and memorable experiences.</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-zinc-700">
              <li className="flex gap-2 items-start"><Check className="w-5 h-5"/> Bilingual service (EN/中文)</li>
              <li className="flex gap-2 items-start"><Check className="w-5 h-5"/> Personalized gifting plans</li>
              <li className="flex gap-2 items-start"><Check className="w-5 h-5"/> Private appointments</li>
              <li className="flex gap-2 items-start"><Check className="w-5 h-5"/> Discreet follow‑ups</li>
            </ul>
          </div>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm uppercase text-zinc-500">Fast facts</div>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <div><div className="text-3xl font-bold">7+</div><div className="text-xs text-zinc-500">years client care</div></div>
                <div><div className="text-3xl font-bold">96%</div><div className="text-xs text-zinc-500">return clients</div></div>
                <div><div className="text-3xl font-bold">24h</div><div className="text-xs text-zinc-500">response time</div></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
          <p className="text-zinc-600 mt-2">Flexible, project‑based or ongoing support. Pick what fits — we’ll tailor the rest.</p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {[
              {title:"Client Relations", pts:["Clienteling CRM","Occasion reminders","After‑sales follow‑up"]},
              {title:"Gifting Concierge", pts:["Sourcing & curation","Personalization","Delivery & notes"]},
              {title:"Lifestyle Advisory", pts:["Home & travel basics","Brand introductions","Appointment support"]}
            ].map((s)=> (
              <Card key={s.title} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="font-semibold text-lg">{s.title}</div>
                  <ul className="mt-3 grid gap-2 text-zinc-700">
                    {s.pts.map((p)=>(<li key={p} className="flex gap-2 items-start"><Check className="w-5 h-5"/>{p}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="work" className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Showcase</h2>
          <p className="text-zinc-600 mt-2">Recent projects & curated sets (images/logos can be added later).</p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 grid place-items-center text-zinc-500">Add image {i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Client reviews</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {["Incredibly attentive and efficient.","Made gifting effortless—beautifully presented.","Professional, fast, and discreet."].map((q, i)=> (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-amber-500 mb-2">{[...Array(5)].map((_,i)=>(<Star key={i} className="w-4 h-4 fill-amber-500"/>))}</div>
                  <p className="text-zinc-700">“{q}”</p>
                  <div className="mt-3 text-sm text-zinc-500">— Client, Los Angeles</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let’s talk</h2>
            <p className="mt-2 text-zinc-300">Share your occasion, timeline, and budget; we’ll propose options within 24 hours.</p>
            <div className="mt-6 grid gap-3 text-zinc-200">
              <div className="flex items-center gap-2"><Mail className="w-5 h-5"/><a className="hover:underline" href="mailto:xxxxxx">xxxxxx</a></div>
              <div className="flex items-center gap-2"><Phone className="w-5 h-5"/><span>[your phone]</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5"/><span>Los Angeles, CA</span></div>
            </div>
            <div className="mt-6 flex gap-4 text-zinc-300">
              <a href="#" className="flex items-center gap-2 hover:text-white"><Instagram className="w-5 h-5"/>Instagram</a>
              <a href="#" className="flex items-center gap-2 hover:text-white"><Linkedin className="w-5 h-5"/>LinkedIn</a>
              <a href="https://www.woma.com.cn/" className="flex items-center gap-2 hover:text-white"><Globe className="w-5 h-5"/>woma.com.cn</a>
            </div>
          </div>

          <Card className="rounded-2xl bg-white text-zinc-900">
            <CardContent className="p-6 grid gap-3">
              <div className="text-sm uppercase tracking-wide text-zinc-500">Quick request</div>
              <input className="border border-zinc-300 rounded-xl px-3 py-2" placeholder="Your name" />
              <input className="border border-zinc-300 rounded-xl px-3 py-2" placeholder="Email or phone" />
              <textarea className="border border-zinc-300 rounded-xl px-3 py-2 min-h-[120px]" placeholder="Tell us about your occasion…" />
              <Button className="rounded-2xl">Send (demo)</Button>
              <div className="text-xs text-zinc-500">Form is a demo in this preview. We’ll wire it up later.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
          <div>© {new Date().getFullYear()} Woma Lifestyle • All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
