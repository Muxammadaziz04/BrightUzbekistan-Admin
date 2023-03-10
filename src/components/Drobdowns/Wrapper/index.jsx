import cls from './Wrapper.module.scss'

const Wrapper = ({children, top = '', right = '', bottom = '', left = ''}) => {
    const style = {
        [top && 'top']: top,
        [right && 'right']: right,
        [bottom && 'bottom']: bottom,
        [left && 'left']: left,
        // maxHeight: '100%',
        // overflowY: 'auto'
    }
    return (
        <div className={cls.wrapper} style={style}>
            {children}
        </div>
    );
}

export default Wrapper;
