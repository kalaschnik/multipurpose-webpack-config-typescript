// if you plan to use md files for js-only projects you dont need this file
// allow md files to be imported as modules
declare module '*.md' {
	const content: string;
	export default content;
}
