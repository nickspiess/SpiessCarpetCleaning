import React from 'react';
import styles from '../styles/Quote.module.css';

const QuoteDetail = ({ label, name, value, onIncrement, onDecrement, onChange }) => {
  return (
    <div className={styles.inputGroupDetail}>
        <div className={styles.subDetail}>
            <div className={styles.divLabel}>
        <label className={styles.label}>{label}</label>
        </div>
        <div className={styles.toggling}>
            <button type="button" onClick={() => onDecrement(name)} disabled={value === 0} className={styles.inputGroupButton}>-</button>
            <input min="0" name={name} value={value} onChange={onChange} className={styles.inputGroupInput} />
            <button type="button" onClick={() => onIncrement(name)} className={styles.inputGroupButton}>+</button>
            </div>
        </div>
    </div>
  );
};

export default QuoteDetail;