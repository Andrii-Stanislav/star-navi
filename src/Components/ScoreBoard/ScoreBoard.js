import React from 'react';

import styles from './ScoreBoard.module.css';

function ScoreBoard({ score }) {
    return (
        <div>
            <div className={styles.title}>Hover squares</div>
            <div className={styles.board}>
                {score.map(oneCoordinates => (
                    <div key={oneCoordinates} className={styles.oneCoordinates}>
                        {oneCoordinates}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScoreBoard;
