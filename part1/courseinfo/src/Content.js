import Ejercicio from './Ejercicio.js'
const Content = (props) => {
    return (
        <div>
            <Ejercicio part={props.part[0].name} ejer={props.part[0].exercises}  />
            <Ejercicio part={props.part[1].name} ejer={props.part[1].exercises}  />
            <Ejercicio part={props.part[2].name} ejer={props.part[2].exercises}  />
        </div>
    ) 
}
export default Content