import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { IconX } from "@tabler/icons-react";
import FormList from "./FormList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCategoryValidator } from "@utils/validator/category.validator";
import { AnimatePresence, motion } from "motion/react";
import { useCategoryModal } from "@stores/modal.store";
import { useEffect } from "react";
import { categoryForm } from "@utils/constant/form.data";
import { useToast } from "@stores/page.store";

const AddCategoryModal = () => {
  const categoryModal = useCategoryModal();
  const showToast = useToast((state) => state.onShow);

  const { control, reset, handleSubmit } = useForm({
    resolver: zodResolver(addCategoryValidator),
    defaultValues: categoryModal.form?.defaultValues,
  });

  useEffect(() => {
    if (categoryModal.show) {
      reset(categoryModal.form?.defaultValues);
    } else {
      reset(categoryForm.defaultValues);
    }
  }, [categoryModal.show]);

  return (
    <AnimatePresence>
      {categoryModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col min-w-158.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="flex-row! items-center justify-between p-6 border-b border-b-border">
              <p className="text-body1 font-semibold text-title">
                {categoryModal.type === "edit" ? "Edit" : "Tambah"} Kategori
              </p>

              <button
                type="button"
                className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                onClick={() => {
                  categoryModal.onHide();
                }}
              >
                <IconX size={12} stroke={1.5} />
              </button>
            </Flex>

            {categoryModal.form && (
              <Flex className="p-6">
                <FormList
                  control={control}
                  listData={categoryModal.form.inputs}
                />
              </Flex>
            )}

            <Flex className="px-6 pb-6 pt-4 border-t border-t-border flex-row! items-center justify-between">
              <CustomButton label="Batalkan" mode="ghost" size="md" />

              <CustomButton
                label="Simpan"
                size="md"
                onClick={handleSubmit(() => {
                  categoryModal.onHide();
                  showToast(
                    "success",
                    `Kategori berhasil ${categoryModal.type === "edit" ? "diubah" : "ditambahkan"}!`,
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

export default AddCategoryModal;
