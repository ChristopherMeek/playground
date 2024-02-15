import { Tab } from '@headlessui/react'
import * as styles from './tabs.css'
import { Fragment } from 'react'
import { motion } from 'framer-motion'

export default function Tabs() {
  return <div className={styles.tabGroup}>
    <Tab.Group vertical>
      <Tab.List className={styles.tabs}>
        <Tab as={Fragment}>{({selected}) => <div className={styles.tab}>A{selected && <motion.div className={styles.selectedTabIndicator} layoutId='selected-tab-indicator'/>}</div>}</Tab>
        <Tab as={Fragment}>{({selected}) => <div className={styles.tab}>B{selected && <motion.div className={styles.selectedTabIndicator} layoutId='selected-tab-indicator'/>}</div>}</Tab>
        <Tab as={Fragment}>{({selected}) => <div className={styles.tab}>C{selected && <motion.div className={styles.selectedTabIndicator} layoutId='selected-tab-indicator'/>}</div>}</Tab>
        <Tab as={Fragment}>{({selected}) => <div className={styles.tab}>D{selected && <motion.div className={styles.selectedTabIndicator} layoutId='selected-tab-indicator'/>}</div>}</Tab>
        <Tab as={Fragment}>{({selected}) => <div className={styles.tab}>E{selected && <motion.div className={styles.selectedTabIndicator} layoutId='selected-tab-indicator'/>}</div>}</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>AA</Tab.Panel>
        <Tab.Panel>BB</Tab.Panel>
        <Tab.Panel>CC</Tab.Panel>
        <Tab.Panel>DD</Tab.Panel>
        <Tab.Panel>EE</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  </div>
}