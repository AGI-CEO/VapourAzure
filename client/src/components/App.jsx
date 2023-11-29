import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import FrontPage from "./FrontPage";
import GameInfo from "./GameInfo";
import Library from "./Library";
import Wishlist from "./Wishlist";
import Footer from "./Footer";
import Upcoming from "./Upcoming";
import GameCarousel from "./GameCarousel";
const App = () => {
	const [gameInfo, setGameInfo] = useState({});
	const [showInfo, setShowInfo] = useState(false);
	const [wishlist, setWishlist] = useState([]);

	const getGameDetails = async (id) => {
		try {
			const response = await axios.get(`/api/game/${id}`);
			setGameInfo(response.data);
			setShowInfo(!showInfo);
		} catch (error) {
			console.error(error);
		}
	};

	const getWishlist = async () => {
		try {
			const response = await axios.get("api/videogames");
			setWishlist(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getWishlist();
	}, []);

	const handleCloseButton = () => {
		setShowInfo(!showInfo);
	};

	return (
		<div className="min-h-[100dvh]">
			<Header wishlist={wishlist} />
			<Routes>
				<Route
					path="/"
					element={<FrontPage getGameDetails={getGameDetails} />}
				></Route>
				<Route
					path="/upcoming"
					element={<Upcoming getGameDetails={getGameDetails} />}
				></Route>
				<Route
					path="/library"
					element={<Library getGameDetails={getGameDetails} />}
				></Route>
				<Route
					path="/wishlist"
					element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
				></Route>
			</Routes>
			{showInfo && (
				<GameInfo gameInfo={gameInfo} handleCloseButton={handleCloseButton} />
			)}
			<Footer />
		</div>
	);
};

export default App;
