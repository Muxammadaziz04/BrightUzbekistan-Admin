import { forwardRef } from "react";
import RedButton from "../../../../components/Buttons/RedButton";
import SimpleButton from "../../../../components/Buttons/SimpleButton";
import ContentWrapper from "../../../../components/ContentWrapper";
import Flex from "../../../../components/Flex";
import Checkbox from "../../../../components/Form/Checkbox";
import { PlayIcon } from "../../../../components/icons";
import NewsList from "../../../../components/NewsList";


const Content = forwardRef(({}, ref) => {
    return (
        <ContentWrapper navbar={
            <div style={{ width: '100%', display: 'flex', gap: '20px', alignItems: 'center'}}>
                <Flex gap='20' style={{width: 'auto'}}>
                    <Checkbox label="Выбрать все" />
                    <RedButton>
                        Опубликовать
                    </RedButton>
                </Flex>
                <Flex gap='5' style={{width: 'auto'}}>
                <span ref={ref}><SimpleButton><PlayIcon /> Быстрый просмотр</SimpleButton></span>
                </Flex>
            </div>
        }>
            <NewsList news={Array(5).fill(null)}/>
        </ContentWrapper>
    );
})

export default Content;