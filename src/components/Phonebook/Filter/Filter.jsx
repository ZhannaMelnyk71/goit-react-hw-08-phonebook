import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems, selectFilter } from 'redux/selector';
import { filter } from 'redux/filtersSlice';
import css from './Filter.module.css'


export const Filter = () => {
    const dispatch = useDispatch();
    const filterQuery = useSelector(selectFilter);
    const items = useSelector(selectContactsItems);

    const onChangeFilter = e => dispatch(filter(e.target.value));

return (
    <>
        {items.length !== 0 ? (
            <>
            <label htmlFor="filter" className= {css.filter}>Find contacts by name</label>
                <input
                    className={css.filter__input}
                    id="filter"
                    type="text"
                    value={filterQuery}
                    onChange={onChangeFilter} />
            </>
            ) : (<p>no contacts</p>)}
    </>

    )
}

