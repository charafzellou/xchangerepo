import React from "react";
import PropTypes from "prop-types";

function Header(props) {
	return <header>
		<span>Hello {props.name}</span>
	</header>;
}

Header.propTypes = {
	name: PropTypes.string.isRequired
}

export default Header;
