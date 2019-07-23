import React, {Component} from 'react';
import Product from './components/Product';

class App extends Component{
  onClick(){
    console.log('Ini dari app component');
  }
  onClick2(text){
    console.log(text);
  }
  render(){
    var products = [
      {
        id : 1,
        name : 'Nokia 6',
        price : 2000000,
        image : './img/nokia6.jpg',
        status : true
      },
      {
        id : 2,
        name : 'Nokia 6.1 Plus',
        price : 3000000,
        image : './img/nokia6.1plus.jpg',
        status : true
      },
      {
        id : 3,
        name : 'Nokia 8.1 Plus',
        price : 4500000,
        image : './img/nokia8.1plus.jpg',
        status : true
      },
    ];
    let elements = products.map((product, index) => {
      let result ='';
      if(product.status){
        result =  <Product
                    key={ product.id }
                    price={ product.price }
                    image={ product.image }
                  >
                  { product.name }
                  </Product>
      }
      return result;
      });
    return(
      <div>
        <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="props">React Event Handle</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            { elements }
            </div>           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
              <button type="button" className="btn btn-warning" onClick={ this.onClick }>
                Click Me!
              </button>
              <button type="button" className="btn btn-warning" onClick={ () => { this.onClick2('ABC') } }>
                Click Me 2!
              </button>              
            </div>            
          </div>
        </div>
      </div>
      </div>  
    );
  }
}

export default App;