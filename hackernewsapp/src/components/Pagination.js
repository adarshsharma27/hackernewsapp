import React from "react";

const Pagination = ({ page, setPage, news, setLoader }) => {
    const previousPage = () => {
        setLoader(true);
        setPage(page - 1);
        window.scroll(0, 100);
    };
    const nextPage = () => {
        setLoader(true);
        setPage(page + 1);
        window.scroll(0, 100);
    };
    return (
        <div className="container-fluid bg-light pagination-conatiner">
            <div className="pagination py-2 container">
                <button className="btn btn-primary" disabled={page === 0} onClick={() => previousPage({})}>
                    Previous
                </button>
                <button className="btn btn-primary" disabled={!news.length} onClick={() => nextPage()}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
