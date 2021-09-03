import React, { Component } from 'react'
import EmployeService from '../services/EmployeService'

class ListEmployeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employes: []
        }
        this.addEmploye = this.addEmploye.bind(this);
        this.editEmploye = this.editEmploye.bind(this);
        this.deleteEmploye = this.deleteEmploye.bind(this);
    }

    deleteEmploye(id){
        EmployeService.deleteEmploye(id).then( res => {
            this.setState({employes: this.state.employes.filter(employee => employee.id !== id)});
        });
    }
    viewEmploye(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmploye(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeService.getEmployes().then((res) => {
            this.setState({ employes: res.data});
        });
    }

    addEmploye(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Liste des Employés</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmploye}> Ajouter un employé</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom</th>
                                    <th> Prenom</th>
                                    <th> Age</th>
                                    <th> Poste</th>
                                    <th> Expérience</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employes.map(
                                        employe => 
                                        <tr key = {employe.id}>
                                             <td> { employe.nom} </td>   
                                             <td> {employe.prenom}</td>
                                             <td> {employe.age}</td>
                                             <td> {employe.poste}</td>
                                             <td> {employe.experience}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmploye(employe.id)} className="btn btn-info">Modifier </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employe.id)} className="btn btn-danger">Supprimer </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employe.id)} className="btn btn-info">Voir </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeComponent