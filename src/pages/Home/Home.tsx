import chatLogo from "../../assets/icon-chat.png"
import moneyLogo from "../../assets/icon-money.png"
import securityLogo from "../../assets/icon-security.png"
import Bubble from "../../component/HomeBubble/Bubble"
import styles from "./Home.module.scss"

function Home(): JSX.Element {
	return (
		<main>
			<div className={styles.hero}>
				<section className={styles.hero_content}>
					<h2 className={styles.sr_only}>Promoted Content</h2>
					<p className={styles.subtitle}>No fees.</p>
					<p className={styles.subtitle}>No minimum deposit.</p>
					<p className={styles.subtitle}>High interest rates.</p>
					<p className={styles.text}>
						Open a savings account with Argent Bank today!
					</p>
				</section>
			</div>
			<section className={styles.features}>
				<Bubble
					icon={chatLogo}
					title='You are our #1 priority'
					text='Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.'
				/>
				<Bubble
					icon={moneyLogo}
					title='More savings means higher rates'
					text='The more you save with us, the higher your interest rate will be!'
				/>
				<Bubble
					icon={securityLogo}
					title='Security you can trust'
					text='We use top of the line encryption to make sure your data and money
                    is always safe.'
				/>
			</section>
		</main>
	)
}

export default Home
