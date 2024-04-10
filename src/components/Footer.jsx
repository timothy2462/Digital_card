import { GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <a
        className="footer--url"
        href="https://github.com/timothy2462"
        target="_blank"
      >
        <GitHub />
      </a>
      <a
        className="footer--url"
        href="https://twitter.com/Timostickz04"
        target="_blank"
      >
        <Twitter />
      </a>
    </footer>
  );
}

export default Footer;
