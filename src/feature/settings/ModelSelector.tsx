import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useContext, useEffect } from 'react';
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';
import { modelOptions } from '../../utils/settings';

type Props = {
  defaultValue?: string;
};
export default function ModelSelector({ defaultValue }: Props) {
  const { setGlobalSettings } = useContext(GlobalSettingsContext);
  const _defaultValue = defaultValue || modelOptions[0].value;

  useEffect(() => {
    setGlobalSettings((prev) => ({ ...prev, modelId: _defaultValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_defaultValue]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    console.log(e.target.value);
    setGlobalSettings((prev) => ({ ...prev, modelId: e.target.value }));
  };

  return (
    <FormControl>
      <InputLabel id="model-selector-label">Model</InputLabel>
      <Select
        id="model-selector"
        label="Model"
        labelId="model-selector-label"
        size="small"
        defaultValue={_defaultValue}
        onChange={handleChange}
      >
        {modelOptions.map((model, index) => (
          <MenuItem value={model.value} key={`${model.value}${index}`}>
            {model.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
