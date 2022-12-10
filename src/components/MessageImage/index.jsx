import React from "react";

const MessageImage = ({ text }) => {
	return (
		<div>
			<div className="bg-black bg-opacity-40 p-3 mt-2 shadow-xl rounded-md border border-black">
				<p className="font-semibold text-white">RizkiAF Kesatria berkuda</p>
				<p className="text-sm mt-2 text-[#f5f5f5] text-opacity-90 max-w-[250px] font-medium">
					{text}
				</p>
			</div>
		</div>
	);
};

export default MessageImage;
