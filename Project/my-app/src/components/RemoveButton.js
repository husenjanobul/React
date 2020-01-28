import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


function RemoveButton({ remove, id }) {
    return (
        <IconButton aria-label="delete" onClick={() => remove(id)} className="remove-btn" >
            <DeleteIcon />
        </ IconButton>
    )
}

export default RemoveButton
