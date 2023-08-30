import React, { useState, useEffect, useRef } from 'react';
import './Progress.css';

const Progress = ({ percentage ,skillName }) => {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsRunning(true);
            }
        };

        const options = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (filled < percentage && isRunning) {
            setTimeout(() => setFilled(prev => prev + 2), 50);
        }
    }, [filled, isRunning, percentage]);

    return (
        <div>
            <div className='progress-bar ' ref={progressBarRef}>

                     <div className='d-flex justify-content-between'>

                    <div>
                        <span className='progressName'>{skillName}</span>
                    </div>
                    <div>
                        <span className='progressPercent'>{filled}%</span>

                    </div>
                   
                </div>
                <div className='progress-inner' style={{ width: `${filled}%` }}></div>
               
            </div>
        </div>
    );
}

export default Progress;
