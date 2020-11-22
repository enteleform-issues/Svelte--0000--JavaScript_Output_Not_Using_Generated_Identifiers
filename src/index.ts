
async function __Main__(){
	const {default:App} = await import("./App.svelte")

	new App({
		target: document.body,
		props:  {},
	})
}


if(globalThis.webpackCompletedFirstRun)
	{__Main__()}
else
	{globalThis.webpackCompletedFirstRun = true}
