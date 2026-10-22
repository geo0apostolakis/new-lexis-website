import "./globals.css";

export const metadata = {
  title: "New Lexis Language Centre · Γερμανικά · Πετρούπολη",
  description:
    "Σχολή ξένων γλωσσών στην Πετρούπολη. Γερμανικά A1—C2, Goethe & ÖSD, 100% επιτυχία εξετάσεων, 5.0★ Google.",
};

export const viewport = {
  themeColor: "#1f1f1f",
};

// Runs before first paint. Adds .motion (so CSS can hide what is about to animate in) unless the visitor
// prefers reduced motion, marks repeat visits in this tab for the short intro, and shows the page anyway
// if components/Motion.js hasn't started within 4 seconds.
const motionBoot = `(function(){try{
var d=document.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('motion','intro-lock');
try{if(sessionStorage.getItem('nl-intro')==='1')d.classList.add('intro-seen')}catch(e){}
if('scrollRestoration' in history)history.scrollRestoration='manual';
setTimeout(function(){if(!window.__nlMotion)d.classList.remove('motion','intro-lock')},4000);
}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="el" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
