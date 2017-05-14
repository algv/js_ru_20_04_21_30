import React, { Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"

class App extends Component {
    static propTypes = {

    };

    state = {
        counter: 0,
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <a href="#" onClick = {this.updateCounter}>update chart</a>
                <Select options = {options} value = {this.state.selection}
                        onChange = {this.handleSelectionChange} multi />
                <ArticleList articles = {this.props.articles} />
                <Chart articles={this.props.articles} key={this.state.counter} />
                <DayPicker
                    disabledDays={{ daysOfWeek: [0] }}
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }

    updateCounter = ev => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleSelectionChange = selection => this.setState({ selection })
}

export default App