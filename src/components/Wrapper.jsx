import { useEffect, useState } from "react";
import { Button, Circle, StyledWrapper } from "./Wrapper.styled";

const Wrapper = () => {
    const [mousePos, setMousePos] = useState({});
    const [clickPositions, setClickPositions] = useState([]);
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);

    if(history.length > 0) {
    }
  
    return (
        <>
            <Button
                onClick={() => {
                    setHistory([...history, ...clickPositions.slice(-1)]);
                    setClickPositions([...clickPositions.slice(0, -1)]);
                }}
                disabled={clickPositions.length === 0}
            >
                undo
            </Button>
            <Button
                onClick={() => {
                    setClickPositions([...clickPositions, ...history.slice(-1)]);
                    setHistory([...history.slice(0, -1)]);
                }}
                disabled={history.length === 0}
            >
                redo
            </Button>
            <StyledWrapper onClick={() => {
                setClickPositions([...clickPositions, mousePos])
            }}>
                The mouse is at position{' '}
                <b>
                ({mousePos.x}, {mousePos.y})
                </b>
                {clickPositions.map(({x, y}) => (
                    <Circle x={x} y={y} key={`${x},${y}`} />
                ))}
            </StyledWrapper>
        </>
    );
}

export default Wrapper;
