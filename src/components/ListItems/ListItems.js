import {connect} from "react-redux";

const ListItems = ({dataProducts}) => {
    const list = dataProducts.map((item) => {
        let link = item.link;
        if(item.link.length > 36) link = item.link.slice(0, 36) + '...';
        return(
            <div className='row my-2 mx-2 py-1' style={{border: 1+'px solid', borderRadius: 5+'px'}}>
                <div className='col align-self-center d-flex justify-content-center'>
                    <img className="img-fluid" style={{width: 4+'rem'}} src={item.img}/>
                </div>
                <div className='col-4 align-self-center d-flex justify-content-center'>
                    <a>{item.name}</a>
                </div>
                <div className='col align-self-center d-flex justify-content-center'>
                    <a>{item.asin}</a>
                </div>
                <div className='col align-self-center d-flex justify-content-center'>
                    <a>{item.price}</a>
                </div>
                <div className='col-2 align-self-center d-flex justify-content-center'>
                    <a>{item.bsr_category}</a>
                </div>
                <div className='col-3 col align-self-center d-flex justify-content-center'>
                    <a href={item.link} className="link">{link}</a>
                </div>
            </div>
        )
    })
    return list;
}

const mapStateToProps = state =>  {
    return {
        dataProducts: state.dataValue.filterMas,
    }
}

export default connect(mapStateToProps, null)(ListItems);