function Features({feature, text}) {
  return (
    <div className="features">
      <h3 className="green features-header">{feature}</h3>
      <p className="features-description">
        {text}
      </p>
    </div>
  );
}

export default Features;
