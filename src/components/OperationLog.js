import React from 'react'

const OperationLog = ({ operationLog }) => {
    return (
        <>
            <tr>
                <td>{operationLog.discreption}</td>
                <td>{operationLog.operatedAt}</td>
            </tr>
        </>
    )
}

export default OperationLog