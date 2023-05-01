import styles from "./Bubble.module.scss"

type BubbleProps = {
	icon: string
	title: string
	text: string
}

function Bubble({ icon, title, text }: BubbleProps): JSX.Element {
	return (
		<div className={styles.feature_item}>
			<img src={icon} alt='Icon' className={styles.feature_icon} />
			<h3 className={styles.feature_item_title}>{title}</h3>
			<p>{text}</p>
		</div>
	)
}

export default Bubble
