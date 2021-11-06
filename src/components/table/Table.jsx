import React, {useState} from "react";
import classNames from "classnames";
import tableStyle from "./table.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteUserAction, editDataUserAction } from "../../redux/user/userAction";
import Alert from "../alert/Alert";
import PropTypes from 'prop-types';

const Table = ({data}) => {
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  
  const dispatch = useDispatch();

  const edit = (editData) => {
    dispatch(editDataUserAction( editData ))
  }

  const deleteUser = (id) => {
    setAlert(true)
    setMessage('User deleted')
    dispatch(deleteUserAction(data,id))
    setTimeout(() => {
      setAlert(false)
    }, 1000)
  }
  
  if (data.length !== 0) {
    return (
      <div className={classNames(tableStyle.table, "container")}>
        {
           alert?<Alert type='error' content={message} />: null
        }
        <ul className={classNames(tableStyle.header)}>
          <li>Name</li>
          <li>Surname</li>
          <li>E-mail</li>
          <li>Address</li>
          <li>Phone</li>
          <li></li>
        </ul>
        <div className={classNames(tableStyle.body)}>
           {data.map((item) => {
                return (
                  <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.surname}</li>
                    <li>{item.email}</li>
                    <li>{item.address}</li>
                    <li>{item.phone}</li>
                    <li>
                      <Link to={`/edit/${item.id}`} onClick={(e) => {
                        edit(item)
                      }}>
                        <FontAwesomeIcon icon={faPen} />{" "}
                      </Link>
                      <button onClick={() => {
                        deleteUser(item.id)
                      }}>
                        <FontAwesomeIcon icon={faTrashAlt} />{" "}
                      </button>
                    </li>
                  </ul>
                );
              })
            }
        </div>
      </div>
    );
  }else{
    return (
      <div className={classNames("container")}>
        <h2 className={classNames("user__note_found")}>User note found</h2>
      </div>
    )
  }
  
};

Table.propTpes = {
  data: PropTypes.array
}

export default Table;
