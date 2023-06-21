/* eslint-disable react/prop-types */
import './Cards.scss';

export default function CardOne({ title, count, linkText, link }) {
  return (
    <div className="card-one">
      <p className="title">{title}</p>
      <p className="count">{count}</p>
      <a className="link" href={link}>
        {linkText}
      </a>
    </div>
  );
}
