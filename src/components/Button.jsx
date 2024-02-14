function Button({ className, icon, label, url }) {
  return (
    <a className={className} href={url} target="_blank">
      {icon}
      {label}
    </a>
  );
}

export default Button;
