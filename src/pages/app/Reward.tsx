import { Flex } from "@components/custom";
import RewardCoinBox from "@components/custom/RewardCoinBox";
import { RewardPrediction } from "@components/layout";
import { useEditRewardModal, useEditWithdrawModal } from "@stores/modal.store";
import { editCoinValueForm, editWithdrawForm } from "@utils/constant/form.data";

const Reward = () => {
  const showEditRewardModal = useEditRewardModal((state) => state.onShow);
  const showEditWithdrawModal = useEditWithdrawModal((state) => state.onShow);

  return (
    <Flex className="flex-row! grow basis-0 p-4 gap-4 overflow-y-auto">
      <Flex className="flex-1 gap-4">
        <RewardCoinBox
          title="Nilai Satu Coin"
          value={1}
          withFraction
          onEdit={() =>
            showEditRewardModal({
              ...editCoinValueForm,
              defaultValues: {
                coin_value: "1",
              },
            })
          }
        />

        <RewardCoinBox
          title="Aturan Minimum Penarikan"
          value={10000}
          onEdit={() =>
            showEditWithdrawModal({
              ...editWithdrawForm,
              defaultValues: {
                min_withdraw: "10000",
              },
            })
          }
        />
      </Flex>

      <div className="w-px bg-border" />

      <Flex>
        <RewardPrediction coinValue={1} />
      </Flex>
    </Flex>
  );
};

export default Reward;
