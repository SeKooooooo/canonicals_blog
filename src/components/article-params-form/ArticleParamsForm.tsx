import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import { Text } from '../text';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';

type Props = {
	articleState: ArticleStateType;
	setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>
}

export const ArticleParamsForm = ({articleState, setArticleState}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [articleStateForm, setArticleStateForm] = useState<ArticleStateType>(articleState)
	
	const selectOption= (option: OptionType, nameOption: string)=>{
		setArticleStateForm(last => ({...last, [nameOption]: option}))
	}

	const handlerSubmit = (event: FormEvent<HTMLFormElement>)=> {
		event.preventDefault()
		setArticleState({
			...articleStateForm	
		})
		setIsOpen(false)
	}

	const handlerReset = (event: FormEvent<HTMLFormElement>)=> {
		event.preventDefault()
		setArticleStateForm({...defaultArticleState})
		setArticleState({...defaultArticleState})
		setIsOpen(false)
	}

	return (
		<>
			<ArrowButton isOpenArticle={isOpen} setIsOpenArticle={setIsOpen}/>
			<aside
				className={`${styles.container} ${isOpen ? styles['container_open'] : ''}`}>
				<form className={styles.form} onSubmit={handlerSubmit} onReset={handlerReset}>
					<Text size={31} weight={800} uppercase>Задайте параметры</Text>
					<Spacing size={50}/>
					<Select options={fontFamilyOptions} selected={articleStateForm.fontFamilyOption} title='Шрифт' onChange={(option)=> selectOption(option, 'fontFamilyOption')}/>
					<Spacing size={50}/>
					<RadioGroup title='Размер шрифта' name='size' options={fontSizeOptions} selected={articleStateForm.fontSizeOption} onChange={(option)=> selectOption(option, 'fontSizeOption')}/>
					<Spacing size={50}/>
					<Select options={fontColors} selected={articleStateForm.fontColor} onChange={(option)=> selectOption(option, 'fontColor')} title={'Цвет шрифта'}/>
					<Spacing size={50}/>
					<Separator/>
					<Spacing size={50}/>
					<Select options={backgroundColors} selected={articleStateForm.backgroundColor} onChange={(option)=> selectOption(option, 'backgroundColor')} title={'Цвет фона'}/>
					<Spacing size={50}/>
					<Select options={contentWidthArr} selected={articleStateForm.contentWidth} onChange={(option)=> selectOption(option, 'contentWidth')} title={'Ширина контента'}/>
					<Spacing size={50}/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit'/>
					</div>
				</form>
			</aside>
		</>
	);
};
