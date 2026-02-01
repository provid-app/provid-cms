import { IconSearch } from "@tabler/icons-react";
import Flex from "./Flex";
import { Controller, useForm } from "react-hook-form";

const SearchInput = () => {
  const { control } = useForm({
    defaultValues: {
      search: "",
    },
  });

  return (
    <Flex className="flex-row! items-center max-w-50 px-4 py-2 border border-border rounded-md gap-2">
      <Flex>
        <IconSearch size={16} color="#071220" />
      </Flex>

      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <input {...field} placeholder="Cari disini..." className="flex-1" />
        )}
      />
    </Flex>
  );
};

export default SearchInput;
