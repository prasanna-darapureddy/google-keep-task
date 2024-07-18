import { useState } from 'react'
import { Box, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import { InputBase } from '@mui/material';
import { styles } from './HomeStyles'
import { AddAlertOutlined, ArchiveOutlined, BrushOutlined, CheckBoxOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined } from '@mui/icons-material'
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../slice/GoogleKeepSlice'
import { RootState } from '../../store/Store';

interface IState {
    isStarted: boolean,
    title: string,
    description: string,
}

function Home() {
    const [isStarted, setIsStarted] = useState<IState['isStarted']>(false)
    const [title, setTitle] = useState<IState['title']>('')
    const [description, setDescription] = useState<IState['description']>('')
    const [noteHover, setNoteHover] = useState<IState['isStarted']>(false)
    const notesList = useSelector((state: RootState) => state.googleKeepList.googleKeepList)
    const dispatch = useDispatch()
    const id = Date.now()

    const onClickClose = () => {
        (title !== '' || description !== '') && dispatch(addNote({ id, title, description }))
        title === '' && description === '' && setIsStarted(false)
        setTitle('')
        setDescription('')
        setIsStarted(false)
    };

    const onClickEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log('Move to description')
        }
    };

    const addedOutOfFocus = () => {
        if (title !== '' || description !== '') {
            dispatch(addNote({ id, title, description }))
        }
        setTitle('')
        setDescription('')
        setIsStarted(false)
    };

    const handleMouseEnter = (id: number) => {
        const noteItem = notesList.find(note => note.id === id);
        noteItem && noteItem.id === id && setNoteHover(!noteHover);
        console.log(notesList)
    }

    return (
        <Box sx={styles.bgContainer}>
            <Box sx={styles.topContainer}>
                {isStarted ?
                    <Box sx={styles.doubleInputContainer} >
                        <Box sx={styles.titleContainer}>
                            <Box component={'input'} placeholder='Title' sx={styles.userInput}
                                onChange={(e) => setTitle(e.target.value)} name='title' value={title}
                                onKeyUp={onClickEnter}
                            />
                            <IconButton onClick={onClickClose}>
                                <Tooltip title='Pin note'>
                                    <PushPinOutlined sx={styles.pinIcon} />
                                </Tooltip>
                            </IconButton>
                        </Box>
                        <InputBase sx={styles.inputBase} multiline={true} autoFocus={isStarted}
                            placeholder='Take a note...' onChange={(e) => setDescription(e.target.value)}
                            name='description' value={description}
                            onBlur={addedOutOfFocus}
                        />
                        <Box sx={styles.iconsContainer}>
                            <Box sx={styles.firstIconsContainer}>
                                <Tooltip title='Remind me'>
                                    <AddAlertOutlined sx={styles.openedIcons} />
                                </Tooltip>
                                <Tooltip title='Collaborator'>
                                    <PersonAddAlt1Outlined sx={styles.openedIcons} />
                                </Tooltip>
                                <Tooltip title='Background options'>
                                    <ColorLensOutlined sx={styles.openedIcons} />
                                </Tooltip>
                                <Tooltip title='Add image'>
                                    <ImageOutlined sx={styles.openedIcons} />
                                </Tooltip>
                                <Tooltip title='Archive'>
                                    <ArchiveOutlined sx={styles.openedIcons} />
                                </Tooltip>
                                <Tooltip title='More'>
                                    <MoreVertOutlined sx={styles.openedIcons} />
                                </Tooltip>
                                <LuUndo2 />
                                <LuRedo2 />
                            </Box>
                            <Box component={'button'} sx={styles.closeButton} onClick={onClickClose}>Close</Box>
                        </Box>
                    </Box>
                    :
                    <Box sx={styles.singleInputContainer} onClick={() => setIsStarted(!isStarted)}>
                        <Box component={'input'} type='text' placeholder='Take a note...' autoFocus={true}
                            onChange={() => setIsStarted(!isStarted)} sx={styles.userInput}
                        />
                        <Box sx={styles.iconContainer}>
                            <Tooltip title='New list'>
                                <CheckBoxOutlined sx={styles.singleIcons} />
                            </Tooltip>
                            <Tooltip title='New note with drawing'>
                                <BrushOutlined sx={styles.singleIcons} />
                            </Tooltip>
                            <Tooltip title='New note with image'>
                                <ImageOutlined sx={styles.singleIcons} />
                            </Tooltip>
                        </Box>
                    </Box>
                }
            </Box>
            <Box sx={styles.notesListContainer}>
                {notesList.map((note) =>
                    <Box key={note.id}>
                        {notesList.find(selectedNote => selectedNote.id === note.id && noteHover) ?
                            <Paper component={'div'} sx={styles.hoveredNoteItem} key={note.id} onMouseLeave={() => setNoteHover(false)}>
                                <Box sx={styles.noteContent}>
                                    <Typography>{note.title}</Typography>
                                    <Typography>{note.description}</Typography>
                                </Box>
                                <Box sx={styles.noteIconsContainer}>
                                    <AddAlertOutlined sx={styles.itemIcons} />
                                    <PersonAddAlt1Outlined sx={styles.itemIcons} />
                                    <ColorLensOutlined sx={styles.itemIcons} />
                                    <ImageOutlined sx={styles.itemIcons} />
                                    <ArchiveOutlined sx={styles.itemIcons} />
                                    <MoreVertOutlined sx={styles.itemIcons} />
                                </Box>
                            </Paper>
                            :
                            <Box component={'div'} sx={styles.noteItem} key={note.id} onMouseEnter={() => handleMouseEnter(note.id)} >
                                <Box sx={styles.noteItemContent}>
                                    <Typography>{note.title}</Typography>
                                    <Typography>{note.description}</Typography>
                                </Box>
                            </Box>
                        }
                    </Box>
                )}
            </Box>
        </Box>
    )
}
export default Home