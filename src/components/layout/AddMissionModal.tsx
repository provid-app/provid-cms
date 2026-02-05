import { CustomButton, Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useMissionModal } from "@stores/modal.store";
import { IconCircleCheck, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import FormList from "./FormList";
import { useForm } from "react-hook-form";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { missionForm } from "@utils/constant/form.data";
import { Coin } from "@assets/index";
import { convertNumberFormat } from "@utils/helper/converter";

const AddMissionModal = () => {
  const [currPage, setCurrPage] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);

  const missionModal = useMissionModal();

  const { control, reset, getValues } = useForm({
    defaultValues: missionModal.form?.defaultValues,
  });

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTo({ left: 1069 * currPage, behavior: "smooth" });
    }
  }, [currPage]);

  useEffect(() => {
    if (missionModal.show) {
      reset(missionModal.form?.defaultValues);
    } else {
      reset(missionForm.defaultValues);
    }
  }, [missionModal.show]);

  return (
    <AnimatePresence>
      {missionModal.show && (
        <ModalContainer>
          <motion.div
            className="flex flex-col w-267.25 h-161.5 bg-white rounded-lg border border-border shadow-[0_1px_3px_0_rgba(0, 0, 0, 0.1)] overflow-x-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Flex className="p-6 border-b border-b-border gap-4">
              <Flex className="flex-row! items-center justify-between">
                <p className="text-body1 font-semibold text-title">
                  Tambah Misi
                </p>

                <button
                  type="button"
                  className="flex size-6 rounded-md items-center justify-center text-title cursor-pointer bg-white hover:bg-border transition-colors duration-300"
                  onClick={() => {
                    setCurrPage(0);
                    missionModal.onHide();
                  }}
                >
                  <IconX size={12} stroke={1.5} />
                </button>
              </Flex>

              <div className="grid grid-cols-3 gap-2">
                <Flex className="gap-2">
                  <Flex className="h-1 rounded-full bg-border">
                    <motion.div
                      className="h-1 rounded-full bg-primary"
                      initial={{
                        width: 0,
                      }}
                      animate={{ width: currPage >= 0 ? "100%" : 0 }}
                    />
                  </Flex>

                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ color: "#646b74" }}
                    animate={{ color: currPage >= 0 ? "#51a933" : "#646b74" }}
                  >
                    <AnimatePresence mode="popLayout">
                      {currPage >= 0 && (
                        <motion.div
                          className="text-primary"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <IconCircleCheck size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.p
                      className="text-body2"
                      initial={{ fontWeight: 400 }}
                      animate={{ fontWeight: currPage >= 0 ? 600 : 400 }}
                    >
                      Detail Informasi
                    </motion.p>
                  </motion.div>
                </Flex>

                <Flex className="gap-2">
                  <Flex className="h-1 rounded-full bg-border">
                    <motion.div
                      className="h-1 rounded-full bg-primary"
                      initial={{
                        width: 0,
                      }}
                      animate={{ width: currPage >= 1 ? "100%" : 0 }}
                    />
                  </Flex>

                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ color: "#646b74" }}
                    animate={{ color: currPage >= 1 ? "#51a933" : "#646b74" }}
                  >
                    <AnimatePresence mode="popLayout">
                      {currPage >= 1 && (
                        <motion.div
                          className="text-primary"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <IconCircleCheck size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.p
                      className="text-body2"
                      initial={{ fontWeight: 400 }}
                      animate={{ fontWeight: currPage >= 1 ? 600 : 400 }}
                    >
                      Pengaturan Misi
                    </motion.p>
                  </motion.div>
                </Flex>

                <Flex className="gap-2">
                  <Flex className="h-1 rounded-full bg-border">
                    <motion.div
                      className="h-1 rounded-full bg-primary"
                      initial={{
                        width: 0,
                      }}
                      animate={{ width: currPage >= 2 ? "100%" : 0 }}
                    />
                  </Flex>

                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ color: "#646b74" }}
                    animate={{ color: currPage >= 2 ? "#51a933" : "#646b74" }}
                  >
                    <AnimatePresence mode="popLayout">
                      {currPage >= 2 && (
                        <motion.div
                          className="text-primary"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <IconCircleCheck size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.p
                      className="text-body2"
                      initial={{ fontWeight: 400 }}
                      animate={{ fontWeight: currPage >= 2 ? 600 : 400 }}
                    >
                      Review
                    </motion.p>
                  </motion.div>
                </Flex>
              </div>
            </Flex>

            {missionModal.form && (
              <ScrollArea.Root className="relative w-267.25 overflow-hidden">
                <ScrollArea.Viewport ref={boxRef} className="w-full h-113.25">
                  <Flex className="flex-row!">
                    {missionModal.form.inputs.map((form, index) => (
                      <Flex
                        key={index.toString()}
                        className="shrink-0 p-6 w-267.25"
                      >
                        <FormList control={control} listData={form} />
                      </Flex>
                    ))}

                    <Flex className="shrink-0 p-6 w-267.25 flex-row! gap-6">
                      <Flex className="flex-1 bg-second rounded-lg justify-center px-8">
                        <Flex className="bg-white p-6 gap-4 rounded-xl">
                          <Flex className="gap-2">
                            <p className="text-metadata">
                              {getValues().segment_id?.label.toUpperCase() ??
                                ""}
                            </p>

                            <p className="text-body2 font-semibold text-title">
                              {getValues().mission_name}
                            </p>

                            <p className="text-body2 text-text">
                              {getValues().mission_desc}
                            </p>

                            <p className="text-caption text-text">
                              {getValues().mission_quantity}{" "}
                              {getValues().mission_type?.label.toLowerCase() ??
                                ""}{" "}
                              <span>•</span> 15 detik
                            </p>

                            <Flex className="flex-row! items-center gap-1">
                              <Coin width={16} height={16} />

                              <p className="text-body2 font-semibold text-title">
                                {convertNumberFormat(
                                  Number(getValues().reward),
                                )}
                              </p>
                            </Flex>
                          </Flex>

                          <div className="h-px bg-border" />

                          <p className="text-body2 text-text">
                            {getValues().instruction}
                          </p>
                        </Flex>
                      </Flex>

                      <Flex className="flex-1"></Flex>
                    </Flex>
                  </Flex>
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar
                  orientation="vertical"
                  className="absolute top-0 right-0 flex w-2 h-full"
                >
                  <ScrollArea.Thumb className="flex-1 bg-neutral-300 rounded-full" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            )}

            <Flex className="flex-row! items-center justify-between px-6 pt-4 pb-6 border-t border-t-border">
              <CustomButton label="Batalkan" size="md" mode="ghost" />

              <Flex className="flex-row! items-center gap-2">
                {currPage === 2 && (
                  <CustomButton
                    label="Simpan sebagai draf"
                    size="md"
                    mode="outline"
                  />
                )}

                <CustomButton
                  label={currPage === 2 ? "Terbitkan" : "Lanjutkan"}
                  size="md"
                  onClick={() => {
                    if (currPage < 2) {
                      setCurrPage((prev) => prev + 1);
                    }
                  }}
                />
              </Flex>
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default AddMissionModal;
