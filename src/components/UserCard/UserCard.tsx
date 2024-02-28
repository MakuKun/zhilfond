import { useAppSelector } from "../../store/hooks";
import styles from "./UserCard.module.scss";
import img from "../../assets/user-img.png";

const UserCard = () => {
    const user = useAppSelector((store) => store.user.card);
    
    return (
        <div className={styles.uc}>
            <div className={styles["uc_img"]}>
                <img src={img} alt="Image" />
            </div>
            <div className={styles["uc_body"]}>
                <p>{user.name}</p>
                <p>
                    email: <span>{user.email}</span>
                </p>
                <p>
                    phone: <span>{user.phone}</span>
                </p>
                <p>О себе:</p>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi recusandae id atque? Nesciunt inventore esse ut
                    numquam hic debitis voluptate ipsam deleniti delectus. Error
                    magnam beatae ex repudiandae eos repellat quae, quo impedit
                    ullam libero enim vel fugiat voluptatibus sequi odio quidem
                    cumque. Nam saepe pariatur similique harum soluta velit
                    accusantium nobis, doloremque, eius ipsam fugit! Id animi
                    iusto tenetur sed quis. Assumenda laudantium excepturi
                    exercitationem deserunt recusandae odio eos temporibus
                    harum, cum officiis cumque. Quas, placeat neque dolor ipsum
                    rerum id numquam. Fuga ducimus eius deserunt. Dolores enim
                    nulla, perferendis tempore at molestiae magni qui, iure
                    voluptatum soluta ea?
                </span>
            </div>
        </div>
    );
};

export default UserCard;
