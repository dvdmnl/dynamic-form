import './App.css';
import Select from "./components/Select/Select";
import {selectedOptions, inputValidationOptions, checkboxGroupOptions} from './Form/config'
import InputValidation from "./components/InputValidation/InputValidation";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import formData from './Form/formData.json'
import Form from "./Form/Form";

function App() {
    const {fields} = formData
    return (
        <div className="App">
            <header className="App-header">
                <Form fields={fields}/>
                {/*<Select options={selectedOptions} isOpen={false}/>
                <InputValidation options={inputValidationOptions} />
                <CheckboxGroup options={checkboxGroupOptions} />*/}
            </header>
        </div>
    );
}

export default App;
