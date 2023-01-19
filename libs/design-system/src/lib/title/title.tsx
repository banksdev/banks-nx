import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

const { Title: AntTitle } = Typography;

export const Title : React.FC<TitleProps> = ({ children, ...props }) => {
    return (
        <AntTitle {...props} >
            {children}
        </AntTitle>
    )
}