const IcecreamItem = ({item, addtoFavorites}) => {
    return (
        <div className="icecream-item">
        <img className="icecream-image" src={item.image} />
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <p><i>Type: </i>{item.category}</p>
        <p><i>Source:</i> {item.source}</p>
        <button className="favorites" onClick={() => addtoFavorites(item)}>{item.buttontext}</button>
      </div>
    )
};

export default IcecreamItem;