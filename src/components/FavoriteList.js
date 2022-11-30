import removeItem from "../App"

export default function MList({cartState}) {
    const createEntry = (item) => {
        return (
            <div>
                <p>{item.text}            
                </p>  
            </div> 
        );
    };
    
    const mData = cartState;
    const listM = mData.map(createEntry);

    let total = 0;

    mData.forEach(item => {
        total = +(item.price) + total
    });

    

    return <div>
            <list>{listM}</list>
            <p><b>Total Price: </b>{Math.round(total * 100) / 100}</p>
        </div>
    
};