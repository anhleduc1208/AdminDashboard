import './newProduct.css';


export default function NewProduct() {
    return (
        <div className='newProduct'>
            <h3 className="newProductTitle">
                New Product
            </h3>
            <form className="newProductForm">                    
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="newProductItem">
                    <label>Product Name</label>
                    <input type="text"  placeholder="Apple Airpod"/>
                </div>
                
                <div className="newProductItem">
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>               
                
                <button className="newProductButton">Create</button>
                
            
            </form>
        </div>
    )
}
