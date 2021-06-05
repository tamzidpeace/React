import React from "react";
import './Person.css'

class Person2 extends React.Component {

    state = {
        persons: [
            {name: 'max', age: 28},
            {name: 'bob', age: 40},
        ],
        m_name: 'arafat',
        mName: 'rakib',
        mClass: 's1',
    }

    myClick = () => {
        console.log('clicked')
        this.setState({
            persons: [
                {name: 'paine', age: 28},
                {name: 'aj', age: 40},
            ]
        })
    }


    getName = (event) => {
        this.setState({
            m_name: event.target.value
        })
    }


     foo2 = () => {
        this.setState({
            mName: 'sakib',
            mClass: 's2'
        })
    }


    render() {

        let foo1 = (name) => {
            console.log(name)
            const does_show = this.state.showPerson;
            this.setState({showPerson: !does_show})
        }

        let m_person = null;
        if (this.state.showPerson) {
            m_person = (<div>
                {this.state.persons.map(person => {return person.name})}
            </div>)
        }


        return (
            <div>
                {/*<p onClick={this.props.click}>{this.state.m_name}</p>
                <input type="text" onChange={this.getName}/>
                <br/>
                {m_person}
                <button onClick={() => foo1('james')} type="button">foo1</button>
                <br/>*/}
                <button onClick={this.foo2} type="button">change color</button> <br/>
                <p className={this.state.mClass}> {this.state.mName} </p>

            </div>
        );
    }
}

export default Person2;