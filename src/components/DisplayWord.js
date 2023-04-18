import React from 'react';

const DisplayWord = ({ state: { wordObject: { scrambledWord }}}) => <div>
	<h2>{scrambledWord && scrambledWord.toUpperCase()}</h2>
</div>;

export default DisplayWord;
