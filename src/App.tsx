import {useReducer} from 'react';
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Result from './components/Result'
import { AppContext, initObject } from './store/AppContext';
import appReducer from './store/appReducer';

function App() {

    const [app, dispatch] = useReducer(appReducer,initObject)

    return (

        <AppContext.Provider value={{app,dispatch}}>
            <div id='container'>
                <Header />
                <Form />
                <Result />
            </div>
        </AppContext.Provider>
    )
}

export default App
