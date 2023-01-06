export type CustomInputProps = {
  id: string,
  label: string,
  placeHolder?: string,
  value: string,
  onChange(field: string, value: string): void
  hasError?: boolean 
}