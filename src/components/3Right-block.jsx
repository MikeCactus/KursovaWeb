/**
 * The `RightBlock` function is a React component that renders a div with the class name 'right-block'
 * and displays its children.
 */
 export  function RightBlock({children}) {

    
    return (
        <>
            <div className = 'right-block'>
                {children}
            </div>
        </>
    )
}