import cn from 'classnames'
import styles from './styles.module.scss'

export const Title = ({customStyle, children}: any) => {
  return <p className={cn(styles.title, {[customStyle]: customStyle})}>{children}</p>
}

