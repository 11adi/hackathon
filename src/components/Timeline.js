import React, { useEffect, useState } from 'react';
import barimg from '../assets/logo.png';

function Timeline() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [timelineHeight, setTimelineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const timelineContainer = document.getElementById('timeline-container');
            const lastTimelineItem = document.querySelector('#timeline-container > div:last-child');
            const maxScroll = Math.max(0, timelineContainer.scrollHeight - window.innerHeight);
    
            // Limit scrollTop to 300px
            scrollTop = Math.min(scrollTop, 450);
    
            setScrollPosition(scrollTop);
            setMaxScroll(maxScroll);
            setTimelineHeight(timelineContainer.scrollHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const progressBarStyle = {
        position: 'absolute',
        top: `${(scrollPosition / maxScroll) * 110}%`, // Adjusted top position based on scroll
        left: '60px',
        width: '30px',
        height: '30px',
        zIndex: 2,
        transition: 'top 0.3s ease', // Added transition for smooth movement
    };

    const coloredBarStyle = {
        position: 'absolute',
        top: '10%',
        left: '85px',
        width: '30px',
        height: `${(scrollPosition / maxScroll) * timelineHeight}px`, // Adjusted height based on timeline height
        backgroundColor: '#ADD8E6',
        zIndex: 2,
        transition: 'height 0.3s ease',
        borderRadius: '15px', // Ensure the image covers the entire progress bar
    };

    const timelineContainerStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        overflowY: 'auto'
    };

    const timelineItemStyle = {
        position: 'relative',
        borderRadius: '5px',
        width: '60%',
        minHeight: '180px', // Adjusted height to fit content
        marginLeft: '5%',
        marginBottom: '60px',
        padding: '30px',
        zIndex: 1,
        borderLeft: '2px solid yellow', // Yellow left border
        position: 'relative', // Ensure proper layering
    };
    
    const yellowLine = {
        position: 'absolute',
        width: '20%',
        height: '1%',
        background: 'yellow',
        left: '-20%', // Slightly offset to align with the border
        top: '50%',
        zIndex: 1, // Behind the content
    };
    const greenLine={
        position: 'absolute',
        width: '1%',
        height: '25%',
        background: 'green',
        left: '50%', // Slightly offset to align with the border
        top: '100%',
        zIndex: -1,
    }

    const colorfulBorder = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '5px',
        animation: 'rainbow 4s infinite linear',
        zIndex: -1,
    };

    const rainbowBorderAnimation = `
    @keyframes rainbow {
      0% { border: 2px solid red; }
      16.6% { border: 2px solid orange; }
      33.3% { border: 2px solid yellow; }
      50% { border: 2px solid green; }
      66.6% { border: 2px solid blue; }
      83.3% { border: 2px solid indigo; }
      100% { border: 2px solid violet; }
    }
  `;
  

    return (
        <div id="timeline-container" style={timelineContainerStyle}>
            <style>{rainbowBorderAnimation}</style>
            <div className='Tbar' style={coloredBarStyle}></div>
            <div className='Tscroll' style={progressBarStyle}><img src={barimg} alt="Progress Bar Image" style={{ width: '80px', height:'80px' }} /></div>
            <div style={{ color: '#fff', marginBottom: '36px', fontSize: '30px', fontWeight: 'bold' }}>
                TIMELINE
            </div>

            <div style={timelineItemStyle}>
                <div style={{ color: '#ADD8E6', fontSize: '2.0em', fontWeight: 'bold' }}>Registration</div>
                <hr style={{ borderTop: '.01px dotted' }} />
                <div style={{ color: '#fff', fontSize: '1.5em' }}>Duration: 15 Oct to 19 Feb</div>
                <p style={{ color: '#fff' }}>Registration period for Hackathon</p>
                <div style={{ ...colorfulBorder, animationDelay: '0s' }}></div>
                <div className='Yline' style={yellowLine}></div>
                <div className='Gline' style={greenLine}></div>
            </div>
            <div style={timelineItemStyle}>
                <div style={{ color: '#ADD8E6', fontSize: '2.0em', fontWeight: 'bold' }}>Acceptance Letter rollout</div>
                <hr style={{ borderTop: '.5px dotted' }} />
                <div style={{ color: '#fff', fontSize: '1.5em' }}>Duration: 16 Feb to 28 Feb</div>
                <p style={{ color: '#fff' }}>Mails sent to accepted hackers</p>
                <div style={{ ...colorfulBorder, animationDelay: '1s' }}></div>
                <div className='Yline' style={yellowLine}></div>
                <div className='Gline' style={greenLine}></div>
            </div>
            <div style={timelineItemStyle}>
                <div style={{ color: '#ADD8E6', fontSize: '2.0em', fontWeight: 'bold' }}>Hacking Hours</div>
                <hr style={{ borderTop: '.5px dotted' }} />
                <div style={{ color: '#fff', fontSize: '1.5em' }}>Duration: 02 March to 03 Mar</div>
                <p style={{ color: '#fff' }}>The Hackathon period</p>
                <div style={{ ...colorfulBorder, animationDelay: '2s' }}></div>
                <div className='Yline' style={yellowLine}></div>
                <div className='Gline' style={greenLine}></div>
            </div>
            <div style={timelineItemStyle}>
                <div style={{ color: '#ADD8E6', fontSize: '2.0em', fontWeight: 'bold' }}>Winner Announcement</div>
                <hr style={{ borderTop: '.5px dotted' }} />
                <div style={{ color: '#fff', fontSize: '1.5em' }}>Date: 03 March</div>
                <p style={{ color: '#fff' }}>Winner announcement and Closing ceremony</p>
                <div style={{ ...colorfulBorder, animationDelay: '3s' }}></div>
                <div className='Yline' style={yellowLine}></div>
            </div>
        </div>
    );
}

export default Timeline;
