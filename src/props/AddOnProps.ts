export type AddOnProps = {
  id: number,
  text: string
  description: string
  price: number
  checked?: boolean
  onChecked?(text: string, price: number, checked: boolean): void
}