import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import useNewContact from './useNewContact';

export default function NewContact() {
  const { contactsFormRef, handleSubmit } = useNewContact();

  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <ContactForm
        ref={contactsFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
