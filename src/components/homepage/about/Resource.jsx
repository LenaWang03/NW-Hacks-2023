import Link from '../../../assets/Link.svg';
import '../../../styles/Resources.css';

function Resource() {
  return (
    <div className="resource">
      <a type="button" href="https://www.google.com/" target="_blank" className="resource-link">
        <img src={Link} />
      </a>
      <h3 className="resource-header">Resource One</h3>
      <p className="resource-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis
      </p>
    </div>
  );
}

export default Resource;
