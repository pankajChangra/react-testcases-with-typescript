type propType = {
    name?: string
}

export const Group = (props: propType) => {
    return(
        <div>Hello {props.name}</div>
    )
}