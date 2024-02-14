import { GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <a
        className="footer--url"
        href="#"
        target="_blank"
      >
        <GitHub />
      </a>
      <a
        className="footer--url"
        href="#"
        target="_blank"
      >
        <Twitter />
      </a>
    </footer>
  );
}

export default Footer;
