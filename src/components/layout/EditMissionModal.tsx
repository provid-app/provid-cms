import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useEditMissionModal } from "@stores/modal.store";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import FormList from "./FormList";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { editMissionForm } from "@utils/constant/form.data";
import { useToast } from "@stores/page.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { editMissionValidator } from "@utils/validator/mission.validator";

const EditMissionModal = () => {
  const editMissionModal = useEditMissionModal();
  const showToast = useToast((state) => state.onShow);

  const { control, reset, handleSubmit } = useForm({
    resolver: zodResolver(editMissionValidator),
    defaultValues: editMissionModal.form?.defaultValues as any,
  });

  useEffect(() => {
    if (editMissionModal.show) {
      reset(editMissionModal.form?.defaultValues);
    } else {
      reset(editMissionForm.defaultValues);
    }
  }, [editMissionModal.show]);

  return (
    <AnimatePresence>
      {editMissionModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-267.25 h-149.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">Edit Misi</p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={editMissionModal.onHide}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            {editMissionModal.form && (
              <Flex className="p-6">
                <FormList
                  control={control}
                  listData={editMissionModal.form.inputs}
                />
              </Flex>
            )}

            <Flex className="px-6 pb-6 pt-4 border-t border-t-border flex-row! items-center justify-between">
              <CustomButton label="Batalkan" mode="ghost" size="md" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={handleSubmit(() => {
                  editMissionModal.onHide();
                  showToast("success", "Misi berhasil diubah!");
                })}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default EditMissionModal;
