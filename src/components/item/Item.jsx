import React from 'react'

export const Item = ({url, MainImage, title, currency_code, price, quantity }) => {

    const get_title = (title) => {
        if (typeof title === 'string') {
            if (title.length > 50) {
                return title.substring(0, 50) + '...';
            } else {
                return title;
            }
        } else {
            return '';
        }
    }

    const get_currency = (currency_code) => {
        switch (currency_code) {
            case 'USD':
                return '$'
            case 'EUR':
                return '€'
            default:
                return currency_code
        }
    }

    const quantity_level = (quantity) => {
        if (quantity < 10) {
            return "level-low"
        } else if (quantity >= 10 && quantity < 20) {
            return "level-medium"
        } else {
            return "level-high"
        }
    }

  return (
    <div className="item">
        <div className="item-image">
            <a href={url}>
                <img src={MainImage} />
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{get_title(title)}</p>
            <p className="item-price">{get_currency(currency_code)} {price}</p>
            <p className={`item-quantity ${quantity_level(quantity)}`}>{quantity} left</p>
        </div>
    </div>
  )
}
