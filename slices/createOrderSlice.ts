import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddOnDto, PersonalInfoDto, OrderDto, PlanDto } from '../libs/dto/order.dto'

const initialState: OrderDto = {
  personalInfo: {
    name: '',
    email: '',
    phoneNumber: ''
  },
  addOns: [],
  total: 0,
  errors: []
}


export const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    updatePersonalInfo: (state,  action: PayloadAction<PersonalInfoDto>) => {
      state.personalInfo = action.payload;
    },
    addPlan: (state, action: PayloadAction<PlanDto>) => {
      state.plan = action.payload;
    },
    addAddOn: (state, action: PayloadAction<AddOnDto>) => {
      state.addOns.push(action.payload)
    },
    updateAddOns: (state, action: PayloadAction<AddOnDto[]>) => {
      state.addOns = action.payload
    },
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    addError :(state, action: PayloadAction<string>) => {
      state.errors.push(action.payload)
    },
    updateErrors: (state, action: PayloadAction<string[]>) => {
      state.errors = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updatePersonalInfo, addPlan, addAddOn, changeTerm, updateAddOns, addError, updateErrors } = createOrderSlice.actions

export default createOrderSlice.reducer