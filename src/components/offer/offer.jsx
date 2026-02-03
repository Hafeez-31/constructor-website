import React, { forwardRef, useState, useEffect } from "react";
import './offer.css';
import Man from "../../assets/images/offerimg/man.png"
import Truck from "../../assets/images/offerimg/truck.png"
import Cap from "../../assets/images/offerimg/cap.png"

const Offer = forwardRef((_, ref) => {

    const stats = [
        { id: 1, number: 50, label: "STAFF MEMBERS", suffix: "+" },
        { id: 2, number: 90, label: "PARTNERS", suffix: "+" },
        { id: 3, number: 120, label: "PROJECTS COMPLETED", suffix: "+" },
        { id: 4, number: 400, label: "SATISFIED CLIENTS", suffix: "+" },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false); 

    useEffect(() => {
        if (!ref?.current) return; 

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);

                        const duration = 2000; 
                        const intervalTime = 20; 
                        const steps = duration / intervalTime;

                        const intervals = stats.map((stat, idx) => {
                            const increment = stat.number / steps;

                            return setInterval(() => {
                                setCounts(prev => {
                                    const newCounts = [...prev];
                                    if (newCounts[idx] < stat.number) {
                                        newCounts[idx] = Math.min(newCounts[idx] + increment, stat.number);
                                    }
                                    return newCounts;
                                });
                            }, intervalTime);
                        });
                        setTimeout(() => intervals.forEach(i => clearInterval(i)), duration + 50);
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasAnimated, stats, ref]);
    return (
        <div className="offers" ref={ref}>
            <h2>What We Offer</h2>
            <div className="underline-1"></div>
            <div className="offer">
                <div>
                    <img src={Man} alt="house repair" />
                    <h6>HOUSE REPAIR</h6>
                    <p>Quisque porttitor dui eget tellus ornare laoreet Morbi<br />ornare. tellus at finibus pretium, ex erat viverra</p>
                </div>
                <div>
                    <img src={Truck} alt="construction" />
                    <h6>CONSTRUCTION BUILDINGS</h6>
                    <p>In sit amet mi vel nunc fringilla imperdiet. Phasellus<br />porta molestie efficitur vitae pretium ullamcorper</p>
                </div>
                <div>
                    <img src={Cap} alt="conceptual" />
                    <h6>CONCEPTUAL DESIGNS</h6>
                    <p>Vestibulum posuere dolor at orci egestas, in cursus<br />lorem interdum, molestie gravida mauris</p>
                </div>
            </div>

            <div className="members">
                {stats.map((stat, idx) => (
                    <div className="numbers" key={stat.id}>
                        <h3>{Math.floor(counts[idx])}{stat.suffix}</h3> 
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
});

export default Offer;