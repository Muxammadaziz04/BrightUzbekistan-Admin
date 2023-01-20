import { MailIcon } from '../../icons';
import cls from './MessageButton.module.scss'

const MessageButton = ({className, active, ...other}) => {
    return (
        <button className={`${cls.btn} ${className ? className : ''} ${active ? cls.active : ''}`} {...other}>
            <MailIcon />
        </button>
    );
}

export default MessageButton;
