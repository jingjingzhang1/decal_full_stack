// pages/index.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  // Get the current pathname using the `usePathname` hook
  const pathname = usePathname();

  // Conditionally set the dark mode class based on the pathname
  const isDarkMode = pathname === '/dark-mode';

  return (
    <div className={clsx('container', { 'dark-mode': isDarkMode })}>
      <h1>Welcome to the {isDarkMode ? 'Dark' : 'Light'} Mode Page!</h1>
      
      <div>
        {/* Dark Mode Button */}
        <Link href="/dark-mode">
          <button>Dark Mode</button>
        </Link>

        {/* Light Mode Button */}
        <Link href="/light-mode">
          <button>Light Mode</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
