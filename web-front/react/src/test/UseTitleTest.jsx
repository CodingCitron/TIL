import useTitle from "../hooks/useTitle";

const UseTitleTest = () => {
    const titleUpdate = useTitle("Loading...")
    
    setTimeout(() => {
        titleUpdate("Home")
    }, 5000)

    return (<div>

    </div>);
}
 
export default UseTitleTest;