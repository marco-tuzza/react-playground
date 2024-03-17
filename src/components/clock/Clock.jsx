import { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock() {
    const [degrees, setDegrees] = useState({ hours: 0, minutes: 0, seconds: 0 });

    function calculateDegrees() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const degreesMinutes = (minutes * 360) / 60;
        const degreesHours = (hours * 360) / 12 + (minutes * 360) / 60 / 12;
        const degreesSeconds = (seconds * 360) / 60;

        setDegrees({
            hours: degreesHours,
            minutes: degreesMinutes,
            seconds: degreesSeconds,
        });
    }

    useEffect(() => {
        const interval = setInterval(calculateDegrees, 1000);
        return () => clearInterval(interval);
    }, []);

    const styleMinutes = { transform:`translate(-50%, -100%) rotate(${degrees.minutes}deg)` };
    const styleHours = { transform:`translate(-50%, -100%) rotate(${degrees.hours}deg)` };
    const styleSeconds = { transform:`translate(-50%, -100%) rotate(${degrees.seconds}deg)` };

    return (
        <div className="dial">
            <div className="pin"></div>
            <div className="hour-hand" style={styleHours}></div>
            <div className="minute-hand" style={styleMinutes}></div>
            <div className="seconds-hand" style={styleSeconds}></div>
        </div>
    );
}