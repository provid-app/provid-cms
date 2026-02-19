import type { LoginInput } from "@utils/validator/auth.validator";
import type { AddCategoryInput } from "@utils/validator/category.validator";
import type { EditMissionInput } from "@utils/validator/mission.validator";
import type {
  EditCoinValueInput,
  EditWithdrawInput,
} from "@utils/validator/reward.validator";
import type { AddSegmentInput } from "@utils/validator/segment.validator";
import type { FormType, MissionFormType } from "types/form.type";

export const loginForm: FormType<LoginInput> = {
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      required: false,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Kata Sandi",
      required: false,
    },
  ],
  defaultValues: {
    email: "",
    password: "",
  },
};

export const categoryForm: FormType<AddCategoryInput> = {
  inputs: [
    {
      type: "dropdown",
      name: "category",
      label: "Kategori",
      placeholder: "Pilih kategori",
      required: false,
    },
  ],
  defaultValues: {
    category: undefined,
  },
};

export const missionForm: MissionFormType = {
  inputs: [
    [
      {
        type: "horizontal",
        name: "first",
        required: false,
        inputs: [
          {
            type: "text",
            name: "mission_name",
            label: "Nama Misi",
            placeholder: "Masukan nama misi...",
            required: true,
          },
          {
            type: "text",
            name: "mission_desc",
            label: "Deskripsi",
            placeholder: "Masukan deskripsi...",
            required: true,
          },
        ],
      },
      {
        type: "horizontal",
        name: "second",
        required: false,
        inputs: [
          {
            type: "number",
            name: "reward",
            label: "Reward Coins",
            placeholder: "0",
            required: true,
          },
          {
            type: "dropdown",
            name: "segment_id",
            label: "Segmen",
            placeholder: "Pilih segmen",
            required: true,
            dropdown: [],
          },
        ],
      },
      {
        type: "textarea",
        name: "instruction",
        label: "Instruksi",
        placeholder: "Masukan instruksi...",
        required: true,
      },
    ],
    [
      {
        type: "radiobox",
        name: "mission_type",
        label: "Tipe Misi",
        required: true,
        radiobox: [
          {
            label: "Ads",
            subTitle:
              "Pengguna menyelesaikan misi dengan menonton iklan untuk mendapatkan reward.",
            value: "1",
          },
          {
            label: "App",
            subTitle:
              "Pengguna menyelesaikan misi dengan mengunduh dan menggunakan aplikasi tertentu.",
            value: "2",
          },
        ],
      },
      {
        type: "number",
        name: "mission_quantity",
        label: "Jumlah Misi",
        placeholder: "0",
        required: true,
      },
    ],
  ],
  defaultValues: {
    mission_name: "",
    mission_desc: "",
    reward: "",
    segment_id: undefined,
    instruction: "",
    mission_type: undefined,
    mission_quantity: "",
    with_schedule: false,
    schedule_at: undefined,
  },
};

export const editMissionForm: FormType<EditMissionInput> = {
  inputs: [
    {
      type: "horizontal",
      name: "first",
      required: false,
      inputs: [
        {
          type: "text",
          name: "mission_name",
          label: "Nama Misi",
          placeholder: "Masukan nama misi...",
          required: true,
        },
        {
          type: "text",
          name: "mission_desc",
          label: "Deskripsi",
          placeholder: "Masukan deskripsi...",
          required: true,
        },
      ],
    },
    {
      type: "horizontal",
      name: "second",
      required: false,
      inputs: [
        {
          type: "number",
          name: "reward",
          label: "Reward Coins",
          placeholder: "0",
          required: true,
          lock: true,
        },
        {
          type: "dropdown",
          name: "segment_id",
          label: "Segmen",
          placeholder: "Pilih segmen",
          required: true,
          dropdown: [],
        },
      ],
    },
    {
      type: "textarea",
      name: "instruction",
      label: "Instruksi",
      placeholder: "Masukan instruksi...",
      required: true,
    },
  ],
  defaultValues: {
    mission_name: "",
    mission_desc: "",
    reward: "",
    instruction: "",
    segment_id: undefined,
  },
};

export const addSegmentForm: FormType<AddSegmentInput> = {
  inputs: [
    {
      type: "text",
      name: "segment_name",
      label: "Nama Segmen",
      placeholder: "Masukan nama segmen...",
      required: true,
    },
    {
      type: "text",
      name: "description",
      label: "Deskripsi",
      placeholder: "Masukan deskripsi...",
      required: true,
    },
    {
      type: "radiobox",
      name: "layout",
      label: "Tipe Arah",
      required: true,
      radiobox: [
        {
          label: "Horizontal",
          subTitle:
            "Di beranda, menampilkan minimal 3 kartu dan maksimal 10 kartu.",
          value: "horizontal",
        },
        {
          label: "Vertical",
          subTitle:
            "Di beranda, menampilkan minimal 3 kartu dan maksimal 5 kartu.",
          value: "vertical",
        },
      ],
    },
  ],
  defaultValues: {
    segment_name: "",
    description: "",
    layout: undefined,
  },
};

export const editCoinValueForm: FormType<EditCoinValueInput> = {
  inputs: [
    {
      type: "currency",
      name: "coin_value",
      label: "Nilai Rupiah",
      placeholder: "0",
      required: true,
    },
  ],
  defaultValues: {
    coin_value: "",
  },
};

export const editWithdrawForm: FormType<EditWithdrawInput> = {
  inputs: [
    {
      type: "currency",
      name: "min_withdraw",
      label: "Minimum Penarikan",
      placeholder: "0",
      required: true,
    },
  ],
  defaultValues: {
    min_withdraw: "",
  },
};
