import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditRewardModal } from "@stores/modal.store";
import { IconX } from "@tabler/icons-react";
import { editCoinValueValidator } from "@utils/validator/reward.validator";
import { AnimatePresence, motion } from "motion/react";
import { useForm, useWatch } from "react-hook-form";
import FormList from "./FormList";
import { useToast } from "@stores/page.store";
import { useEffect } from "react";
import { editCoinValueForm } from "@utils/constant/form.data";
import { convertNumberToCurrency } from "@utils/helper/converter";

const EditRewardModal = () => {
  const editRewardModal = useEditRewardModal();
  const showToast = useToast((state) => state.onShow);

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(editCoinValueValidator),
    defaultValues: editRewardModal.form?.defaultValues,
  });

  const coinValue = useWatch({
    control,
    name: "coin_value",
  });

  useEffect(() => {
    if (editRewardModal.show) {
      reset(editRewardModal.form?.defaultValues);
    } else {
      reset(editCoinValueForm.defaultValues);
    }
  }, [editRewardModal.show]);

  return (
    <AnimatePresence>
      {editRewardModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-158.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] overflow-x-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">
                Ubah nilai satu coin
              </p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={() => {
                  editRewardModal.onHide();
                }}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            {editRewardModal.form && (
              <Flex className="p-6 gap-4">
                <FormList
                  control={control}
                  listData={editRewardModal.form.inputs}
                />

                <Flex className="p-4 border border-border rounded-lg bg-second gap-4">
                  <p className="text-metadata font-semibold text-text">
                    PREVIEW
                  </p>

                  <Flex className="gap-2">
                    <p className="text-body2 text-text">
                      100 coin ={" "}
                      {convertNumberToCurrency(Number(coinValue) * 100)}
                    </p>

                    <p className="text-body2 text-text">
                      1.000 coin ={" "}
                      {convertNumberToCurrency(Number(coinValue) * 1000)}
                    </p>

                    <p className="text-body2 text-text">
                      10.000 coin ={" "}
                      {convertNumberToCurrency(Number(coinValue) * 10000)}
                    </p>
                  </Flex>
                </Flex>
              </Flex>
            )}

            <Flex className="px-6 pb-6 pt-4 border-t border-t-border flex-row! items-center justify-between">
              <CustomButton label="Batalkan" mode="ghost" size="md" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={handleSubmit(() => {
                  editRewardModal.onHide();
                  showToast("success", "Nilai coin berhasil diubah!");
                })}
              />
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default EditRewardModal;
