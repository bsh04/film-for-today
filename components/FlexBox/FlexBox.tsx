import React, {FC} from 'react';

interface FlexBoxProps {
    flex?: boolean
    alignItems?: "center" | "flex-end" | "flex-start"
    justifyContent?: "center" | "flex-end" | 'flex-start' | "space-between" | "space-around"
    direction?: "column" | "row"
    className?: string
    mr?: number
    ml?: number
    mb?: number
    mt?: number
}

export const FlexBox: FC<FlexBoxProps> = ({
  alignItems,
  flex = true,
  justifyContent,
  className,
  direction,
  mb,
  ml,
  mr,
  mt,
  children
}) => (
    <div
        style={{
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr,
            display: flex ? "flex" : "unset",
            justifyContent,
            alignItems,
            flexDirection: direction
        }}
        className={className}
    >
        {children}
    </div>
)
