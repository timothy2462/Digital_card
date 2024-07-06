import Info from "./Info";

function Main() {
  const about = [
    "Experienced software developer with 2 years of expertise in crafting innovative solutions for various domains, specializing in frontend and mobile app development, i build platforms and apps that are easy to use and visually appealing to end-users for businesses and corporate entities..",
  ];

  const interest = [
    "Food expert",
    "Music scholar",
    "Reader",
    "Internet fanatic",
    "Tech Entrepreneur",
    "Travel geek",
    "Pop culture ninja",
    "Coffee fanatic",
  ];

  return (
    <main>
      <Info title="About" details={about.join("")} />
      <Info title="Interests" details={interest.join(". ")} />
    </main>
  );
}

export default Main;
