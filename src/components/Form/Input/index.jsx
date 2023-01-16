import cls from './Input.module.scss'

const Input = ({placeholder, type = 'text', label, ...other}) => {
    return (
        <label className={cls.label} {...other}>
            <input type={type} className={cls.input} placeholder={placeholder} />
            <span className={cls.label__text}>{label}</span>
        </label>
    );
}

export default Input;
