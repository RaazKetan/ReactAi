import  { useContext, useState } from "react";
import {
  Menu,
  Plus,
  CircleHelp,
  Activity,
  Settings,
  MessageSquare,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Context } from "../../context/ContextProvider";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setDisplayResult, setInput, prevPrompts, setRecentPrompts, submit } =
    useContext(Context);

  const loadPrompt = (prompt) => {
    setRecentPrompts(prompt);
    submit(prompt);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_extended}>
        <Menu
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menu}
        />
        <div
          className={styles.chat}
          onClick={() => {
            setDisplayResult(false);
            setInput("");
          }}
        >
          <Plus size={20} className={styles.plus}/>
          {isOpen ? <p>New chat</p> : null}
        </div>
        {isOpen ? (
          <div className={styles.recent_div}>
            <p className={styles.recent}>Recent</p>
            {prevPrompts?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className={styles.loadPrompt}
              >
                <MessageSquare
                  size={20}
                  className={styles.messageSquare}
                />
                <p>{item?.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.more}>
        <div className={styles.more_options}>
          <CircleHelp size={20} className="text-softTextColor" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className={styles.more_options}>
          <Activity size={20} className="text-softTextColor" />
          {isOpen ? <p>Activity</p> : null}
        </div>
        <div className={styles.more_options}>
          <Settings size={20} className="text-softTextColor" />
          {isOpen ? <ThemeToggle /> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
