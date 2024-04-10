import { Email, Link, LinkedIn } from '@mui/icons-material';
import profilePhoto from '../assets/timothy_profile.jpg';
import Button from './Button';

function Header() {
  return (
    <header>
      <img src={profilePhoto} alt="card--logo" />
      <h1 className="card--owner">Timothy Akobundu</h1>
      <p className="card--title">Frontend Developer</p>
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
          url="#"
          target="_blank"
        />
      </div>
    </header>
  );
}

export default Header;
