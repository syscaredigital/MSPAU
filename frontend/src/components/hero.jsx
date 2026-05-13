import React from 'react';
import { Link } from 'react-router-dom';

const heroHighlights = [
  {
    title: '24/7 Support',
    description: 'Always On',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 5a7 7 0 0 0-7 7v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 15v-3a7 7 0 0 0-7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 19h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Australian Based',
    description: 'Local & Reliable',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.5l-4.8 2.52.92-5.34L4.24 8.64l5.36-.78L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity First',
    description: 'Secure by Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.6 2.98 8.88 7 10 4.02-1.12 7-5.4 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m9.5 12 1.6 1.6 3.4-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '150+ Clients',
    description: 'Across Australia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20.5 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14.5 5.13a4 4 0 0 1 0 5.74" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const sideStats = [
  { title: '24/7 Monitoring', subtitle: 'Always On' },
  { title: 'Rapid Response', subtitle: '< 15 mins' },
  { title: 'Data Protected', subtitle: 'Secure Backups' },
  { title: 'Local Support', subtitle: 'Australia Wide' },
];

const navIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="m12 3 7 3v5c0 4.6-2.98 8.88-7 10-4.02-1.12-7-5.4-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M7 10a5 5 0 1 1 10 0c0 4-5 8-5 8s-5-4-5-8Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M7 10.5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="5" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="15" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M5 19h14M7 16V9m5 7V5m5 11v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.04.04a1.9 1.9 0 0 1-2.69 2.69l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91V20a1.9 1.9 0 0 1-3.8 0v-.06a1 1 0 0 0-.66-.95 1 1 0 0 0-1.1.2l-.04.04a1.9 1.9 0 0 1-2.69-2.69l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H4a1.9 1.9 0 1 1 0-3.8h.06a1 1 0 0 0 .95-.66 1 1 0 0 0-.2-1.1l-.04-.04A1.9 1.9 0 1 1 7.46 5.7l.04.04a1 1 0 0 0 1.1.2h.09a1 1 0 0 0 .6-.91V5a1.9 1.9 0 1 1 3.8 0v.06a1 1 0 0 0 .66.95 1 1 0 0 0 1.1-.2l.04-.04a1.9 1.9 0 1 1 2.69 2.69l-.04.04a1 1 0 0 0-.2 1.1v.09a1 1 0 0 0 .91.6H20a1.9 1.9 0 1 1 0 3.8h-.06a1 1 0 0 0-.95.66Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  ),
];

const linePoints = [
  [0, 88],
  [10, 82],
  [20, 85],
  [30, 77],
  [40, 79],
  [50, 67],
  [60, 70],
  [70, 63],
  [80, 60],
  [90, 44],
  [100, 48],
];

const buildPolyline = (points) =>
  points.map(([x, y]) => `${x},${y}`).join(' ');

const VideoHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6f9ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_22%,rgba(88,146,255,0.18),transparent_26%),radial-gradient(circle_at_8%_92%,rgba(77,145,255,0.12),transparent_24%),linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(82,125,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(82,125,210,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-8 pt-6 sm:px-6 md:pb-10 md:pt-8 lg:px-10 lg:pb-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.76fr_1fr] lg:gap-6">
          <div className="max-w-[460px] pt-1 lg:pl-2">
            <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#24356a] sm:text-[10px] md:text-[11px]">
              Your trusted IT partner in Australia
            </p>

            <h1 className="max-w-[10ch] text-[2.2rem] font-black leading-[1.02] tracking-[-0.05em] text-[#1b2b69] sm:text-[2.65rem] md:text-[3rem] lg:text-[3.35rem]">
              Managed IT Services That Keep <span className="text-[#3a6cff]">Australian</span> Businesses Running
            </h1>

            <p className="mt-4 max-w-[360px] text-[0.88rem] leading-[1.65] text-[#29457d] sm:text-[0.92rem] md:text-[0.95rem]">
              24/7 support, cybersecurity, cloud, automation, and proactive IT management tailored for growing businesses.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact-Us"
                className="inline-flex min-h-[46px] min-w-[170px] items-center justify-center rounded-[14px] bg-[#3768f5] px-5 text-[0.86rem] font-bold text-white shadow-[0_16px_34px_rgba(61,113,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2e5ff0] hover:shadow-[0_18px_36px_rgba(61,113,255,0.3)]"
              >
                Get Free IT Assessment
                <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3 h-4 w-4">
                  <path fillRule="evenodd" d="M10.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L12.586 10H5a1 1 0 1 1 0-2h7.586L10.293 5.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link
                to="/contact-Us"
                className="inline-flex min-h-[46px] min-w-[162px] items-center justify-center rounded-[14px] border border-[#7ea7ff] bg-white px-5 text-[0.86rem] font-bold text-[#19316f] shadow-[0_10px_22px_rgba(18,47,116,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f6bff] hover:shadow-[0_14px_26px_rgba(18,47,116,0.1)]"
              >
                Talk to an Expert
                <svg viewBox="0 0 24 24" fill="none" className="ml-3 h-4 w-4" aria-hidden="true">
                  <path d="M6.7 4h2.15a1 1 0 0 1 .98.8l.55 2.75a1 1 0 0 1-.5 1.08l-1.54.88a13.08 13.08 0 0 0 6.15 6.15l.88-1.54a1 1 0 0 1 1.08-.5l2.75.55a1 1 0 0 1 .8.98v2.15a1 1 0 0 1-1 1h-1.3C10.58 20.34 3.66 13.42 3.66 5V4.99a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[450px]">
            <div className="absolute right-4 top-6 h-40 w-40 rounded-full bg-[#78acff]/18 blur-3xl sm:h-48 sm:w-48 md:h-56 md:w-56" />
            <div className="absolute bottom-4 right-6 h-20 w-44 rounded-full bg-[#4a82ff]/20 blur-3xl sm:h-24 sm:w-52 md:h-28 md:w-60" />

            <div className="absolute left-[10px] top-[54px] hidden w-[58px] rounded-[24px] border border-white/10 bg-[#132760] p-2.5 shadow-[0_20px_42px_rgba(10,27,74,0.24)] md:block lg:left-[20px] lg:top-[64px] lg:w-[64px]">
              <div className="space-y-3 rounded-[22px] bg-[#10214f] py-4">
                {navIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-[12px] lg:h-9 lg:w-9 lg:rounded-[14px] ${
                      index === 0
                        ? 'bg-[#3d72ff] text-white shadow-[0_12px_22px_rgba(47,107,255,0.36)]'
                        : 'text-white/75'
                    }`}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-0 top-0 right-0 overflow-hidden rounded-[24px] border border-[#4f76dd]/40 bg-[#1b2f68] p-3 text-white shadow-[0_34px_80px_rgba(10,24,68,0.38)] sm:left-[24px] sm:right-[24px] sm:p-4 md:left-[70px] md:right-[16px] lg:left-[78px] lg:right-[28px] lg:rounded-[30px] lg:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(136,185,255,0.42),transparent_24%),radial-gradient(circle_at_25%_100%,rgba(60,118,255,0.28),transparent_30%),linear-gradient(180deg,rgba(39,65,130,0.98)_0%,rgba(20,33,76,1)_100%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-52 -translate-x-1/2 rounded-full bg-[#4f8cff]/30 blur-3xl" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-white/85 sm:text-[11px]">System Operations</p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-[1.08fr_0.62fr]">
                  <div className="rounded-[20px] border border-[#b8d0ff]/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-3.5 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_18px_36px_rgba(9,19,56,0.2)] lg:rounded-[22px]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold text-white/82 sm:text-[10px] lg:text-[11px]">Live Monitoring</p>
                        <p className="mt-2 text-[9px] font-bold leading-4 text-[#4ef08d] sm:text-[10px] lg:mt-3 lg:text-[11px] lg:leading-5">+ All Systems Operational</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-white/55 sm:text-[10px] lg:text-[11px]">Uptime (30 Days)</p>
                        <p className="mt-1.5 text-[2rem] font-black leading-none tracking-[-0.06em] sm:text-[2.35rem] lg:mt-2 lg:text-[2.6rem]">99.9%</p>
                        <p className="mt-1 text-[8px] font-bold text-[#4ef08d] sm:text-[9px] lg:mt-1.5 lg:text-[10px]">+ 0.2% vs last month</p>
                      </div>
                    </div>

                    <div className="mt-5 lg:mt-6">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-16 w-full sm:h-20 lg:h-24">
                        <defs>
                          <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3e79ff" />
                            <stop offset="50%" stopColor="#6f9fff" />
                            <stop offset="100%" stopColor="#6fe6ff" />
                          </linearGradient>
                          <linearGradient id="hero-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(96, 164, 255, 0.55)" />
                            <stop offset="100%" stopColor="rgba(56, 124, 255, 0)" />
                          </linearGradient>
                          <filter id="hero-glow">
                            <feGaussianBlur stdDeviation="2.4" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <polyline
                          fill="url(#hero-fill)"
                          stroke="none"
                          points={`${buildPolyline(linePoints)} 100,100 0,100`}
                        />
                        <polyline
                          fill="none"
                          stroke="rgba(151,206,255,0.3)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          points={buildPolyline(linePoints)}
                        />
                        <polyline
                          fill="none"
                          stroke="url(#hero-line)"
                          strokeWidth="2.8"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          filter="url(#hero-glow)"
                          points={buildPolyline(linePoints)}
                        />
                        {linePoints.map(([x, y], index) => (
                          <circle key={index} cx={x} cy={y} r="1.7" fill="#aee2ff" />
                        ))}
                      </svg>
                    </div>

                    <div className="mt-1.5 grid grid-cols-5 text-[7px] font-bold text-white/40 sm:text-[8px] lg:text-[9px]">
                      <span>May 1</span>
                      <span className="text-center">May 8</span>
                      <span className="text-center">May 15</span>
                      <span className="text-center">May 22</span>
                      <span className="text-right">Jun 5</span>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {sideStats.map((item) => (
                      <div key={item.title} className="group rounded-[18px] border border-white/90 bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-3 py-3 text-[#224184] shadow-[0_18px_34px_rgba(33,73,170,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(33,73,170,0.22)] lg:px-3.5 lg:py-3.5">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#eef4ff_0%,#dce9ff_100%)] text-[#2f6bff] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_18px_rgba(47,107,255,0.12)] transition-transform duration-300 group-hover:scale-105 lg:h-9 lg:w-9 lg:rounded-[14px]">
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true">
                              <path d="M12 3 5 6v6c0 4.6 2.98 8.88 7 10 4.02-1.12 7-5.4 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                              <path d="m9.5 12 1.6 1.6 3.4-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[0.75rem] font-extrabold leading-4 text-[#24448d] sm:text-[0.8rem] lg:text-[0.84rem]">{item.title}</p>
                            <p className="mt-0.5 text-[9px] font-bold text-[#6278a8] sm:text-[10px] lg:text-[11px]">{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(30,51,108,0.98),rgba(20,37,83,0.98))] p-3 shadow-[0_18px_34px_rgba(7,19,52,0.24)]">
                    <p className="text-[9px] font-bold text-white/55 sm:text-[10px] lg:text-[11px]">Threats Blocked</p>
                    <p className="mt-2 text-[1.7rem] font-black leading-none tracking-[-0.06em] sm:text-[2rem] lg:mt-3 lg:text-[2.25rem]">3,264</p>
                    <p className="mt-1 text-[8px] font-bold text-[#ff7381] sm:text-[9px] lg:text-[10px]">120 This Month</p>
                    <div className="mt-2.5 h-6 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] lg:mt-3 lg:h-8">
                      <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,rgba(255,95,123,0.38),rgba(255,95,123,0.03))]" />
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(30,51,108,0.98),rgba(20,37,83,0.98))] p-3 shadow-[0_18px_34px_rgba(7,19,52,0.24)]">
                    <p className="text-[9px] font-bold text-white/55 sm:text-[10px] lg:text-[11px]">Active Devices</p>
                    <p className="mt-2 text-[1.7rem] font-black leading-none tracking-[-0.06em] sm:text-[2rem] lg:mt-3 lg:text-[2.25rem]">1,246</p>
                    <p className="mt-1 text-[8px] font-bold text-[#57d788] sm:text-[9px] lg:text-[10px]">Online</p>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10 lg:mt-4">
                      <div className="h-full w-[90%] rounded-full bg-[linear-gradient(90deg,#37dd77_0%,#78f59a_100%)] shadow-[0_0_12px_rgba(63,224,126,0.35)]" />
                    </div>
                    <p className="mt-1.5 text-right text-[8px] font-black text-white/45 sm:text-[9px]">90%</p>
                  </div>

                  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(30,51,108,0.98),rgba(20,37,83,0.98))] p-3 shadow-[0_18px_34px_rgba(7,19,52,0.24)]">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-24 rounded-full bg-[#5a8fff]/22 blur-2xl" />
                    <p className="text-[9px] font-bold text-white/55 sm:text-[10px] lg:text-[11px]">Backups</p>
                    <p className="mt-2 text-[1.7rem] font-black leading-none tracking-[-0.06em] sm:text-[2rem] lg:mt-3 lg:text-[2.25rem]">100%</p>
                    <p className="mt-1 text-[8px] font-bold text-[#57d788] sm:text-[9px] lg:text-[10px]">Successful</p>
                    <p className="mt-2 text-[8px] text-white/45 sm:text-[9px] lg:mt-3 lg:text-[10px]">All systems protected</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[14px] right-2 h-16 w-40 rounded-[999px] bg-[radial-gradient(circle_at_center,_rgba(114,176,255,0.82)_0%,_rgba(53,117,255,0.55)_42%,_rgba(53,117,255,0.08)_72%,_transparent_75%)] blur-[2px] sm:h-18 sm:w-52 lg:h-20 lg:w-64" />
            <div className="absolute bottom-[24px] right-10 h-10 w-32 rounded-[999px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(206,226,255,0.74))] shadow-[0_18px_30px_rgba(67,124,255,0.2)] sm:right-12 sm:h-12 sm:w-40 lg:bottom-[30px] lg:right-16 lg:h-14 lg:w-48" />
          </div>
        </div>

        <div className="mt-4 grid gap-2 rounded-[24px] border border-white/70 bg-white/82 px-3 py-3 shadow-[0_18px_42px_rgba(45,89,180,0.1)] backdrop-blur-md sm:grid-cols-2 sm:gap-3 sm:px-4 sm:py-4 lg:grid-cols-4 lg:gap-2 lg:px-5 lg:py-3.5">
          {heroHighlights.map((item) => (
            <div key={item.title} className="flex items-center gap-2.5 rounded-2xl px-1 py-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-[#eef4ff] text-[#2f6bff] sm:h-10 sm:w-10 sm:rounded-[16px]">
                {item.icon}
              </div>
              <div>
                <p className="text-[0.8rem] font-extrabold text-[#284483] sm:text-[0.84rem]">{item.title}</p>
                <p className="text-[9px] font-bold text-[#7888aa] sm:text-[10px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
