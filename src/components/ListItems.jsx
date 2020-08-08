import React from "react";
import styles from "../components/ListItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItems(props) {
  const items = props.items;
  const ListItems = items.map((item) => {
    return (
      <div className={styles.list} key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon className={styles.icon} icon="trash" onClick={() => props.deleteItem(item.key)} />
          </span>
        </p>
      </div>
    );
  });
  return <div>{ListItems}</div>;
}

export default ListItems;
