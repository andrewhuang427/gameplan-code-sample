import { SportType as SportTypeEnum } from "@/__generated__/graphql";
import { Select, SelectProps } from "@mantine/core";

type SportType = {
  label: string;
  value: SportTypeEnum;
};

const sports: SportType[] = [
  { label: "Baseball", value: SportTypeEnum.Baseball },
  { label: "Basketball", value: SportTypeEnum.Basketball },
  { label: "Soccer", value: SportTypeEnum.Soccer },
];

export const SportSelector = (props: SelectProps) => {
  return <Select {...props} data={sports} />;
};
