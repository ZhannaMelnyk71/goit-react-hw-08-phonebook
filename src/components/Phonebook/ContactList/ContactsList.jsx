import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contactOperation';
import { ProgressBar } from 'react-loader-spinner';

import { Contact } from 'components/Phonebook/Contact/Contact'
import css from './ContactList.module.css'

export const ContactsList = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(selectContacts);
    const contacts = useSelector(selectFilteredContacts);

    useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

    return (
        <>
            {isLoading && !error && (
            <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
                />
            )}
            <ul className={css.contactList}>{contacts.map(contact => {
                return (
                    <li className={css.contactList__item}
                        key={contact.id}>
                        <Contact contact={contact} />
                    </li>);
            })}
            </ul>
        </>
    );
}

