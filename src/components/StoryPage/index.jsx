import React from "react";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";

const StoryPage = ({ pageActive, setPageActive }) => {
	return (
		<div className="w-full min-h-[60vh] flex justify-evenly items-center flex-col p-5">
			{pageActive === 1 && <PageOne setPageActive={setPageActive} />}
			{pageActive === 2 && <PageTwo setPageActive={setPageActive} />}
			{pageActive === 3 && <PageThree setPageActive={setPageActive} />}
		</div>
	);
};

export default StoryPage;
