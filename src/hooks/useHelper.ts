import { useConfirmationModal } from "@stores/modal.store";
import { useAuth, useLoadingButton, useToast } from "@stores/page.store";
import type { Dispatch, SetStateAction } from "react";
import type { SelectedType } from "types/page.type";

const useHelper = () => {
  const loadingButton = useLoadingButton();
  const showToast = useToast((state) => state.onShow);
  const hideConfirmationModal = useConfirmationModal((state) => state.onHide);
  const auth = useAuth();

  const onMutate = () => loadingButton.onShow();

  const onSettled = () => loadingButton.onHide();

  const onSuccess = (message: string) => showToast("success", message);

  const onError = (message: string) => showToast("failed", message);

  const onSelectAll = (
    selected: SelectedType[],
    setSelected: Dispatch<SetStateAction<SelectedType[]>>,
    data: any[],
    nameLabel: string,
  ) => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(
        data.map((item) => ({
          id: item.id,
          name: item[nameLabel],
        })),
      );
    }
  };

  const resetSelected = (
    selected: SelectedType[],
    setSelected: Dispatch<SetStateAction<SelectedType[]>>,
  ) => {
    if (selected.length > 0) setSelected([]);
  };

  return {
    auth,
    hideConfirmationModal,
    onMutate,
    onSettled,
    onSuccess,
    onError,
    onSelectAll,
    resetSelected,
  };
};

export default useHelper;
