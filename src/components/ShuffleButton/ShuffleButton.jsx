import React from "react";

function ShuffleButton() {
	const shuffle = () => {
		window.location.reload();
	};

	return (
		<div>
			<button className="button" onClick={shuffle}>
				Shuffle
			</button>
		</div>
	);
}

export default ShuffleButton;
