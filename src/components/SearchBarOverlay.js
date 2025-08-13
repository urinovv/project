import React, { useState } from "react";
import "../styles/SearchBarOverlay.css";

function SearchBarOverlay() {
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <>
            {/* Search tugmasi */}
            <button
                className="search-btn"
                onClick={() => setShowSearch(true)}
            >
                🔍 Search
            </button>

            {/* Search Overlay */}
            {showSearch && (
                <div className="search-overlay">
                    <div className="search-box">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            autoFocus
                        />
                        <button className="close-btn" onClick={() => setShowSearch(false)}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchBarOverlay;
