import ProductCard from "./ProductCard";
import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

const ProductList = () => {
	return (
		<Container className = "product-container">
			<Row className="product-list">
				{/* {products.map(product => ( */}
					<Col xs={12} sm={12} md={4} lg={4}>
						<ProductCard />
					</Col>
				{/* ))} */}
			</Row>
		</Container>
	);

};

export default ProductList;