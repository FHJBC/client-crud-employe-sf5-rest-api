// import './App.css';
// import ListEmployeeComponent from "./components/ListEmployeComponent";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Employes from './components/Employes';
import AddEmploye from './components/AddEmploye';
import About from './components/About';


function App() {
  const [showAddEmploye, setShowAddEmploye] = useState(false)
  const [employes, setEmployes] = useState([])

  useEffect(() => {
    const getEmployes = async () => {
      const employesFromServer = await fetchEmployes()
      setEmployes(employesFromServer)
    }
    // console.log(employes)
    getEmployes()
  }, [])

  // Fetch Employes
  const fetchEmployes = async () => {
    const res = await fetch(`http://localhost:8001/api/employes`)
    const data = await res.json()

    return data
  }

  // Add Employe
  const addEmploye = async (employe) => {
    const res = await fetch(`http://localhost:8001/api/employes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employe)
    })

    const data = await res.json()

    setEmployes([...employes, data])
  }

  return (
    <Router>
      <div className='container'>
        <Header 
          onAdd={() => setShowAddEmploye(!showAddEmploye)}
          showAdd={showAddEmploye} 
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddEmploye && <AddEmploye onAdd={addEmploye} />}
              {employes.length > 0 ? (
                <Employes 
                  employes={employes}
                  // onDelete={deleteEmploye}
                  // onToggle={toggleReminder}
                />
              ) : (
                'Aucun employé à afficher'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
