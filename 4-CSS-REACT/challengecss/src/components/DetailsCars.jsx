import styles from './DetailsCars.module.css';

const DetailsCars = ({cars}) => {
  return (
    <div className={styles.card}>
        <h1>{cars.brand}</h1>
        <p>Cor: {cars.color}</p>
        <p>KM: {cars.km}</p>
    </div>
  )
}

export default DetailsCars