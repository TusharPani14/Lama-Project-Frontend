import React from 'react'
import Navbar from '../../components/common/navbar'
import Sidebar from '../../components/common/sidebar'
import WidgetComp from '../../components/widgetComp'
import styles from './widgetPage.module.css'

const WidgetConfiguration = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.flexSextion}>
            <Sidebar/>
            <WidgetComp/>
        </div>
    </div>
  )
}

export default WidgetConfiguration