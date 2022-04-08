import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SigninButton() {

    const isUserLoggeIn = true;

    return isUserLoggeIn ? (
        <button
            className={styles.SigninButton}
            type="button"
        >
            <FaGithub color="#04d361" />
            Wesley Souza
            <FiX className={styles.closeIcon} color='#737380' />
        </button>
    ) : (
        <button
            className={styles.SigninButton}
            type="button"
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}