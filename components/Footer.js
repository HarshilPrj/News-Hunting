import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className="flex justify-center bg-slate-800 text-slate-400 ">
      <form className="grid grid-cols-2 gap-8  border-red-600 p-6">
        <div>
          <label for="first">First name</label>
          <br />
          <input type="text" id="first" className={styles.textfield} />
        </div>
        <div>
          <label for="last">Last name</label>
          <br />
          <input type="text" id="last" className={styles.textfield} />
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" className={styles.textfield} />
        </div>
        <div>
          <label for="phone">Phone</label>
          <br />
          <input type="tel" id="phone" className={styles.textfield} />
        </div>
        <div>
          <label for="message">Meassage</label>
          <br />
          <textarea
            type="textarea"
            id="message"
            rows="3"
            cols="60"
            className={styles.textarea}
          />
        </div>
        <br />
        <div>
          <button type="submit" className={styles.submitbtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Footer;
