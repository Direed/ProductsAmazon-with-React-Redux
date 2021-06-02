import {connect} from "react-redux";
import {filterData, searchValue} from "../../redux/actions";

const FilterComponent = ({dataProducts, valueSearch, searchValue, filterData}) => {

    return(
        <div className='container-fluid' style={{fontSize: 9+'pt'}}>
            <div className='row'>
                <div className='col'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Filter</span>
                        <input type="text" className="form-control" placeholder="Filter" aria-label="Username"
                               aria-describedby="basic-addon1" value={valueSearch} onChange={(e) => {
                                   searchValue(e.currentTarget.value);
                                   filterData(e.currentTarget.value);
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataProducts: state.dataValue.data,
        valueSearch: state.searchValue.value,
    }
}
const mapDispatchToProps = {
    searchValue: searchValue,
    filterData: filterData,
}

export default  connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
