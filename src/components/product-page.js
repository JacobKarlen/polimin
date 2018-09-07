import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import ProductMenu from "./product-menu";
import ProductCard from "./product-card";
import PaperWrapper from "./paper-wrapper";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const products = {
	category1: {
		product1: {
			image: "https://www.byggfaktadocu.se/komproment/naturskiffer-zappa/produkt-files/90.png",
			imageTitle: "Tegelvägg",
			headLine: "Tegel och keramik",
			text: "Vårt massiva tegel är tunnare än traditionell tegelsten och klistras direkt på underlaget, vilket sparar utrymme och ger helt nya möjligheter för fasaddesignen."

		},
		product2: {

		}
	},

	category2: {
		product1: {
			image: "https://www.byggfaktadocu.se/komproment/naturskiffer-zappa/produkt-files/90.png",
			imageTitle: "Tegelvägg",
			headLine: "Tegel och keramik",
			text: "Vårt massiva tegel är tunnare än traditionell tegelsten och klistras direkt på underlaget, vilket sparar utrymme och ger helt nya möjligheter för fasaddesignen."

		},
		product2: {
			image: "https://4.imimg.com/data4/RW/YJ/MY-19382411/df-500x500.jpg",
			imageTitle: "Vägg klädd i träpaneler",
			headLine: "Träpaneler",
			text: "Våra träpaneler är ett vackert och miljövänligt alternativ till fasaden med certificat x, y och z."
		}
	},

	category3: {

	},

	category4: {

	}
}

export default class ProductPage extends Component {


	componentWillMount() {

		this.props.history.push("/produkter");
	}

	render() {
		let prodCard, categoryID, productID;

		if (this.props.match.params.categoryID && this.props.match.params.productID) {
			categoryID = this.props.match.params.categoryID;
			productID = this.props.match.params.productID;
		}
		
		let selectedCategory = products[categoryID];
		let selectedProduct;
		if (selectedCategory) {
			selectedProduct = selectedCategory[productID];
		}

		if (selectedProduct) {
			prodCard = <ProductCard selectedProduct={selectedProduct}/>;
		} else {
			if (this.props.match.url == "/produkter/" || this.props.match.url == "/produkter") {
				prodCard = <PaperWrapper content={"Välj en produkt i menyn för mer information"} />;
			}
		}

		return (
			<React.Fragment>
					<Grid item xs={12} sm={6} md={4}>
			      		<ProductMenu />
			      	</Grid>

			      	<Grid item xs={12} sm={6} md={8}>
			      		{prodCard}
			      	</Grid>
			</React.Fragment>
		);
	}
}