import { CustomButton, CustomScheduleInput, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddScheduleModal } from "@stores/modal.store";
import { useToast } from "@stores/page.store";
import { IconX } from "@tabler/icons-react";
import { addScheduleValidator } from "@utils/validator/mission.validator";
import { AnimatePresence, motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";

const AddScheduleModal = () => {
  const addScheduleModal = useAddScheduleModal();
  const showToast = useToast((state) => state.onShow);

  const { control, reset } = useForm({
    resolver: zodResolver(addScheduleValidator),
    defaultValues: {
      scheduled_at: undefined,
    },
  });

  return (
    <AnimatePresence>
      {addScheduleModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col min-w-108.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">Jadwalkan</p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={() => {
                  reset();
                  addScheduleModal.onHide();
                }}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            <Flex className="p-6">
              <Controller
                control={control}
                name="scheduled_at"
                render={({ field }) => <CustomScheduleInput field={field} />}
              />
            </Flex>

            <Flex className="flex-row! items-center justify-between px-6 pt-4 pb-6">
              <CustomButton
                label="Batalkan"
                mode="ghost"
                size="md"
                onClick={() => {
                  reset();
                  addScheduleModal.onHide();
                }}
              />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={() => {
                  reset();
                  showToast("success", "Misi berhasil dijadwalkan!");
                  addScheduleModal.onHide();
                }}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default AddScheduleModal;
