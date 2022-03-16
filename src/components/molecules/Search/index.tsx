import styles from './styles.module.scss';
import {FC} from "react";
import {Button, Image} from '../../atoms'

interface IProps {

}

export const Search: FC<IProps> = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
            <Image type={'lupe'} className={styles.searchIcon} />
            <input className={styles.input} />
            </div>

            <Button className={styles.button} onClick={() => {}} >
                Submit
            </Button>

        </div>
    )
}