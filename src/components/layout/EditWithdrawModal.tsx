import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useEditWithdrawModal } from "@stores/modal.store";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import FormList from "./FormList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editWithdrawValidator } from "@utils/validator/reward.validator";
import { useToast } from "@stores/page.store";

const EditWithdrawModal = () => {
  const editWithdrawModal = useEditWithdrawModal();
  const showToast = useToast((state) => state.onShow);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(editWithdrawValidator),
    defaultValues: editWithdrawModal.form?.defaultValues,
  });

  return (
    <AnimatePresence>
      {editWithdrawModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-158.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] overflow-x-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">
                Ubah aturan minimum penarikan
              </p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={() => {
                  editWithdrawModal.onHide();
                }}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            {editWithdrawModal.form && (
              <Flex className="p-6 gap-4">
                <FormList
                  control={control}
                  listData={editWithdrawModal.form.inputs}
                />
              </Flex>
            )}

            <Flex className="px-6 pb-6 pt-4 border-t border-t-border flex-row! items-center justify-between">
              <CustomButton label="Batalkan" mode="ghost" size="md" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={handleSubmit(() => {
                  editWithdrawModal.onHide();
                  showToast("success", "Minimum penarikan berhasil diubah!");
                })}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default EditWithdrawModal;
