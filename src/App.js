import React from 'react'
import  {ToastContainer, toast} from 'react-toastify'
import CompaniesItem from './components/CompanyItem'
import useStore from './components/globalState'
const App = () => {

   const {companies, quantity,fetchCompanies,setQuantity} = useStore()

    const handleClick = () =>{
        fetchCompanies(quantity)
    }

    const changeQuantity = (item) =>{
        setQuantity(parseInt(item.target.value))
    }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <span>Companies </span>
          </div>
          <div className="col-lg-6">
            <div class="input-group mb-3">
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={changeQuantity}
              />
              <button onClick={handleClick} className="btn btn-success">CLICK!</button>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        {companies.map((item) => (
          <CompaniesItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App

