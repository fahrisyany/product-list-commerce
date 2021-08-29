import React, { ReactElement } from 'react'
import Card from 'react-bootstrap/Card'
import { ItemInterface } from "../../interfaces/item.interface"
import './CardItem.scss'

const CardItem: React.FC<ItemInterface> = ({ imageUrl, name, salePrice, retailPrice, quantityAvailable }: ItemInterface) => {

    const handleIsItemAvialable = (): ReactElement<any, any> => (
        quantityAvailable < 1 ?
            <Card.Text as={'h4'}>
                SOLD OUT
            </Card.Text> : (
                <>
                    {retailPrice > 0 ?
                        <Card.Text className='retail-price-label'>
                            AUS {retailPrice}
                        </Card.Text> : ""
                    }
                    <Card.Text className='sales-price-label'>
                        AUS {salePrice}
                    </Card.Text>
                </>
            )
    )

    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {handleIsItemAvialable()}
            </Card.Body>
        </Card>
    )
}

export default CardItem