import React, { useContext } from "react";
import { Container, Card } from 'react-bootstrap';

const ProductCard = () => {

	return (
		<Container>
			<Card border="secondary" className="product-card">
				<Card.Img variant="top"
					src=""/>
				<Card.Body>
					<Card.Text>
						<p className="title"></p>
						<hr className="line"></hr>
						<p className="description"
							// style={{ display: product.description ? 'block' : 'none' }}
						><span>Description:</span></p>
						<p className="price"><span>Price:</span></p>
						<p className="sizes">Sizes:</p>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
		</Container>
	)
}
export default ProductCard;
