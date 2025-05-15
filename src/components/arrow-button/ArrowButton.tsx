import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

type Props = {
	isOpenArticle: boolean;
	setIsOpenArticle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ArrowButton = ({isOpenArticle, setIsOpenArticle}: Props) => {
	const handlerClick:OnClick = ()=>{
		setIsOpenArticle(last => !last)
	}

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isOpenArticle ? styles['container_open'] : ''}`}
			onClick={handlerClick}
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isOpenArticle ? styles['arrow_open'] : ''}`}
			/>
		</div>
	);
};
