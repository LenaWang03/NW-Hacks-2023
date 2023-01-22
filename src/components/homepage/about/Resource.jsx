import Link from "../../../assets/Link.svg"
import '../../../styles/Resources.css';    

function Resource() {
  return (
    <div className="resource">
      <img src={Link} className="resource-link" />
      <h3 className="resource-header">Resource One</h3>
      <p className="resource-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis
      </p>
    </div>
  );
}

export default Resource;
