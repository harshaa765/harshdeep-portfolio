export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-6">
      <aside>
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Harshdeep Sharma — Made with 💻 using Next.js, Tailwind & Vercel
        </p>
      </aside>
    </footer>
  );
}
