import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    function signUp(formData){
        const data=Object.fromEntries(formData)
        const dietaryRestrictions=formData.getAll("dietaryRestrictions")
        const allData={
          ...data,dietaryRestrictions
        }
        console.log(allData)
        
    }
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:
        <input id="email" type="email" defaultValue="joe@schmoe.com" name="email" placeholder="joe@schmoe.com" />
        </label>
        <br/>
        <label htmlFor='password'>Password:
        <input id="password" type='password'defaultValue="password123" name="password" placeholder='password'></input>
        </label>
        <br/>
        <label htmlFor='description'>Description:</label>
        <textarea id='description' name='description' defaultValue="This is a description"></textarea>
        <fieldset>
          <legend>Employement Status</legend>
        <label>
          <input type='radio' name="employmentStatus" value="unemployed"></input>
          Unemployed
        </label>
        <label>
          <input type='radio' name="employmentStatus" value="Part Time"></input>
          Part Time
        </label>
        <label>
          <input type='radio' name="employmentStatus" defaultChecked={true} value="Full Time"></input>
          Full Time
        </label>
        </fieldset>
        <fieldset>
          <legend>Dietary Restrictions</legend>
        <label>
          <input type='checkbox' name="dietaryRestrictions" value="kosher"></input>
          Kosher
        </label>
        <label>
          <input type='checkbox' name="dietaryRestrictions" value="vegan"></input>
          Vegan
        </label>
        <label>
          <input type='checkbox' name="dietaryRestrictions" defaultChecked={true} value="gluten-free"></input>
          
        </label>
        </fieldset>
        <label htmlFor='favColor'>What is your favourite colour</label>
        <select id='favColor' name='favColor' defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <button>Submit</button>
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
