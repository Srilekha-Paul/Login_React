import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Marketing content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-green-700 leading-tight">
            Sell or Rent your<br />Property For Free
          </h1>
          <h2 className="text-4xl font-bold text-gray-400">
            30 Lac+ Home Owners Trust Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I posted a property ad on MyDearProperty, an efficient real estate platform. 
            Despite my busy schedule, they ensured timely communication, keeping me updated 
            through emails and messages. They successfully found a tenant for my rental 
            property that perfectly matched my requirements.
          </p>
        </div>

        {/* Right side - Login form */}
        <div className="flex justify-center">
          <Login onSwitchToRegister={() => navigate('/register')} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;