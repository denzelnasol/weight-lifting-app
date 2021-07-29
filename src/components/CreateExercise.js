import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props)

        this.onChangeExerciseName = this.onChangeExerciseName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeNumberOfLifts = this.onChangeNumberOfLifts.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            exerciseName: '',
            description: '',
            image: '',
            numberOfLifts: ''
        }
    }

    onChangeExerciseName(e) {
        this.setState({
            exerciseName: e.target.value
        });
    };

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    onChangeNumberOfLifts(e) {
        this.setState({
            numberOfLifts: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const exercise = {
            exerciseName: this.state.exerciseName,
            description: this.state.description,
            image: this.state.image,
            numberOfLifts: this.state.numberOfLifts
        }

        console.log(exercise)

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data))

        window.location = '/'
    }

  render() {
    return (
        <div>
            <h3>Create New Exercise</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Exercise Name: </label>
                    <input 
                        type='text'
                        required
                        className="form-control"
                        value={this.state.exerciseName}
                        onChange={this.onChangeExerciseName}
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label> Image </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.image}
                        onChange={this.onChangeImage}
                    />
                </div>
                <div className="form-group">
                    <label>Number of lifts: </label>
                    <input type="text"
                        required
                        className='form-control'
                        value={this.state.numberOfLifts}
                        onChange={this.onChangeNumberOfLifts}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
  }
}