import React from "react"

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, name, img, vendor, price, available } = menuItem
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
              </header>
              <h4 className="price">Current Price ₹{price}</h4>

              <p className="item-text">Vendor : {vendor}</p>

              {available ? <p className="available">{available} stocks</p> : <p className="not-available">No Stocks</p>}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
