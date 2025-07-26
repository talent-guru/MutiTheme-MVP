"use client"

import * as ReactAria from "react-aria-components"
import {
  UiSelectButton,
  UiSelectDialog,
  UiSelectIcon,
  UiCheckbox,
  UiCheckboxBox,
  UiCheckboxIcon,
  UiCheckboxLabel,
} from "../../../../../components/ui"
import { UiDialogTrigger } from "../../../../../components/index"

export const TypeFilter: React.FC<{
  types: Record<string, string>
  type?: string[]
  setQueryParams: (name: string, value: string[]) => void
}> = ({ type, types, setQueryParams }) => (
  <UiDialogTrigger>
    <UiSelectButton className="w-35">
      <span>Type</span>
      <UiSelectIcon />
    </UiSelectButton>
    <ReactAria.Popover className="w-64" placement="bottom left">
      <UiSelectDialog>
        <ReactAria.CheckboxGroup
          value={type ?? []}
          onChange={(value) => {
            setQueryParams("type", value)
          }}
          className="max-h-50 overflow-scroll"
        >
          {Object.entries(types).map(([key, value]) => (
            <UiCheckbox value={key} className="p-4" key={key}>
              <UiCheckboxBox>
                <UiCheckboxIcon />
              </UiCheckboxBox>
              <UiCheckboxLabel>{value}</UiCheckboxLabel>
            </UiCheckbox>
          ))}
        </ReactAria.CheckboxGroup>
      </UiSelectDialog>
    </ReactAria.Popover>
  </UiDialogTrigger>
)
