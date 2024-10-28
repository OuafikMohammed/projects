import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            student: {
                id: "",
                nom: "",
                prenom: ""
            }
        };
    }

    handleChange = (e) => {
        this.setState({
            student: {
                ...this.state.student,
                [e.target.name]: e.target.value
            }
        });
    }
    // handle change : this.setState to the student object while typing ( onChange() ) 
    // using student: {...shallowCopyOdTheCurrentState (we copy the content cause it's an object), ValueChanged ( [e.target.name]:e.target.value ===> [realname]:realvalue )}
    sauvegarder = () => {
        this.setState((prevState) => ({
            students: [...prevState.students, prevState.student],
            student: { id: "", nom: "", prenom: "" }  // Reset form after save
        }));
    }
    modifier = () => {
        this.setState((prevState)=> ({
            students: prevState.students.map((item)=>{
                if (item.id === prevState.student.id ){
                    return {
                        ...item , 
                        nom : prevState.student.nom,
                        prenom : prevState.student.prenom 
                    };
                }
                return item;
            })
        }))
    }
    supprimer = () => {
        this.setState((prevState)=>({
            students: prevState.students.filter((item)=>{
                return item.id !== prevState.student.id
            })
        }))
    }
    // executed after each render
    // componentDidMount = () =>{
    //     console.log('rendereed !!')
    // }

    // // executed after modifying
    // componentDidUpdate = () =>{
    //     console.log("STATE UPDATED !!!")
    // }

    // // executed after deleting or removing a component
    // componentWillUnmount = () => {
    //     console.log("Component unmounted !! (removed)")
    // }
    render() {
        return (
            <>
                <label htmlFor="id">ID:</label>
                <input
                    type="number"
                    name="id"
                    value={this.state.student.id}
                    onChange={this.handleChange}
                />
                <label htmlFor="nom">Nom:</label>
                <input
                    type="text"
                    name="nom"
                    value={this.state.student.nom}
                    onChange={this.handleChange}
                />
                <label htmlFor="prenom">Prenom:</label>
                <input
                    type="text"
                    name="prenom"
                    value={this.state.student.prenom}
                    onChange={this.handleChange}
                />
                <button onClick={this.sauvegarder}>Ajouter</button>
                <button onClick={this.modifier}>Modifier</button>
                <button onClick={this.supprimer}>Supprimer</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nom}</td>
                                <td>{item.prenom}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Form;
