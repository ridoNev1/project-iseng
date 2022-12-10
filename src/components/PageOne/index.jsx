import React from "react";
import { useState } from "react";
import MessageImage from "../MessageImage";

const PageOne = ({ setPageActive }) => {
	const [sectionActive, setSectionActive] = useState(1);

	return (
		<div id="__page-one">
			<div className="mb-4 flex space-x-4">
				<img
					src={require("../../kisahkita.gif")}
					alt="kesatria berkuda"
					className="w-[100px] h-[100px] rounded-full shadow-lg"
				/>
				<div className="bg-black bg-opacity-40 p-3 shadow-xl rounded-md border border-black">
					<p className="text-2xl font-bold text-white">Kisah kita</p>
				</div>
			</div>
			<div className="flex space-x-5">
				<img
					src={require("../../bubukesatriaberkuda.gif")}
					alt="kesatria berkuda"
					className="w-[60px] h-[60px] rounded-full shadow-lg"
				/>
				<div>
					<MessageImage
						text="Hai ayang, inget ga waktu kita pertama gombal-gombalan, waktu itu
							kamu pake hpnya nabila 😂"
					/>
					{sectionActive > 1 && (
						<MessageImage
							text="waktu itu km DM aku buat yang pertama kali, aku kaget!! kamu
						beneran bangunin aku 🥰"
						/>
					)}
					{sectionActive > 2 && (
						<MessageImage
							text="Akhirnya aku beraniin buat minta nomer wa kamu, eh ternyata kamu
						juga nungguin, aku seneng banget 🥳"
						/>
					)}
					{sectionActive > 2 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../bubuseneng.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 3 && (
						<MessageImage text="Ini chat pertama kita di wa 🥳" />
					)}
					{sectionActive > 3 && (
						<img
							src={require("../../chatpertama.jpeg")}
							className="w-full mt-4 rounded-md"
							alt="stiker-chat"
						/>
					)}
					{sectionActive > 4 && (
						<MessageImage text="Ini pap pertama kamu di wa 🥳" />
					)}
					{sectionActive > 4 && (
						<img
							src={require("../../pappertama.jpeg")}
							className="w-full mt-4 rounded-md"
							alt="stiker-chat"
						/>
					)}
					{sectionActive > 4 && <MessageImage text="Lucu banget 😍" />}
					{sectionActive > 5 && (
						<MessageImage text="Aku ajakin kamu main tanya jawab cepet, aku pingin tau kamu orangnya gimana, apa kesukaan kamu, apa yang kamu lakuin, pokoknya aku coba pingin tau semua tentang kamu, biar pdktnya makin lancar yekan wkwkwwk 💕❤️❤️" />
					)}
					{sectionActive > 5 && (
						<MessageImage text="Kita chattingan terus, tanpa sadar aku bener-bener jatuh cinta sama kamu, aku akan slalu jaga kamu Dhea, aku ga akan lepasin kamu, kamu berharga banget buat aku, aku sayang kamu 💕❤️❤️" />
					)}
					{sectionActive > 6 && (
						<MessageImage text="Aku baru tau kamu wanita yang hebat banget, pas aku denger kamu bangun HOPE, gila.. kamu keren banget ayang, denger apa yang kamu lakuin, dalam sehari kamu bisa bantuin banyak orang, kamu bisa menghasilkan dengan kerja keras kamu sendiri, aku ga pernah ngebayangin aku bisa kek kamu. ayang aku keren banget waaaaaa " />
					)}
					{sectionActive > 6 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../bubuterkesima.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 6 && (
						<MessageImage text="Stiker diatas ceritanya aku lagi terkesima ayang, aku bingung soalnya cari stikernya susah wkwkwkw" />
					)}
					{sectionActive > 7 && (
						<MessageImage text="Tapi waktu kita awal ketemu kamu sering sedih ayang, aku bingung, aku pingin bantuin kamu, tapi kamunya belum berani cerita ke aku. Tenang ayang, aku akan selalu berusaha supaya kamu mau cerita sama aku, aku pingin bantuin ayang, aku gamau ayang sedih 😭" />
					)}
					{sectionActive > 7 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../iloveyou.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 8 && (
						<MessageImage text="Akhirnya kamu mau cerita sama aku ayang, aku seneng bangettt!!, akhirnya aku bisa bantuin kamu. kamu harus cerita ya kalo ada apa-apa, aku akan slalu dengerin cerita ayang, aku akan selalu nemenin kamu, bantuin kamu sebisa aku, aku sayang Dhea ❤️❤️" />
					)}
					{sectionActive > 9 && (
						<MessageImage text="ayang aku ngetiknya sambil nangis karena seneng huweee 😭😭, aku sayang kamuu ❤️❤️" />
					)}
					{sectionActive > 10 && (
						<MessageImage text="ayang jangan di ketawain 😭" />
					)}
					{sectionActive > 11 && (
						<MessageImage text="wkwkwk oke lanjut ya ayang" />
					)}
					{sectionActive > 12 && (
						<MessageImage text="waktu itu aku takut banget mau nunjukin muka aku, aku ga pede, takut ayang ga suka. Tapi akhirnya ku beraniin ayang, aku pasang PP, aku pingin kamu tau aku gimana, aku sampe minta pendapat ke orang-orang fotonya udah bagus belum, soalnya aku ga pede banget pas itu 😭😭, tapi aku beraniin ayang, kamu harus bilang aku hebat 😭, hebat kan aku 😭" />
					)}
					{sectionActive > 12 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../bubunangis.gif")}
								className="w-[120px] h-[120px] rounded-md object-cover"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 13 && (
						<MessageImage text="Singkat cerita akhirnya kita video call buat pertama kali yeyyyy, seneng banget, kita sama-sama masih salting-saltingan wkwkkwk" />
					)}
					{sectionActive > 14 && (
						<MessageImage text="ini pap kita pertama kali video call" />
					)}
					{sectionActive > 14 && (
						<img
							src={require("../../assets/vc1.jpeg")}
							className="w-full mt-4 rounded-md"
							alt="stiker-chat"
						/>
					)}
					{sectionActive > 14 && (
						<img
							src={require("../../assets/vc2.jpeg")}
							className="w-full mt-4 rounded-md"
							alt="stiker-chat"
						/>
					)}
					{sectionActive > 14 && (
						<img
							src={require("../../assets/vc3.jpeg")}
							className="w-full mt-4 rounded-md"
							alt="stiker-chat"
						/>
					)}
					{sectionActive > 14 && (
						<MessageImage text="Aaaaaa kamu lucu banget 💕❤️❤️" />
					)}
					{sectionActive > 15 && (
						<MessageImage text="Kita berantem buat pertama kalinya ayang, waktu itu aku salah ngomong, aku ga bermaksud ngomong jahat kok, maafin aku ya ayang aku yang salah, aku bener-bener bikin kamu nangis waktu itu." />
					)}
					{sectionActive > 15 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../assets/bibucry.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 16 && (
						<MessageImage text="aku bingung banget harus gimana, aku coba hubungi kamu tapi kamu ga bales, kamunya lagi sendih 😭" />
					)}
					{sectionActive > 17 && (
						<MessageImage text="Akhirnya kamu bales aku ayang, aku seneng banget pas kamu maafin aku, aku ga bisa nahan buat ga nangis, aku malah cengeng di depan kamu, abisnya aku takut kehilangan kamu. aku sayang ma kamu ayang, maafin aku yah 😥❤️" />
					)}
					{sectionActive > 17 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../assets/bububersalahh.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 18 && (
						<MessageImage text="Ini POV aku yang seneng gombalin ayang wkwkwkwk 😂" />
					)}
					{sectionActive > 18 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../assets/povgombalinayang.gif")}
								className="w-[120px] h-[120px] rounded-md"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 19 && (
						<MessageImage text="Ini aku buka 108.30FM- Rido Radio, buat ngehibur ayang." />
					)}
					{sectionActive > 19 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../assets/ridoradio.gif")}
								className="w-[120px] h-[120px] rounded-md object-cover"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 20 && (
						<MessageImage text="Kemaren kita sempet berantem lagi ayang, akhirnya kita baikan lagi. Makasih ya udah jadi wanita yang selalu sabar ngehadepin aku ❤️" />
					)}
					{sectionActive > 21 && (
						<MessageImage text="Ayang nakal kalo pulang jangan malem-malem yahhh.. aku khawatir cantik kamu kenapa-napa" />
					)}
					{sectionActive > 21 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../assets/ayangnakal.gif")}
								className="w-[120px] h-[120px] rounded-md object-cover"
								alt="stiker-chat"
							/>
						</div>
					)}
					{sectionActive > 22 && (
						<MessageImage text="Aku seneng banget di kirimin video wkwkwkkw, ayang jedug-jedug 🤭🤭, ayang makasi yaa, aku salting banget, sayang videonya blum bisa di tampilin disini 😥" />
					)}
					{sectionActive > 23 && (
						<MessageImage text="Banyak banget yang mau aku ceritain, maaf yah aku bikinnya ngedadak banget, baru kepikiran, aku takut waktunya ga cukup buat nanti malem, aku tadi bilang lagi belajar sebenernya aku lagi bingung bikin konsep ini wkwkkw, maaf ya ayang bukan mau boongin tapi biar surprise. aku sayang banget sama kamu.. semoga kamu bahagia terus ya sama aku, km kebanggaanku, Selamat Ulang Tahun sayanggg ❤️❤️❤️" />
					)}
					{sectionActive > 23 && (
						<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl flex justify-center rounded-md border border-black">
							<img
								src={require("../../ultahnew.gif")}
								className="w-[200px] h-[120px] rounded-md object-cover"
								alt="stiker-chat"
							/>
						</div>
					)}
				</div>
			</div>
			<button
				className="bg-[#6B7DB8] px-5 mt-4 py-3 active:scale-90 transition rounded-full cursor-pointer"
				onClick={() => {
					if (sectionActive > 23) {
						setPageActive();
					} else {
						setSectionActive(sectionActive + 1);
					}
				}}
			>
				<p className="text-center text-white font-semibold">
					{sectionActive > 23 ? "Yey Abis ❤️" : "Lanjut Cerita"}
				</p>
			</button>
		</div>
	);
};

export default PageOne;
