import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems, selectIsAdding } from 'redux/selector';
import { addContactThunk } from 'redux/contactOperation';
import { ColorRing } from 'react-loader-spinner';
import { startAddingContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css'

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const isAdding = useSelector(selectIsAdding )

  const onSubmit = e => {
   dispatch(startAddingContact())
    const form = e.target;
   
    e.preventDefault();

    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    const normalizedName = newContact.name.toLowerCase();

    if (checkDobleName(normalizedName)) {
      return alert(`${form.name.value} is already in contacts`);
    }

    dispatch(addContactThunk(newContact));
    form.reset();
  };
    
     const checkDobleName = name =>
    contacts.find(contact => contact.name.toLowerCase() === name);
      
    return (
        <form className={css.form} onSubmit={onSubmit}>
            <label className={css.form__label} htmlFor='name'>Name
                <input
                    // id="name"
                    className={css.form__input}
                    type="text"
                    name="name"
                    pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.form__label} htmlFor='number'>Number
                <input
                    // id="number"
                    className={css.form__input}
                    type="tel"
                    name="number"
                    pattern="^(\+?[0-9.\(\)\-\s]*)$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.formBtn} type="submit">
              <ColorRing
              visible={isAdding}
              height="20"
              width="20"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
              Add contact
            </button>
        </form>
            
    )
};
