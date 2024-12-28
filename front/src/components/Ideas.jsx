import React, { useState, useEffect } from 'react';

const Ideas = () => {
    const ideas = [
        "How to survive in the Zone: Essential tips and tricks for newcomers",
        "What to bring on your first trip to the Cordon: A guide for stalkers",
        "How to deal with anomalies and mutants: Survival strategies",
        "Best weapons to use in the Zone: A stalker's weapon guide",
        "The history of the Zone: Uncovering the mysteries of S.T.A.L.K.E.R.",
        "How to navigate the Dark Valley: Avoiding the deadliest areas",
        "The most dangerous factions in the Zone: Who to trust and who to avoid",
        "How to find the best artifacts: Tips for stalkers hunting for valuable items",
        "The psychology of a stalker: Coping with the madness of the Zone",
        "How to manage radiation exposure: Staying safe in the radioactive landscape",
        "Exploring the Pripyat ruins: The most eerie locations in the S.T.A.L.K.E.R. universe",
        "Why the Zone attracts stalkers: What drives people to risk it all",
        "How to make money in the Zone: Trading with the right people",
        "How to prepare for a long trek in the Zone: What you really need",
        "The best hideouts in the Zone: Where to rest and resupply",
        "What you need to know about artifacts: Types, effects, and how to find them",
        "How to avoid the Bloodsucker: Surviving encounters with this deadly mutant",
        "Understanding the anomalies: How to spot and avoid dangerous zones",
        "The dangers of the Chernobyl power plant: Why it remains off-limits",
        "How to escape from the Zone: Theories and stories of successful stalkers",
        "What happened to the military in the Zone? Understanding the army's role in S.T.A.L.K.E.R.",
        "The impact of the Zone on humanity: Is it worth the risk?",
        "How to survive in the Zone when you're alone: Tips for solo stalkers",
        "The role of artifacts in S.T.A.L.K.E.R. society: Power, trade, and survival",
        "The truth about the wish granter: What happens if you make a wish?",
        "How to fight the Monolith: Strategies for taking on the cult of the Zone",
        "The Zone's environmental hazards: Dealing with toxic waters, fires, and more",
        "Why mutants are both a threat and an opportunity in the Zone",
        "How to stay sane in the Zone: Coping with isolation and fear",
        "The mysterious locations of the Zone: Hidden places you need to visit",
        "How to deal with stalker rivalries and factions in the Zone",
        "The evolution of the S.T.A.L.K.E.R. series: How the game and lore have developed",
        "What to expect from the Zone in S.T.A.L.K.E.R. 2: A sneak peek into the future of the series",
        "The ethical dilemmas of being a stalker: Is it just about survival, or more?"
    ];

    const [currentIdeas, setCurrentIdeas] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const generateRandomIdeas = () => {
        let randomIdeas = [];
        while (randomIdeas.length < 5) {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            if (!randomIdeas.includes(ideas[randomIndex])) {
                randomIdeas.push(ideas[randomIndex]);
            }
        }
        setCurrentIdeas(randomIdeas.join("\n"));
        setIsTyping(true);
    };

    useEffect(() => {
        generateRandomIdeas();
    }, []); 

    useEffect(() => {
        if (isTyping) {
            let charIndex = 0;
            const typingText = currentIdeas;
            const typingInterval = setInterval(() => {
                if (charIndex < typingText.length) {
                    setCurrentIdeas((prev) => typingText.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 50);
        }
    }, [currentIdeas, isTyping]);

    return (
        <div className="min-h-72 flex flex-col justify-between">
            <div className="text-center mt-6">
                <h2 className="text-3xl text-amber-600 mb-4">Come up with your own version</h2>
                <div className="text-white">
                    {currentIdeas.split("\n").map((idea, index) => (
                        <div key={index} className="text-md mb-5">
                            {idea}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ideas;
