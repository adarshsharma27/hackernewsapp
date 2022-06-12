import React from "react";
import { useState } from "react";

const Search = ({ setNews }) => {
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="form py-3 bg-light">
                <div className="form-container w-50 mx-auto">
                    <input type="search" className="form-control   mx-auto" placeholder="search" id="search" onChange={(event) => setSearch(event.target.value)} value={search} />
                    <i className="fas fa-search" onClick={() => setNews(search)}></i>
                </div>
            </div>
        </>
    );
};

export default Search;
