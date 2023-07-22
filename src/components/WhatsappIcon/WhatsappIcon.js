// CSS
import styles from './WhatsappIcon.module.css'


const WhatsappIcon = () => {



  return (
    <a href="https://api.whatsapp.com/send?phone=3492184713" target="self" className={styles.container_whatsapp}>
        <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default WhatsappIcon