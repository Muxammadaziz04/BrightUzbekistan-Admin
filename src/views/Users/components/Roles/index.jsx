import RoleInfo from "../../../../components/RoleInfo";
import { roles } from "./data";
import cls from './Roles.module.scss'

const Roles = () => {
    return (
        <div className={cls.box}>
            <span>Информация о ролях</span>
            <div>
                {
                    roles?.length > 0 && roles.map(role =>
                        <RoleInfo 
                            key={role.id} 
                            roleId={role.roleId}
                            title={role.title} 
                            desc={role.desc} 
                            label={role.label} 
                            replaceUrl={false}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Roles;
