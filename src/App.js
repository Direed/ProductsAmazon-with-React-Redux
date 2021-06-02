import {getData} from "./redux/actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import List from "./components/List/List";
import FilterComponent from "./components/FilterComponent/FilterComponent";

function App({dataProducts, getData}) {

    useEffect(() => {
        fetch('https://60b620fdfe923b0017c856a1.mockapi.io/api/products/products')
        .then(res => {return res.json()} )
        .then( (data) => {
            getData(data)
        })
    }, [])

  return(
      <div>
          <h1>Products</h1>
          <FilterComponent />
          <List />
      </div>
  )
}

const mapStateToProps = state => {
    return {
        dataProducts: state.dataValue.data
    }
}

const mapDispatchToProps = {
    getData: getData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)