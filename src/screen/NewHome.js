import BottomNavigation from '../components/BottomNavigation'
import { useAuth } from '../context/auth-context';
import IntroductionScreen from './Introduction'
export default function NewHomeScreen(){
  const { user } = useAuth();
  
  return user.new ? <IntroductionScreen /> : <BottomNavigation />
}