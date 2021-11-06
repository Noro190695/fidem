import React, { useState, useEffect } from 'react';
import headerStyle from  './header.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { searchUserAction } from '../../redux/user/userAction';

 const Header = () => {
     const [searchInput, setSearchInput] = useState(''); 
     const history = useHistory();
     const {data} = useSelector((state) => state.user);
     const dispatch = useDispatch()
     const search = (e) => {
         e.preventDefault();
         dispatch(searchUserAction(data, searchInput))
         history.push('/search');  
         setSearchInput('')
     }
     useEffect(() => {
        setSearchInput('')
     }, [])
     return (
        <header className={classNames(headerStyle.header)}>
            <Link to='/' className={classNames(headerStyle.logo)}  onClick={() => setSearchInput('')}> Fidem </Link>
            <form onSubmit={search}>
                <input type="search" placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            <Link to={'/create'} className={classNames(headerStyle.add__user)} onClick={() => setSearchInput('')}>Add User</Link>
        </header>
     );
 }

 export default Header;