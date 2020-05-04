import React from "react";
import "./QuoteCard.css";
import PropTypes from "prop-types";

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <p>
          <cite>{props.character}</cite>
        </p>
      </figcaption>
    </figure>
  );
}

QuoteCard.propTypes = {
  character: PropTypes.string.isRequired,
};
export default QuoteCard;
