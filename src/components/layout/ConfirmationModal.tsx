import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useConfirmationModal } from "@stores/modal.store";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

const ConfirmationModal = () => {
  const confirmationModal = useConfirmationModal();

  return (
    <AnimatePresence>
      {confirmationModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col min-w-104.75 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] p-6 gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between">
              <p className="text-body1 font-semibold text-title">
                {confirmationModal.title}
              </p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={confirmationModal.onHide}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            <p className="text-body2 text-text">
              {confirmationModal.description}
            </p>

            <Flex className="flex-row! items-center justify-end gap-2">
              {confirmationModal.type === "danger" && (
                <CustomButton
                  label="Batalkan"
                  mode="ghost"
                  size="md"
                  onClick={confirmationModal.onHide}
                />
              )}

              <CustomButton
                label={confirmationModal.buttonLabel}
                mode={
                  confirmationModal.type === "danger" ? "danger" : "primary"
                }
                size="md"
                onClick={() => {
                  if (confirmationModal.onSubmit) confirmationModal.onSubmit();
                }}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
