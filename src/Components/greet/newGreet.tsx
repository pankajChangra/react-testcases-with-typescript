type propType = {
    name?: string
}

export const NewGreet = (props: propType) => {
    return(
        <div>Hello {props.name}</div>
    )
}