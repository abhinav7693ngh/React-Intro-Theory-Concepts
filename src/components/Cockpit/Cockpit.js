import React, {useEffect,useRef , useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) =>{

    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(()=>{
        toggleButtonRef.current.click();
    },[]);

    // === Below duplicating componentDidMount() and componentWillUnmount() lifecycle hook, as is has no dependency because of empty array and will only run first time because of default behavior. === //
    
    /*useEffect(()=>{
        console.log('Cockpit.js : useEffect function running');
        setTimeout(()=>{
            alert('Saved data to cloud');
        },1000);
        return ()=>{
            console.log('Cockpit.js : cleanup work');
        }
    });  */


    // === Below duplicating componentDidUpdate() lifecycle hook, as it has dependency on person component ===//
    
    /*useEffect(()=>{
        console.log('Cockpit.js : useEffect function running');
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
    },[props.persons]); */


    let btnClass = [classes.Button];
    const assignedClasses = [];
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <div>
            <h1>Hi, I'm a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!</p>
            <button 
                className={btnClass.join(' ')} 
                onClick={props.clicked} ref={toggleButtonRef}> Toggle and delete </button>
            <button onClick={authContext.login}>Login</button>
       </div>
    );

};


export default React.memo(cockpit);