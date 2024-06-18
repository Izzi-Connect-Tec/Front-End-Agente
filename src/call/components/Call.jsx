import "../styles/call.css";
import { CallCard } from "../CallCard.jsx";
import { ClientCard } from "./ClientCard";
import { ChatCard } from "../components/ChatCard.jsx";
import { SolutionsCard } from "../../solutions/SolutionsCard.jsx";
import CallControlsCard from "../components/CallControlsCard.jsx";
import Stats from "../../stats/components/Stats.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useCallControlContext } from "../providers/CallControlContext.jsx";

export const Call = () => {
  const [, , isCall, , , ,] = useCallControlContext();

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
