import styles from './styles.module.scss';

import Image from "next/image";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>New Posts</a>
                </nav>
            </div>
        </header>
    )
}