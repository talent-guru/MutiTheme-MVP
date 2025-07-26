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

export const CollectionFilter: React.FC<{
  collections: Record<string, string>
  collection?: string[]
  setQueryParams: (name: string, value: string[]) => void
}> = ({ collection, collections, setQueryParams }) => (
  <UiDialogTrigger>
    <UiSelectButton className="w-35">
      <span>Collection</span>
      <UiSelectIcon />
    </UiSelectButton>
    <ReactAria.Popover className="w-64" placement="bottom left">
      <UiSelectDialog>
        <ReactAria.CheckboxGroup
          value={collection ?? []}
          onChange={(value) => {
            setQueryParams("collection", value)
          }}
          className="max-h-50 overflow-scroll"
        >
          {Object.entries(collections).map(([key, value]) => (
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
