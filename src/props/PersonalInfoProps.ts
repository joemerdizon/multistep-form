import { PersonalInfoDto, PlanDto } from "../../libs/dto/order.dto"
import { Error } from "../../libs/types"

export type PersonalInfoProps = {
  data: PersonalInfoDto | undefined
  erros: string[]
}