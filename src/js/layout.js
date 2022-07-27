import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/EditContact";
import { ContactsMain } from "./views/ContactsMain.js";
// import { ContactsHome } from "./views/ContactsHome.js";
import { Home } from "/workspace/react-hello-webapp/src/js/views/home.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={ ContactsMain } />
						<Route exact path="/add" component={ AddContact } />
						<Route exact path="/edit-contact/:id" component={ EditContact } />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
