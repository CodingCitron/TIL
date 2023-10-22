import useTabs from "../hooks/useTabs";

const content = [
    {
        tab: "section 1",
        content: "I'm the content of the section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
] 

const UseTabsTest = () => {
    const tabs = useTabs(0, content)

    return (
        <div>
            {content.map((section, index) => (
                <button
                    key={index}
                    onClick={() => tabs.changeItem(index)}
                >
                    {section.tab}
                </button>
            ))}
            <div>
                {tabs.curretItem.content}
            </div>
        </div>
    );
}
 
export default UseTabsTest;