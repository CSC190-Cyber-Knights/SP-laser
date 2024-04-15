import { useRef, useEffect } from 'react';

export const BgVideo = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.loop = true; // Add loop attribute to make the video loop continuously

        return () => {
            video.removeEventListener('timeupdate', this);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 80px)' }}>
            <video
                ref={videoRef}
                className={'absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none'}
                autoPlay={true}
                disablePictureInPicture={true}
                controls={false}
                muted={true}
            >
                <source src={src} type={'video/mp4'} />
            </video>
        </div>
    );
};

export default BgVideo;





