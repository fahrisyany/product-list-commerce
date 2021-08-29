import React, { ReactElement } from 'react'
import Card from 'react-bootstrap/Card'
import { ItemInterface } from "../../interfaces/item.interface"
import './CardItem.scss'

const CardItem: React.FC<ItemInterface> = ({ imageUrl, name, salePrice, retailPrice, quantityAvailable }: ItemInterface) => {

    const handleCurrencyFormat = (num: number) => (num / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });

    const handleIsItemAvialable = (): ReactElement<any, any> => (
        quantityAvailable < 1 ?
            <Card.Text as={'h4'}>
                SOLD OUT
            </Card.Text> : (
                <>
                    {retailPrice > 0 ?
                        <Card.Text className='retail-price-label' as={'span'}>
                            {handleCurrencyFormat(retailPrice)}
                        </Card.Text> : ""
                    }
                    <Card.Text className='sales-price-label' as={'h4'}>
                        {handleCurrencyFormat(salePrice)}
                    </Card.Text>
                </>
            )
    )

    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body className='d-flex justify-content-between flex-column'>
                <Card.Title>{name}</Card.Title>
                <div className='card-texts'>
                    {handleIsItemAvialable()}
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardItem