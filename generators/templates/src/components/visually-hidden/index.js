'use strict';

import React from 'react';
import styled from 'styled-components';

const VisuallyHidden = props => {
	const element = props.element || 'span';

	const StyledVisuallyHidden = styled[element]`
		overflow: hidden;
		position: absolute;
		clip: rect(0 0 0 0);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
	`;

	return <StyledVisuallyHidden data-test="hidden-element">{props.children}</StyledVisuallyHidden>;
};

export default VisuallyHidden;
