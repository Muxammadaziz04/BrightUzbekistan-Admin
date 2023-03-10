import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import RedButton from "../../../../components/Buttons/RedButton";
import RoundedButton from "../../../../components/Buttons/RoundedButton";
import ContentWrapper from "../../../../components/ContentWrapper";
import Input from "../../../../components/Form/Input";
import Circle from "../../../../components/Form/Upload/Photo/Circle";
import RoleInfo from "../../../../components/RoleInfo";
import InputMask from "../../../../components/Form/InputMask";
import Select from "../../../../components/Form/Select";
import { roles, regions } from "./data";
import cls from './Content.module.scss'
import Loader from "../../../../components/Loader";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import { createAdmin } from "../../../../services/admin";

const Content = ({
    useForm = {}
}) => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const { register, formState: { isValid }, handleSubmit, setValue, control } = useForm

    const sendForm = async (data) => {
        try {
            setLoading(true)
            data.phoneNumber = data?.phoneNumber?.replace(/[^0-9]+/g, '')
            if(!data.role) {
                toast.error('Вы должны выбрать роль !')
                return 
            } else if (data.permissions?.length < 1){
                toast.error('Пользователь должен иметь минимум 1 разрешение !')
                return
            } else if(data.phoneNumber?.length < 12) {
                toast.error('Вы ввели неправильный фотмат номера !')
            } else if(data.password !== data.repeat_password){
                toast.error('Пароли не совпадают.')
            } else {
                // alert(JSON.stringify(data, null, 4))
                const fd =new FormData()
                fd.append('fullName', data?.fullName)
                fd.append('city', data?.city)
                fd.append('education', data?.education)
                fd.append('login', data?.login)
                fd.append('phone', data?.phone)
                fd.append('password', data?.password)
                fd.append('position', data?.role)
                fd.append('permissions', JSON.stringify(data?.permissions))
                fd.append('avatar', data?.avatar)
        
                const res = await createAdmin(fd)
                console.log(res);
                if(res?.error) {
                    toast.error(res?.message)
                } else {
                    setOpenModal(true)
                }
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }

    }

    const redirectFunc = () => {
        navigate('/users', {replace: true})
    }

    return (
        <ContentWrapper navbar={<div style={{ width: '100%', display: 'flex', gap: '5px', alignItems: 'center' }}>
            <RedButton disabled={!isValid} onClick={handleSubmit(sendForm)}>Сохранить</RedButton>
            <RoundedButton onClick={() => navigate('/users', { replace: true })}>Отмена</RoundedButton>
        </div>}>

            <Toaster />
            {loading && <Loader text="Идет создание пользователя, пожалуйста подождите..." />}
            {openModal && <Modal title={'Пользователь успешно создан!'} onClose={redirectFunc} onOk={redirectFunc} />}

            <div className={cls.box}>   
                <div>
                    <Circle label="Аватарка" setValue={setValue} />
                </div>
                <div className={cls.form}>{ }
                    <Input
                        label="ФИО"
                        placeholder="Фамилия Имя Отчество"
                        name="fullName"
                        register={{ ...register('fullName', { required: true }) }}
                    />
                    <div className={cls.form__auth}>
                        <Select
                            label='Город'
                            placeholder="Места жительства"
                            name='city'
                            control={control}
                            options={regions}
                            rules={{ required: true }}
                        />
                        <Input
                            label="Оброзование"
                            placeholder="Название учебного заведения"
                            name="education"
                            register={{ ...register('education', { required: true }) }}
                        />
                    </div>
                    <div className={cls.form__auth}>
                        <div>
                            <h3>Придумайте логин</h3>
                            <p>Латинскими буквами и представьте его пользователю в письменном виде!</p>
                            <Input
                                placeholder="Login"
                                name="login"
                                register={{ ...register('login', { required: true }) }}
                            />
                        </div>
                        <div>
                            <h3>Номер телефона</h3>
                            <p>Логин будет отправлен на этот номер телефона в виде SMS!</p>
                            <InputMask
                                mask='+\9\9\8 (99) 999-99-99'
                                placeholder="+998 (  ) ___ __ __"
                                name="phoneNumber"
                                control={control}
                                rules={{ required: true }}
                            />
                        </div>
                        <div>
                            <h3>Придумайте пароль</h3>
                            <p>Латинскими буквами и представьте его пользователю в письменном виде!</p>
                            <Input
                                type="password"
                                placeholder="Password"
                                name="password"
                                register={{ ...register('password', { required: true,minLength: 8 }) }}
                            />
                        </div>
                        <div>
                            <h3>Подтверите пароль</h3>
                            <p>Латинскими буквами и представьте его пользователю в письменном виде!</p>
                            <Input
                                type="password"
                                placeholder="Repeat password"
                                name="repeat_password"
                                register={{ ...register('repeat_password', { required: true, minLength: 8 }) }}
                            />
                        </div>
                    </div>
                    <div className={cls.form__roles}>
                        {
                            roles?.length > 0 && roles.map(role =>
                                <RoleInfo
                                    key={role.id}
                                    roleId={role.roleId}
                                    title={role.title}
                                    desc={role.desc}
                                    label={role.label}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default Content;
