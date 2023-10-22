import useInput from "../hooks/useInput";

const UseInputTest = () => {
    const name = useInput("Mr.", 5)
    
    return (
        <div>
            <input type="text" placeholder="name" {...name} />
        </div>
    );
}
 
export default UseInputTest;