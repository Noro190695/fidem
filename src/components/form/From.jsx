import React, { useEffect, useState } from "react";
import classNames from "classnames";
import formStyle from "./from.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, editUserAction } from "../../redux/user/userAction";
import { useParams, useHistory } from "react-router-dom";
import Alert from "../alert/Alert";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.user.data);
  const editData = useSelector((state) => state.user.editData);
  
  const history = useHistory();
  const {id} = useParams();
  
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      addUserAction({
        id: new Date().getTime(),
        name,
        surname,
        email,
        address,
        phone
      }) 
    );
    setAlert(true)
    setMessage('User created')
    setTimeout(() => {history.push('/')}, 1500)
  };
  const editUser = (e) => {
    e.preventDefault();
    dispatch(
      editUserAction(allData,{
        id: editData.id,
        name, 
        surname,
        email,
        address,
        phone
      })
    );
    setAlert(true)
    setMessage('user info changed')
    setTimeout(() => {history.push('/')}, 1500)
  };
  const clearStateValue = () => {
    setName('');
    setSurname('');
    setEmail('');
    setAddress('');
    setPhone('');
  }
  useEffect(() => {
    if(id !== undefined && editData.name === undefined){
      history.push('/')
    }
    if (id !== undefined) {
      setName(editData.name);
      setSurname(editData.surname);
      setEmail(editData.email);
      setAddress(editData.address);
      setPhone(editData.phone);
    }else{
      clearStateValue()
    }
  }, [ id ]); 
  useEffect(() => {
    return () => {
      clearStateValue();
      setAlert(false)
    }
  }, [])
  return (
    <>
      {
        alert?<Alert type='success' content={message} />: null
      }
      <form
        className={classNames(formStyle.form, "container")}
        onSubmit={id?editUser:addUser}
      >
        <input
          type="text"
          placeholder="Name"
          defaultValue={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="surname"
          defaultValue={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          defaultValue={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          defaultValue={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="tel"
          placeholder="098190695"
          value={phone}
          pattern="[0-9]{9}"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <button disabled={alert}>{id? 'Save': 'Add'}</button>
      </form>
    </>
  );
};

export default Form;
