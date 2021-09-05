import { Container } from 'reactstrap';

interface GameDifficultyProps {
    difficulty: Number,
    setDifficulty: any
}

export default function GameDifficulty({ difficulty, setDifficulty }: GameDifficultyProps){
    const buttons = [
        { level: 0, img: "./pion.png", text: "Easy" },
        { level: 1, img: "./pion.png", text: "Normal" },
        { level: 2, img: "./pion.png", text: "Hard" },
        { level: 3, img: "./pion.png", text: "Expert" },
        { level: 4, img: "./pion.png", text: "Impossible" },
    ];

    return(
        <Container className="text-center">
            <div>Game Difficulty:</div>
            <div className="row align-items-center">
                { buttons.map((button) => { return(
                    <div className="col" key={button.level} >
                        <div onClick={() => setDifficulty(button.level)} className={button.level === difficulty ? "active": "not-active"}><img className="button" src={button.img} alt={button.text} /></div>
                        <div>{button.text}</div>
                    </div>
                )})}
            </div>
        </Container>
    );
}