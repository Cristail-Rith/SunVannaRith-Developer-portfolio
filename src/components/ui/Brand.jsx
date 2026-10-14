function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Sun VannaRith home">
      <span className="brand-mark" aria-hidden="true">
        <img src="/profile.png" alt="" />
      </span>
      <span className="brand-copy">
        <span className="brand-name">Sun <strong>VannaRith</strong></span>
        <span className="brand-caption">Developer portfolio <i aria-hidden="true">↗</i></span>
      </span>
    </a>
  )
}

export default Brand
