import { useState } from "react";
import "./App.css";
import LetterImage from "./Download Valentine's Day design with envelope and balloons for free.jpeg";
import StoryPage from "./components/StoryPage";
import ReactAudioPlayer from "react-audio-player";

function App() {
	const [componentActive, setComponentActive] = useState(1);
	const [pageActive, setPageActive] = useState(null);

	const handleComponentActive = (val) => {
		setTimeout(() => {
			setComponentActive(val);
		}, 500);
	};
	const handlePageActive = (val) => {
		setTimeout(() => {
			setPageActive(val);
			setComponentActive(3);
		}, 500);
	};

	return (
		<div className="w-full flex justify-center min-h-screen">
			<div className="max-w-[576px] w-full relative">
				<div className="flex justify-center items-center min-h-screen w-full bg-[#C1E5FB]">
					{componentActive === 1 && (
						<div>
							<img
								className="active:scale-90 w-[300px] transition cursor-pointer"
								src={LetterImage}
								alt="-letter"
								onClick={() => handleComponentActive(2)}
							/>
							<div className="absolute top-[30px] left-[10px] right-[10px] flex items-center space-x-5">
								<img
									src={require("./bubukesatriaberkuda.gif")}
									alt="kesatria berkuda"
									className="w-[80px] h-[80px] rounded-full shadow-lg"
								/>
								<div className="bg-black bg-opacity-40 p-3 shadow-xl rounded-md border border-black">
									<p className="font-semibold text-white">
										RizkiAF Kesatria berkuda
									</p>
									<p className="text-sm mt-2 text-[#f5f5f5] text-opacity-90 max-w-[250px] font-medium">
										Hai Desi, ini kesatria berkudamu membawakan pesan, pencet
										suratnya yahh, jangan lupa setel lagunya di paling bawah 💕
									</p>
								</div>
							</div>
						</div>
					)}
					{componentActive === 2 && (
						<div className="w-full min-h-[250px] flex justify-evenly items-center flex-col p-5">
							<div className="absolute top-[30px] left-[10px] right-[10px] flex items-center space-x-5">
								<img
									src={require("./bubukesatriaberkuda.gif")}
									alt="kesatria berkuda"
									className="w-[80px] h-[80px] rounded-full shadow-lg"
								/>
								<div className="bg-black bg-opacity-40 p-3 shadow-xl rounded-md border border-black">
									<p className="font-semibold text-white">
										RizkiAF Kesatria berkuda
									</p>
									<p className="text-sm mt-2 text-[#f5f5f5] text-opacity-90 max-w-[250px] font-medium">
										Ini isi suratnya, jangan lupa di liat yah.. 💕
									</p>
								</div>
							</div>
							{/* <button
								className="grid grid-cols-[2.5fr,1fr] max-w-[300px] items-center space-x-5 bg-[#6B7DB8] w-full p-4 active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => handlePageActive(1)}
							>
								<p className="text-center text-white font-semibold">
									Kisah kita meski baru sebentar
								</p>
								<img
									src={require("./kisahkita.gif")}
									className="w-[50px] h-[50px] rounded-full shadow-lg"
									alt="kisah kita"
								/>
							</button> */}
							{/* <button
								className="grid grid-cols-[2.5fr,1fr] max-w-[300px] items-center space-x-5 bg-[#6B7DB8] w-full p-4 active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => handlePageActive(2)}
							>
								<p className="text-center text-white font-semibold">
									RizkiAF sayang Dhea... 💕
								</p>
								<img
									src={require("./iloveyou.gif")}
									className="w-[50px] h-[50px] object-contain bg-white rounded-full shadow-lg"
									alt="kisah kita"
								/>
							</button> */}
							<button
								className="grid grid-cols-[2.5fr,1fr] max-w-[300px] items-center space-x-5 bg-[#6B7DB8] w-full p-4 active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => handlePageActive(3)}
							>
								<p className="text-center text-white font-semibold">
									Selamat Ulang Tahun Orang Baik, Semogaa...
								</p>
								<img
									src={require("./ultah.gif")}
									className="w-[50px] h-[50px] rounded-full shadow-lg"
									alt="kisah kita"
								/>
							</button>
						</div>
					)}
					{componentActive === 3 && (
						<StoryPage
							pageActive={pageActive}
							setPageActive={() => {
								setPageActive(null);
								setComponentActive(2);
							}}
						/>
					)}
				</div>
				<div className="flex justify-center bg-[#6B7DB8] py-4">
					<ReactAudioPlayer
						src={require("./assets/videoplayback.mp3")}
						autoPlay
						controls
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
