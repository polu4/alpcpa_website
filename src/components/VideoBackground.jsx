import React from 'react';

const VideoBackground = ({ videoSrc, flipVertical = false }) => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover grayscale dark:invert ${flipVertical ? 'scale-y-[-1]' : ''}`}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Overlay: White/90% in light mode, Black/80% in dark mode */}
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 transition-colors duration-300"></div>
        </div>
    );
};

export default VideoBackground;
