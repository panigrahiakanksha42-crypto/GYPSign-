import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // If navigating between different showcase or portfolio categories, do NOT scroll to top
    // so the user stays at the category filter tabs.
    const isShowcaseNavigation = pathname.startsWith('/showcase') && prevPathname.current.startsWith('/showcase');
    const isPortfolioNavigation = pathname.startsWith('/portfolio') && prevPathname.current.startsWith('/portfolio');
    
    if (!isShowcaseNavigation && !isPortfolioNavigation) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
    
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
