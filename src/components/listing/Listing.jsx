import React from 'react'
import data from '../../data/esty.json'

import { Item } from '../item/Item'

export const Listing = () => {
  return (
    <>
        {data.map(item => <Item 
            key={item.listing_id} 
            url={item.url}
            MainImage={item.MainImage && item.MainImage.url_570xN}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
             />)}
    </>
  )
}
