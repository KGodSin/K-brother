import * as React from "react";
import Style from "./Typography.module.scss";
import { ColorProps } from "classes/styles";

export type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "body1"
	| "body2"
	| "subtitle1"
	| "subtitle2";
export type TypographyProps = {
	variant?: TypographyVariant;
	children?: JSX.Element | string;
	color?: ColorProps;
	// text: ColorProps;
};

export default function Typography({
	variant,
	children,
	...rest
}: TypographyProps & React.ComponentProps<"div">) {
	return (
		<div className={variant} {...rest}>
			{children}
		</div>
	);
}

Typography.defaultProps = {
	variant: "body1",
	color: "primary",
};
