import { useAuth0 } from "@auth0/auth0-react";
import './header.css';

const Header = () => {
  const { user, loginWithRedirect, logout } = useAuth0();

  // Function to open about content in a new tab
  const openAboutInNewTab = () => {
    const aboutContent = `This website serves as a dynamic hub for social interaction, embodying the essence of a social app. Here, users seamlessly share their thoughts, experiences, and moments through posts, fostering a vibrant community spirit. Beyond just sharing, the platform thrives on engagement, encouraging users to react and respond to each other's posts. Whether it's a simple like, a heartfelt comment, or an expressive emoji, every reaction amplifies the sense of connection and belonging within the virtual landscape. Through this symbiotic exchange of content and reactions, the website cultivates an environment where users can express themselves freely and build meaningful connections with others, enriching their online experience with every interaction.`;
  
    // Open new tab and write about content
    const newTab = window.open();
    newTab.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About</title>
        <style>
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          #about-container {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div id="about-container">
          <p>${aboutContent}</p>
        </div>
      </body>
      </html>
    `);
  };
  return (
    <header style={{backgroundColor:'#6f8faf'}} className="p-3 text-bg-dark myNav">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            {/* Link to open about content in a new tab */}
            <li>
              <a href="#" className="nav-link px-2 text-white" onClick={openAboutInNewTab}>
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button onClick={!user ? loginWithRedirect : logout} type="button" className="btn btn-outline-light me-2">
              {!user ? "Login" : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
