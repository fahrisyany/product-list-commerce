import React from 'react'
import './DropdownCustom.scss'
import { Dropdown } from 'react-bootstrap'

export type DropdownValueType = "lowest" | "highest" | "popular"

interface DropdownCustomInterface {
    sortValue: string,
    handleSortItems: (value: DropdownValueType) => void
}

const dropdownValues = [
    {
        value: "popular",
        label: "Most Popular"
    },
    {
        value: "highest",
        label: "Highest Price"
    },
    {
        value: "lowest",
        label: "Lowest Price"
    }
]

const DropdownCustom: React.FC<DropdownCustomInterface> = ({ sortValue, handleSortItems }: DropdownCustomInterface) => {

    const displayDropdownLabel = (): string[] => (
        dropdownValues.map(el => (el.value === sortValue ? el.label : ""))
    )

    return (
        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
                {displayDropdownLabel()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    dropdownValues.map((el, i) => {
                        if (el.value !== sortValue) {
                            return <Dropdown.Item key={i} onSelect={() => handleSortItems(el.value as DropdownValueType)}>{el.label}</Dropdown.Item>
                        }
                        return null
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownCustom