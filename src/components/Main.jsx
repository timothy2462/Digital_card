import Info from './Info';

function Main() {
  const about = [
    'I am a mobile engineer and frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
  ];

  const interest = [
    'Food expert',
    'Music scholar',
    'Reader',
    'Internet fanatic',
    'Tech Entrepreneur',
    'Travel geek',
    'Pop culture ninja',
    'Coffee fanatic',
  ];

  return (
    <main>
      <Info title="About" details={about.join('')} />
      <Info title="Interests" details={interest.join('. ')} />
    </main>
  );
}

export default Main;
