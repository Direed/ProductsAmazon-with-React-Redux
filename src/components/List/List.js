import ListItems from "../ListItems/ListItems";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const List = () => {
    return(
        <div className='container-fluid' style={{fontSize: 9+'pt'}}>
            <div className='row my-2 mx-2'>
                <div className='col align-self-center d-flex justify-content-center'></div>
                <div className='col-4 align-self-center d-flex justify-content-center'>Name:</div>
                <div className='col align-self-center d-flex justify-content-center'>Asin:</div>
                <div className='col align-self-center d-flex justify-content-center'>Price:</div>
                <div className='col-2 align-self-center d-flex justify-content-center'>Category:</div>
                <div className='col-3 align-self-center d-flex justify-content-center'>Link:</div>
            </div>
            <ListItems/>
    </div>
    )
}


export default List;