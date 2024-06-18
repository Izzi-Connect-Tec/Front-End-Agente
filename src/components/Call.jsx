// Author: Joahan Garcia
// Display call cards components or stats component depending on the state of the call

import "../styles/call.css";
import { CallCard } from "./CallCard";
import { ClientCard } from "./ClientCard";
import { ChatCard } from "./ChatCard";
import { SolutionsCard } from "./SolutionsCard";
import CallControlsCard from "./CallControlsCard.jsx";
import Stats from "./Stats";
import { motion, AnimatePresence } from "framer-motion";
import { useCallControlContext } from "../providers/CallControlContext.jsx";

export const Call = () => {
  
  const [,,isCall,,,,] = useCallControlContext();

  return (
    <div>
      <AnimatePresence mode="wait">
        {isCall ? (
          <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="call">
              <div className="callData">
                <CallCard />
                <ClientCard />
              </div>
              <div className="callService">
                <ChatCard />
                <SolutionsCard />
              </div>
            </div>
            <CallControlsCard />
          </motion.div>
        ) : (
          <motion.div
            key="2"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
          >
            <Stats />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
