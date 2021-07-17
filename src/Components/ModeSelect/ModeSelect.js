import React, { useState } from 'react';

import styles from './ModeSelect.module.css';

function ModeSelect({ modesArr, startGame, stopGame, isPlaying }) {
    const [electMode, setElectMode] = useState(modesArr[0].name);

    const heandleSelectChange = ({ target }) => {
        setElectMode(target.value);
    };
    return (
        <div className={styles.container}>
            {modesArr && (
                <select value={electMode} onChange={heandleSelectChange} className={styles.select}>
                    {modesArr.map(mode => (
                        <option key={mode.name} value={mode.name}>
                            {mode.name}
                        </option>
                    ))}
                </select>
            )}
            {isPlaying ? (
                <div className={styles.button} onClick={stopGame}>
                    Stop
                </div>
            ) : (
                <div className={styles.button} onClick={() => startGame(electMode)}>
                    Start
                </div>
            )}
        </div>
    );
}

export default ModeSelect;
