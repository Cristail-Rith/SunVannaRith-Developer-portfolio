function Button({ href, children, download, primary = false, ...props }) {
  return (
    <a className={`button${primary ? ' button-primary' : ''}`} href={href} download={download} {...props}>
      <span className="button-label">{children}</span>
    </a>
  )
}

export default Button
