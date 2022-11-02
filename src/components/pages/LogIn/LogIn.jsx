import LogInView from "../../common/LogInView/LogInView";
import Section from "../../common/Section";
import { useLocation } from 'react-router-dom';

export default function LogIn(props) {
const location = useLocation();
  const navigateTo = location.state.from.pathname

  return (
    <Section title='LogIn'>
      <LogInView navigateTo={navigateTo}/>
    </Section>
  );
}

