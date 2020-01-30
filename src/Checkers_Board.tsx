import React, { useState, useEffect } from 'react';
import { Pawn, King, Stack } from './Checkers_Pieces';
import pieceB from './checkerPiece_Black.png';
import pieceR from './checkerPiece_Red.png';
import { number } from 'prop-types';
// Following https://www.pluralsight.com/guides/composing-react-components-with-typescript

interface SquareProps {
    color: "red" | "black";
    onClick: () => void;
}

const Square: React.FunctionComponent<SquareProps> = props => (
    <div onClick={props.onClick} style={{ width: 75, height: 75, backgroundColor: props.color }}> {props.children} </div>
);

const BOARD_SIZE = 10;

interface OwnState {
    //pieces: { [key: number]: React.ReactNode | null };
    pieces: Array<number>;
}

export class Board extends React.Component<{}, OwnState> {
    constructor(props: number) {
        super(props);
        this.state = {
            pieces: this.initPieces(),
        };
    }

    private initPieces() {
        let boardPieces = new Array<number>(BOARD_SIZE * BOARD_SIZE);
        for (let ii = 0; ii < BOARD_SIZE * 2; ++ii) {
            boardPieces[ii] = -1;
        }
        for (let ii = 0; ii < BOARD_SIZE * 2; ++ii) {
            boardPieces[boardPieces.length - 1 - ii] = 1;
        }
        return boardPieces;
    };

    private renderPieceOrBlank = (col: number, row: number) => {
        if (this.state.pieces[col + row * BOARD_SIZE] == 2)
            return <King color={"red"} />;
        if (this.state.pieces[col + row * BOARD_SIZE] == 1)
            return <Pawn color={"red"} />;
        if (this.state.pieces[col + row * BOARD_SIZE] == -1)
            return <Pawn color={"black"} />;
        if (this.state.pieces[col + row * BOARD_SIZE] == -2)
            return <King color={"black"} />;
    }

    private makeKing = (col: number, row: number) => {
        let arr = this.state.pieces;
        if (arr[col + row * BOARD_SIZE] == 1) {
            arr[col + row * BOARD_SIZE] = 2;
            this.setState({ pieces: arr });
        }
        else if (arr[col + row * BOARD_SIZE] == -1) {
            arr[col + row * BOARD_SIZE] = -2;
            this.setState({ pieces: arr });
        }
    }
    //const initialValue = [{value: number }];

    //
    
    public render() {

        //const squares = new Array <number>(BOARD_SIZE * BOARD_SIZE);
        const squares = new Array<number>(BOARD_SIZE);

        for (let ii = 0; ii < BOARD_SIZE; ++ii) {
            squares[ii] = ii;
        }

        return (
            <div>
                <div>
                    <p>
                        Click on a piece to upgrade it to a king!
                    </p>
                </div>
                <div>
                    {squares.map((col) => (<div style={{ float: "left" }} key={col}>{
                        squares.map((row) => (
                            <Square key={`${row}, ${col}`}
                                color={(col + row) % 2 === 0 ? "red" : "black"}
                                onClick={() => this.makeKing(col, row)}
                            >
                                {this.renderPieceOrBlank(col, row)}
                            </Square>
                        ))
                    }</div>
                        ))}
                </div>
            </div>
        );
    }
}
export default Board;