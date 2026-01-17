import style from '../css/Contact.module.css';

export default function Contact() {
    return (
        <div style={{overflow:'hidden'}} className={style.contactSection} id='contact'>
            <div className={style.wrapper} data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="450">
                <h1>Contact me</h1>
                <p>Cultivating Connections: Reach Out and Connect with Me</p>
                <div className={style.form}>
                    <form action="">
                        <div className={style.field}>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={style.field}>
                            <input type="tele" placeholder='Phone Number' />
                            <input type="text" placeholder='Service Of Interest' />
                        </div>
                        <div className={style.field}>
                            <input type="text" placeholder='Timeline' />
                            <textarea name="" placeholder='Project Details....' id=""></textarea>
                        </div>
                        <button type='submit' >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
