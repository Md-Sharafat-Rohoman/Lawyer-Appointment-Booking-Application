import React, { useState } from 'react';
import './CardsContainer.css'; 

// ডেটা (আপনার ১২টি কার্ডের তালিকা)
const AllCards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 3" },
    { id: 3, content: "Card 5" },
    { id: 4, content: "Card 7" },
    { id: 5, content: "Card 9" },
    { id: 6, content: "Card 11" },
    { id: 7, content: "Card 2" },
    { id: 8, content: "Card 4" },
    { id: 9, content: "Card 6" },
    { id: 10, content: "Card 8" },
    { id: 11, content: "Card 10" },
    { id: 12, content: "Card 12" },
];

const CardsContainer = () => {
    // state: প্রথমে শুধু ৬টি কার্ড দেখানোর জন্য false সেট করা হয়েছে
    const [showAll, setShowAll] = useState(false);
    
    const initialCardCount = 6;
    
    // কার্ড নির্বাচন: যদি showAll সত্য হয় (বাটনে ক্লিক করা হয়েছে), তবে সব কার্ড দেখাও। 
    // না হলে, slice() ব্যবহার করে শুধুমাত্র প্রথম ৬টি কার্ড দেখাও।
    const cardsToShow = showAll 
        ? AllCards 
        : AllCards.slice(0, initialCardCount);
    
    // বাটন ক্লিক হলে state পরিবর্তন করার ফাংশন
    const handleLoadMore = () => {
        setShowAll(true);
    };

    const remainingCards = AllCards.length - initialCardCount;

    return (
        <div className="card-wrapper">

            {/* কার্ড কন্টেইনার */}
            <div className="card-container">
                {cardsToShow.map((card) => (
                    <div key={card.id} className="card">
                        {card.content}
                    </div>
                ))}
            </div>

            {/* শর্তসাপেক্ষ বাটন রেন্ডারিং: 
            যদি showAll false থাকে (অর্থাৎ আরও কার্ড লুকানো আছে), তবেই বাটনটি দেখা যাবে।
            */}
            {!showAll && (
                <button 
                    id="loadMoreBtn" 
                    onClick={handleLoadMore}
                >
                    আরও দেখুন ({remainingCards}টি বাকি)
                </button>
            )}
        </div>
    );
};

export default CardsContainer;