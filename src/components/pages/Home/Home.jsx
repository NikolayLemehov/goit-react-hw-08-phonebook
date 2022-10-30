import Section from "../../common/Section";
import ContactForm from "../../common/ContactForm";
import Contacts from "../../common/Contacts";
import { useLocation } from 'react-router-dom';

export default function Home() {
  console.log(useLocation())
  return (
    <>
      <Section title='Phonebook'>
        <ContactForm/>
      </Section>

      <Section title='Contacts'>
        <Contacts/>
      </Section>
    </>
  );
}
