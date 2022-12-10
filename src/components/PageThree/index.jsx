import React from "react";
import { useState } from "react";
import MessageImage from "../MessageImage";

const PageThree = ({ setPageActive }) => {
	const [sectionActive, setSectionActive] = useState(1);
	const [answerNo, setAnswerNo] = useState(false);
	const [answerYes, setAnswerYes] = useState(false);

	return (
		<div>
			{sectionActive === 1 && (
				<div>
					<div className="mb-4">
						<img
							src={require("../../ultahnew.gif")}
							alt="kesatria berkuda"
							className="h-[100px] object-cover mb-2"
						/>
						<div className="bg-black bg-opacity-40 p-3 shadow-xl rounded-md border border-black">
							<p className="text-2xl font-bold text-white">
								Selamat Ulang Tahun Desi Ratnasari 🥳🥳
							</p>
						</div>
					</div>
					<button
						className="bg-[#6B7DB8] px-5 mt-4 py-3 active:scale-90 transition rounded-full cursor-pointer"
						onClick={() => setSectionActive(sectionActive + 1)}
					>
						<p className="text-center text-white font-semibold">Ayo Mulai ❤️</p>
					</button>
				</div>
			)}
			{sectionActive === 2 && (
				<div>
					<div className="bg-black bg-opacity-40 p-3 shadow-xl mb-5 rounded-md border border-black">
						<p className="text-lg font-bold text-white">
							Apakah kamu sayang sama aku ?
						</p>
					</div>
					<div className="flex space-x-5">
						<img
							src={require("../../bubukesatriaberkuda.gif")}
							alt="kesatria berkuda"
							className="w-[60px] h-[60px] rounded-full shadow-lg"
						/>
						<MessageImage text="Hai Desi aku sayang banget sama kamu, kamu masih sayang ga sama aku ?" />
					</div>
					<div className="flex space-x-5 mt-3">
						<div className="bg-black bg-opacity-20 p-3 shadow-xl rounded-md border border-black">
							<p className="text-white text-sm font-semibold">Pilih Satu :</p>
							<button
								className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => setAnswerYes(true)}
							>
								<p className="text-center text-white font-semibold">
									Sayang Bangettt ❤️
								</p>
							</button>
							<button
								className="bg-[#ba4943] px-5 mt-2 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => setAnswerNo(true)}
							>
								<p className="text-center text-white font-semibold">
									Ga Sayang 😝
								</p>
							</button>
						</div>
						<img
							src={require("../../assets/ayanguserquestion.gif")}
							alt="Dhea Cantik"
							className="w-[60px] h-[60px] rounded-full shadow-lg"
						/>
					</div>
					{answerNo && (
						<div className="flex space-x-5 mt-3">
							<img
								src={require("../../assets/duduangry.gif")}
								alt="kesatria berkuda"
								className="w-[60px] h-[60px] rounded-full shadow-lg"
							/>
							<MessageImage text="Harus Sayang Sama AKU 😡" />
						</div>
					)}
					{answerYes && (
						<div className="flex space-x-5 mt-3">
							<img
								src={require("../../bubukesatriaberkuda.gif")}
								alt="kesatria berkuda"
								className="w-[60px] h-[60px] rounded-full shadow-lg"
							/>
							<MessageImage text="Yey kamu sayang akuu ❤️❤️" />
						</div>
					)}
					{answerYes && (
						<button
							className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
							onClick={() => {
								setSectionActive(3);
								setAnswerNo(false);
								setAnswerYes(false);
							}}
						>
							<p className="text-center text-white font-semibold">Lanjut yah</p>
						</button>
					)}
				</div>
			)}
			{/* {sectionActive === 3 && (
				<div>
					<div className="bg-black bg-opacity-40 p-3 shadow-xl mb-5 rounded-md border border-black">
						<p className="text-lg font-bold text-white">
							Apakah kamu mau jalan sama aku ?
						</p>
					</div>
					<div className="flex space-x-5">
						<img
							src={require("../../bubukesatriaberkuda.gif")}
							alt="kesatria berkuda"
							className="w-[60px] h-[60px] rounded-full shadow-lg"
						/>
						<MessageImage text="Hai Dhea aku mau ngajak kamu date dongg, hari sabtu tanggal 24 kamu mau ga ?" />
					</div>
					<div className="flex space-x-5 mt-3">
						<div className="bg-black bg-opacity-20 p-3 shadow-xl rounded-md border border-black">
							<p className="text-white text-sm font-semibold">Pilih Satu :</p>
							<button
								className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => setAnswerYes(true)}
							>
								<p className="text-center text-white font-semibold">
									Mau Bangettt ❤️
								</p>
							</button>
							<button
								className="bg-[#ba4943] px-5 mt-2 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
								onClick={() => setAnswerNo(true)}
							>
								<p className="text-center text-white font-semibold">
									Ga Mau Ah.. 😝
								</p>
							</button>
						</div>
						<img
							src={require("../../assets/ayanguserquestion.gif")}
							alt="Dhea Cantik"
							className="w-[60px] h-[60px] rounded-full shadow-lg"
						/>
					</div>
					{answerNo && (
						<div className="flex space-x-5 mt-3">
							<img
								src={require("../../assets/bububersalahh.gif")}
								alt="kesatria berkuda"
								className="w-[60px] h-[60px] rounded-full shadow-lg"
							/>
							<MessageImage text="Ayang Harus Mauuu 😭😭" />
						</div>
					)}
					{answerYes && (
						<div className="flex space-x-5 mt-3">
							<img
								src={require("../../bubukesatriaberkuda.gif")}
								alt="kesatria berkuda"
								className="w-[60px] h-[60px] rounded-full shadow-lg"
							/>
							<MessageImage text="Yey ayang sampai ketemu lagi yahh, tunggu aku otw sayang ❤️❤️" />
						</div>
					)}
					{answerYes && (
						<button
							className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
							onClick={() => {
								setSectionActive(4);
								setAnswerNo(false);
								setAnswerYes(false);
							}}
						>
							<p className="text-center text-white font-semibold">
								Lanjut Ayang
							</p>
						</button>
					)}
				</div>
			)} */}
			{sectionActive === 3 && (
				<div>
					<img
						src={require("../../ultahnew.gif")}
						alt="kesatria berkuda"
						className="h-[100px] object-cover mb-2"
					/>
					<div className="bg-black bg-opacity-40 p-3 shadow-xl mb-5 rounded-md border border-black">
						<p className="font-bold text-white">
							Selamat ulang tahun desi ratnasari (orang baik)🎂, panjang umur
							sehat selalu ya,banyak rejeki dan semoga diumur kamu yg sekarang
							kamu tambah dewasa dalam melakukan hal apapun.amin🤲, Maap ya
							cantik aku cuma bisa ngucapin kekamu lewat wa gabisa ngasih
							kue/kado gak kaya tahun kemarin,tapi insyallah aku bakal usahain
							ko☺️ sekali lagi selamat bertambah umur yaa🥳🥳🥳🥳🥳🥳
						</p>
					</div>
					<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
						<img
							src={require("../../assets/itiskontol.jpeg")}
							className="h-[300px] rounded-md"
							alt="stiker-chat"
						/>
					</div>
					<MessageImage text="Kamu masih inget poto ini kan?" />
					<button
						className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
						onClick={() => {
							setSectionActive(4);
							setAnswerNo(false);
							setAnswerYes(false);
						}}
					>
						<p className="text-center text-white font-semibold">Lanjut</p>
					</button>
				</div>
			)}
			{sectionActive === 4 && (
				<div>
					<img
						src={require("../../ultahnew.gif")}
						alt="kesatria berkuda"
						className="h-[100px] object-cover mb-2"
					/>
					<div className="bg-black bg-opacity-40 p-3 shadow-xl mb-5 rounded-md border border-black">
						<p className="font-bold text-white">
							Maap ya cantik cuma bisa ngucapin gabisa ngasih kue atau kado
							kekamu langsung
						</p>
					</div>
					<button
						className="bg-[#6B7DB8] px-5 mt-4 py-2 shadow-lg active:scale-90 transition rounded-full cursor-pointer"
						onClick={() => {
							setPageActive();
						}}
					>
						<p className="text-center text-white font-semibold">Selesai ❤️❤️</p>
					</button>
				</div>
			)}
		</div>
	);
};

export default PageThree;
