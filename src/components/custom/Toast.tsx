import { useToast } from "@stores/page.store";
import {
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

const Toast = () => {
  const toast = useToast();

  useEffect(() => {
    let timeout: number;

    if (toast.show) {
      timeout = setTimeout(() => {
        toast.onHide();
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [toast.show]);

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          className="flex absolute z-50 right-6 top-6 items-center px-3 py-2 bg-dark-80 rounded-sm gap-2 min-w-61.25"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          {toast.type === "success" ? (
            <IconCircleCheckFilled size={16} color="#ACEE68" />
          ) : (
            <IconAlertTriangleFilled size={16} color="#ECAA1C" />
          )}

          <p className="text-body2 font-semibold text-white">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
