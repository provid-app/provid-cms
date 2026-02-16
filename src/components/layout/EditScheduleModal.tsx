import { Calendar, CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useEditScheduleModal } from "@stores/modal.store";
import { useToast } from "@stores/page.store";
import {
  IconAlertTriangle,
  IconCalendarWeek,
  IconX,
} from "@tabler/icons-react";
import { convertDateFormat } from "@utils/helper/converter";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const EditScheduleModal = () => {
  const editScheduleModal = useEditScheduleModal();
  const showToast = useToast((state) => state.onShow);

  const { control, reset } = useForm({
    defaultValues: {
      scheduled_at: editScheduleModal.lastSchedule
        ? new Date(editScheduleModal.lastSchedule)
        : new Date(),
    },
  });

  useEffect(() => {
    if (editScheduleModal.lastSchedule) {
      reset({ scheduled_at: new Date(editScheduleModal.lastSchedule) });
    }
  }, [editScheduleModal.lastSchedule]);

  return (
    <AnimatePresence>
      {editScheduleModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-158.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] overflow-x-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">Edit Jadwal</p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={editScheduleModal.onHide}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            <Flex className="p-6 flex-row! gap-6">
              <Flex className="gap-2">
                <Flex className="flex-row! items-center gap-2">
                  <div className="size-4 rounded-sm bg-brand-main" />

                  <p className="text-body2 text-title">Jadwal Sebelumnya</p>
                </Flex>

                <Flex className="flex-row! items-center gap-2">
                  <div className="size-4 rounded-sm bg-primary" />

                  <p className="text-body2 text-title">Jadwal Baru</p>
                </Flex>
              </Flex>

              <div className="w-px bg-border" />

              <Controller
                control={control}
                name="scheduled_at"
                render={({ field, fieldState: { error } }) => (
                  <Flex className="gap-5 flex-1">
                    <Flex className="gap-2">
                      <Flex
                        className={`flex-row! items-center justify-between p-3 border ${error ? "border-danger-primary bg-danger-main" : "border-border bg-white"} rounded-md text-title`}
                      >
                        <p className="text-body2">
                          {field.value
                            ? convertDateFormat(field.value, "dd LLLL yyyy")
                            : "Pilih Tanggal"}
                        </p>

                        <IconCalendarWeek size={16} />
                      </Flex>

                      {error && (
                        <Flex className="flex-row! items-center gap-1 text-danger-primary">
                          <IconAlertTriangle size={20} stroke={1.5} />

                          <p className="text-caption">{error.message}</p>
                        </Flex>
                      )}
                    </Flex>

                    <Flex className="border border-border rounded-md p-3">
                      <Calendar
                        value={field.value}
                        lastValue={new Date(editScheduleModal.lastSchedule)}
                        onSelect={(date) => field.onChange(date)}
                      />
                    </Flex>
                  </Flex>
                )}
              />
            </Flex>

            <Flex className="flex-row! items-center justify-between px-6 pt-4 pb-6 border-t border-t-border">
              <CustomButton label="Batalkan" size="md" mode="ghost" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={async () => {
                  editScheduleModal.onHide();
                  showToast("success", "Jadwal berhasil diubah!");
                }}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default EditScheduleModal;
