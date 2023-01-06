export type PlanProps = {
  imgSrc?: string
  text: string
  price: number
  noOfFreeMonths: number
  showFreeMonths: boolean
  active: boolean
  onClicked?(planType: string, price: number): void
}