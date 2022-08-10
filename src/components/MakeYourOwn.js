import React from 'react';
import '../styles/MakeYourOwn.css';

const MakeYourOwn = (props) => {
  return(
    <div className='row'>
      <div className='col-sm-6 make-your-own'>
        <form>
          <label>Cocktail Name</label>
          <input type="text"></input>
          <label>Glassware</label>
          <input type="text"></input>
          <label>Instructions</label>
          <textarea name='instructions' form="make-your-own" placeholder="Enter your instructions..."></textarea>
        </form>
      </div>
      <div className='col-sm-6 review-submission'>
        <table>
          <tr>
            <th>Name</th>
            <td>Example Name</td>
          </tr>
          <tr>
            <th>Glassware</th>
            <td>Pint</td>
          </tr>
          <tr>
            <th>Instructions</th>
            <td>This is how you make a cocktail. And you mix this with that and then pour this into there. Mix it all up and pour.</td>
          </tr>
          <button>Submit Cocktail</button>
        </table>
      </div>
    </div>
  )
}

export default MakeYourOwn;
