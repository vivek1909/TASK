import { FC, HTMLProps } from "react"

interface Props extends HTMLProps<HTMLInputElement> {
  maxLimit: string;
}

export const PrimaryRangeInput: FC<Props> = ({maxLimit, label, ...props}) => {
  return (
    <div>
      <label htmlFor={"range"}>
        {label}
      </label>
      <input type={"number"} id={label} min={"0"} max={maxLimit} {...props} />
    </div>
  )
}
