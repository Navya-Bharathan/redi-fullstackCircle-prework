import { useState } from "react";
import styles from "./SearchField.module.css";
import RestaurantView from "../../views/RestaurantView";

const SearchField = ({onSearchInputChange}) => {
  
  /* step1:UseState to save the input */
  const [input, setInput]=useState("");

  const handleChange=(e)=>{
    setInput(e.target.value);
    onSearchInputChange(e.target.value);
 
  };
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text" value={input}  onChange={handleChange}  
      />
  
      
    </div>
  );
};

export default SearchField;
