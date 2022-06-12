import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Search from "./Search";
import Pagination from "./Pagination";
const Home = () => {
    const [news, setNew] = useState(null);
    const [page, setPage] = useState(0);
    const [perPage] = useState(5);
    const [pageTitle, setPageTitle] = useState("");
    const [loader, setLoader] = useState(true);

    const setNews = async (query) => {
        const ApiUrl1 = `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${perPage}`;
        const response = await fetch(ApiUrl1);
        const data = await response.json();
        setNew(data.hits);
        setPageTitle(data.hits[0].title);
        setLoader(false);
    };
    useEffect(() => {
        setNews("programming");
    }, [page]); // eslint-disable-line
    return (
        <>
            <Search setNews={setNews} />
            <div className="content bg-light">
                <div className="container py-4">
                    <h1>{pageTitle}</h1>
                    <div className="row">
                        {loader ? (
                            <Loader />
                        ) : (
                            news.map((element, index) => {
                                let { title, author, story_text, created_at, url } = element;
                                return <Cards key={index} title={title} author={author} story_text={story_text} created_at={created_at} url={url} />;
                            })
                        )}
                    </div>
                </div>
            </div>
            {news && <Pagination news={news} setPage={setPage} page={page} setLoader={setLoader} />}
        </>
    );
};

export default Home;
