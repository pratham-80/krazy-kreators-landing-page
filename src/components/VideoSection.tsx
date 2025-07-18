import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false); // Start with audio enabled
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          // Section is visible - play video
          if (videoRef.current) {
            videoRef.current.muted = false; // Start with audio
            videoRef.current.play().catch(error => {
              console.log('Autoplay prevented:', error);
              // If autoplay fails, try with muted
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.play().catch(e => {
                  console.log('Muted autoplay also failed:', e);
                });
              }
            });
          }
        } else {
          // Section is not visible - pause video
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/section-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Audio Control Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMute}
        className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </section>
  );
};

export default VideoSection; 