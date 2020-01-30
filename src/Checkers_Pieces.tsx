import React from 'react';
import pieceB from './checkerPiece_Black.png';
import pieceR from './checkerPiece_Red.png';
// Following https://www.pluralsight.com/guides/composing-react-components-with-typescript

interface PieceProps{
    color: "red" | "black";
}

interface StackProps{
    size: number;
    pieceProps: PieceProps;
}

export const Piece = (props: PieceProps) => {
    if (props.color == "black")
        return (<img style={{ width: "90%", height: "90%"}} src={pieceB} />);
    else
        return (<img style={{ width: "90%", height: "90%"}} src={pieceR} />);
};

export const Stack = ({ size, pieceProps }: StackProps) => {

    let arr = new Array<number>(size);
    for (let ii = 0; ii < size; ++ii)
        arr[ii] = ii;

    return (
        <React.Fragment>
            {arr.map((ii) => (
                <div key={"div1" + ii.toString()} style={{ position: "relative" }}>
                    <div key={"div2" + ii.toString()} style={{ position: "absolute", top: ii*-15, right:"0" }}>
                        <Piece key={ii.toString()} {...pieceProps} />
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export const Pawn = (props: PieceProps) => <Stack size={1} pieceProps={props} />
    
export const King = (props: PieceProps) => <Stack size={2} pieceProps={props} />;