import Section from '../../common/Section';
import ContactForm from '../../common/ContactForm';
import ContactsList from '../../common/Contacts';

export default function Contacts() {
  return (
    <>
      <Section title='Phonebook'>
        <ContactForm/>
      </Section>

      <Section title='ContactsList'>
        <ContactsList/>
      </Section>
    </>
  );
}

