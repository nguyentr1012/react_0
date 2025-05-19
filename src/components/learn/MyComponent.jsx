//component = HTML + CSS + JS
// import '.style.css'; // import css file
// //trong style dau {} dau tien la js, sau la css
const MyComponent = () => {
    const a = "no1"
    const b = "25"
    return (
        <>
            <div> {a} + {b} + toi bi ngoo </div>

            <div className="child" style={{ borderRadius: "10px" }}> toi la pom </div>
        </>
    );
}
export default MyComponent;