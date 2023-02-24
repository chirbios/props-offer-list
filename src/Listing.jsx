export default function Listing(props){
    return (
        <>
            <div className="item">
                <div className="item-image">
                <a href={props.a}>
                    <img src={props.mainImage} alt='asd'/> 
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{props.title.length > 50 ? 
                    props.title.slice(0, 49) + "..." :
                    props.title}</p>
                <p className="item-price">{props.currencyCode == "USD" ? 
                    "$" + props.price :
                    props.currencyCode == "EUR" ?
                    "€" + props.price :
                    props.price + ' £'}</p>
                <p className={`item-quantity ${props.quantity <= 10 ? 'level-low' : 
                    props.quantity <= 20 ? 'level-medium' : 'level-high'}`}>{props.quantity} left</p>
                </div> 
            </div>
        </>
    )
}
  