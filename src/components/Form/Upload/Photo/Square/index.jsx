import { useState } from 'react';
import Flex from '../../../../Flex';
import Button from '../../Button';
import cls from './Square.module.scss'

const SquarePhotoUpload = ({ register }) => {
    const [selectedfile, setSelectedFile] = useState({})

    const handleChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setSelectedFile({name: file.name, img: file})
        }
    }

    return (
        <Flex gap='10' direction='column'>
            <span className={cls.text}>Фото к зоголовку</span>
            <div className={cls.box}>
                <div className={cls.box__preview}>
                    {
                        !selectedfile?.img ? (
                            <span>Нет фото</span>
                        ) : (
                            <img src={URL.createObjectURL(selectedfile.img)} alt={selectedfile?.name || ''} /> 
                        )
                    }
                </div>
                <label>
                    <input type="file" accept='image/png, image/jpeg' className={cls.input} {...register} onChange={handleChange}  />
                    <Button />
                    <Flex direction='column' gap='2'>
                        <p className={cls.box__title}>Загрузить фото</p>
                        <span className={cls.box__name}>{selectedfile.name}</span>
                    </Flex>
                </label>
            </div>
        </Flex>
    );
}

export default SquarePhotoUpload;
