import { useState } from 'react';
import styles from './Sidebar.module.css';
import { Menu } from 'lucide-react';
function Sidebar() {

    const [isOpen , setIsOpen] = useState(true);

  return (
    <div className = {styles.sidebar}>
      <div>
        <Menu size="24" 
            onClick={()=>{
                setIsOpen(!isOpen)
            }}
                className={styles.menu}
        />
        <div>
            
        </div>
      </div>
    </div>
  )
}

export default Sidebar 
