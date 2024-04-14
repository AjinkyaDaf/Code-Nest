// PricingComponent.js
import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
    const plans = [
        {
            name: "Premium",
            desc: "Unlock advanced features and resources for accelerated learning.",
            price: 2999,
            isMostPop: true,
            features: [
                "AI-Powered Coding Assistance",
                "Daily Tech News Digests",
                "Personalized Learning Roadmaps",
                "Curated Learning Resources",
                "Advanced Projects and Features",
                "Interview Preparation Materials",
                "24/7 Student Support",
            ],
        },
        {
            name: "Basic",
            desc: "Access essential resources to kickstart your coding journey.",
            price: 199,
            isMostPop: false,
            features: [
                "Basic Coding Support",
                "Tech News Updates",
                "General Learning Guidelines",
                "Community Recommended Resources",
                "Limited Project Demo",
                "Introductory Interview Tips",
                // "Limited Support",
            ],
        },
    ];


    return (
        <section className='pricing-section'>
            <div className='gradient-background'></div>
            <div className="pricing-container">
                <div className='pricing-content'>
                    <h3 className="pricing-title">
                        Pricing
                    </h3>
                    <p className='pricing-subtitle'>
                        Pay as you grow
                    </p>
                    <div className='pricing-description'>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p> */}
                    </div>
                </div>
                <div className='pricing-options'>
                    {plans.map((item, idx) => (
                        <div key={idx} className={`pricing-option ${item.isMostPop ? "most-popular" : ""}`}>
                            <div className="pricing-details">
                                <span className='pricing-name'>
                                    {item.name}
                                </span>
                                <div className='pricing-price'>
                                ₹{item.price} <span className="price-unit">/mo</span>
                                </div>
                                <p className="pricing-desc">
                                    {item.desc}
                                </p>
                                <a href='/login'>
                                    <button className='pricing-button'>
                                        Subscribe
                                    </button>
                                </a>
                            </div>
                            <ul className='pricing-features'>
                                {item.features.map((featureItem, idx) => (
                                    <li key={idx} className='feature-item'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className={`feature-icon ${item.isMostPop ? "most-popular-icon" : ""}`}
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fill-rule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
