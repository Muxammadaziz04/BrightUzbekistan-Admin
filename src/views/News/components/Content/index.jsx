import RedButton from '../../../../components/Buttons/RedButton'
import RoundedButton from '../../../../components/Buttons/RoundedButton';
import SimpleButton from '../../../../components/Buttons/SimpleButton';
import Flex from '../../../../components/Flex';
import BtnGroup from '../../../../components/Form/BtnGroup';
import Input from '../../../../components/Form/Input';
import RichText from '../../../../components/Form/RichText';
import TextArea from '../../../../components/Form/TextArea';
import SquarePhotoUpload from '../../../../components/Form/Upload/Photo/Square';
import { BookIcon, PlayIcon } from '../../../../components/icons';
import useGetSize from '../../../../hooks/useGetSize';
import cls from './Content.module.scss'

const Content = () => {
    const { height } = useGetSize('news_nav')

    return (
        <div className={cls.content}>
            <div className={cls.content__group} id='news_nav'>
                <Flex gap='5' rowCount='2' alignItems='center'>
                    <RedButton>Сохранить</RedButton>
                    <RoundedButton><BookIcon /> Избранные</RoundedButton>
                </Flex>
                <SimpleButton><PlayIcon /> Быстрый просмотр</SimpleButton>
            </div>
            <div className={cls.content__form__wrap} style={{ height: `calc(100% - ${height}px)` }}>
                <form className={cls.content__form}>
                    <BtnGroup>
                        <button>O‘zbekcha</button>
                        <button>Ўзбекча</button>
                        <button>Русский</button>
                        <button>English</button>
                    </BtnGroup>
                    <div className={cls.content__form__wrapper}>
                        <Flex direction='column' gap='20'>
                            <Input placeholder='Загаловок новости' label='Загаловок новости' />
                            <TextArea placeholder='Краткое описание' label='Краткое описание' />
                        </Flex>
                        <SquarePhotoUpload />
                    </div>
                    <RichText />
                </form>
            </div>
        </div>
    );
}

export default Content;