import React from "react";
import Navbar from '../../components/common/navbar'
import Sidebar from '../../components/common/sidebar'
import styles from './account.module.css'
import AccountSettings from "../../components/accountSettings";

const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.flexSextion}>
        <Sidebar />
        <AccountSettings/>
      </div>
    </div>
  );
};

export default AccountPage;
