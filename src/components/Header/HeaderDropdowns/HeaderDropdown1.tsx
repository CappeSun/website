import { ArrowRight, Users, Info, SealQuestion, NewspaperClipping, EggCrack } from '@phosphor-icons/react';
import Link from 'next/link';

import classNames from 'classnames';

import Title from '@/components/Title/Title';

import styles from './HeaderDropdown.module.css';

export default function HeaderDropdown1({ locale, mobile }: { locale: any; mobile?: boolean }) {
	return (
		<div className={classNames(styles.dropdownContent, { [styles.mobile]: mobile })}>
			<Link className={styles.link} href="/#credits">
				<div className={styles.iconWrapper}>
					<Users weight="fill" size={32} />
				</div>
				<div>
					<Title element="h4">{locale.nav.credits}</Title>
					<p>{locale.nav.dropdown.captions.credits}</p>
				</div>
				<ArrowRight size={28} className={styles.arrow} />
			</Link>

			<Link className={styles.link} href="/#about">
				<div className={styles.iconWrapper}>
					<Info weight="fill" size={32} />
				</div>
				<div>
					<Title element="h4">{locale.nav.about}</Title>
					<p>{locale.nav.dropdown.captions.about}</p>
				</div>
				<ArrowRight size={28} className={styles.arrow} />
			</Link>

			<Link className={styles.link} href="/#faq">
				<div className={styles.iconWrapper}>
					<SealQuestion weight="fill" size={32} />
				</div>
				<div>
					<Title element="h4">{locale.nav.faq}</Title>
					<p>{locale.nav.dropdown.captions.faq}</p>
				</div>
				<ArrowRight size={28} className={styles.arrow} />
			</Link>

			<Link className={styles.link} href="/blog">
				<div className={styles.iconWrapper}>
					<NewspaperClipping weight="fill" size={32} />
				</div>
				<div>
					<Title element="h4">{locale.nav.blog}</Title>
					<p>{locale.nav.dropdown.captions.blog}</p>
				</div>
				<ArrowRight size={28} className={styles.arrow} />
			</Link>

			<Link className={`${styles.link} ${styles.progress}`} href="/progress">
				<div className={styles.iconWrapper}>
					<EggCrack weight="fill" size={32} />
				</div>
				<div>
					<Title element="h4">{locale.nav.progress}</Title>
					<p>{locale.nav.dropdown.captions.progress}</p>
				</div>
				<ArrowRight size={28} className={styles.arrow} />
			</Link>
		</div>
	);
}
