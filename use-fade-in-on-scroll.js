import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once the element is visible
        }
      },
      {
        threshold: 0.3, // Adjust this value as needed
      }
    );

    if (ref.current) {
      // Check if the element is already in the viewport
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Set isVisible to true if the element is already in the viewport on initial render
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  }, []);

  return { ref, isVisible };
}