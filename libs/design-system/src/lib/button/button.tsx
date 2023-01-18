import { Button as AntButton, ButtonProps } from "antd"

export const Button : React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <AntButton {...props}>
            {children}
        </AntButton>
    )
}