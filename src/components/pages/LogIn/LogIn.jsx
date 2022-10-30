import LogInView from "../../common/LogInView/LogInView";
import Section from "../../common/Section";
// import { useLocation } from 'react-router-dom';

export default function LogIn(props) {

  // console.log('LogIn', useLocation())
  return (
    <Section title='LogIn'>
      <LogInView/>
    </Section>
  );
}

