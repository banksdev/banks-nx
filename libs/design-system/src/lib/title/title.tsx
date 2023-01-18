import { Typography } from 'antd';

const { Title: AntTitle } = Typography;

type Props = React.PropsWithChildren & {
    className?: string
}

export const Title : React.FC<Props> = ({ children, ...props }) => {
    return (
        <AntTitle {...props}>
            {children}
        </AntTitle>
    )
}