import React from "react";
import { format } from "date-fns";
import DOMPurify from "dompurify";
const Cards = ({ title, author, story_text, created_at, url }) => {
    return (
        <>
            <div className="col-xl-6 col-md-5 col-sm-12">
                <div className="product-card text-left">
                    {/* <img className="img-responsive" src={image} alt={label} /> */}
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h3>{title}</h3>
                            <h4 className="decription-1 py-1">By {author}</h4>
                            <p className="decription-2  ">{DOMPurify.sanitize(story_text, { USE_PROFILES: { html: false } })}</p>
                            <h6 className="decription-3">{format(new Date(created_at), "dd/MM/YYY")}</h6>
                            <a href={url} target="_blank" rel="noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
