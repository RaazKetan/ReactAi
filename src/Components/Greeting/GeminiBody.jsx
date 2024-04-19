import { useContext } from "react";
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Youtube,
  Code,
  SendHorizontal,
} from "lucide-react";
import { Context } from "../../context/ContextProvider";
import styles from "./GeminiBody.module.css";

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);

  console.log(loading, "loading");
  return (
    <div className={styles.head}>
      <div>
        <p>Gemini</p>
        <CircleUserRound size={40} />
      </div>
      <div className={styles.display}>
        {!displayResult ? (
          <>
            <div className={styles.display_head}>
              <p>
                <span className={styles.display_span}>Hello, Ketan Raj</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className={styles.suggest}>
              <div className={styles.suggestExtended}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <Compass size={35} className={styles.compass} />
              </div>
              <div className={styles.vehicle}>
                <p>What’s the reaction to and impact of autonomous vehicles</p>
                <Lightbulb size={35} className={styles.lightbulb} />
              </div>
              <div className={styles.recipe}>
                <p>Come up with a recipe for an upcoming event</p>
                <Youtube size={35} className={styles.youtube} />
              </div>
              <div className={styles.code}>
                <p>Evaluate and rank common camera categories</p>
                <Code size={35} className={styles.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className={styles.resultext}>
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className={styles.gemini}>
              <img src="/gemini.png" alt="" />
              <p
                className={styles.geminiresult}
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className={styles.formextended}>
          <form onSubmit={submit}>
            <div className={styles.innerfrom}>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className={styles.inputPrompt}
                placeholder="Enter a prompt here"
              />
              <div className={styles.inputSend}>
                <SendHorizontal type="submit" size={20} />
              </div>
            </div>
          </form>
          <p className={styles.warningText}>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiBody;
