import { useState } from "react";
import { FaAndroid } from "react-icons/fa";
import {
  FiDownload, FiPlusCircle, FiDollarSign, FiWifiOff, FiBell, FiSettings,
  FiDownloadCloud, FiSmartphone, FiTrendingUp, FiX
} from "react-icons/fi";
import logo from "./assets/payra-logo.png";
import screenshot from "./assets/payra-screenshot.jpg";

const features = [
  { icon: FiPlusCircle, title: "Add Loans Easily", desc: "Create loans with custom interest rates and flexible repayment terms – all offline first." },
  { icon: FiDollarSign, title: "Record Payments", desc: "Log payments instantly; remaining balance updates automatically." },
  { icon: FiWifiOff, title: "Works Offline", desc: "Full offline support with Firestore sync when you're back online – no internet? No problem." },
  { icon: FiBell, title: "Smart Notifications", desc: "Get timely reminders for upcoming and overdue payments, even when the app is closed." },
  { icon: FiSettings, title: "Your Preferences", desc: "Customise currency, language, and theme to match your workflow." },
  { icon: FiDownload, title: "Export Anytime", desc: "Back up all your lending data to CSV with a single tap." },
];

const steps = [
  { icon: FiDownloadCloud, title: "Download APK", desc: "Tap the download button to get the latest Payra APK (52 MB)." },
  { icon: FiSmartphone, title: "Install", desc: "Allow installs from unknown sources, then open the APK and install." },
  { icon: FiTrendingUp, title: "Start tracking", desc: "Add your first loan and never lose track of a payment again." },
];

export default function App() {
  const downloadUrl = "/downloads/payra-latest.apk";
  const [modal, setModal] = useState(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.4),_transparent_60%)]" />
        <div className="relative container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
          <img src={logo} alt="Payra logo" width={96} height={96}
            className="mx-auto mb-8 h-24 w-24 drop-shadow-[0_0_30px_rgba(30,58,138,0.6)]" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Payra – Track Loans, Collect Payments
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Offline‑first lending tracker. Download now – free forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={downloadUrl} download
              className="group inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-glow transition hover:bg-primary hover:scale-105">
              <FaAndroid className="h-6 w-6" />
              Download APK
              <FiDownload className="h-5 w-5 transition group-hover:translate-y-0.5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Android 7.0+ • ~52 MB • No ads • No subscriptions</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Everything you need to lend smart</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Built for individuals and small businesses who want clarity and control over their lending.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:-translate-y-1">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/15 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-card/40 border-y border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground text-xl font-bold shadow-glow">
                  {i + 1}
                </div>
                <s.icon className="mx-auto h-8 w-8 text-accent mb-3" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Designed for clarity</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A clean, focused interface that makes every loan and payment immediately visible.
              No clutter. No mandatory account – just your data, your way.
            </p>
          </div>
          <div className="relative mx-auto">
            <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[10px] border-border bg-card shadow-glow overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-border rounded-b-2xl z-10" />
              <img src={screenshot} alt="Payra app screenshot" loading="lazy"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Payra" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold text-lg">Payra</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button onClick={() => setModal("privacy")} className="hover:text-foreground transition">Privacy Policy</button>
              <button onClick={() => setModal("terms")} className="hover:text-foreground transition">Terms of Service</button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
            <p>© 2026 Payra. All rights reserved.</p>
            <p className="text-xs">Payra is a personal lending tracker, not a financial institution.</p>
          </div>
        </div>

        {modal && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setModal(null)}>
            <div className="relative max-w-lg w-full rounded-2xl border border-border bg-card p-6 pt-10"
              onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
                <FiX className="h-5 w-5" />
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {modal === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <div className="text-muted-foreground text-sm space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {modal === "privacy" ? (
                  <>
                    <p><strong>Data we collect:</strong> Payra stores all your lending records (borrower names, loan amounts, interest rates, payment history) exclusively on your device and, if you choose cloud sync, in your personal Firebase account. We do not collect, transmit, or sell any personal information to third parties.</p>
                    <p><strong>Cloud sync (optional):</strong> When you enable cloud backup, your data is stored in your own Firebase project – we never have access to it. You can delete your data at any time from the app settings.</p>
                    <p><strong>Permissions:</strong> Payra may request notification permission to remind you of upcoming payments. No other permissions are required.</p>
                    <p>By using Payra, you agree to this privacy policy. We may update it from time to time; continued use implies acceptance.</p>
                  </>
                ) : (
                  <>
                    <p><strong>Acceptance of Terms:</strong> By downloading, installing, or using Payra, you agree to be bound by these Terms of Service.</p>
                    <p><strong>Use License:</strong> Payra is provided for personal, non‑commercial use only. You may not reverse engineer, modify, or redistribute the app without permission.</p>
                    <p><strong>Limitation of Liability:</strong> Payra is provided "as is" without warranties of any kind. We are not responsible for any financial losses, disputes between lenders and borrowers, or errors in data entry. You are solely responsible for compliance with local lending laws.</p>
                    <p><strong>Changes to Terms:</strong> We reserve the right to modify these terms. Continued use of the app after changes constitutes acceptance.</p>
                    <p>If you do not agree with any part of these terms, you must uninstall Payra immediately.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </footer>
    </main>
  );
}