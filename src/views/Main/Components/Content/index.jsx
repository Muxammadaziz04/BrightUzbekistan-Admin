import GreyButton from '../../../../components/Buttons/GreyButton';
import Flex from '../../../../components/Flex';
import Checkbox from '../../../../components/Form/Checkbox';
import { ArchiveIcon, DeleteIcon } from '../../../../components/icons';
import NewsList from '../../../../components/NewsList';
import useGetSize from '../../../../hooks/useGetSize';
import cls from './Content.module.scss'

const Content = () => {
    const { height } = useGetSize('content-menu')

    return (
        <div className={cls.content}>
            <div className={cls.content__menu} id='content-menu'>
                <Checkbox label='Выбрать все' />
                <Flex gap='5'>
                    <GreyButton>
                        <DeleteIcon />
                        Удалить
                    </GreyButton>
                    <GreyButton>
                        <ArchiveIcon />
                        В архив
                    </GreyButton>
                </Flex>
            </div>
            <div className={cls.content__list__wrapper} style={{ maxHeight: `calc(100% - ${height}px)` }}>
                <NewsList news={Array(10).fill(null)} />
            </div>
        </div>
    );
}

export default Content;