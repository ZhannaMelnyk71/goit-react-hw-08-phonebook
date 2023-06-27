import { Fragment } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactOperation';

// import css from './Contact.module.css'

export const Contact = ({ contact: { name, phone, id } }) => {
    const dispatch = useDispatch();

    const onDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  };

    return (
        <Fragment>
            <span>{name}: {phone}</span>
            <button
                    type="button"
                onClick={onDeleteContact}>Delete</button>
        </Fragment>
    )
}

Contact.propTypes = {
    contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};