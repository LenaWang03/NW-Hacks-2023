import Link from '../../../assets/Link.svg';
import '../../../styles/Resources.css';

function Resource({resource, text, link}) {
  return (
    <div className="resource">
      <a type="button" href={link} target="_blank" className="resource-link">
        <img src={Link} />
      </a>
      <h3 className="resource-header">{resource}</h3>
      <p className="resource-description">
        {text}
      </p>
    </div>
  );
}

export default Resource;
