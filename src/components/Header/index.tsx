import { SigninButton } from '../SigninButton'
import styles from './styles.module.scss';

import Image from "next/image";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" width={100} height={100} />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>New Posts</a>
                </nav>

                <SigninButton />
            </div>
        </header>
    )
}