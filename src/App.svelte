
<script lang="ts">

	//import Todos                                   from "./Todos.svelte"
	import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client/core"
	import {setClient}                             from "svelte-apollo"

	const client = new ApolloClient({
		uri:   "https://graphql.fauna.com/graphql",
		cache: new InMemoryCache(),
		headers: {
			authorization: "Basic <__AUTHORIZATION_KEY__>=",
		},
	})

	setClient(client)

</script>



<template>

	<main>
		<h1>Todos</h1>
		<!--<Todos/>-->
	</main>

</template>
