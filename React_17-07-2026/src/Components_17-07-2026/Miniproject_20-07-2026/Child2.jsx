function Child2({ changeMessage }) {

    return (
        <>
            <h3>Child 2</h3>

            <button
                onClick={() => changeMessage("React is Awesome")}
            >
                Change Message
            </button>
        </>
    );
}

export default Child2;