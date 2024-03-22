import React from 'react'
import Person from './Person'

const List = ({people}) => {
  return <section>
    {people.map((person)=>{
        console.log(person)
        return <Person key={people.id} {...person}/>
    } )}
  </section>
}

export default List

