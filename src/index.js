import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import reducers from './reducers';

import NavigationBar from "./components/navigation-bar";
import IconLabelTabs from "./components/icon-label-tabs";
import BottomNavigation from "./components/bottom-navigation";

import ProductPage from "./components/product-page";
import ContactPage from "./components/contact-page";
import AboutPage from "./components/about-page";


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<div>
	  	<BrowserRouter>
	  		<div>
	  			<CssBaseline />
	  			<Grid container spacing={16}>
					<Grid item xs={12}>
						<NavigationBar />
						<IconLabelTabs currentRoute={window.location.pathname.split("/").pop()} />
					</Grid>

					<Switch>
		  				<Route path="/produkter/:categoryID/:productID" component={ProductPage} />
			  			<Route path="/produkter/" component={ProductPage} />
			  			<Route path ="/kontakt" component={ContactPage} />
	  					<Route path = "/om-oss" component={AboutPage} />
	  					<Route path="/" component={ProductPage} />
	  				</Switch>


			      	<Grid item xs={12}>
			      		<BottomNavigation />
			      	</Grid>
			    </Grid>
	  			
	  		</div>
	  	</BrowserRouter>
  	</div>
  </Provider>
  , document.querySelector('.container'));
