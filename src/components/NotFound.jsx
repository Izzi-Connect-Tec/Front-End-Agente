import '../styles/notFound.css';

const NotFound = () => {
  return (
    <div className="error-container">
        <p className="error-subtitle">Oops! Page not found</p>
        <h1 className="error-title">404</h1>
        <p className="error-message">We are sorry, but the page you requested was not found</p>
    </div>
  );
};

export default NotFound;
