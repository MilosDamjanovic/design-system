export interface OptionItem {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: string;
  selectedLabel?: string;
  description?: string;
  labelColor?: string;
  trailingIcon?: {
    name: string;
    onClick: () => void;
  };
}
