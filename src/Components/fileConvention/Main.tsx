type propType = {
    name?: string
}

export const Main = (props: propType) => {
    return(
        <div>Hello {props.name}</div>
    )
}