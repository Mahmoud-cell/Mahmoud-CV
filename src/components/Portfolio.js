import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div class="section port-section bounce-right">
      <h1 className="decore">Portfolio.</h1>
      <h1>
        <i className="fa fa-coffee"></i> Portfolio
      </h1>
      <div className="port-box">
        <h3>
          <i className="fa fa-tags"></i> Sharks
        </h3>
        <p>Big Organization Site</p>
        <a href="https://mahmoudlearngithub.github.io/shark/">Live Preview!</a>
      </div>
      <div className="port-box">
        <h3>
          <i className="fa fa-tags"></i> Maglin
        </h3>
        <p>Furniture Site</p>
        <a href="https://mahmoudlearngithub.github.io/maglin/">Live Preview!</a>
      </div>
      <div className="port-box">
        <h3>
          <i className="fa fa-tags"></i> Elmoharer
        </h3>
        <p>News Site</p>
        <a href="https://mahmoudlearngithub.github.io/elmoharer/">Live Preview!</a>
      </div>
      <div className="port-box">
        <h3>
          <i className="fa fa-tags"></i> Auto Car
        </h3>
        <p>Cars Site</p>
        <a href="https://mahmoud-cell.github.io/auto-car/">Live Preview!</a>
      </div>
      <div className="port-box">
        <h3>
          <i className="fa fa-tags"></i> And  Many More...
        </h3>
        <p>...</p>
      </div>
    </div>
  );
};

export default Portfolio;
