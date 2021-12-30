import React from 'react'

export const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor: bgColor,
        borderRadius:"5%",
       }
    return (
        <div style={styles}>
            <p dangerouslySetInnerHTML={{__html:msg}}/>
        </div>
    )
}

export default Message;