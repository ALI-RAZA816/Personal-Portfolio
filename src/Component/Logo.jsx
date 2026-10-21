import style from '../css/Logo.module.css';

export default function Logo({ size = 'md' }) {
    return (
        <div className={`${style.logo} ${size === 'lg' ? style.lg : ''}`} aria-label="Ali Raza">
            <span className={style.badge}>
                <span className={style.badgeInner}><span className={style.letters}>AR</span></span>
            </span>
            <span className={style.word}>
                Ali Raza<span className={style.dev}>.dev</span>
            </span>
        </div>
    );
}
