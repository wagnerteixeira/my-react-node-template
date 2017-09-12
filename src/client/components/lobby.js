import "./lobby.scss";

import React, {Component} from 'react';
import Chat from "./chat";

class LobbyContainer extends Component {
	constructor(props){
		super(props);

		this._joingame = (game) => {
			console.log(`TODO: JOIN GAME ${game.title}`);
		};

		this._sendMessage = (message) => {
			console.log(`Sending ${message}`);
		};
	}
	render() {
		const games=[
			{title:"Game 1", id : 1, players : ["one", "two", "three"]},
			{title:"Game 2", id : 2, players : ["one", "two", "three"]},
			{title:"Game 3", id : 3, players : ["one", "two", "three"]},
			{title:"Game 4", id : 4, players : ["one", "two", "three"]}
		];
		const opSendMessage = {can: true, inProgress: false };
		const messages = [
			{index: 1, name: "Person 1", message: "Blegh 1 jdlkjhfkjdhfkjdhfkjhdfkj"},
			{index: 2, name: "Person 2", message: "Blegh 2 sdfadfddsfdf"},
			{index: 3, name: "Person 3", message: "Blegh 3 das a da dasd as"},
			{index: 4, name: "Person 4", message: "Blegh 4 adsadsdasdda d da"},
			{index: 5, name: "Person 5", message: "Blegh 5 d d as dads as "},
		];
		//const games = [];
		return (
			<div className="c-lobby">
				<GameList games={games} joinGame={this._joingame}/>
				<Chat
					messages = {messages}
					opSendMessage = {opSendMessage}
					sendMessage = {this._sendMessage} />
			</div>
		);
	}
}

class LobbySidebar extends Component {
	constructor(props){
		super(props);
		this._login = () =>{
			console.log("TODO: IMPLEMENT LOGIN");
		};

		this._createGame = () =>{
			console.log("TODO: CREATE GAME");
		};
	}	
	render() {
		const canLogin = true;
		const canCreateGame = true;
		const createGameInProgress = false;

		return (
			<section className="c-lobby-sidebar">
				<div className="m-sidebar-buttons">
					{!canLogin ? null :
						<button 
							className="m-button primary" 
							onClick={this._login}>
							Login
						</button> }
					{!canCreateGame ? null :
						<button 
							onClick={this._createGame}
							disabled={createGameInProgress}
							className="m-button good">
							Create Game
						</button>}
				</div>
			</section>
		);
	}
}

function GameList({games, joinGame}){
	return (
		<section className="c-game-list">
			{games.length > 0 ? null :
				<div className="no-games">There are no games yet :(</div>}
			{games.map(game =>
				<div className="game" key={game.id} onClick={()=> joinGame(game)}>
					<div className="title">{game.title}</div>
					<div className="players">
						{game.players.join(", ")}
					</div>
					<div className="join-game">Join Game</div>
				</div>)}
		</section>
	);
}


export default {
	main: LobbyContainer,
	sidebar: LobbySidebar
};