import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
                <button
                    onClick={() => {setIsVisible()}}
                    className="cursor-pointer underline"
                >
                    {isVisible ? "Hide" : "Show"}
                </button>

            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("")
    return (
        <div>
            <h1 className="font-bold text-2xl p-2 m-2">Hello from Instamart</h1>
            <Section title="About us" description="Lorem ipsum odor amet, consectetuer adipiscing elit. Justo magnis convallis in sem maximus rutrum nunc tristique quam. Himenaeos hendrerit dapibus faucibus a curae tellus. Vehicula morbi gravida lacus sociosqu curabitur. Quam rutrum natoque fringilla sagittis; nec curabitur. Ipsum nibh imperdiet duis senectus sollicitudin sodales. Quisque vulputate parturient vestibulum morbi natoque placerat torquent. Malesuada donec placerat pretium mi fringilla. Facilisi quisque maximus tempor quis nascetur nam. Cursus dictum sagittis ipsum elementum faucibus egestas vehicula." isVisible={visibleSection == "about"} setIsVisible={() => {
                setVisibleSection(visibleSection == "about" ? "": "about")
            }} />
            <Section title="Career" description="Lorem ipsum odor amet, consectetuer adipiscing elit. Justo magnis convallis in sem maximus rutrum nunc tristique quam. Himenaeos hendrerit dapibus faucibus a curae tellus. Vehicula morbi gravida lacus sociosqu curabitur. Quam rutrum natoque fringilla sagittis; nec curabitur. Ipsum nibh imperdiet duis senectus sollicitudin sodales. Quisque vulputate parturient vestibulum morbi natoque placerat torquent. Malesuada donec placerat pretium mi fringilla. Facilisi quisque maximus tempor quis nascetur nam. Cursus dictum sagittis ipsum elementum faucibus egestas vehicula." isVisible={visibleSection == "career"} setIsVisible={() => {
                setVisibleSection(visibleSection == "career" ? "": "career")
            }} />
            <Section title="Contact us" description="Lorem ipsum odor amet, consectetuer adipiscing elit. Justo magnis convallis in sem maximus rutrum nunc tristique quam. Himenaeos hendrerit dapibus faucibus a curae tellus. Vehicula morbi gravida lacus sociosqu curabitur. Quam rutrum natoque fringilla sagittis; nec curabitur. Ipsum nibh imperdiet duis senectus sollicitudin sodales. Quisque vulputate parturient vestibulum morbi natoque placerat torquent. Malesuada donec placerat pretium mi fringilla. Facilisi quisque maximus tempor quis nascetur nam. Cursus dictum sagittis ipsum elementum faucibus egestas vehicula." isVisible={visibleSection == "contact"} setIsVisible={() => {
                setVisibleSection(visibleSection == "contact" ? "": "contact")
            }} />
        </div>
    );
}

export default Instamart;