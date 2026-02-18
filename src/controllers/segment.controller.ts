import useHelper from "@hooks/useHelper";
import { useSegmentModal } from "@stores/modal.store";
import { addSegmentForm } from "@utils/constant/form.data";
// import useSegmentModel from "@models/segment.model";
import { generateSegment } from "@utils/data/segment.dummy";
import { useState } from "react";
import type { DropdownType } from "types/form.type";
import type { SelectedType, TableBodyType } from "types/page.type";
// import type { ParamsType } from "types/res.type";

const useSegmentController = () => {
  const showSegmentModal = useSegmentModal((state) => state.onShow);

  // const { useGetSegments } = useSegmentModel();

  const {
    // onError,
    onSelectAll,
    resetSelected,
  } = useHelper();

  const useGetSegmentDropdown = () => {
    const segment = generateSegment();

    let finalData: DropdownType[] = [];

    finalData = segment.map((item) => ({
      label: item.segment_name,
      value: item.id.toString(),
    }));

    return {
      finalData,
    };
  };

  const useGetSegmentsService = () => {
    const [selected, setSelected] = useState<SelectedType[]>([]);
    // const [metaData, setMetaData] = useState<ParamsType>({
    //   page: 1,
    //   sortBy: "",
    //   sortOrder: "",
    // });
    // const [search, setSearch] = useState("");

    // const { data, isLoading, isError, error } = useGetSegments(
    //   metaData.page,
    //   search,
    //   metaData.sortBy,
    //   metaData.sortOrder,
    // );

    const segment = generateSegment();

    let finalData: TableBodyType[] = [];

    // if (!isLoading) {
    //   if (isError && error) {
    //     onError(error.message);
    //   } else if (data && data.data) {
    finalData = segment.map((item) => ({
      row: [
        {
          type: "text",
          label: item.segment_name,
        },
        {
          type: "text",
          label: item.description,
        },
        {
          type: "text",
          label: item.layout,
        },
      ],
      action: [
        {
          type: "custom",
          label: "Edit Segmen",
          onClick: () => {
            resetSelected(selected, setSelected);
            showSegmentModal(
              {
                ...addSegmentForm,
                defaultValues: {
                  segment_name: item.segment_name,
                  description: item.description,
                  layout: addSegmentForm.inputs
                    .find((input) => input.name === "layout")!
                    .radiobox?.find((box) => box.value === item.layout),
                },
              },
              "edit",
            );
          },
        },
      ],
      isSelected: selected.some((tmp) => tmp.id === item.id),
      onSelect: () =>
        setSelected((prev) => {
          const checkIsExist = prev.some((tmp) => tmp.id === item.id);

          if (checkIsExist) return prev.filter((dat) => dat.id !== item.id);
          return [
            ...prev,
            {
              id: item.id,
              name: item.segment_name,
            },
          ];
        }),
    }));
    // }
    // }

    return {
      finalData,
      selected,
      // metaData,
      // setMetaData,
      // setSearch,
      // onSelectAll: () =>
      //   onSelectAll(
      //     selected,
      //     setSelected,
      //     data?.data?.items ?? [],
      //     "segment_name",
      //   ),
      onSelectAll: () =>
        onSelectAll(selected, setSelected, segment ?? [], "segment_name"),
    };
  };

  return {
    useGetSegmentDropdown,
    useGetSegmentsService,
  };
};

export default useSegmentController;
