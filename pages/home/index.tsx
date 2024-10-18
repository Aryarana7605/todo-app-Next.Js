"use client"
import TodoApp from './addTask'
import Banner from './banner'
import Section2 from './section2'


const Home: React.FC = () => {
  return (
    <div>
    <Banner/>
    <Section2/>
    <TodoApp/>
    </div>
  )
}

export default Home