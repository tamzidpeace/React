import React  from "react";

class Person2 extends React.Component {

    state = {
        persons: [
            {name: 'max', age: 28},
            {name: 'bob', age: 40},
        ],
        m_name : 'arafat',
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
         this.setState ( {
            m_name: event.target.value
         })
    }



    render() {

        let foo1 = (name) => {
            console.log(name)
            const does_show = this.state.showPerson;
            this.setState({showPerson: !does_show})
        }

        return(
           <div>
               {this.state.showPerson === true ?  <p>1</p> :
                        <p style={{color: "red"}} onClick={this.props.click}>{this.state.m_name}</p>
               }
               <input type="text" onChange={this.getName}/>
               <br/>
               <button onClick={() => foo1('james')} type="button">foo1</button>
           </div>
        );
    }
}

export default Person2;