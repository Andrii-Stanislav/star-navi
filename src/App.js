import React, { useState, useEffect } from 'react';

import { getAllModes } from './services/api';
import styles from './styles/App.module.css';

import ModeSelect from './Components/ModeSelect';
import FieldsBox from './Components/FieldsBox';
import Field from './Components/Field';
import ScoreBoard from './Components/ScoreBoard';

function App() {
    const [allModes, setAllModes] = useState([]);
    const [currentMode, setCurrentMode] = useState(allModes[0]);
    const [hoveredFields, setHoveredFields] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const modesFromApi = await getAllModes();
                setAllModes(modesFromApi);
                setCurrentMode(modesFromApi[0]);
            } catch (error) {
                console.log('error: ', error);
            }
            setIsLoading(false);
        })();
    }, []);

    const arrayOfCoordinates = () => {
        const result = [];
        for (let i = 0; i < Math.pow(currentMode.field, 2); i++) {
            const X = (i % currentMode.field) + 1;
            const Y = Math.floor(i / currentMode.field) + 1;
            const coordinates = `row ${X} col ${Y}`;
            result.push(coordinates);
        }
        return result;
    };

    const startGame = electMode => {
        setHoveredFields([]);
        setCurrentMode(allModes.find(mode => mode.name === electMode));
        setIsPlaying(true);
    };

    const stopGame = () => {
        setIsPlaying(false);
        setHoveredFields([]);
    };

    const hoverHeandler = (coordinates, isHovered) => {
        if (isHovered) {
            const newHoveredFields = hoveredFields.filter(crds => crds !== coordinates);
            setHoveredFields(newHoveredFields);
        } else {
            const newHoveredFields = [...hoveredFields, coordinates];
            setHoveredFields(newHoveredFields);
        }
    };

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.fieldsBlock}>
                        <ModeSelect
                            modesArr={allModes}
                            isPlaying={isPlaying}
                            startGame={startGame}
                            stopGame={stopGame}
                        />
                        <FieldsBox fields={currentMode.field}>
                            {arrayOfCoordinates().map((coordinates, index) => (
                                <Field
                                    isPlaying={isPlaying}
                                    key={index}
                                    coordinates={coordinates}
                                    isHovered={hoveredFields.includes(coordinates)}
                                    hoverHeandler={hoverHeandler}
                                />
                            ))}
                        </FieldsBox>
                    </div>
                    <ScoreBoard score={hoveredFields} />
                </div>
            )}
        </>
    );
}

export default App;
