import { Combobox, InputBase, Loader, useCombobox } from "@mantine/core";
import { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

type Props = {
  label: string;
  onChange: (newAddress: string) => void;
  defaultValue: string;
  error?: any;
};

export const AddressAutocomplete = ({
  label,
  error,
  onChange,
  defaultValue,
}: Props) => {
  const [input, setInput] = useState<string>(defaultValue);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => {},
  });
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: "AIzaSyBKd7NPUeR4065O2jKMhwbGXGS6hs06-bs",
      debounce: 2000,
    });

  useEffect(() => {
    // open dropdown when there is new set of place predictions
    if (placePredictions.length > 0) {
      combobox.toggleDropdown();
    }
  }, [placePredictions]);

  useEffect(() => {
    onChange(input);
  }, [input]);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setInput(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          error={error}
          label={label}
          onChange={(event) => {
            setInput(event.target.value);
            getPlacePredictions({ input: event.target.value });
          }}
          rightSection={
            isPlacePredictionsLoading ? <Loader size="xs" /> : undefined
          }
          value={input}
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          {placePredictions.map((prediction, index) => {
            return (
              <Combobox.Option value={prediction.description} key={index}>
                {prediction.description}
              </Combobox.Option>
            );
          })}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
