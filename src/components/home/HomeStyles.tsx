export const styles = {
    bgContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'30px',   
        gap:5,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '400px',
        maxWidth: '600px',
        width: '500px',
    },
    singleInputContainer: {
        borderRadius:'8px',
        boxShadow: '0px 4px 16px 0px #c8c8c8',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'0px 15px',
        width:'100%',
    },
    userInput: {
        fontWeight:'bold',
        color:'#000',
        outline:'none',
        border:'none',
        fontSize:'15px',
    },
    iconContainer: {
        display: 'flex',
        gap:3,
        color:'#555555',
    },
    singleIcons:{
        padding: '10px',
        '&:hover':{
            backgroundColor:'#f2f1ed',
            padding: '10px',
            borderRadius: '50%',
        }
    },
    doubleInputContainer:{
        borderRadius:'8px',
        boxShadow: '0px 4px 16px 0px #c8c8c8',
        display:'flex',
        flexDirection:'column',
        padding:'10px',
        width:'100%',
        gap:3,
    },
    pinIcon:{
        color:'#555555',
        padding: '8px',
        '&:hover':{
            backgroundColor:'#f2f1ed',
            padding: '8px',
            borderRadius: '50%',
        }

    },
    titleContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    inputBase:{
        fontWeight:'bold',
        color:'#000',
        outline:'none',
        border:'none',        
        padding:'3px',
        fontSize:'14px',
        resize:'none',
    },
    iconsContainer:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    firstIconsContainer:{
        display:'flex',
        alignItems:'center',
        gap:3,
        color:'#555555',
    },
    openedIcons:{
        fontSize:'18px',
        padding:'8px',
        '&:hover':{
            backgroundColor:'#f2f1ed',
            padding: '8px',
            borderRadius: '50%',
        }
    },
    closeButton:{
        border:'none',
        outline:'none',
        backgroundColor:'transparent',
        cursor:'pointer',
        padding: '8px 15px',
        '&:hover':{
            backgroundColor:'#f2f1ed',
            padding: '8px 15px',
            borderRadius: '4px',
        }
    },
    notesListContainer:{
        display:'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        gap:3
    },
    noteItem:{
        borderRadius:'15px',        
        height:'120px',
        width:'280px',
        display:'flex',
        flexDirection:'column',
        border:'1px solid #c8c8c8',
        gap:1
    },
    noteItemContent:{
        padding:'15px 20px',
    },
    hoveredNoteItem:{
        borderRadius:'15px',
        minHeigth:'100px',
        height:'130px',
        maxHeight:'fit-content',
        minWidth:'100px',
        width:'280px',
        maxWidth:'280px',
        display:'flex',
        flexDirection:'column',
        gap:1,
    },
    noteContent:{
        display:'flex',
        flexDirection:'column',
        padding:'15px',
        gap:1
    },
    noteIconsContainer:{
        display:'flex',
        gap:1.8,
        color:'#555555',
    },
    itemIcons:{
        fontSize:'18px',
        padding:'8px',
        '&:hover':{
            backgroundColor:'#f2f1ed',
            padding: '8px',
            borderRadius: '50%',
        }
    },
}