import { Email, Link, LinkedIn } from '@mui/icons-material';
import profilePhoto from '../assets/timothy_profile.jpg';
import Button from './Button';

function Header() {
  return (
    <header>
      <img src={profilePhoto} alt="card--logo" />
      <h1 className="card--owner">Timothy Akobundu</h1>
      <p className="card--title">Software Developer</p>
      <a className="card--url" href="" target="_blank">
        <Link />
        timothy.me
      </a>

      <div className="header--btns">
        <Button
          className="btn--email"
          icon={<Email />}
          label="Email"
          url="mailto:timothy.christian10@gmail.com"
        />
        <Button
          className="btn--linkedin"
          icon={<LinkedIn />}
          label="LinkedIn"
          url="https://www.linkedin.com/in/timothy-akobundu-73b1b3241/"
          target="_blank"
        />
      </div>
    </header>
  );
}

export default Header;
