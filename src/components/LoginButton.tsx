
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { UserRound } from 'lucide-react';

const LoginButton = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/login');
  };
  
  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2 bg-white dark:bg-gray-800 border-rnsit-purple hover:bg-rnsit-purple/10"
      onClick={handleLogin}
    >
      <UserRound size={18} />
      <span>Login</span>
    </Button>
  );
};

export default LoginButton;
