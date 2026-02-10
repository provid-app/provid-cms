import { Flex } from "@components/custom";
import ModalContainer from "@containers/ModalContainer";
import { useMissionDetailModal } from "@stores/modal.store";
import {
  convertDateFormat,
  convertNumberFormat,
} from "@utils/helper/converter";
import { AnimatePresence, motion } from "motion/react";
import ButtonFlex from "./ButtonFlex";
import {
  IconCalendarWeek,
  IconCircleDashed,
  IconSend,
  IconX,
} from "@tabler/icons-react";
import { Coin } from "@assets/index";

const MissionDetailModal = () => {
  const missionDetailModal = useMissionDetailModal();

  return (
    <AnimatePresence>
      {missionDetailModal.show && (
        <ModalContainer layout="right">
          <motion.div
            className="flex flex-col bg-white h-full p-6 gap-4 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 643 }}
            exit={{ width: 0 }}
          >
            <Flex className="flex-row! justify justify-between">
              <Flex className="gap-1">
                <p className="text-body1 font-semibold text-title truncate">
                  {missionDetailModal.data?.mission_name ?? ""}
                </p>

                <p className="text-body2 text-text truncate">
                  Dibuat tanggal{" "}
                  {convertDateFormat(
                    new Date(missionDetailModal.data?.created_at ?? ""),
                    "LLL d, yyyy",
                  )}
                </p>
              </Flex>

              <ButtonFlex
                className="size-6 items-center justify-center rounded-md text-title hover:bg-border transition-colors duration-300"
                onClick={missionDetailModal.onHide}
              >
                <IconX size={12} stroke={1.5} />
              </ButtonFlex>
            </Flex>

            <div className="h-px bg-border" />

            <Flex className="gap-3">
              <Flex className="flex-row! items-center">
                <Flex className="w-37.5">
                  <p className="text-body2 font-semibold text-title">Status</p>
                </Flex>

                <Flex
                  className={`flex-row! items-center px-2 py-1 border rounded-[5px] gap-2 ${missionDetailModal.data ? (missionDetailModal.data.mission_status === "Diterbitkan" ? "bg-brand-main border-brand-second text-primary" : missionDetailModal.data.mission_status === "Terjadwalkan" ? "bg-blue-main border-blue-second text-blue-primary" : "bg-second border-border text-text") : ""}`}
                >
                  {missionDetailModal.data ? (
                    missionDetailModal.data.mission_status === "Diterbitkan" ? (
                      <IconSend size={16} stroke={1.5} />
                    ) : missionDetailModal.data.mission_status ===
                      "Terjadwalkan" ? (
                      <IconCalendarWeek size={16} stroke={1.5} />
                    ) : (
                      <IconCircleDashed size={16} stroke={1.5} />
                    )
                  ) : null}

                  <p className="text-body2 font-semibold">
                    {missionDetailModal.data?.mission_status ?? ""}
                  </p>
                </Flex>
              </Flex>

              <Flex className="flex-row! items-center">
                <Flex className="w-37.5">
                  <p className="text-body2 font-semibold text-title">
                    Tanggal Publikasi
                  </p>
                </Flex>

                <p className="text-body2 text-title">
                  {convertDateFormat(
                    new Date(missionDetailModal.data?.publication_date ?? ""),
                    "LLL d, yyyy",
                  )}
                </p>
              </Flex>

              <Flex className="flex-row! items-center">
                <Flex className="w-37.5">
                  <p className="text-body2 font-semibold text-title">Segmen</p>
                </Flex>

                <Flex className="px-2.5 py-0.5 rounded-md bg-second">
                  <p className="text-caption font-semibold text-text">
                    {missionDetailModal.data?.segment.segmet ?? ""}
                  </p>
                </Flex>
              </Flex>

              <Flex className="flex-row! items-start">
                <Flex className="w-37.5 shrink-0">
                  <p className="text-body2 font-semibold text-title">
                    Deskripsi
                  </p>
                </Flex>

                <p className="text-body2 text-title">
                  {missionDetailModal.data?.mission_desc ?? ""}
                </p>
              </Flex>

              <Flex className="flex-row! items-start">
                <Flex className="w-37.5 shrink-0">
                  <p className="text-body2 font-semibold text-title">Reward</p>
                </Flex>

                <Flex className="flex-row! items-center gap-2">
                  <Flex className="size-4">
                    <Coin width="100%" height="100%" />
                  </Flex>

                  <p className="text-body2 text-title">
                    {convertNumberFormat(missionDetailModal.data?.reward ?? 0)}
                  </p>
                </Flex>
              </Flex>

              <Flex className="flex-row! items-center">
                <Flex className="w-37.5 shrink-0">
                  <p className="text-body2 font-semibold text-title">Task</p>
                </Flex>

                <p className="text-body2 text-title">
                  {missionDetailModal.data?.task ?? ""}
                </p>
              </Flex>

              <Flex className="flex-row! items-start">
                <Flex className="w-37.5 shrink-0">
                  <p className="text-body2 font-semibold text-title">
                    Instruksi
                  </p>
                </Flex>

                <p className="text-body2 text-title whitespace-pre-line">
                  {missionDetailModal.data?.instruction ?? ""}
                </p>
              </Flex>
            </Flex>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default MissionDetailModal;
