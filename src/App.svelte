<script lang='typescript'>
	import "./main.css";	
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import router from "page";
	import routes from "./routes";

	let page = null;
	let params = {};
	let user = false;

	// https://geekyants.com/blog/client-side-routing-in-svelte
	routes.forEach((route) => {
		router(
		route.path,
		(ctx, next) => {
			params = { ...ctx.params };
			next();
		},
		() => {
			if (route.auth && !user) {
			router.redirect("/");
			} else {
			page = route.component;
			}
		}
		);
	});

	router.start();
  </script>
  
  <main>
	<Header/>
	<svelte:component this={page} {params} />
	<Footer/>
  </main>
  