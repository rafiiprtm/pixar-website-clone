import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const firstname = searchParams.get('firstname');
  const email = searchParams.get('email');

  return (
    <div className="success">
      <div className="message">
        <h1>Thank you for submitting the form, {firstname} ! </h1>
        <p>We have sent a confirmation email to {email}.</p>
      </div>
    </div>
  );
};

export default Success;
