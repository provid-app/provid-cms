import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useSegmentModal } from "@stores/modal.store";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import FormList from "./FormList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addSegmentValidator } from "@utils/validator/segment.validator";
import { useEffect } from "react";
import { addSegmentForm } from "@utils/constant/form.data";
import { useToast } from "@stores/page.store";

const AddSegmentModal = () => {
  const segmentModal = useSegmentModal();
  const showToast = useToast((state) => state.onShow);

  const { control, reset, handleSubmit } = useForm({
    resolver: zodResolver(addSegmentValidator),
    defaultValues: segmentModal.form?.defaultValues,
  });

  useEffect(() => {
    if (segmentModal.show) {
      reset(segmentModal.form?.defaultValues);
    } else {
      reset(addSegmentForm.defaultValues);
    }
  }, [segmentModal.show]);

  return (
    <AnimatePresence>
      {segmentModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-158.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] overflow-x-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">
                {segmentModal.type === "edit" ? "Edit" : "Tambah"} Segmen
              </p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={() => {
                  segmentModal.onHide();
                }}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            {segmentModal.form && (
              <Flex className="p-6">
                <FormList
                  control={control}
                  listData={segmentModal.form.inputs}
                />
              </Flex>
            )}

            <Flex className="px-6 pb-6 pt-4 border-t border-t-border flex-row! items-center justify-between">
              <CustomButton label="Batalkan" mode="ghost" size="md" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={handleSubmit(() => {
                  segmentModal.onHide();
                  showToast(
                    "success",
                    `Segmen berhasil ${segmentModal.type === "edit" ? "diubah" : "ditambahkan"}!`,
                  );
                })}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default AddSegmentModal;
