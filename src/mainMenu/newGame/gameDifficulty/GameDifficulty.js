 import { Container, List, ListInlineItem  } from 'reactstrap';

export default function GameDifficulty({ difficulty, setDifficulty }){
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
            <div>
                <List type="inline">
                { buttons.map((button) => { return(
                    <ListInlineItem key={button.level} >
                        <div onClick={() => setDifficulty(button.level)} className={button.level === difficulty ? "active": "not-active"}><img className="button" src={button.img} alt={button.text} /></div>
                        <div>{button.text}</div>
                    </ListInlineItem>
                )})}
                </List>
            </div>
        </Container>
    );
}