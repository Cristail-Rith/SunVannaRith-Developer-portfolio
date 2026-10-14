function ProjectCard({ title, description, technologies = [], href, image, imageAlt, preview = 'PROJECT PREVIEW', index = 0, kind, category = 'Project' }) {
  return (
    <article className={`project-card${index === 0 ? ' project-card-featured' : ''}`}>
      <div className={`project-image${image ? ' has-image' : ''}`}>
        {image ? <img src={image} alt={imageAlt || `${title} preview`} /> : (
          <div className={`project-art project-art-${kind || 'default'}`} aria-hidden="true">
            <span className="project-art-note">Illustrative preview</span>
            {kind === 'shop' && <div className="shop-preview">
              <div className="shop-top"><span>AM / SHOP</span><span className="shop-cart">BAG <b>02</b></span></div>
              <div className="shop-heading"><span>New arrivals</span><i>CURATED GOODS</i></div>
              <div className="shop-products"><div><i /><b>Form / 01</b><small>$24.00</small></div><div><i /><b>Object / 02</b><small>$38.00</small></div><div><i /><b>Daily / 03</b><small>$18.00</small></div></div>
            </div>}
            {kind === 'restaurant' && <div className="restaurant-preview">
              <div className="restaurant-side"><b>R.</b><span>⌂</span><span>▦</span><span>◷</span></div>
              <div className="restaurant-main"><div className="restaurant-top"><span>Table overview</span><i>● LIVE</i></div><div className="restaurant-table-grid"><b>01 <small>Dining</small></b><b>02 <small>Ready</small></b><b>03 <small>Dining</small></b><b>04 <small>New order</small></b></div><div className="restaurant-order"><span>Order #024</span><i>Preparing</i></div></div>
            </div>}
            {kind === 'arduino' && <div className="arduino-preview">
              <div className="arduino-board"><span className="board-label">UNO / SIGNAL CONTROL</span><div className="traffic-light"><i /><i /><i /></div><div className="countdown"><strong>08</strong><span>SECONDS</span></div><div className="board-pin"><i /><i /><i /><i /><i /><i /></div></div>
              <span className="circuit-line circuit-line-one" /><span className="circuit-line circuit-line-two" />
            </div>}
            {!kind && <span className="placeholder-caption">[{preview}]</span>}
          </div>
        )}
        <span className="project-index">0{index + 1}</span>
        <span className="project-category">{category}</span>
      </div>
      <div className="project-body">
        <p className="project-category-label">{category}</p>
        <div className="project-title-row">
          <h3>{title}</h3>
          {href && <span className="project-arrow" aria-hidden="true">↗</span>}
        </div>
        <p className="project-description">{description}</p>
        <ul className="project-tech" aria-label="Technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {href
          ? <a className="project-link" href={href} target="_blank" rel="noreferrer">View project →</a>
          : <span className="project-link project-link-placeholder">No live demo yet</span>}
      </div>
    </article>
  )
}

export default ProjectCard
