export type OrderDto = {
  personalInfo: PersonalInfoDto,
  plan?: PlanDto
  addOns: AddOnDto[]
  total: number
  term?: string
  errors: string []
}

export type PlanDto = {
  type: string,
  price: number
}

export type AddOnDto = {
  name: string ,
  price: number
}

export type PersonalInfoDto = {
  name: string,
  email: string,
  phoneNumber: string
}